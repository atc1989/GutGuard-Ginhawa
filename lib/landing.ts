import { createClient } from "@supabase/supabase-js";
import { cache } from "react";

import { parseLandingPayload, type GinhawaLanding } from "@/lib/event";
import { mapsEmbedSrc, resolveGoogleMapsUrl } from "@/lib/maps";

function createGinhawaClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    db: { schema: "gema" },
    global: {
      fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
    },
  });
}

/** Published Ginhawa snapshot plus live seats. Deduped per request. */
export const getPublishedLanding = cache(async (): Promise<GinhawaLanding | null> => {
  const supabase = createGinhawaClient();
  if (!supabase) return null;
  const { data, error } = await supabase.rpc("get_ginhawa_landing");
  if (error || data == null) return null;
  const landing = parseLandingPayload(data);
  if (!landing) return null;
  const resolvedMap = await resolveGoogleMapsUrl(landing.mapUrl);
  return {
    ...landing,
    mapEmbedSrc: mapsEmbedSrc(resolvedMap, landing.venueAddress, landing.venueName),
  };
});
