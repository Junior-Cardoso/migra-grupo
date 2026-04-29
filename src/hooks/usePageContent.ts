import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { defaultHomeContent, defaultSobreContent, type HomeContent, type SobreContent } from "@/data/defaultContent";

type PageMap = {
  inicio: HomeContent;
  sobre: SobreContent;
};

const defaults: PageMap = {
  inicio: defaultHomeContent,
  sobre: defaultSobreContent,
};

// Deep merge: DB values override defaults; falls back gracefully.
function mergeDeep<T>(base: T, override: any): T {
  if (override == null) return base;
  if (Array.isArray(base)) return (Array.isArray(override) ? override : base) as T;
  if (typeof base !== "object") return (override ?? base) as T;
  const out: any = { ...(base as any) };
  for (const k of Object.keys(override)) {
    out[k] = mergeDeep((base as any)[k], override[k]);
  }
  return out;
}

export function usePageContent<P extends keyof PageMap>(page: P) {
  return useQuery({
    queryKey: ["page_content", page],
    queryFn: async (): Promise<PageMap[P]> => {
      const { data, error } = await supabase
        .from("page_content")
        .select("section_key, content")
        .eq("page", page);
      if (error) throw error;

      const merged: any = JSON.parse(JSON.stringify(defaults[page]));
      (data ?? []).forEach((row: any) => {
        merged[row.section_key] = mergeDeep(merged[row.section_key], row.content);
      });
      return merged as PageMap[P];
    },
    staleTime: 30_000,
  });
}

export async function savePageSection(page: string, sectionKey: string, content: any) {
  const { error } = await supabase
    .from("page_content")
    .upsert(
      { page, section_key: sectionKey, content, updated_at: new Date().toISOString() },
      { onConflict: "page,section_key" }
    );
  if (error) throw error;
}
