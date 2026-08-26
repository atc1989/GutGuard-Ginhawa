export type Clinician = {
  id: string;
  name: string;
  suffix: string;
  role: string;
  initials: string;
  photo: string | null;
  licence: string;
  credentialsMd: string;
};

export type GinhawaLanding = {
  sourceEventId: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  heroWhat: string;
  giftPoints: number;
  giftPeso: number;
  capacity: number | null;
  seatsTaken: number;
  clinicians: Clinician[];
  videoUrl: string | null;
  videoLength: string | null;
  videoCaption: string | null;
  askTitle: string;
  askBody: string;
  askHit: string;
  gutTitle: string;
  gutBody: string;
  gutClose: string;
  venueName: string | null;
  venueAddress: string | null;
  mapUrl: string | null;
  mapEmbedSrc: string | null;
  bookUrl: string | null;
};

function str(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function num(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function parseClinicians(raw: unknown): Clinician[] {
  if (!Array.isArray(raw)) return [];
  return raw.slice(0, 4).map((item, i) => {
    const row = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    const name = str(row.name) || "Clinician";
    const initials = str(row.initials);
    return {
      id: str(row.id) || `clinician-${i}`,
      name,
      suffix: str(row.suffix),
      role: str(row.role),
      initials: initials || name.slice(0, 2).toUpperCase(),
      photo: str(row.photo) || null,
      licence: str(row.licence),
      credentialsMd: str(row.credentialsMd) || str(row.credentials_md),
    };
  });
}

export function parseLandingPayload(raw: unknown): GinhawaLanding | null {
  if (!raw || typeof raw !== "object") return null;
  const row = raw as Record<string, unknown>;
  const title = str(row.title);
  if (!title) return null;
  return {
    sourceEventId: str(row.source_event_id),
    title,
    dateLabel: str(row.date_label),
    timeLabel: str(row.time_label),
    heroWhat: str(row.hero_what),
    giftPoints: num(row.gift_points) ?? 0,
    giftPeso: num(row.gift_peso) ?? 0,
    capacity: num(row.capacity),
    seatsTaken: num(row.seats_taken) ?? 0,
    clinicians: parseClinicians(row.clinicians),
    videoUrl: str(row.video_url) || null,
    videoLength: str(row.video_length) || null,
    videoCaption: str(row.video_caption) || null,
    askTitle: str(row.ask_title),
    askBody: str(row.ask_body),
    askHit: str(row.ask_hit),
    gutTitle: str(row.gut_title),
    gutBody: str(row.gut_body),
    gutClose: str(row.gut_close),
    venueName: str(row.venue_name) || null,
    venueAddress: str(row.venue_address) || null,
    mapUrl: str(row.map_url) || null,
    mapEmbedSrc: null,
    bookUrl: str(row.book_url) || null,
  };
}
