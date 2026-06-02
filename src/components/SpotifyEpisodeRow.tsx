import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Music2, Play, Pause, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  episodeNumber: number;
  fallbackTitle: string;
  fallbackDescription?: string;
  dateLabel?: string;
  durationLabel?: string;
  spotifyUrl: string | null;
}

const extractEpisodeId = (url: string | null): string | null => {
  if (!url) return null;
  const m = url.match(/episode\/([a-zA-Z0-9]+)/);
  return m ? m[1] : null;
};

interface OEmbed {
  title?: string;
  thumbnail_url?: string;
  provider_name?: string;
}

interface EpisodeMeta {
  releaseDate?: string;
  durationSeconds?: number;
  title?: string;
  thumbnail?: string;
}

const formatDate = (iso?: string) => {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
};

const formatDuration = (sec?: number) => {
  if (!sec || sec <= 0) return undefined;
  const m = Math.round(sec / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return r ? `${h} h ${r} min` : `${h} h`;
};

export default function SpotifyEpisodeRow({
  episodeNumber,
  fallbackTitle,
  fallbackDescription,
  dateLabel,
  durationLabel,
  spotifyUrl,
}: Props) {
  const [open, setOpen] = useState(false);
  const episodeId = extractEpisodeId(spotifyUrl);

  const { data: meta } = useQuery({
    queryKey: ["spotify_oembed", spotifyUrl],
    enabled: !!spotifyUrl,
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: async (): Promise<OEmbed | null> => {
      try {
        const r = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl!)}`);
        if (!r.ok) return null;
        return (await r.json()) as OEmbed;
      } catch {
        return null;
      }
    },
  });

  const { data: extra } = useQuery({
    queryKey: ["spotify_meta", episodeId],
    enabled: !!episodeId,
    staleTime: 1000 * 60 * 60 * 24,
    queryFn: async (): Promise<EpisodeMeta | null> => {
      try {
        const projectId = (import.meta as any).env?.VITE_SUPABASE_PROJECT_ID;
        if (!projectId) return null;
        const r = await fetch(
          `https://${projectId}.supabase.co/functions/v1/spotify-episode-meta?id=${episodeId}`,
        );
        if (!r.ok) return null;
        return (await r.json()) as EpisodeMeta;
      } catch {
        return null;
      }
    },
  });


  const title = meta?.title ?? fallbackTitle;
  const thumb = meta?.thumbnail_url ?? extra?.thumbnail;
  const displayDate = formatDate(extra?.releaseDate) ?? dateLabel;
  const displayDuration = formatDuration(extra?.durationSeconds) ?? durationLabel;


  return (
    <div className="rounded-2xl border border-border bg-muted/40 hover:bg-muted/70 hover:border-primary/30 transition-colors">
      <div
        className="group flex items-center gap-4 px-4 py-3 rounded-2xl cursor-pointer"
        onClick={() => episodeId && setOpen((o) => !o)}
        role={episodeId ? "button" : undefined}
      >
        <span className="text-muted-foreground/60 text-sm font-medium w-6 text-right shrink-0 group-hover:text-foreground transition-colors">
          {episodeNumber}
        </span>

        <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center shrink-0 relative">
          {thumb ? (
            <img src={thumb} alt="" className="w-full h-full object-cover" />
          ) : (
            <Music2 className="h-5 w-5 text-primary" />
          )}
          {episodeId && (
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {open ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-sm md:text-base truncate group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 mt-0.5 text-muted-foreground/70 text-xs">
            {dateLabel && <span>{dateLabel}</span>}
            {dateLabel && durationLabel && <span aria-hidden>·</span>}
            {durationLabel && <span>{durationLabel}</span>}
            {fallbackDescription && (dateLabel || durationLabel) && <span aria-hidden className="hidden md:inline">·</span>}
            {fallbackDescription && (
              <span className="truncate hidden md:inline">{fallbackDescription}</span>
            )}
          </div>
        </div>

        {spotifyUrl && (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-muted-foreground/50 hover:text-foreground shrink-0 ml-2"
            aria-label="Abrir no Spotify"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>


      {open && episodeId && (
        <div className="px-4 pb-4">
          <iframe
            title={`Player Spotify: ${title}`}
            src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder={0}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            style={{ borderRadius: 12 }}
          />
        </div>
      )}
    </div>
  );
}
