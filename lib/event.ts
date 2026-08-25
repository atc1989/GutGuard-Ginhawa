export type Clinician = {
  id: string;
  name: string;
  suffix: string;
  role: string;
  initials: string;
  photo: string | null;
  licence: string;
  creds: string[];
  line: string;
};

export const PASS_PTS = 750;
export const GIFT_PESO = PASS_PTS;

export const TEAM: Clinician[] = [
  {
    id: "aca",
    name: "Dr. Jocelyn Aca",
    suffix: "MD",
    role: "Physician",
    initials: "JA",
    photo: null,
    licence: "PRC No. ______",
    creds: [
      "Doctor of Medicine, ______",
      "Licensed by the Professional Regulation Commission",
      "______ years in general practice",
    ],
    line: "Dr. Aca sees patients here every Saturday.",
  },
  {
    id: "marentes",
    name: "Ms. Marentes",
    suffix: "RN",
    role: "Nurse",
    initials: "M",
    photo: null,
    licence: "PRC No. ______",
    creds: [
      "Bachelor of Science in Nursing, ______",
      "Licensed by the Professional Regulation Commission",
      "______ years in ______",
    ],
    line: "Ms. Marentes takes your blood pressure and sits in on the consultation.",
  },
];

export const VIDEO = {
  src: null as string | null,
  poster: null as string | null,
  length: "1:40",
  caption: "Dr. Aca and Ms. Marentes explain what happens on Saturday.",
};

export const EVENT = {
  date: "Saturday, 23 August",
  time: "9:00 AM",
  venue: "Gutguard Medical Consultation Pod",
  address: "#15 JVA Building, Quirino Avenue, Davao City",
  maps: "https://maps.google.com/?q=JVA+Building+Quirino+Avenue+Davao+City",
  seats: 40,
  taken: 28,
};
