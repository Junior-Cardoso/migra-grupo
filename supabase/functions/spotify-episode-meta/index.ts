// Fetches public Spotify episode page and extracts release date + duration
// from the embedded JSON-LD / OpenGraph metadata. No auth required.
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

interface Result {
  releaseDate?: string; // ISO yyyy-mm-dd
  durationSeconds?: number;
  title?: string;
  thumbnail?: string;
}

// Parse ISO 8601 duration like "PT42M13S" -> seconds
function parseISODuration(iso: string): number | undefined {
  const m = iso.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!m) return undefined;
  const [, h, mi, s] = m;
  return (Number(h ?? 0) * 3600) + (Number(mi ?? 0) * 60) + Number(s ?? 0);
}

async function scrape(episodeId: string): Promise<Result> {
  const url = `https://open.spotify.com/episode/${episodeId}`;
  const r = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      "accept-language": "pt-BR,pt;q=0.9,en;q=0.8",
    },
  });
  if (!r.ok) throw new Error(`spotify fetch ${r.status}`);
  const html = await r.text();

  const out: Result = {};

  // 1) JSON-LD block
  const ldMatch = html.match(
    /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i,
  );
  if (ldMatch) {
    try {
      const ld = JSON.parse(ldMatch[1]);
      const items = Array.isArray(ld) ? ld : [ld];
      for (const it of items) {
        if (it?.datePublished && !out.releaseDate) {
          out.releaseDate = String(it.datePublished).slice(0, 10);
        }
        if (it?.uploadDate && !out.releaseDate) {
          out.releaseDate = String(it.uploadDate).slice(0, 10);
        }
        if (it?.duration && !out.durationSeconds) {
          out.durationSeconds = parseISODuration(String(it.duration));
        }
        if (it?.timeRequired && !out.durationSeconds) {
          out.durationSeconds = parseISODuration(String(it.timeRequired));
        }
      }
    } catch (_) { /* ignore */ }
  }

  // 2) OpenGraph fallbacks
  const og = (prop: string) => {
    const m = html.match(
      new RegExp(
        `<meta[^>]+property=["']${prop}["'][^>]+content=["']([^"']+)["']`,
        "i",
      ),
    );
    return m?.[1];
  };

  if (!out.releaseDate) {
    const d = og("music:release_date") ?? og("og:release_date");
    if (d) out.releaseDate = d.slice(0, 10);
  }
  if (!out.durationSeconds) {
    const d = og("music:duration") ?? og("og:audio:duration");
    if (d && /^\d+$/.test(d)) out.durationSeconds = Number(d);
  }
  out.title = og("og:title") ?? undefined;
  out.thumbnail = og("og:image") ?? undefined;

  return out;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id || !/^[a-zA-Z0-9]+$/.test(id)) {
      return new Response(JSON.stringify({ error: "invalid id" }), {
        status: 400,
        headers: { ...corsHeaders, "content-type": "application/json" },
      });
    }
    const data = await scrape(id);
    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        "content-type": "application/json",
        "cache-control": "public, max-age=86400",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "content-type": "application/json" },
    });
  }
});
