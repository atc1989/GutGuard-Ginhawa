import type { Metadata } from "next";

import { GinhawaEmpty, GinhawaLanding } from "@/components/GinhawaLanding";
import { getPublishedLanding } from "@/lib/landing";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const landing = await getPublishedLanding();
  if (!landing) {
    return {
      title: "GutGuard Ginhawa",
      description: "Free medical check-up at Gutguard.",
    };
  }
  const title = landing.title.replace(/\s+/g, " ").trim();
  return {
    title: `GutGuard Ginhawa — ${title}`,
    description: landing.heroWhat || `Free medical check-up at Gutguard. ${landing.dateLabel} ${landing.timeLabel}`.trim(),
  };
}

export default async function Page() {
  const landing = await getPublishedLanding();
  if (!landing) return <GinhawaEmpty />;
  return <GinhawaLanding landing={landing} />;
}
