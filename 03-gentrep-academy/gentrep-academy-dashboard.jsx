import React, { useState, useEffect, useRef } from "react";

/* ---- Gentrep logo, traced from the supplied artwork ----
   Wordmark inherits currentColor; the node mark keeps brand blue. */
const GENTREP_BLUE = "#0205C6";
const GentrepLogo = ({ height = 28, color = "currentColor", markOnly = false, style, className }) => (
  <svg viewBox={markOnly ? "8 1 289 356" : "0 0 1688 508"} height={height}
       className={className} style={{ display: "block", overflow: "visible", ...style }} role="img" aria-label="Gentrep">
    {!markOnly && <path d="M198.0 502.4C196.6 502.2 190.3 501.3 184.0 500.4C154.0 496.1 125.7 484.6 105.7 468.5C103.7 466.9 102.0 465.1 102.0 464.6C102.0 463.5 116.8 441.3 118.0 440.5C118.5 440.2 122.1 442.5 126.2 445.6C130.2 448.6 139.3 454.0 146.5 457.5C169.2 468.6 189.8 473.2 217.0 473.3C269.8 473.4 298.1 453.8 307.0 411.0C308.8 402.5 309.3 395.8 309.7 375.8C310.3 350.0 309.9 347.5 306.4 354.2C304.1 358.7 288.6 374.0 281.5 378.7C261.5 392.1 239.0 398.4 211.0 398.4C194.6 398.4 180.8 396.3 167.6 391.8C131.6 379.6 104.2 352.6 92.6 318.0C87.7 303.2 86.5 294.8 86.6 276.0C86.6 260.3 86.9 257.3 89.4 247.1C92.5 234.8 96.2 225.0 100.6 217.5L103.3 212.8L106.7 218.1C111.1 225.1 117.4 238.3 119.1 244.0C120.0 247.1 120.4 255.8 120.5 271.5C120.6 293.6 120.7 294.9 123.3 303.4C131.1 328.6 144.4 345.3 166.0 357.2C198.5 375.1 245.6 372.3 274.9 350.7C300.5 331.9 313.8 300.0 310.2 266.7C305.3 221.4 273.4 190.5 226.8 185.8C212.6 184.4 195.5 185.7 184.5 189.2C175.3 192.1 157.5 192.3 148.5 189.6C141.3 187.5 131.0 183.0 131.0 182.0C131.0 180.8 144.2 172.8 153.5 168.4C187.9 152.2 233.9 152.0 267.4 168.0C271.8 170.2 278.4 173.8 281.9 176.2C289.5 181.1 302.2 193.4 307.0 200.5L310.5 205.5L310.8 181.8L311.0 158.0L327.0 158.0L343.1 158.0L342.8 280.2L342.5 402.5L340.2 414.0C334.9 440.5 326.7 457.4 312.1 472.1C297.6 486.6 279.8 495.3 254.9 500.0C245.9 501.8 239.0 502.3 222.0 502.5C210.2 502.7 199.4 502.7 198.0 502.4ZM1448.7 468.4C1448.3 468.0 1448.0 398.2 1448.0 313.3L1448.0 159.0L1467.5 159.0L1487.0 159.0L1487.0 176.5C1487.0 186.1 1487.2 194.0 1487.4 194.0C1487.6 194.0 1490.9 190.8 1494.7 186.9C1502.6 178.6 1510.7 172.7 1520.6 167.7C1549.1 153.4 1591.9 153.9 1621.5 168.7C1651.6 183.8 1671.9 209.7 1679.8 243.4C1682.1 253.1 1682.4 256.7 1682.5 272.0C1682.5 286.8 1682.1 291.1 1680.2 300.0C1670.3 344.1 1641.0 374.5 1598.0 385.1C1589.7 387.2 1586.0 387.5 1569.5 387.5C1552.7 387.5 1549.4 387.2 1541.5 385.1C1524.0 380.6 1505.2 369.7 1494.8 358.1C1492.3 355.3 1489.9 353.0 1489.6 353.0C1489.3 353.0 1488.9 379.0 1488.8 410.8L1488.5 468.5L1468.9 468.8C1458.2 468.9 1449.1 468.7 1448.7 468.4ZM964.7 388.0C943.6 384.2 927.7 374.2 918.6 359.1C916.7 356.0 913.9 349.7 912.4 345.0L909.5 336.5L909.0 265.0L908.5 193.5L889.2 193.2L870.0 193.0L870.0 176.5L870.0 160.0L889.2 159.8L908.5 159.5L908.8 134.8L909.0 110.0L929.0 110.0L949.0 110.0L949.2 134.8L949.5 159.5L982.0 160.0L1014.5 160.5L1014.8 176.7L1015.0 193.0L982.3 193.2L949.5 193.5L949.5 259.5L949.5 325.5L951.9 332.5C955.0 341.4 960.7 347.7 969.3 351.6C974.9 354.2 976.5 354.4 986.0 354.3C997.4 354.2 1005.0 352.3 1012.2 347.5C1014.3 346.1 1016.3 345.0 1016.8 345.0C1017.2 345.0 1019.3 348.9 1021.4 353.8C1023.5 358.6 1026.3 364.9 1027.6 367.8L1030.0 373.2L1027.7 375.1C1023.7 378.6 1013.7 383.3 1005.0 385.7C995.6 388.4 973.7 389.7 964.7 388.0ZM474.0 387.4C445.4 382.3 430.4 376.0 412.0 361.4C393.5 346.7 381.3 326.8 374.9 301.0C372.9 292.8 372.6 289.0 372.5 273.0C372.5 257.2 372.8 253.0 374.8 244.0C383.9 203.7 411.7 173.7 450.9 162.1C472.8 155.6 499.5 155.6 521.5 162.2C557.3 173.0 583.1 200.7 593.5 239.5C595.8 248.1 596.3 252.1 596.7 267.8L597.2 286.0L505.1 286.0L413.0 286.0L413.0 288.3C413.0 289.5 413.9 293.8 415.0 297.8C426.3 338.5 469.7 360.5 518.0 350.0C532.2 346.9 544.4 340.5 554.8 330.7L560.2 325.5L564.2 330.0C573.9 340.8 582.0 350.8 582.0 352.0C582.0 353.8 573.3 362.0 565.7 367.3C554.1 375.6 540.5 381.5 524.5 385.2C517.3 386.9 511.6 387.3 496.0 387.6C485.3 387.7 475.4 387.6 474.0 387.4ZM1279.0 385.6C1255.2 380.7 1236.5 371.2 1220.6 355.9C1202.5 338.6 1191.8 318.1 1188.0 293.5C1185.1 275.2 1187.1 247.8 1192.4 232.2C1206.7 190.3 1242.6 162.2 1287.4 157.9C1349.2 151.9 1399.2 188.4 1409.5 247.0C1411.4 257.9 1412.5 275.3 1411.6 281.3L1410.9 286.0L1318.9 286.0L1227.0 286.0L1227.6 290.2C1227.9 292.6 1229.2 297.5 1230.5 301.2C1239.1 326.7 1260.8 345.1 1288.9 350.7C1299.7 352.9 1319.5 352.8 1330.2 350.7C1344.5 347.8 1358.7 340.6 1369.8 330.5C1372.7 327.9 1375.2 325.9 1375.4 326.1C1391.6 344.8 1397.0 351.3 1397.0 352.0C1397.0 353.5 1383.5 365.4 1376.6 369.9C1366.8 376.2 1353.5 381.7 1341.0 384.7C1332.1 386.9 1327.5 387.3 1310.5 387.6C1292.5 387.9 1289.4 387.7 1279.0 385.6ZM633.0 272.5L633.0 159.0L652.2 159.2L671.5 159.5L672.0 175.9L672.5 192.3L675.9 188.4C688.3 174.1 709.0 163.0 730.1 159.1C749.2 155.7 771.8 157.0 788.9 162.5C820.6 172.8 839.3 195.6 845.7 231.6C847.2 240.4 847.4 249.5 847.5 313.5L847.5 385.5L827.3 385.8L807.1 386.0L806.7 315.8C806.4 253.3 806.1 244.7 804.6 238.0C797.8 209.2 777.3 193.9 745.5 193.9C729.9 193.9 718.8 196.4 706.8 202.7C691.8 210.5 681.1 224.9 675.8 244.5C673.7 252.3 673.6 254.4 673.2 319.2L672.9 386.0L652.9 386.0L633.0 386.0L633.0 272.5ZM1059.5 384.8C1059.2 384.1 1059.1 333.1 1059.2 271.5L1059.5 159.5L1078.8 159.2L1098.0 159.0L1098.0 176.8C1098.0 186.6 1098.3 195.0 1098.6 195.3C1099.0 195.7 1100.6 194.0 1102.1 191.6C1108.1 182.6 1119.5 172.8 1130.6 167.2C1140.5 162.2 1164.8 157.0 1178.7 157.0L1181.0 157.0L1181.0 176.5L1181.0 196.0L1174.7 196.0C1166.0 196.0 1152.5 197.8 1146.5 199.7C1128.1 205.5 1113.6 218.7 1106.5 236.1C1100.7 250.4 1100.6 251.0 1100.0 321.0L1099.5 385.5L1079.7 385.8C1064.5 386.0 1059.8 385.8 1059.5 384.8ZM1584.1 350.5C1604.7 346.1 1623.6 331.1 1633.0 311.5C1637.7 301.7 1639.6 294.6 1641.1 281.4C1643.2 264.2 1639.2 243.8 1630.9 229.4C1617.9 206.5 1593.3 193.0 1565.0 193.0C1533.3 193.0 1507.5 209.5 1495.2 237.5C1487.0 256.2 1486.8 287.5 1494.7 306.4C1505.6 332.6 1526.2 347.9 1556.5 352.4C1561.6 353.1 1576.3 352.1 1584.1 350.5ZM557.7 251.1C556.3 238.3 548.2 222.4 537.6 212.0C529.5 204.1 521.1 198.9 510.5 195.3C502.9 192.6 501.5 192.5 485.0 192.5C468.3 192.6 467.1 192.7 460.0 195.4C443.0 201.8 428.9 213.8 421.2 228.8C417.0 236.7 413.0 249.3 413.0 254.2L413.0 257.0L485.6 257.0L558.3 257.0L557.7 251.1ZM1372.6 255.7C1373.3 253.7 1368.5 235.9 1365.7 230.4C1357.4 214.1 1343.2 201.7 1325.5 195.4C1317.9 192.6 1316.7 192.5 1300.0 192.5C1283.4 192.5 1282.1 192.7 1275.1 195.2C1254.0 203.1 1240.0 216.4 1232.0 236.4C1229.7 242.4 1227.0 252.8 1227.0 256.2C1227.0 256.6 1259.6 257.0 1299.5 257.0C1357.6 257.0 1372.2 256.7 1372.6 255.7Z" fill={color} fillRule="evenodd" />}
    <path d="M201.0 351.6C172.3 345.2 151.1 326.4 142.0 299.3C138.8 289.7 138.7 289.1 138.0 265.0C137.0 233.8 135.5 227.6 126.2 214.5C120.2 206.2 114.8 200.1 109.1 195.5C102.2 189.7 98.8 189.6 88.8 194.6C78.6 199.7 73.7 201.0 63.5 201.0C49.0 201.0 38.5 196.7 28.4 186.6C17.3 175.5 11.2 157.5 13.9 144.3C14.6 141.1 15.3 137.8 15.4 137.0C15.9 134.0 19.0 128.0 23.0 122.1C31.4 109.6 47.9 101.0 63.5 101.0C70.1 101.0 78.1 103.1 90.6 108.0C98.6 111.2 98.8 111.2 102.3 109.5C107.2 107.2 132.7 80.8 135.1 75.6C137.5 70.2 137.5 64.7 134.9 57.4C133.3 52.8 132.9 49.8 133.2 43.5C133.9 28.9 142.0 16.7 155.4 9.7C161.2 6.7 162.1 6.5 172.5 6.5C183.0 6.5 183.9 6.7 190.2 9.8C206.1 17.6 215.2 35.0 212.1 51.6C211.4 55.3 209.7 60.8 208.3 63.7C205.0 70.4 196.7 78.3 189.3 81.8C183.7 84.4 182.9 84.5 166.0 84.5C151.5 84.5 148.0 84.8 145.4 86.2C137.6 90.5 111.9 113.3 109.4 118.2C107.4 122.1 107.7 125.4 110.7 133.9C114.3 144.2 114.5 157.3 111.1 167.2C109.9 170.9 108.4 174.2 107.9 174.5C107.4 174.9 107.0 176.9 107.0 179.2C107.0 182.4 107.6 183.8 110.1 186.1C115.0 190.7 128.8 199.5 137.5 203.6C144.3 206.9 146.6 207.5 154.0 207.8C165.0 208.3 174.5 206.8 187.8 202.5C208.2 195.8 224.7 195.7 242.8 202.2C264.2 210.0 282.0 228.2 289.6 250.5C292.0 257.4 292.5 260.4 292.8 272.6C293.1 284.8 292.9 287.9 291.0 294.6C281.5 329.6 250.6 353.3 215.2 352.9C210.4 352.8 204.0 352.2 201.0 351.6Z" fill={GENTREP_BLUE} fillRule="evenodd" />
  </svg>
);

/* ============================================================
   GENTREP ACADEMY
   BASE → Team Leader → Squad Leader → Platoon Leader →
   Company Commander. Nothing is ever self-declared: a scan at
   the door, an upline's sign-off, or a trainee's certificate.
   ============================================================ */

const C = {
  navy: "#0e2249", navyD: "#07142e", blue: "#2569b8", sky: "#9DB8DE",
  paper: "#eef2f7", card: "#ffffff", ink: "#1a2740", mute: "#5a6b82",
  gold: "#f5b716", goldD: "#8a5a00", line: "#e2e8f0",
  good: "#157a43", goodBg: "#E4F4EC", warn: "#8a5a00", warnBg: "#FDF4E0",
  clay: "#a63a20", clayBg: "#FBEAE5", olive: "#3f4c37", oliveLt: "#EDEFE9",
  brand: "#1f5d99", brandD: "#163f66", tg: "#1373a2",
};
const HERO = `linear-gradient(160deg, ${C.brand}, ${C.brandD})`;

const ME = { name: "Rey Aquino", team: "Bravo", card: "0240 5578 9012 3456" };
const TEAM_CHAT = { name: "Team Bravo", url: "https://t.me/", members: 24 };

/* ---- insignia metals ---- */
const METAL = {
  bronze: { lo: "#8C5A2B", mid: "#B87A3D", hi: "#E2A96A", ink: "#3A2410" },
  silver: { lo: "#7E8A9C", mid: "#B9C4D2", hi: "#EDF1F6", ink: "#0e2249" },
  gold:   { lo: "#B07E0A", mid: "#f5b716", hi: "#FFD968", ink: "#3A2A00" },
};
const DEVICE = {
  BASE: { kind: "seal",  n: 0, metal: "bronze" },
  TL:   { kind: "bars",  n: 1, metal: "silver" },
  SL:   { kind: "bars",  n: 2, metal: "silver" },
  PL:   { kind: "bars",  n: 3, metal: "silver" },
  CC:   { kind: "field", n: 1, metal: "gold"   },
};

/* ---- the ladder ---- */
const RANKS = [
  {
    k: "BASE", n: "BASE", full: "Base Activation", phase: "Member",
    eyebrow: "Activation", pin: "activated", opens: "My Team opens.",
    abbr: null, ref: "GA-BASE-0847",
    cite: "As an activated member of the Gutguard Lifestyle, having completed Admin and Compliance and all five activation events.",
    reqs: [
      { id: "b-orient", type: "document", title: "Gutguard Dashboard Orientation", mins: "4 min",
        blurb: "Where everything lives — content, sales, your team.",
        blurbTl: "Dito nakalagay ang lahat — content, sales, at ang team mo." },
      { id: "b-da", type: "document", title: "Distributor's Agreement", mins: "6 min", doc: "Agreement v3.1", docTl: "Kasunduan ng Distributor v3.1",
        blurb: "What you're agreeing to, in plain terms.",
        blurbTl: "Ang pinapasukan mo, sa simpleng salita.",
        body: "This Agreement is between Gutguard Philippines Inc. and you as an independent distributor. You are not an employee. You earn from product sold, never from recruitment alone. You may not make medical claims about any product. You may not require anyone below you to purchase stock. Either party may end this Agreement in writing at any time. Your card number and downline records remain the property of the company.",
        bodyTl: "Ang kasunduang ito ay sa pagitan ng Gutguard Philippines Inc. at ikaw bilang isang independent distributor. Hindi ka empleyado. Kumikita ka mula sa produktong nabenta, hindi mula sa pagre-recruit lamang. Bawal kang mag-claim ng anumang medikal na epekto ng produkto. Bawal mong pilitin ang sinumang nasa ilalim mo na bumili ng stock. Maaaring wakasan ninuman sa atin ang kasunduang ito sa pamamagitan ng sulat, anumang oras. Ang card number mo at ang talaan ng iyong downline ay pag-aari ng kompanya." },
      { id: "b-eth", type: "document", title: "Code of Ethics", mins: "5 min", doc: "Code v2.0", docTl: "Kodigo ng Etika v2.0",
        blurb: "How we speak about the product, and about each other.",
        blurbTl: "Kung paano tayo magsalita tungkol sa produkto, at sa isa't isa.",
        body: "Speak only to what the product is: food, taken daily. Never promise a cure, never diagnose, never discourage anyone from seeing a doctor. Show real testimonies with the person's consent and never edit them into a claim. Do not poach another distributor's prospect. Do not sell below the posted price. Do not present income as guaranteed, and never show earnings without showing the work behind them.",
        bodyTl: "Sabihin lamang kung ano talaga ang produkto: pagkain, iniinom araw-araw. Huwag mangakong may lunas, huwag mag-diagnose, at huwag pigilan ang sinuman na magpatingin sa doktor. Ipakita lamang ang totoong testimonya nang may pahintulot, at huwag itong baguhin para maging claim. Huwag agawin ang prospect ng ibang distributor. Huwag magbenta nang mas mababa sa nakatakdang presyo. Huwag sabihing garantisado ang kita." },
      { id: "b-creed", type: "document", title: "Gentrep Creed", mins: "2 min", doc: "The Creed", docTl: "Ang Gentrep Creed",
        blurb: "What we hold ourselves to.",
        blurbTl: "Ang pinanghahawakan natin sa sarili.",
        body: "I earn, I do not extract. I bring people in only when I would want to be brought in the same way. I tell the truth about the product, the money, and the work. I do not leave someone I signed up to figure it out alone. What I build should still stand if I stop building it.",
        bodyTl: "Kumikita ako, hindi ako nangungurakot. Isinasama ko lang ang tao kung paano ko rin gustong isama ako. Sinasabi ko ang totoo tungkol sa produkto, sa pera, at sa trabaho. Hindi ko iiwan ang taong isinama ko. Ang itinatayo ko ay dapat tumayo pa rin kahit tumigil na ako." },
      { id: "b-1", type: "attendance", title: "Ginhawa Talk",         note: "Where it starts" },
      { id: "b-2", type: "attendance", title: "Product Presentation", note: "What it is, how to use it" },
      { id: "b-3", type: "attendance", title: "Testimonial Session",  note: "Real members, real results" },
      { id: "b-4", type: "attendance", title: "Business Orientation", note: "How earning actually works" },
      { id: "b-5", type: "attendance", title: "Leaders' Training",    note: "Running your own table" },
    ],
  },
  {
    k: "TL", n: "TL", full: "Team Leader", phase: "Lead Generator",
    eyebrow: "Rank certification", pin: "pinned Team Leader",
    opens: "You'll be invited to a Recognition Night.",
    abbr: "2Lt", officer: "Academy Second Lieutenant", ref: "GA-TL-0847",
    cite: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Team Leader course and demonstrated them in the field.",
    reqs: [
      { id: "t-1", type: "attendance", title: "Your First Twenty Names", note: "Where leads actually come from" },
      { id: "t-2", type: "attendance", title: "The Invite Conversation", note: "Asking without pressure" },
      { id: "t-3", type: "attendance", title: "Following Up",            note: "Staying in touch, not chasing" },
      { id: "t-4", type: "attendance", title: "Handling a Guest",        note: "From the door to the seat" },
      { id: "t-5", type: "attendance", title: "What You May Not Say",    note: "Claims, income, and the line" },
      { id: "t-demo", type: "demonstration", title: "Bring three guests", note: "They check in, with a Platoon Leader in the room" },
    ],
  },
  {
    k: "SL", n: "SL", full: "Squad Leader", phase: "Presenter",
    eyebrow: "Rank certification", pin: "pinned Squad Leader",
    opens: "You'll be invited to a Recognition Night.",
    abbr: "1Lt", officer: "Academy First Lieutenant", ref: "GA-SL-0847",
    cite: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Squad Leader course and presented before a room.",
    reqs: [
      { id: "s-1", type: "attendance", title: "Opening a Room",        note: "The first four minutes" },
      { id: "s-2", type: "attendance", title: "The Product Story",     note: "What it is, without claims" },
      { id: "s-3", type: "attendance", title: "Handling Questions",    note: "Including the hard ones" },
      { id: "s-4", type: "attendance", title: "Closing the Session",   note: "Asking, and letting people choose" },
      { id: "s-demo", type: "demonstration", title: "Present a full session", note: "With a Platoon Leader watching" },
    ],
  },
  {
    k: "PL", n: "PL", full: "Platoon Leader", phase: "Trains Team Leaders",
    eyebrow: "Rank certification", pin: "pinned Platoon Leader",
    opens: "You'll be invited to a Recognition Night.",
    abbr: "Capt", officer: "Academy Captain", ref: "GA-PL-0847",
    cite: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Platoon Leader course and trained a Team Leader through to certification.",
    reqs: [
      { id: "p-1", type: "attendance", title: "Teaching, Not Telling", note: "How adults actually learn" },
      { id: "p-2", type: "attendance", title: "Running a Class",       note: "Structure, pace, and the room" },
      { id: "p-3", type: "attendance", title: "Signing Someone Off",   note: "What you are vouching for" },
      { id: "p-der", type: "derived", title: "A Team Leader you trained is certified", note: "Their certificate, not your word" },
    ],
  },
  {
    k: "CC", n: "CC", full: "Company Commander", phase: "Trains Squad Leaders",
    eyebrow: "Rank certification", pin: "pinned Company Commander",
    opens: "You'll be invited to a Recognition Night.",
    abbr: "Maj", officer: "Academy Major", ref: "GA-CC-0847",
    cite: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Company Commander course and trained a Squad Leader through to certification.",
    reqs: [
      { id: "c-1", type: "attendance", title: "Building a Bench",      note: "Depth, not headcount" },
      { id: "c-2", type: "attendance", title: "Standards and Drift",   note: "Keeping the teaching true" },
      { id: "c-der", type: "derived", title: "A Squad Leader you trained is certified", note: "Their certificate, not your word" },
    ],
  },
];

const TYPE_LABEL = {
  document: "Watch and agree",
  attendance: "Attend",
  demonstration: "Show it",
  derived: "Earned by your trainee",
};

/* ---- everything GEMA has posted ---- */
const EVENTS = [
  { id: 11, type: "Testimonial Session",  date: "Sat 2 Aug",  time: "2:00 PM",  place: "Robinsons, Davao", host: "Jesh M.", rank: "CC", seats: 4 },
  { id: 12, type: "Product Presentation", date: "Sat 2 Aug",  time: "4:00 PM",  place: "Lagao Hall",       host: "Ana R.",  rank: "PL", seats: 15 },
  { id: 13, type: "Business Orientation", date: "Sun 3 Aug",  time: "3:00 PM",  place: "Koronadal",        host: "Rey T.",  rank: "PL", seats: 22 },
  { id: 14, type: "Testimonial Session",  date: "Sat 9 Aug",  time: "2:00 PM",  place: "Lagao Hall",       host: "Ana R.",  rank: "PL", seats: 0 },
  { id: 15, type: "Ginhawa Talk",         date: "Sat 9 Aug",  time: "9:00 AM",  place: "Polomolok",        host: "Ana R.",  rank: "PL", seats: 30 },
  { id: 16, type: "Business Orientation", date: "Sat 16 Aug", time: "4:00 PM",  place: "Lagao Hall",       host: "Ana R.",  rank: "PL", seats: 9 },
  { id: 17, type: "Leaders' Training",    date: "Sat 16 Aug", time: "1:00 PM",  place: "Robinsons, Davao", host: "Rey T.",  rank: "PL", seats: 8 },
  { id: 18, type: "Ginhawa Talk",         date: "Sat 23 Aug", time: "9:00 AM",  place: "Koronadal",        host: "Jesh M.", rank: "CC", seats: 20 },
  { id: 19, type: "Leaders' Training",    date: "Sat 30 Aug", time: "1:00 PM",  place: "Lagao Hall",       host: "Ana R.",  rank: "PL", seats: 10 },
  { id: 21, type: "Your First Twenty Names", date: "Sat 2 Aug",  time: "1:00 PM",  place: "Koronadal",  host: "Ana R.",  rank: "PL", seats: 8 },
  { id: 22, type: "The Invite Conversation", date: "Sat 9 Aug",  time: "2:00 PM",  place: "Polomolok",  host: "Jesh M.", rank: "CC", seats: 25 },
  { id: 23, type: "Following Up",            date: "Sat 16 Aug", time: "1:00 PM",  place: "Lagao Hall", host: "Rey T.",  rank: "PL", seats: 16 },
  { id: 24, type: "Handling a Guest",        date: "Sat 23 Aug", time: "10:00 AM", place: "Koronadal",  host: "Ana R.",  rank: "PL", seats: 12 },
  { id: 25, type: "What You May Not Say",    date: "Sat 30 Aug", time: "9:00 AM",  place: "Lagao Hall", host: "Jesh M.", rank: "CC", seats: 30 },
  { id: 31, type: "Opening a Room",          date: "Sat 6 Sep",  time: "1:00 PM",  place: "Lagao Hall", host: "Jesh M.", rank: "CC", seats: 14 },
  { id: 32, type: "The Product Story",       date: "Sat 13 Sep", time: "1:00 PM",  place: "Koronadal",  host: "Rey T.",  rank: "PL", seats: 18 },
];

/* ============================================================ */

export default function Academy() {
  const [rankKey, setRankKey] = useState("BASE");
  const [st, setSt] = useState({
    "b-orient": { s: "done", when: "28 Jul" },
    "b-da":     { s: "done", when: "28 Jul", lang: "en" },
    "b-eth":    { s: "done", when: "28 Jul", lang: "tl" },
    "b-creed":  { s: "open" },
    "b-1":      { s: "done", when: "19 Jul" },
    "b-2":      { s: "missed", when: "26 Jul" },
    "b-3":      { s: "booked", ev: 11 },
    "b-4":      { s: "open" },
    "b-5":      { s: "open" },
  });
  const [expanded, setExpanded] = useState(null);
  const [sheet, setSheet] = useState(null);
  const [watched, setWatched] = useState({});
  const [lang, setLang] = useState("en");
  const [confirm, setConfirm] = useState(null);
  const [cert, setCert] = useState(false);
  const [about, setAbout] = useState(false);
  const [toast, setToast] = useState("");
  const [live, setLive] = useState("");
  const [fire, setFire] = useState(0);
  const refs = useRef({});

  const flash = (m) => { setToast(m); setLive(m); setTimeout(() => setToast(""), 2400); };

  const rank = RANKS.find(r => r.k === rankKey);
  const reqs = rank.reqs;
  const stateOf = (id) => st[id] || { s: "open" };
  const doneOf = (r) => r.reqs.filter(x => stateOf(x.id).s === "done").length;
  const complete = (r) => r.reqs.length > 0 && doneOf(r) === r.reqs.length;
  const done = doneOf(rank), total = reqs.length;
  const booked = reqs.filter(r => stateOf(r.id).s === "booked").length;
  const missed = reqs.filter(r => stateOf(r.id).s === "missed").length;
  const isComplete = complete(rank);
  const nextReq = reqs.find(r => ["open", "missed"].includes(stateOf(r.id).s));
  const evById = (id) => EVENTS.find(e => e.id === id);

  const lockedFor = (r) => {
    const i = RANKS.indexOf(r);
    if (i <= 0) return null;
    const prev = RANKS[i - 1];
    return complete(prev) ? null : "Finish " + prev.full + " first";
  };

  const set = (id, v) => {
    const next = { ...st, [id]: v };
    setSt(next);
    if (v.s === "done") {
      const all = reqs.every(r => (next[r.id] || {}).s === "done");
      setFire(Date.now());
      if (all) { setLive("All requirements complete. Certificate ready."); setTimeout(() => setCert(true), 420); }
      else flash("Recorded · " + reqs.filter(r => (next[r.id] || {}).s === "done").length + " of " + total);
    }
  };
  const reserve = (req, e) => { setSt({ ...st, [req.id]: { s: "booked", ev: e.id } }); setConfirm(null); flash("Seat reserved · " + e.date); };
  const cancel = (req) => { setSt({ ...st, [req.id]: { s: "open" } }); setConfirm(null); flash("Seat released"); };
  const openChat = () => { flash("Opening " + TEAM_CHAT.name + " on Telegram…"); try { window.open(TEAM_CHAT.url, "_blank"); } catch (e) {} };

  const goNext = () => {
    if (!nextReq) return;
    if (nextReq.type === "document") return setSheet(nextReq.id);
    setExpanded(nextReq.id);
    setTimeout(() => refs.current[nextReq.id]?.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
  };

  /* Demo only. Marks a rank complete using the right kind of evidence for
     each requirement, so the certificate reflects how it would really be earned. */
  const completeRank = (key) => {
    const r = RANKS.find(x => x.k === key);
    const next = { ...st };
    r.reqs.forEach(req => {
      if (req.type === "document") next[req.id] = { s: "done", when: "28 Jul", lang: "en" };
      else if (req.type === "attendance") next[req.id] = { s: "done", when: "16 Aug", via: "scan" };
      else if (req.type === "demonstration") next[req.id] = { s: "done", when: "23 Aug", via: "signoff", by: "Rey T." };
      else next[req.id] = { s: "done", when: "30 Aug", via: "derived", trainee: "Marilou D." };
    });
    setSt(next);
    setRankKey(key);
    setExpanded(null);
    setFire(Date.now());
    setLive(r.full + " complete. Certificate ready.");
    setTimeout(() => setCert(true), 420);
  };

  const sheetReq = reqs.find(r => r.id === sheet);

  return (
    <div className="ga" lang="en">
      <Style />
      <Confetti fire={fire} />
      <span className="sr-only" role="status" aria-live="polite">{live}</span>
      <a className="skip" href="#reqs">Skip to what it takes</a>

      <div className="shell">
        {/* ---------- desktop sidebar ---------- */}
        <aside className="side" aria-label="Academy navigation">
          <div className="brand">
            <GentrepLogo height={24} color={C.navy} />
            <span className="serif">Academy</span>
          </div>
          <div className="who">
            <span className="avatar">{ME.name.split(" ").map(w => w[0]).join("").slice(0, 2)}</span>
            <span><b>{ME.name}</b><em>Team {ME.team}</em></span>
          </div>
          <nav aria-label="Ranks" className="side-nav">
            {RANKS.map(r => {
              const lock = lockedFor(r), on = r.k === rankKey;
              return (
                <button key={r.k} className={"tap side-rank" + (on ? " on" : "")} aria-current={on ? "page" : undefined}
                  onClick={() => lock ? flash(lock) : (setRankKey(r.k), setExpanded(null))}>
                  <Insignia {...DEVICE[r.k]} size={r.k === "CC" ? 20 : r.k === "BASE" ? 22 : 13} mark={false} />
                  <span className="grow">
                    <b>{r.full}</b><em>{r.phase}</em>
                  </span>
                  {lock && <span className="lock">Locked</span>}
                  {complete(r) && <span className="tickmini">✓</span>}
                </button>
              );
            })}
          </nav>
          <button className="tap side-btn" onClick={() => setAbout(true)}>About Gentrep Academy</button>
          {!isComplete && nextReq && (
            <div className="side-next">
              <div className="eyebrow-dark">Do this next</div>
              <b>{nextReq.title}</b>
              <button className="tap btn primary wide" onClick={goNext}>
                {nextReq.type === "document" ? "Watch the video" : "Pick a date"}
              </button>
            </div>
          )}
        </aside>

        <main className="col">
          {/* ---------- mobile masthead ---------- */}
          <header className="mast only-mobile">
            <div className="brand">
              <GentrepLogo height={26} color={C.navy} />
              <span className="serif big">Academy</span>
            </div>
            <button className="tap pill sm" onClick={() => setAbout(true)}>About</button>
          </header>
          <p className="sub only-mobile">{ME.name} · Team {ME.team}</p>

          {/* ---------- ladder (mobile) ---------- */}
          <nav className="ladder noscroll only-mobile" aria-label="Ranks">
            {RANKS.map(r => {
              const lock = lockedFor(r), on = r.k === rankKey;
              return (
                <button key={r.k} className={"tap rung" + (on ? " on" : "")} aria-current={on ? "page" : undefined}
                  onClick={() => lock ? flash(lock) : (setRankKey(r.k), setExpanded(null))}>
                  <Insignia {...DEVICE[r.k]} size={r.k === "CC" ? 17 : r.k === "BASE" ? 18 : 11} mark={false} />
                  <span className="ant">{r.n}</span>
                  <span className="sr-only">{r.full}, {r.phase}{lock ? ", locked. " + lock : ""}</span>
                  {lock && <span className="lock">Locked</span>}
                </button>
              );
            })}
          </nav>

          {/* ---------- rank plate ---------- */}
          <section className={"plate hatch" + (isComplete ? " done" : "")}>
            <GentrepLogo markOnly height={210} aria-hidden="true" className="plate-mark"
              style={{ position: "absolute", top: "50%", left: "72%", transform: "translateY(-50%)",
                       opacity: .16, zIndex: -1, pointerEvents: "none", maxWidth: "none" }} />
            <div className="rule-row"><i /><span>{rank.eyebrow}</span></div>
            <h1 className="ant plate-title">{rank.full}</h1>
            <div className="plate-sub">{rank.phase}{rank.abbr ? " · " + rank.abbr : ""}</div>
            <div className="plate-foot">
              <b>{isComplete ? "All done." : done + " of " + total + " done"}</b>
              <span className="pips">
                {reqs.map(r => (
                  <i key={r.id} className={"pip " + stateOf(r.id).s} />
                ))}
              </span>
            </div>
            <div className="bar" role="progressbar" aria-valuenow={done} aria-valuemin={0} aria-valuemax={total}
                 aria-label={rank.full + " progress"} aria-valuetext={done + " of " + total + " complete"}>
              <i style={{ width: (total ? (done / total) * 100 : 0) + "%" }} />
            </div>
            <div className="plate-note">
              {[booked ? booked + " booked" : null, missed ? missed + " missed" : null].filter(Boolean).join(" · ") || "\u00A0"}
            </div>
          </section>

          {/* ---------- team chat ---------- */}
          <button className="tap chat" onClick={openChat}>
            <span className="tg"><TgIcon /></span>
            <span className="grow left">
              <b>{TEAM_CHAT.name} chat</b><em>{TEAM_CHAT.members} members · ask before you go</em>
            </span>
          </button>

          {/* ---------- requirements ---------- */}
          <div className="bar-title"><h2 className="sec" id="reqs" tabIndex={-1}>What it takes</h2></div>
          <p className="sr-only">{done} of {total} requirements complete.</p>

          <ol className="reqs">
            {reqs.map((req, idx) => {
              const s = stateOf(req.id);
              const isOpen = expanded === req.id;
              const dates = EVENTS.filter(e => e.type === req.title);
              const bookedEv = s.ev ? evById(s.ev) : null;
              const isNext = nextReq && nextReq.id === req.id;
              const prevDone = idx > 0 && stateOf(reqs[idx - 1].id).s === "done";
              const tone = s.s === "done" ? C.good : s.s === "booked" ? C.warn : s.s === "missed" ? C.clay : C.mute;
              const status =
                s.s === "done" ? (req.type === "document"
                    ? "Agreed" + (s.lang === "tl" ? " sa Tagalog" : "") + " · " + s.when
                    : s.via === "signoff" ? "Signed off · " + s.by
                    : s.via === "derived" ? s.trainee + " certified"
                    : "Attended · " + s.when)
                : s.s === "booked" ? "Booked · " + bookedEv.date + ", " + bookedEv.place
                : s.s === "missed" ? "Missed · " + s.when + " — pick another date"
                : req.type === "attendance" ? (dates.length ? dates.length + " dates posted" : "No dates posted yet")
                : req.type === "document" ? "Video " + req.mins + (req.doc ? " · then read and agree" : "")
                : req.note;

              return (
                <li key={req.id} className="req">
                  <div className="spine" aria-hidden="true">
                    <span className="rail" style={{
                      background: prevDone && s.s === "done" ? C.gold : C.line,
                      top: idx === 0 ? 30 : 0,
                      bottom: idx === reqs.length - 1 ? "calc(100% - 30px)" : -10,
                    }} />
                    <span className={"node " + s.s}>{s.s === "done" ? "✓" : s.s === "missed" ? "!" : ""}</span>
                  </div>

                  <article ref={el => (refs.current[req.id] = el)}
                    className={"req-card" + (s.s === "missed" ? " missed" : isOpen || isNext ? " active" : "")}>
                    <div className="req-head">
                      <div className="req-type" style={{ color: isNext ? C.blue : C.mute }}>
                        {isNext ? "Do this next · " + TYPE_LABEL[req.type] : TYPE_LABEL[req.type]}
                      </div>
                      <h3>{req.title}<span className="sr-only">. Requirement {idx + 1} of {total}. {status}</span></h3>
                      <p style={{ color: tone, fontWeight: s.s === "open" ? 400 : 600 }}>{status}</p>
                    </div>

                    {req.type === "document" && s.s !== "done" && (
                      <div className="req-act">
                        <button className="tap btn primary wide flat" onClick={() => setSheet(req.id)}>Watch the video</button>
                      </div>
                    )}

                    {req.type === "attendance" && s.s !== "done" && (
                      <div className="req-act">
                        <button className="tap btn primary wide flat" aria-expanded={isOpen} aria-controls={"d-" + req.id}
                          onClick={() => setExpanded(isOpen ? null : req.id)}
                          style={s.s === "booked" ? { background: "#fff", border: `1.5px solid ${C.line}`, color: C.navy } : undefined}>
                          {isOpen ? "Hide dates" : s.s === "booked" ? "Change date" : s.s === "missed" ? "Pick another date" : "See " + dates.length + " dates"}
                        </button>
                      </div>
                    )}

                    {isOpen && (
                      <div className="dates fade" id={"d-" + req.id} role="group" aria-label={"Dates for " + req.title}>
                        {dates.length === 0 && <p className="fine pad">GEMA hasn't posted a date for this yet. You'll be told when one appears.</p>}
                        {dates.map(e => {
                          const mine = s.ev === e.id, full = e.seats === 0;
                          const [dw, dd, dm] = e.date.split(" ");
                          return (
                            <div key={e.id} className={"ev" + (mine ? " mine" : "")}>
                              <div className="datebox"><em>{dw}</em><b>{dd}</b><em>{dm}</em></div>
                              <div className="grow">
                                <div className="ev-place">{e.place}</div>
                                <div className="ev-meta">
                                  {e.time} · <Insignia {...DEVICE[e.rank]} size={e.rank === "CC" ? 12 : 8} mark={false} /> {e.host}
                                </div>
                                <div className="ev-seats" style={{ color: full ? C.clay : e.seats <= 5 ? C.warn : C.mute }}>
                                  {full ? "Full — join the waitlist" : e.seats + " seats left"}
                                </div>
                              </div>
                              {mine ? (
                                confirm === e.id ? (
                                  <div className="confirm">
                                    <button className="tap btn danger sm" onClick={() => cancel(req)}>Give it up</button>
                                    <button className="tap btn navy sm" onClick={() => setConfirm(null)}>Keep</button>
                                  </div>
                                ) : (
                                  <button className="tap btn booked sm" onClick={() => setConfirm(e.id)}>Booked · cancel</button>
                                )
                              ) : (
                                <button className="tap btn sm ev-act"
                                  aria-label={(full ? "Join waitlist for " : "Reserve seat for ") + req.title + ", " + e.date + ", " + e.place}
                                  onClick={() => full ? flash("Added to the waitlist") : reserve(req, e)}
                                  style={full ? { background: "#fff", border: `1.5px solid ${C.line}`, color: C.navy } : { background: C.blue, color: "#fff" }}>
                                  {full ? "Waitlist" : s.s === "booked" ? "Switch" : "Reserve"}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {req.type === "demonstration" && s.s !== "done" && (
                      <div className="req-act"><p className="fine">Your upline records this on the day. Nothing to do here.</p></div>
                    )}
                    {req.type === "derived" && s.s !== "done" && (
                      <div className="req-act"><p className="fine">This completes when they certify. Their certificate, not your word.</p></div>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>

          {/* ---------- outcome ---------- */}
          <div className="bar-title"><span className="sec">Then</span></div>
          <div className={"outcome" + (isComplete ? " done" : "")}>
            <Insignia {...DEVICE[rank.k]} size={rank.k === "CC" ? 26 : rank.k === "BASE" ? 28 : 17} />
            <p>{isComplete ? "Done — " + rank.opens : "Finish all " + total + " and you're " + rank.pin + ". " + rank.opens}</p>
          </div>
          {isComplete && (
            <button className="tap btn navy wide" onClick={() => setCert(true)}>See my certificate</button>
          )}

          {/* ---------- demo only ---------- */}
          <div className="demo no-print">
            <div className="demo-label">Demo · walk the ladder</div>
            <p className="demo-note">
              Completes a rank the way it would really be earned — documents agreed, events scanned,
              demonstrations signed off, derived ones by a trainee's certificate — then issues the certificate.
            </p>
            <div className="demo-row">
              {RANKS.map(r => (
                <button key={r.k} className="tap demo-btn" onClick={() => completeRank(r.k)}>
                  Complete {r.n}
                </button>
              ))}
            </div>
            <div className="demo-row">
              <button className="tap demo-btn" onClick={() => setCert(true)}>Certificate for {rank.n}</button>
              <button className="tap demo-btn" onClick={() => { setSt({}); setRankKey("BASE"); setLive("Reset"); }}>
                Reset all
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* ---------- sticky next (mobile) ---------- */}
      {!isComplete && nextReq && (
        <div className="foot only-mobile">
          <div className="foot-in">
            <div className="grow">
              <div className="eyebrow-dark">Next</div>
              <b className="foot-title">{nextReq.title}</b>
            </div>
            <button className="tap btn primary" onClick={goNext}>
              {nextReq.type === "document" ? "Watch" : "Pick a date"}
            </button>
          </div>
        </div>
      )}

      {/* ---------- document sheet ---------- */}
      {sheetReq && (
        <Sheet label={sheetReq.title} onClose={() => setSheet(null)}>
          <div className="sheet-head">
            <div>
              <h2 className="h2">{sheetReq.title}</h2>
              <p className="fine">{lang === "tl" && sheetReq.blurbTl ? sheetReq.blurbTl : sheetReq.blurb}</p>
            </div>
            <button className="tap pill" onClick={() => setSheet(null)} aria-label="Close">Close</button>
          </div>

          <div className="langs" role="group" aria-label="Language">
            {[["en", "English"], ["tl", "Tagalog"]].map(([k, l]) => (
              <button key={k} className={"tap lang" + (lang === k ? " on" : "")} onClick={() => setLang(k)} aria-pressed={lang === k}>{l}</button>
            ))}
          </div>

          <div className="video tap" role="button" tabIndex={0} aria-pressed={!!watched[sheetReq.id]}
            onClick={() => setWatched({ ...watched, [sheetReq.id]: true })}
            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setWatched({ ...watched, [sheetReq.id]: true }); } }}
            style={{ background: watched[sheetReq.id] ? C.goodBg : HERO }}>
            <div>
              <span className="play" style={{ background: watched[sheetReq.id] ? C.good : "rgba(255,255,255,.25)" }}>
                {watched[sheetReq.id] ? "✓" : "▶"}
              </span>
              <em style={{ color: watched[sheetReq.id] ? C.good : "#fff" }}>
                {watched[sheetReq.id] ? (lang === "tl" ? "Napanood na" : "Watched") : (lang === "tl" ? "I-play · " : "Play · ") + sheetReq.mins}
              </em>
            </div>
          </div>

          {sheetReq.doc && (
            <>
              <div className="eyebrow-dark mt">{lang === "tl" && sheetReq.docTl ? sheetReq.docTl : sheetReq.doc}</div>
              <div className="doc" lang={lang} style={{ opacity: watched[sheetReq.id] ? 1 : .5 }}>
                {lang === "tl" && sheetReq.bodyTl ? sheetReq.bodyTl : sheetReq.body}
              </div>
              {!watched[sheetReq.id] && <p className="fine">{lang === "tl" ? "Panoorin muna ang video." : "Watch the video first."}</p>}
            </>
          )}

          <button className="tap btn primary wide" disabled={!watched[sheetReq.id]}
            onClick={() => { setSheet(null); set(sheetReq.id, { s: "done", when: "28 Jul", lang }); }}>
            {sheetReq.doc
              ? (lang === "tl" ? "Nabasa ko ito at sumasang-ayon ako" : "I have read this and I agree")
              : (lang === "tl" ? "Tapos — napanood ko na" : "Done — I've watched it")}
          </button>
          {sheetReq.doc && (
            <p className="fine center">
              {lang === "tl"
                ? "Ang pangalan mo, ang petsa, ang bersyon, at kung anong wika mo ito binasa ay nakatala."
                : "Your name, the date, the version, and the language you read it in are kept on file."}
            </p>
          )}
        </Sheet>
      )}

      {/* ---------- certificate ---------- */}
      {cert && (
        <Sheet label="Certificate" onClose={() => setCert(false)}>
          <div className="printroot">
            <div className="cert">
              <GentrepLogo markOnly height={260} aria-hidden="true" className="cert-mark"
                style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                         opacity: .05, zIndex: -1, pointerEvents: "none", maxWidth: "none" }} />
              <div className="cert-brand">
                <GentrepLogo height={20} color={C.navy} />
                <span className="serif">Academy</span>
              </div>
              <div className="cert-eyebrow">Certification</div>
              <div className="cert-ins"><Insignia {...DEVICE[rank.k]} size={rank.k === "CC" ? 50 : rank.k === "BASE" ? 52 : 42} /></div>
              <div className="cert-name">{rank.abbr ? rank.abbr + " " : ""}{ME.name}</div>
              <div className="cert-rank">{rank.officer ? rank.officer + " · " + rank.full : "Activated Member"}</div>
              <div className="cert-hr" />
              <p className="cert-cite">{rank.cite}</p>
              <div className="cert-evidence">
                {(() => {
                  const byType = {};
                  rank.reqs.forEach(r => { byType[r.type] = (byType[r.type] || 0) + 1; });
                  const parts = [];
                  if (byType.document) parts.push(byType.document + " agreed");
                  if (byType.attendance) parts.push(byType.attendance + " attended");
                  if (byType.demonstration) parts.push("1 demonstration witnessed");
                  if (byType.derived) parts.push("1 trainee certified");
                  return parts.join(" · ");
                })()}
              </div>

              <div className="cert-sigs">
                {["Academy Commandant", "Chief Operating Officer"].map(t => (
                  <div key={t}><span /><em>{t}</em></div>
                ))}
              </div>
              <div className="cert-qr"><VerifyQR seed={rank.ref} /><em>Scan to verify</em></div>
              <div className="cert-record">
                <div><em>Dated</em><b>28 July 2026</b></div>
                <div><em>Card</em><b>{ME.card.slice(-9)}</b></div>
                <div><em>Reference</em><b>{rank.ref}</b></div>
              </div>
              <p className="cert-fine">An internal distinction of the Gentrep Academy.</p>
            </div>
          </div>
          <div className="no-print">
            <button className="tap btn navy wide" onClick={() => { setLive("Opening the print dialog. Choose Save as PDF."); window.print(); }}>
              Download as PDF
            </button>
            <p className="fine center">In the print window choose <b>Save as PDF</b> as the destination.</p>
            <button className="tap btn tg wide" onClick={async () => {
              const line = (rank.abbr ? rank.abbr + " " : "") + ME.name + " — " + (rank.officer || "Activated Member") + ", Gentrep Academy.";
              const url = "https://ggverse.ph/v/" + rank.ref;
              try { if (navigator.share) { await navigator.share({ title: "Gentrep Academy", text: line, url }); return; } } catch (e) { if (e?.name === "AbortError") return; }
              try { await navigator.clipboard.writeText(line + " " + url); flash("Copied — paste it anywhere"); } catch { flash(url); }
            }}>Share</button>
            <button className="tap btn outline wide" onClick={() => setCert(false)}>Close</button>
          </div>
        </Sheet>
      )}

      {/* ---------- about ---------- */}
      {about && (
        <Sheet label="About Gentrep Academy" onClose={() => setAbout(false)}>
          <div className="sheet-head">
            <div><h2 className="ant h1">About Gentrep Academy</h2><p className="fine">Read this once. About five minutes.</p></div>
            <button className="tap pill" onClick={() => setAbout(false)} aria-label="Close">Close</button>
          </div>
          <p className="lead">
            The Academy is where you learn this business, one level at a time. Every level is a short course:
            sessions you attend in person, and a scan at the door that records you were there. You never tick
            your own boxes — that is what makes them worth something.
          </p>

          <h3 className="sec mt">The five levels</h3>
          {RANKS.map(r => (
            <div key={r.k} className="about-lvl">
              <Insignia {...DEVICE[r.k]} size={r.k === "CC" ? 22 : r.k === "BASE" ? 24 : 14} mark={false} />
              <div><b>{r.full}</b><em>{r.phase}</em></div>
            </div>
          ))}

          <h3 className="sec mt">How a course is proven</h3>
          <div className="about-table">
            {[["Watch and agree", "You agree in the app; the record is kept"],
              ["Attend", "The scan at the door"],
              ["Show it", "An upline watches and signs it off"],
              ["Earned by your trainee", "Their certificate, not your word"]].map(([a, b]) => (
              <div key={a}><b>{a}</b><span>{b}</span></div>
            ))}
          </div>

          <h3 className="sec mt">If something changes</h3>
          <div className="about-table">
            {[["Cannot make it?", "Open the date and cancel. The seat goes back to someone else."],
              ["Want a different date?", "Tap Switch. No need to cancel first."],
              ["Session full?", "Join the waitlist and you'll be told when a seat opens."],
              ["Missed one?", "Pick another date. Nothing else you've done is lost."],
              ["No dates posted?", "That one is waiting on us, not on you."],
              ["Is there a deadline?", "No. Most finish a level in about three weeks."]].map(([a, b]) => (
              <div key={a}><b>{a}</b><span>{b}</span></div>
            ))}
          </div>

          <div className="closing">
            The app only keeps the record. What you actually learn happens in the room — from the people,
            the stories and the questions you ask there. <b>See you Saturday.</b>
          </div>
          <button className="tap btn navy wide" onClick={() => setAbout(false)}>Got it</button>
        </Sheet>
      )}

      {toast && <div className="fade toast">{toast}</div>}
    </div>
  );
}

/* ================= insignia ================= */

const NodeMark = ({ cx, cy, s }) => (
  <g fill={GENTREP_BLUE} stroke={GENTREP_BLUE} strokeWidth={s * 0.15} strokeLinecap="round" strokeLinejoin="round">
    <line x1={cx - s * 0.42} y1={cy + s * 0.30} x2={cx + s * 0.12} y2={cy - s * 0.46} />
    <line x1={cx - s * 0.42} y1={cy + s * 0.30} x2={cx + s * 0.44} y2={cy + s * 0.28} />
    <circle cx={cx + s * 0.12} cy={cy - s * 0.46} r={s * 0.19} />
    <circle cx={cx - s * 0.42} cy={cy + s * 0.30} r={s * 0.25} />
    <circle cx={cx + s * 0.44} cy={cy + s * 0.28} r={s * 0.33} />
  </g>
);

const useMetal = (metal) => {
  const m = METAL[metal] || METAL.silver, id = "m-" + metal;
  return { m, id, defs: (
    <defs><linearGradient id={id} x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stopColor={m.hi} /><stop offset="42%" stopColor={m.mid} />
      <stop offset="72%" stopColor={m.lo} /><stop offset="100%" stopColor={m.mid} />
    </linearGradient></defs>
  ) };
};

const Bars = ({ n = 1, size = 40, metal = "silver", mark = true }) => {
  const { m, id, defs } = useMetal(metal);
  const bh = 21, gap = 9, W = 100, H = n * bh + (n - 1) * gap;
  return (
    <svg width={size * 1.7} height={size * 1.7 * (H / W)} viewBox={`0 0 ${W} ${H}`} aria-hidden="true" style={{ flexShrink: 0 }}>
      {defs}
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <rect x="1.5" y={i * (bh + gap) + 1.2} width={W - 3} height={bh - 2.4} rx={4} fill={`url(#${id})`} stroke={m.lo} strokeWidth="2.2" />
          <line x1="7" y1={i * (bh + gap) + bh * .34} x2={W - 7} y2={i * (bh + gap) + bh * .34} stroke={m.hi} strokeWidth="1.2" opacity=".55" />
        </g>
      ))}
      {mark && <NodeMark cx={W / 2} cy={H / 2} s={H * .42} />}
    </svg>
  );
};

const Lozenge = ({ size = 46, metal = "gold", mark = true }) => {
  const { m, id, defs } = useMetal(metal);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" style={{ flexShrink: 0 }}>
      {defs}
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill={`url(#${id})`} stroke={m.lo} strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M50 15 L85 50 L50 85 L15 50 Z" fill="none" stroke={m.ink} strokeWidth="1.4" opacity=".3" />
      <path d="M50 4 L96 50 L50 50 Z" fill={m.hi} opacity=".28" />
      {mark && <NodeMark cx={50} cy={50} s={26} />}
    </svg>
  );
};

const Seal = ({ size = 46, metal = "bronze" }) => {
  const { m, id, defs } = useMetal(metal);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" style={{ flexShrink: 0 }}>
      {defs}
      <circle cx="50" cy="50" r="46" fill={`url(#${id})`} stroke={m.lo} strokeWidth="2.4" />
      <circle cx="50" cy="50" r="38" fill="none" stroke={m.ink} strokeWidth="1.5" opacity=".32" />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15 * Math.PI) / 180;
        return <line key={i} x1={50 + Math.cos(a) * 39} y1={50 + Math.sin(a) * 39}
          x2={50 + Math.cos(a) * 45} y2={50 + Math.sin(a) * 45} stroke={m.ink} strokeWidth="1.3" opacity=".42" />;
      })}
      <NodeMark cx={50} cy={50} s={26} />
    </svg>
  );
};

const Insignia = ({ kind, n = 1, size = 40, metal, mark = true }) => {
  if (kind === "seal") return <Seal size={size} metal={metal} />;
  if (kind === "field") return <Lozenge size={size} metal={metal} mark={mark} />;
  return <Bars n={n} size={size} metal={metal} mark={mark} />;
};

const VerifyQR = ({ seed = "GA", size = 72 }) => {
  let s = 7; for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) & 0x7fffffff;
  const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
  const N = 21, cell = 100 / N, r = [];
  const finder = (x, y) => {
    r.push(<rect key={"f" + x + y} x={x * cell} y={y * cell} width={cell * 7} height={cell * 7} fill={C.navy} />);
    r.push(<rect key={"g" + x + y} x={(x + 1) * cell} y={(y + 1) * cell} width={cell * 5} height={cell * 5} fill="#fff" />);
    r.push(<rect key={"h" + x + y} x={(x + 2) * cell} y={(y + 2) * cell} width={cell * 3} height={cell * 3} fill={C.navy} />);
  };
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const f = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    if (!f && rnd() > .52) r.push(<rect key={x + "_" + y} x={x * cell} y={y * cell} width={cell + .35} height={cell + .35} fill={C.navy} />);
  }
  finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
  return <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">{r}</svg>;
};

const TgIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
    <path d="M21.9 4.3 18.9 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.3-.1-.5-.6-.2L7.2 12.6 2.7 11.2c-1-.3-1-1 .2-1.4l18-6.9c.8-.3 1.5.2 1 1.4z" />
  </svg>
);

function Sheet({ children, onClose, label }) {
  const box = useRef(null), opener = useRef(null), closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    opener.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => box.current?.focus({ preventScroll: true }), 40);
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); closeRef.current(); return; }
      if (e.key !== "Tab" || !box.current) return;
      const f = [...box.current.querySelectorAll("button:not([disabled]),input,[tabindex]:not([tabindex='-1'])")].filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === box.current)) { e.preventDefault(); last.focus({ preventScroll: true }); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus({ preventScroll: true }); }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; opener.current?.focus?.({ preventScroll: true }); };
  }, []);
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="sheet up" ref={box} tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="grab only-mobile" />
        {children}
      </div>
    </div>
  );
}

function Confetti({ fire }) {
  const [bits, setBits] = useState([]);
  useEffect(() => {
    if (!fire) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const cols = [C.gold, C.blue, C.navy, GENTREP_BLUE, C.good, "#fff"];
    setBits(Array.from({ length: 80 }, (_, i) => ({
      id: fire + "-" + i, left: 50 + (Math.random() - .5) * 70,
      tx: (Math.random() - .5) * 600, ty: 120 + Math.random() * 260,
      rot: (Math.random() - .5) * 900, c: cols[(Math.random() * cols.length) | 0],
      w: 6 + Math.random() * 7, h: 9 + Math.random() * 12,
      d: 1.5 + Math.random() * .8, delay: Math.random() * .2,
    })));
    const t = setTimeout(() => setBits([]), 2800);
    return () => clearTimeout(t);
  }, [fire]);
  if (!bits.length) return null;
  return (
    <div className="cf-wrap" aria-hidden="true">
      {bits.map(b => (
        <span key={b.id} className="cf" style={{
          left: b.left + "%", width: b.w, height: b.h, background: b.c,
          "--tx": b.tx + "px", "--ty": b.ty + "px", "--rot": b.rot + "deg",
          animationDuration: b.d + "s", animationDelay: b.delay + "s",
        }} />
      ))}
    </div>
  );
}

const Style = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Anton&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap');
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{margin:0;overflow-x:hidden;}
.ga{min-height:100vh;min-height:100dvh;background:${C.paper};color:${C.ink};font-family:'Inter',system-ui,sans-serif;font-size:15px;}
.ga *{max-width:100%;}
.plate-mark,.cert-mark{max-width:none !important;}
button{font-family:'Sora',system-ui,sans-serif;border:none;cursor:pointer;min-height:44px;}
button:focus-visible,[tabindex]:focus-visible{outline:3px solid ${C.blue};outline-offset:2px;}
.tap{transition:transform .08s ease;} .tap:active{transform:scale(.98);}
h1,h2,h3,p{margin:0;overflow-wrap:anywhere;}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}
.skip{position:absolute;left:-9999px;top:8px;z-index:100;background:${C.navy};color:#fff;padding:12px 18px;border-radius:10px;font-weight:700;text-decoration:none;}
.skip:focus{left:16px;}
.grow{flex:1;min-width:0;} .mt{margin-top:18px;} .center{text-align:center;}
.noscroll::-webkit-scrollbar{display:none;} .noscroll{scrollbar-width:none;}

.shell{display:block;}
.side{display:none;}
.col{max-width:440px;margin:0 auto;padding:0 max(16px,env(safe-area-inset-left)) 120px;}
.brand{display:flex;align-items:flex-end;gap:8px;}
.serif{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:19px;line-height:.95;color:${C.navy};}
.serif.big{font-size:23px;}
.mast{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding:22px 2px 4px;}
.sub{font-size:13.5px;color:${C.mute};padding:0 2px 8px;}
.pill{background:${C.card};border:1.5px solid ${C.line};border-radius:999px;padding:0 16px;min-height:44px;font-size:13.5px;font-weight:700;color:${C.navy};}
.pill.sm{font-size:13px;padding:0 14px;}

/* ladder */
.ladder{display:flex;gap:8px;overflow-x:auto;padding:8px 0 2px;}
.rung{flex-shrink:0;display:flex;align-items:center;gap:8px;padding:10px 15px;border-radius:12px;
      background:${C.card};border:1.5px solid ${C.line};color:${C.ink};}
.rung.on{background:${C.navy};border-color:${C.navy};color:#fff;}
.rung .ant{font-family:'Anton',sans-serif;font-size:15px;letter-spacing:.06em;}
.lock{font-family:'Inter',sans-serif;font-size:12px;font-weight:600;color:${C.mute};}
.rung.on .lock{color:rgba(255,255,255,.7);}

/* plate */
.plate{background:${HERO};background-color:${C.brandD};border-radius:18px;padding:20px 18px;color:#fff;margin-top:14px;
       position:relative;overflow:hidden;isolation:isolate;box-shadow:0 18px 40px -22px rgba(14,34,73,.7);}
.plate.done{background:linear-gradient(160deg,#1a7a49,#0f5a35);}
.hatch{background-image:repeating-linear-gradient(115deg,rgba(255,255,255,.075) 0 2px,transparent 2px 13px);}
.plate-mark{position:absolute;top:50%;left:76%;transform:translateY(-50%);opacity:.16;z-index:-1;}
.rule-row{display:flex;align-items:center;gap:9px;}
.rule-row i{height:2px;width:22px;background:${C.gold};display:block;}
.rule-row span{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.92;}
.plate-title{font-family:'Anton',sans-serif;font-size:30px;letter-spacing:.03em;margin-top:7px;line-height:1.02;text-transform:uppercase;}
.plate-sub{font-size:14px;color:rgba(255,255,255,.8);margin-top:5px;}
.plate-foot{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-top:12px;}
.plate-foot b{font-size:15px;}
.pips{display:flex;gap:4px;}
.pip{width:9px;height:9px;border-radius:2px;transform:rotate(45deg);background:rgba(255,255,255,.28);}
.pip.done{background:${C.gold};} .pip.booked{background:rgba(245,183,22,.5);} .pip.missed{background:${C.clay};}
.bar{height:8px;background:rgba(255,255,255,.25);border-radius:99px;margin-top:10px;overflow:hidden;}
.bar i{display:block;height:100%;background:${C.gold};transition:width .45s cubic-bezier(.4,0,.2,1);}
.plate-note{font-size:13px;opacity:.92;margin-top:9px;}

/* chat */
.chat{width:100%;margin-top:12px;background:${C.card};border:1.5px solid ${C.line};border-radius:14px;
      padding:13px 14px;display:flex;align-items:center;gap:12px;text-align:left;}
.tg{width:42px;height:42px;border-radius:12px;background:${C.tg};display:grid;place-items:center;flex-shrink:0;}
.chat .left b{display:block;font-family:'Sora',sans-serif;font-size:15.5px;font-weight:600;color:${C.navy};}
.chat .left em{display:block;font-size:13.5px;color:${C.mute};font-style:normal;margin-top:2px;}

/* section titles */
.bar-title{display:flex;align-items:center;gap:10px;margin:24px 0 14px;}
.bar-title:after{content:"";flex:1;height:1px;background:${C.line};}
.sec{font-family:'Anton',sans-serif;font-size:15px;letter-spacing:.11em;text-transform:uppercase;color:${C.navy};}
.sec:focus{outline:none;}

/* requirements */
.reqs{list-style:none;margin:0;padding:0;}
.req{display:flex;gap:12px;align-items:stretch;}
.spine{width:30px;position:relative;flex-shrink:0;}
.rail{position:absolute;left:14px;width:2px;}
.node{position:absolute;left:3px;top:18px;width:24px;height:24px;border-radius:50%;background:#fff;
      border:2.5px solid #c3cedd;display:grid;place-items:center;color:${C.navy};font-size:13px;font-weight:800;
      font-family:'Sora',sans-serif;z-index:1;}
.node.done{background:${C.gold};border-color:${C.gold};}
.node.booked{border-color:${C.gold};}
.node.missed{border-color:${C.clay};color:${C.clay};}
.req-card{flex:1;min-width:0;background:${C.card};border:1.5px solid ${C.line};border-radius:14px;margin-bottom:10px;overflow:hidden;}
.req-card.active{border-color:${C.blue};box-shadow:0 10px 26px -18px rgba(37,105,184,.9);}
.req-card.missed{border-color:${C.clay};}
.req-head{padding:14px 15px 13px;}
.req-type{font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;}
.req-head h3{font-family:'Sora',sans-serif;font-size:16.5px;font-weight:600;color:${C.navy};margin-top:4px;line-height:1.3;}
.req-head p{font-size:14px;margin-top:5px;line-height:1.5;}
.req-act{padding:0 15px 15px;}
.btn.flat{margin-top:0;}

/* dates */
.dates{border-top:1px solid ${C.line};background:${C.paper};padding:6px 12px 12px;}
.fine.pad{padding:14px 4px;}
.ev{background:${C.card};border:1.5px solid ${C.line};border-radius:12px;padding:12px;margin-top:8px;
    display:flex;gap:12px;align-items:center;}
.ev.mine{border-color:${C.gold};}
.datebox{width:54px;flex-shrink:0;text-align:center;padding:6px 0;border-radius:10px;background:${C.paper};border:1px solid ${C.line};}
.datebox em{display:block;font-size:11.5px;color:${C.mute};text-transform:uppercase;font-style:normal;}
.datebox b{display:block;font-family:'Anton',sans-serif;font-size:20px;font-weight:400;color:${C.navy};line-height:1.05;}
.ev-place{font-family:'Sora',sans-serif;font-size:15px;font-weight:600;color:${C.navy};}
.ev-meta{font-size:13.5px;color:${C.mute};margin-top:3px;display:flex;align-items:center;gap:5px;flex-wrap:wrap;}
.ev-seats{font-size:13.5px;margin-top:3px;}
.confirm{display:flex;flex-direction:column;gap:6px;flex-shrink:0;}

/* buttons */
.btn{border-radius:12px;font-size:15px;font-weight:700;padding:0 18px;min-height:48px;}
.btn.wide{width:100%;margin-top:12px;}
.btn.sm{min-height:44px;font-size:13.5px;padding:0 14px;flex-shrink:0;}
.btn.primary{background:${C.blue};color:#fff;}
.btn.navy{background:${C.navy};color:#fff;}
.btn.tg{background:${C.tg};color:#fff;}
.btn.outline{background:#fff;border:1.5px solid ${C.line};color:${C.navy};}
.btn.danger{background:#fff;border:1.5px solid ${C.clay};color:${C.clay};}
.btn.booked{background:${C.warnBg};border:1.5px solid ${C.gold};color:${C.warn};}
.btn:disabled{background:${C.line};color:${C.mute};cursor:not-allowed;}

/* outcome */
.outcome{display:flex;gap:12px;align-items:center;background:${C.oliveLt};border:1.5px solid #d7dccf;
         border-radius:14px;padding:16px 15px;}
.outcome.done{background:${C.goodBg};border-color:${C.good};}
.outcome p{font-size:14.5px;color:${C.olive};line-height:1.55;font-weight:500;}
.outcome.done p{color:${C.good};}

/* sticky next */
.foot{position:fixed;left:0;right:0;bottom:0;z-index:40;background:${C.card};border-top:1px solid ${C.line};
      box-shadow:0 -8px 26px rgba(15,36,68,.12);padding:12px 16px calc(12px + env(safe-area-inset-bottom));}
.foot-in{max-width:440px;margin:0 auto;display:flex;gap:12px;align-items:center;}
.foot-title{font-family:'Sora',sans-serif;font-size:15px;font-weight:600;color:${C.navy};
            white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;}
.eyebrow-dark{font-family:'Inter',sans-serif;font-size:12px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:${C.mute};}

/* sheets */
.modal{position:fixed;inset:0;z-index:60;background:rgba(14,34,73,.55);display:flex;align-items:flex-end;justify-content:center;}
.sheet{width:100%;max-width:440px;max-height:90vh;max-height:90dvh;overflow-y:auto;background:${C.card};
       border-radius:20px 20px 0 0;padding:14px 16px calc(26px + env(safe-area-inset-bottom));outline:none;}
.grab{width:40px;height:4px;border-radius:2px;background:${C.line};margin:0 auto 14px;}
.sheet-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:12px;}
.h1{font-family:'Anton',sans-serif;font-size:24px;color:${C.navy};text-transform:uppercase;letter-spacing:.03em;line-height:1.1;}
.h2{font-family:'Sora',sans-serif;font-size:19px;font-weight:700;color:${C.navy};}
.fine{font-size:13px;color:${C.mute};line-height:1.55;margin-top:6px;}
.lead{font-size:15px;color:${C.ink};line-height:1.7;margin-top:12px;}
.langs{display:flex;gap:6px;margin-top:14px;padding:4px;background:${C.paper};border:1px solid ${C.line};border-radius:12px;}
.lang{flex:1;min-height:44px;border-radius:9px;background:transparent;color:${C.mute};font-size:14px;font-weight:700;}
.lang.on{background:${C.navy};color:#fff;}
.video{aspect-ratio:16/9;border-radius:14px;margin-top:12px;display:grid;place-items:center;cursor:pointer;text-align:center;}
.play{width:52px;height:52px;border-radius:50%;margin:0 auto;display:grid;place-items:center;color:#fff;font-size:18px;}
.video em{display:block;font-size:14px;margin-top:10px;font-weight:600;font-style:normal;}
.doc{max-height:200px;overflow-y:auto;padding:15px;border-radius:12px;background:${C.paper};border:1px solid ${C.line};
     font-size:14px;color:${C.ink};line-height:1.75;}

/* certificate */
.cert{background:linear-gradient(160deg,#FCFAF4,#F3EFE4);border-radius:18px;padding:26px 20px 22px;
      position:relative;overflow:hidden;isolation:isolate;border:1px solid #E3DCC9;outline:6px solid ${C.navy};outline-offset:-13px;text-align:center;color:${C.navy};}
.cert-mark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);opacity:.05;z-index:-1;}
.cert-brand{display:flex;align-items:flex-end;justify-content:center;gap:7px;}
.cert-eyebrow{font-size:11px;letter-spacing:.34em;text-transform:uppercase;color:${C.goldD};margin-top:15px;font-weight:700;padding-left:.34em;}
.cert-ins{display:flex;justify-content:center;align-items:center;min-height:60px;margin:16px 0 2px;}
.cert-name{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:28px;margin-top:16px;line-height:1.2;}
.cert-rank{font-size:13px;color:${C.mute};margin-top:7px;}
.cert-hr{height:1px;background:rgba(14,34,73,.2);margin:18px 22px;}
.cert-cite{font-size:13.5px;color:${C.ink};line-height:1.72;margin:0 10px;}
.cert-evidence{font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:${C.mute};margin-top:16px;}
.cert-sigs{display:flex;gap:18px;justify-content:center;margin-top:24px;}
.cert-sigs div{flex:1;max-width:150px;}
.cert-sigs span{display:block;height:1px;background:rgba(14,34,73,.2);}
.cert-sigs em{display:block;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:${C.mute};margin-top:6px;font-style:normal;}
.cert-qr{display:flex;flex-direction:column;align-items:center;margin-top:22px;}
.cert-qr svg{background:#fff;padding:6px;border-radius:8px;border:1px solid rgba(14,34,73,.2);}
.cert-qr em{font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:${C.mute};margin-top:7px;font-style:normal;}
.cert-record{display:flex;justify-content:space-between;gap:12px;margin-top:16px;padding-top:13px;border-top:1px solid rgba(14,34,73,.2);}
.cert-record em{display:block;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:${C.mute};font-style:normal;}
.cert-record b{display:block;font-family:'Sora',sans-serif;font-size:12.5px;font-weight:600;margin-top:2px;}
.cert-fine{font-size:10px;color:${C.mute};line-height:1.5;margin:13px 8px 0;opacity:.85;}

/* about */
.about-lvl{display:flex;gap:13px;align-items:flex-start;padding-bottom:14px;}
.about-lvl b{display:block;font-family:'Sora',sans-serif;font-size:15.5px;font-weight:700;color:${C.navy};}
.about-lvl em{display:block;font-size:13.5px;color:${C.mute};font-style:normal;margin-top:2px;}
.about-table{border:1px solid ${C.line};border-radius:14px;overflow:hidden;}
.about-table div{padding:13px 14px;border-top:1px solid ${C.line};}
.about-table div:first-child{border-top:none;}
.about-table div:nth-child(even){background:${C.paper};}
.about-table b{display:block;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:600;color:${C.navy};}
.about-table span{display:block;font-size:14px;color:${C.ink};margin-top:3px;line-height:1.6;}
.closing{background:${C.oliveLt};border:1.5px solid #d7dccf;border-radius:14px;padding:15px;
         font-size:14.5px;color:${C.olive};line-height:1.7;margin-top:20px;}

/* demo */
.demo{margin-top:26px;padding:14px;background:${C.card};border:1.5px dashed ${C.sky};border-radius:14px;}
.demo-label{font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.mute};}
.demo-note{font-size:13px;color:${C.mute};line-height:1.55;margin-top:7px;}
.demo-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:10px;}
.demo-btn{flex:1 1 30%;min-height:44px;border-radius:10px;font-size:12.5px;font-weight:700;
          background:#fff;border:1.5px solid ${C.line};color:${C.navy};padding:0 10px;}

/* toast + confetti */
.toast{position:fixed;left:16px;right:16px;bottom:96px;z-index:70;margin:0 auto;max-width:400px;text-align:center;
       background:${C.navy};color:#fff;padding:12px 18px;border-radius:12px;font-size:14px;
       box-shadow:0 12px 30px -10px rgba(14,34,73,.6);}
.cf-wrap{position:fixed;inset:0;z-index:90;pointer-events:none;overflow:hidden;}
.cf{position:absolute;top:26%;border-radius:2px;animation-name:cf;animation-timing-function:cubic-bezier(.15,.6,.4,1);animation-fill-mode:forwards;}
@keyframes cf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--tx),var(--ty)) rotate(var(--rot));opacity:0}}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}} .fade{animation:fade .2s ease;}
@keyframes up{from{transform:translateY(20px);opacity:0}to{transform:none;opacity:1}} .up{animation:up .24s ease;}

/* desktop */
@media(min-width:900px){
  .shell{display:flex;max-width:1240px;margin:0 auto;min-height:100vh;align-items:stretch;}
  .side{display:flex;flex-direction:column;width:280px;flex-shrink:0;gap:10px;padding:28px 20px;
        background:${C.card};border-right:1px solid ${C.line};position:sticky;top:0;height:100vh;overflow-y:auto;}
  .col{flex:1;max-width:100%;margin:0;padding:30px 34px 60px;}
  .only-mobile{display:none !important;}
  .foot{display:none;}
  .modal{align-items:center;padding:24px;}
  .sheet{max-width:560px;border-radius:20px;max-height:88vh;}
  .who{display:flex;align-items:center;gap:11px;padding:12px 0 16px;border-bottom:1px solid ${C.line};}
  .avatar{width:40px;height:40px;border-radius:50%;background:${C.navy};color:#fff;display:grid;place-items:center;
          font-family:'Sora',sans-serif;font-weight:700;font-size:14px;flex-shrink:0;}
  .who b{display:block;font-family:'Sora',sans-serif;font-size:15px;color:${C.navy};}
  .who em{display:block;font-size:13px;color:${C.mute};font-style:normal;}
  .side-nav{display:flex;flex-direction:column;gap:6px;padding-top:4px;}
  .side-rank{display:flex;align-items:center;gap:11px;width:100%;text-align:left;padding:11px 13px;border-radius:12px;
             background:transparent;color:${C.ink};}
  .side-rank.on{background:${C.navy};color:#fff;}
  .side-rank b{display:block;font-family:'Sora',sans-serif;font-size:14.5px;font-weight:700;}
  .side-rank em{display:block;font-size:12.5px;font-style:normal;opacity:.75;}
  .tickmini{color:${C.good};font-weight:800;}
  .side-btn{margin-top:6px;width:100%;text-align:left;padding:11px 13px;border-radius:12px;background:${C.paper};
            border:1.5px solid ${C.line};color:${C.navy};font-size:14px;font-weight:700;}
  .side-next{margin-top:auto;padding-top:18px;border-top:1px solid ${C.line};}
  .side-next b{display:block;font-family:'Sora',sans-serif;font-size:15px;color:${C.navy};margin:5px 0 0;line-height:1.35;}
}
@media(min-width:1180px){ .col{padding:34px 48px 70px;} }

/* small */
@media(max-width:400px){.ga{font-size:14.5px;}.col{padding-left:13px;padding-right:13px;}}
@media(max-width:360px){.col{padding-left:11px;padding-right:11px;}.spine{width:24px;}
  .ev{flex-wrap:wrap;}.ev-act{width:100%;}.datebox{width:46px;}}
@media(max-width:320px){.col{padding-left:9px;padding-right:9px;}.ga{font-size:14px;}}
@media(prefers-reduced-motion:reduce){.fade,.up,.cf{animation:none;}}

/* print */
@media print{
  @page{size:A4 portrait;margin:14mm;}
  .shell,.foot,.no-print,.cf-wrap,.toast{display:none !important;}
  .modal{position:static !important;background:#fff !important;padding:0 !important;display:block !important;}
  .sheet{max-width:none !important;max-height:none !important;overflow:visible !important;border-radius:0 !important;box-shadow:none !important;padding:0 !important;}
  .cert{outline-offset:-10px !important;border-radius:0 !important;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
  body{background:#fff !important;}
}
  `}</style>
);
