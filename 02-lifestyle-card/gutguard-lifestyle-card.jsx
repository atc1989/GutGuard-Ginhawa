import React, { useState, useEffect, useRef } from "react";

/* ---- Gentrep logo, traced from the supplied artwork ----
   Wordmark inherits currentColor; the node mark keeps brand blue. */
const GENTREP_BLUE = "#0205C6";
const GentrepLogo = ({ height = 28, color = "currentColor", markOnly = false, style }) => (
  <svg viewBox={markOnly ? "8 1 289 356" : "0 0 1688 508"} height={height}
       style={{ display: "block", overflow: "visible", ...style }} role="img" aria-label="Gentrep">
    {!markOnly && <path d="M198.0 502.4C196.6 502.2 190.3 501.3 184.0 500.4C154.0 496.1 125.7 484.6 105.7 468.5C103.7 466.9 102.0 465.1 102.0 464.6C102.0 463.5 116.8 441.3 118.0 440.5C118.5 440.2 122.1 442.5 126.2 445.6C130.2 448.6 139.3 454.0 146.5 457.5C169.2 468.6 189.8 473.2 217.0 473.3C269.8 473.4 298.1 453.8 307.0 411.0C308.8 402.5 309.3 395.8 309.7 375.8C310.3 350.0 309.9 347.5 306.4 354.2C304.1 358.7 288.6 374.0 281.5 378.7C261.5 392.1 239.0 398.4 211.0 398.4C194.6 398.4 180.8 396.3 167.6 391.8C131.6 379.6 104.2 352.6 92.6 318.0C87.7 303.2 86.5 294.8 86.6 276.0C86.6 260.3 86.9 257.3 89.4 247.1C92.5 234.8 96.2 225.0 100.6 217.5L103.3 212.8L106.7 218.1C111.1 225.1 117.4 238.3 119.1 244.0C120.0 247.1 120.4 255.8 120.5 271.5C120.6 293.6 120.7 294.9 123.3 303.4C131.1 328.6 144.4 345.3 166.0 357.2C198.5 375.1 245.6 372.3 274.9 350.7C300.5 331.9 313.8 300.0 310.2 266.7C305.3 221.4 273.4 190.5 226.8 185.8C212.6 184.4 195.5 185.7 184.5 189.2C175.3 192.1 157.5 192.3 148.5 189.6C141.3 187.5 131.0 183.0 131.0 182.0C131.0 180.8 144.2 172.8 153.5 168.4C187.9 152.2 233.9 152.0 267.4 168.0C271.8 170.2 278.4 173.8 281.9 176.2C289.5 181.1 302.2 193.4 307.0 200.5L310.5 205.5L310.8 181.8L311.0 158.0L327.0 158.0L343.1 158.0L342.8 280.2L342.5 402.5L340.2 414.0C334.9 440.5 326.7 457.4 312.1 472.1C297.6 486.6 279.8 495.3 254.9 500.0C245.9 501.8 239.0 502.3 222.0 502.5C210.2 502.7 199.4 502.7 198.0 502.4ZM1448.7 468.4C1448.3 468.0 1448.0 398.2 1448.0 313.3L1448.0 159.0L1467.5 159.0L1487.0 159.0L1487.0 176.5C1487.0 186.1 1487.2 194.0 1487.4 194.0C1487.6 194.0 1490.9 190.8 1494.7 186.9C1502.6 178.6 1510.7 172.7 1520.6 167.7C1549.1 153.4 1591.9 153.9 1621.5 168.7C1651.6 183.8 1671.9 209.7 1679.8 243.4C1682.1 253.1 1682.4 256.7 1682.5 272.0C1682.5 286.8 1682.1 291.1 1680.2 300.0C1670.3 344.1 1641.0 374.5 1598.0 385.1C1589.7 387.2 1586.0 387.5 1569.5 387.5C1552.7 387.5 1549.4 387.2 1541.5 385.1C1524.0 380.6 1505.2 369.7 1494.8 358.1C1492.3 355.3 1489.9 353.0 1489.6 353.0C1489.3 353.0 1488.9 379.0 1488.8 410.8L1488.5 468.5L1468.9 468.8C1458.2 468.9 1449.1 468.7 1448.7 468.4ZM964.7 388.0C943.6 384.2 927.7 374.2 918.6 359.1C916.7 356.0 913.9 349.7 912.4 345.0L909.5 336.5L909.0 265.0L908.5 193.5L889.2 193.2L870.0 193.0L870.0 176.5L870.0 160.0L889.2 159.8L908.5 159.5L908.8 134.8L909.0 110.0L929.0 110.0L949.0 110.0L949.2 134.8L949.5 159.5L982.0 160.0L1014.5 160.5L1014.8 176.7L1015.0 193.0L982.3 193.2L949.5 193.5L949.5 259.5L949.5 325.5L951.9 332.5C955.0 341.4 960.7 347.7 969.3 351.6C974.9 354.2 976.5 354.4 986.0 354.3C997.4 354.2 1005.0 352.3 1012.2 347.5C1014.3 346.1 1016.3 345.0 1016.8 345.0C1017.2 345.0 1019.3 348.9 1021.4 353.8C1023.5 358.6 1026.3 364.9 1027.6 367.8L1030.0 373.2L1027.7 375.1C1023.7 378.6 1013.7 383.3 1005.0 385.7C995.6 388.4 973.7 389.7 964.7 388.0ZM474.0 387.4C445.4 382.3 430.4 376.0 412.0 361.4C393.5 346.7 381.3 326.8 374.9 301.0C372.9 292.8 372.6 289.0 372.5 273.0C372.5 257.2 372.8 253.0 374.8 244.0C383.9 203.7 411.7 173.7 450.9 162.1C472.8 155.6 499.5 155.6 521.5 162.2C557.3 173.0 583.1 200.7 593.5 239.5C595.8 248.1 596.3 252.1 596.7 267.8L597.2 286.0L505.1 286.0L413.0 286.0L413.0 288.3C413.0 289.5 413.9 293.8 415.0 297.8C426.3 338.5 469.7 360.5 518.0 350.0C532.2 346.9 544.4 340.5 554.8 330.7L560.2 325.5L564.2 330.0C573.9 340.8 582.0 350.8 582.0 352.0C582.0 353.8 573.3 362.0 565.7 367.3C554.1 375.6 540.5 381.5 524.5 385.2C517.3 386.9 511.6 387.3 496.0 387.6C485.3 387.7 475.4 387.6 474.0 387.4ZM1279.0 385.6C1255.2 380.7 1236.5 371.2 1220.6 355.9C1202.5 338.6 1191.8 318.1 1188.0 293.5C1185.1 275.2 1187.1 247.8 1192.4 232.2C1206.7 190.3 1242.6 162.2 1287.4 157.9C1349.2 151.9 1399.2 188.4 1409.5 247.0C1411.4 257.9 1412.5 275.3 1411.6 281.3L1410.9 286.0L1318.9 286.0L1227.0 286.0L1227.6 290.2C1227.9 292.6 1229.2 297.5 1230.5 301.2C1239.1 326.7 1260.8 345.1 1288.9 350.7C1299.7 352.9 1319.5 352.8 1330.2 350.7C1344.5 347.8 1358.7 340.6 1369.8 330.5C1372.7 327.9 1375.2 325.9 1375.4 326.1C1391.6 344.8 1397.0 351.3 1397.0 352.0C1397.0 353.5 1383.5 365.4 1376.6 369.9C1366.8 376.2 1353.5 381.7 1341.0 384.7C1332.1 386.9 1327.5 387.3 1310.5 387.6C1292.5 387.9 1289.4 387.7 1279.0 385.6ZM633.0 272.5L633.0 159.0L652.2 159.2L671.5 159.5L672.0 175.9L672.5 192.3L675.9 188.4C688.3 174.1 709.0 163.0 730.1 159.1C749.2 155.7 771.8 157.0 788.9 162.5C820.6 172.8 839.3 195.6 845.7 231.6C847.2 240.4 847.4 249.5 847.5 313.5L847.5 385.5L827.3 385.8L807.1 386.0L806.7 315.8C806.4 253.3 806.1 244.7 804.6 238.0C797.8 209.2 777.3 193.9 745.5 193.9C729.9 193.9 718.8 196.4 706.8 202.7C691.8 210.5 681.1 224.9 675.8 244.5C673.7 252.3 673.6 254.4 673.2 319.2L672.9 386.0L652.9 386.0L633.0 386.0L633.0 272.5ZM1059.5 384.8C1059.2 384.1 1059.1 333.1 1059.2 271.5L1059.5 159.5L1078.8 159.2L1098.0 159.0L1098.0 176.8C1098.0 186.6 1098.3 195.0 1098.6 195.3C1099.0 195.7 1100.6 194.0 1102.1 191.6C1108.1 182.6 1119.5 172.8 1130.6 167.2C1140.5 162.2 1164.8 157.0 1178.7 157.0L1181.0 157.0L1181.0 176.5L1181.0 196.0L1174.7 196.0C1166.0 196.0 1152.5 197.8 1146.5 199.7C1128.1 205.5 1113.6 218.7 1106.5 236.1C1100.7 250.4 1100.6 251.0 1100.0 321.0L1099.5 385.5L1079.7 385.8C1064.5 386.0 1059.8 385.8 1059.5 384.8ZM1584.1 350.5C1604.7 346.1 1623.6 331.1 1633.0 311.5C1637.7 301.7 1639.6 294.6 1641.1 281.4C1643.2 264.2 1639.2 243.8 1630.9 229.4C1617.9 206.5 1593.3 193.0 1565.0 193.0C1533.3 193.0 1507.5 209.5 1495.2 237.5C1487.0 256.2 1486.8 287.5 1494.7 306.4C1505.6 332.6 1526.2 347.9 1556.5 352.4C1561.6 353.1 1576.3 352.1 1584.1 350.5ZM557.7 251.1C556.3 238.3 548.2 222.4 537.6 212.0C529.5 204.1 521.1 198.9 510.5 195.3C502.9 192.6 501.5 192.5 485.0 192.5C468.3 192.6 467.1 192.7 460.0 195.4C443.0 201.8 428.9 213.8 421.2 228.8C417.0 236.7 413.0 249.3 413.0 254.2L413.0 257.0L485.6 257.0L558.3 257.0L557.7 251.1ZM1372.6 255.7C1373.3 253.7 1368.5 235.9 1365.7 230.4C1357.4 214.1 1343.2 201.7 1325.5 195.4C1317.9 192.6 1316.7 192.5 1300.0 192.5C1283.4 192.5 1282.1 192.7 1275.1 195.2C1254.0 203.1 1240.0 216.4 1232.0 236.4C1229.7 242.4 1227.0 252.8 1227.0 256.2C1227.0 256.6 1259.6 257.0 1299.5 257.0C1357.6 257.0 1372.2 256.7 1372.6 255.7Z" fill={color} fillRule="evenodd" />}
    <path d="M201.0 351.6C172.3 345.2 151.1 326.4 142.0 299.3C138.8 289.7 138.7 289.1 138.0 265.0C137.0 233.8 135.5 227.6 126.2 214.5C120.2 206.2 114.8 200.1 109.1 195.5C102.2 189.7 98.8 189.6 88.8 194.6C78.6 199.7 73.7 201.0 63.5 201.0C49.0 201.0 38.5 196.7 28.4 186.6C17.3 175.5 11.2 157.5 13.9 144.3C14.6 141.1 15.3 137.8 15.4 137.0C15.9 134.0 19.0 128.0 23.0 122.1C31.4 109.6 47.9 101.0 63.5 101.0C70.1 101.0 78.1 103.1 90.6 108.0C98.6 111.2 98.8 111.2 102.3 109.5C107.2 107.2 132.7 80.8 135.1 75.6C137.5 70.2 137.5 64.7 134.9 57.4C133.3 52.8 132.9 49.8 133.2 43.5C133.9 28.9 142.0 16.7 155.4 9.7C161.2 6.7 162.1 6.5 172.5 6.5C183.0 6.5 183.9 6.7 190.2 9.8C206.1 17.6 215.2 35.0 212.1 51.6C211.4 55.3 209.7 60.8 208.3 63.7C205.0 70.4 196.7 78.3 189.3 81.8C183.7 84.4 182.9 84.5 166.0 84.5C151.5 84.5 148.0 84.8 145.4 86.2C137.6 90.5 111.9 113.3 109.4 118.2C107.4 122.1 107.7 125.4 110.7 133.9C114.3 144.2 114.5 157.3 111.1 167.2C109.9 170.9 108.4 174.2 107.9 174.5C107.4 174.9 107.0 176.9 107.0 179.2C107.0 182.4 107.6 183.8 110.1 186.1C115.0 190.7 128.8 199.5 137.5 203.6C144.3 206.9 146.6 207.5 154.0 207.8C165.0 208.3 174.5 206.8 187.8 202.5C208.2 195.8 224.7 195.7 242.8 202.2C264.2 210.0 282.0 228.2 289.6 250.5C292.0 257.4 292.5 260.4 292.8 272.6C293.1 284.8 292.9 287.9 291.0 294.6C281.5 329.6 250.6 353.3 215.2 352.9C210.4 352.8 204.0 352.2 201.0 351.6Z" fill={GENTREP_BLUE} fillRule="evenodd" />
  </svg>
);

/* ============================================================
   GUTGUARD LIFESTYLE — CARD ACTIVATION (LICA)
   A member's daily screen for the first ten days, and after.
   ============================================================ */

const C = {
  navy: "#0e2249", blue: "#2569b8", sky: "#9DB8DE", paper: "#eef2f7", card: "#ffffff",
  ink: "#1a2740", mute: "#5a6b82", gold: "#f5b716", goldD: "#8a5a00", line: "#e2e8f0",
  good: "#157a43", goodBg: "#E4F4EC", warn: "#8a5a00", warnBg: "#FDF4E0",
  clay: "#a63a20", clayBg: "#FBEAE5", olive: "#3f4c37", oliveLt: "#EDEFE9",
  brand: "#1f5d99", brandD: "#163f66", tg: "#1373a2",
};
const HERO = `linear-gradient(160deg, ${C.brand}, ${C.brandD})`;

/* ---- who ---- */
const ME = { name: "Marilou Deloso", card: "0240 5578 9012 3456", sponsor: "Ana R.", since: "12 May 2026" };

/* ---- what's in the box ---- */
const CAPS = { blister: 10, bottle: 30 };
/* `recurring` = they buy month to month, so reordering is the live act.
   Packages are paid ahead: nothing to prompt until the supply is genuinely
   near its end. Ten days of consumption is required of everyone alike. */
const PURCHASES = {
  "Trial":        { caps: 10,  activates: false, recurring: true,  note: "1 blister" },
  "Card minimum": { caps: 30,  activates: true,  recurring: true,  note: "1 bottle" },
  "Start@30":     { caps: 40,  activates: true,  recurring: false, note: "40 capsules" },
  "Grow@60":      { caps: 120, activates: true,  recurring: false, note: "120 capsules" },
  "Peak@90":      { caps: 400, activates: true,  recurring: false, note: "400 capsules" },
};

/* ---- dosing: three named times, as in My Health ---- */
const SLOT_META = {
  morning: { label: "Morning Habit", note: "before meals · empty stomach", t: "07:00" },
  midday:  { label: "Midday Boost",  note: "after lunch",                  t: "12:30" },
  dreams:  { label: "Sweet Dreams",  note: "before bedtime",               t: "21:00" },
};
const ALL_SLOTS = ["morning", "midday", "dreams"];
const MIN_DAILY = 2;

const ACTIVATION_DAYS = 10;

/* ---- the first ten days ------------------------------------
   CLINICAL SIGN-OFF REQUIRED. Every line below is placeholder
   wording written by a designer. Beehive must confirm or replace
   it before release. No study is cited anywhere by design: any
   research claim must come from Beehive with its source.
   ------------------------------------------------------------ */
const DAY_NOTES = {
  1: [{ kind: "tip", t: "Best on an empty stomach",
        d: "Morning, before you eat, with plain water. Food and hot drinks make it work harder." }],
  2: [{ kind: "tip", t: "Same time every day",
        d: "Pin it to something you already do — after brushing your teeth, before the kettle. It sticks better than a reminder." }],
  3: [{ kind: "care", t: "Taking antibiotics? Space them apart",
        d: "Antibiotics work against what this is building. Leave a gap, and tell " + ME.sponsor + " so Beehive can advise." },
      { kind: "tip", t: "Your gut may speak up first",
        d: "Some people notice their digestion changing early on." }],
  4: [{ kind: "know", t: "What this kind of product is studied for",
        d: "Pre-, pro- and postbiotics are an active area of gut and gut–brain research. Ask " + ME.sponsor + " for the reading Beehive supplies." }],
  5: [{ kind: "tip", t: "Most people feel nothing yet",
        d: "That is normal. This is a slow protocol — it is not meant to be felt in a week." }],
  6: [{ kind: "tip", t: "Keep drinking water",
        d: "Through the day, not only with the capsule." }],
  7: [{ kind: "care", t: "If anything feels off, say so",
        d: "Tell " + ME.sponsor + " rather than stopping quietly. She has seen it before, and Beehive can advise." }],
  8: [{ kind: "tip", t: "Missed a day? Don't double up",
        d: "Just carry on tomorrow at your usual dose." }],
  9: [{ kind: "tip", t: "Almost there",
        d: "One more day and your card goes live." }],
};
const NOTE_STYLE = {
  tip:  { fg: C.goldD, label: "Tip" },
  care: { fg: C.warn,  label: "Take care" },
  know: { fg: C.blue,  label: "Worth knowing" },
};

/* the rail's human touches — a person sends these, never the system */
const TOUCHES = { 2: "call", 6: "message" };

const CHANNELS = ["Text", "Messenger", "Viber", "WhatsApp", "Telegram"];

/* ---- calendar helpers ---- */
const WD = ["S", "M", "T", "W", "T", "F", "S"];
const NOW = new Date(2026, 7, 9);
const Y = NOW.getFullYear(), MON = NOW.getMonth(), TODAY = NOW.getDate();
const MONTH_NAME = NOW.toLocaleString("en-US", { month: "long", year: "numeric" });
const cellStyle = (s) => ({
  full:    { background: "#BFE4CE", color: C.navy, border: "none" },
  partial: { background: "#F5E4C4", color: "#8A6414", border: "none" },
  missed:  { background: "#E7C4BC", color: "#9A6A5E", border: "none" },
  today:   { background: "#fff", color: C.blue, border: `2px solid ${C.blue}` },
  future:  { background: "#fff", color: "#C3CCD8", border: `1px solid ${C.line}` },
}[s]);

/* ============================================================ */

export default function LifestyleCard() {
  /* what she bought */
  const [bought, setBought] = useState("Start@30");
  const buy = PURCHASES[bought];

  /* the three things only she can do */
  const [dose, setDose] = useState({ morning: 0, midday: 0, dreams: 0 });
  const [doseSet, setDoseSet] = useState(false);
  const [times, setTimes] = useState({ morning: "07:00", midday: "12:30", dreams: "21:00" });
  const [channel, setChannel] = useState(null);
  const [joined, setJoined] = useState(false);

  /* consumption */
  const [today, setToday] = useState({});
  const [days, setDays] = useState(0);
  const [purchased, setPurchased] = useState(PURCHASES["Start@30"].caps);
  const [log] = useState(() => {
    const L = {}, pat = [3,3,2,3,3,3,1,3,3,2,3,3,3,3,0,3,3,2,3,3,3,3,1,3];
    pat.forEach((n, i) => { const d = i + 1; if (d < TODAY && n) { L[d] = {}; ALL_SLOTS.slice(0, n).forEach(k => L[d][k] = true); } });
    return L;
  });

  /* sheets and chrome */
  const [settings, setSettings] = useState(false);
  const [order, setOrder] = useState(false);
  const [orderStage, setOrderStage] = useState("choose");
  const [pick, setPick] = useState("Start@30");
  const [notifs, setNotifs] = useState([]);
  const [notifOpen, setNotifOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const [why, setWhy] = useState(false);
  const [toast, setToast] = useState("");
  const [live, setLive] = useState("");
  const [fire, setFire] = useState(0);

  const flash = (m) => { setToast(m); setLive(m); setTimeout(() => setToast(""), 2400); };

  /* ---- derived ---- */
  const slots = ALL_SLOTS.filter(k => dose[k] > 0);
  const perDay = ALL_SLOTS.reduce((a, k) => a + dose[k], 0);
  const step = (k, d) => setDose(x => ({ ...x, [k]: Math.max(0, Math.min(3, x[k] + d)) }));
  const dayLog = (d) => (d === TODAY ? today : (log[d] || {}));
  const doneCount = (d) => slots.filter(k => dayLog(d)[k]).length;
  const takenCaps = (() => { let n = 0; for (let d = 1; d <= TODAY; d++) ALL_SLOTS.forEach(k => { if (dayLog(d)[k]) n += dose[k]; }); return n; })();
  const capsLeft = Math.max(0, purchased - takenCaps);
  const streak = (() => {
    let n = 0;
    for (let d = TODAY; d >= 1; d--) {
      if (slots.length && doneCount(d) === slots.length) n++; else break;
    }
    return n;
  })();
  const daysLeft = perDay ? Math.floor(capsLeft / perDay) : 0;
  const fullRun = perDay ? Math.floor(buy.caps / perDay) : 0;
  const low = capsLeft > 0 && daysLeft <= Math.max(4, Math.round(fullRun * 0.3));
  const out = capsLeft <= 0;
  /* Reorder appears before the supply runs out — but only when there is
     something to reorder. Month-to-month buyers get the full ladder; package
     buyers hear nothing until their paid-for supply is nearly gone. */
  const stage = out ? 1 : daysLeft <= 1 ? 1 : daysLeft <= 5 ? 5 : daysLeft <= 10 ? 10 : null;
  const refill = buy.recurring ? stage : (daysLeft <= 7 ? stage : null);
  const promptReorder = refill !== null;

  const setupDone = doseSet && !!channel && joined;
  const setupCount = [doseSet, !!channel, joined].filter(Boolean).length;
  const live_ = buy.activates && setupDone && days >= ACTIVATION_DAYS;

  /* ---- the card waking up ---- */
  const wasLive = useRef(false);
  useEffect(() => {
    if (live_ && !wasLive.current) {
      wasLive.current = true;
      setFire(Date.now());
      flash("Your card is awake · next stop, day 30");
      setNotifs(n => [
        { id: "you",  kind: "you",  t: "Your card is active", d: "Ten days done. You are a Lifestyle Member." },
        { id: "page", kind: "page", t: "Posted to the community page", d: "\u201C" + ME.name.split(" ")[0] + " finished her first ten days.\u201D Eleven others did too this week." },
        { id: "room", kind: "room", t: "You'll be read out on Saturday", d: "At the next session, with the others who made it." },
        ...n,
      ]);
    }
    if (!live_) wasLive.current = false;
  }, [live_]);

  /* ---- sticky footer: the scroller is this element, not the window ---- */
  const scroller = useRef(null);
  const [showFoot, setShowFoot] = useState(false);
  useEffect(() => {
    let last = 0, ticking = false;
    const read = () => {
      const n = scroller.current;
      if (n && n.scrollHeight > n.clientHeight + 4) return { y: n.scrollTop, v: n.clientHeight, h: n.scrollHeight };
      return { y: window.scrollY || 0, v: window.innerHeight, h: document.documentElement.scrollHeight || 0 };
    };
    const evaluate = () => {
      ticking = false;
      const { y, v, h } = read();
      if (h <= v + 8) return setShowFoot(true);
      const dy = y - last;
      if (y <= 100) setShowFoot(false);
      else if (y + v >= h - 48) setShowFoot(true);
      else if (dy > 5) setShowFoot(true);
      else if (dy < -5) setShowFoot(false);
      if (Math.abs(dy) > 5) last = y;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(evaluate); } };
    const n = scroller.current;
    if (n) n.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const t = setTimeout(evaluate, 60); evaluate();
    return () => { clearTimeout(t); if (n) n.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  /* ---- actions ---- */
  const confirmSlot = (k) => {
    const next = { ...today, [k]: !today[k] };
    setToday(next);
    if (slots.every(x => next[x]) && days < 400) {
      setDays(days + 1); setToday({});
      flash(days + 1 >= ACTIVATION_DAYS ? "All ten days done" : "All doses done today!");
    } else if (!today[k]) flash(SLOT_META[k].label + " done");
  };
  const placeOrder = () => { setPurchased(purchased + PURCHASES[pick].caps); setOrderStage("placed"); };
  const notes = DAY_NOTES[Math.min(days + 1, ACTIVATION_DAYS)] || [];
  const touch = TOUCHES[Math.min(days + 1, ACTIVATION_DAYS)];

  return (
    <div className="gg" lang="en" ref={scroller}>
      <Style />
      <Confetti fire={fire} />
      <span className="sr-only" role="status" aria-live="polite">{live}</span>
      <a className="skip" href="#today">Skip to today's doses</a>

      <div className="col">
        {/* ---------- masthead ---------- */}
        <header className="mast">
          <div className="brand">
            <GentrepLogo height={22} color={C.navy} />
            <span className="serif">Lifestyle</span>
          </div>
          <div className="mast-actions">
            {notifs.length > 0 && (
              <button className="tap icon-btn" aria-label="Notifications" onClick={() => setNotifOpen(true)}>
                <Bell />
                <span className="dot" />
              </button>
            )}
            {doseSet && (
              <button className="tap icon-btn" aria-label="Settings" onClick={() => setSettings(true)}><Gear /></button>
            )}
          </div>
        </header>
        <p className="sub">{ME.name} · card {ME.card.slice(-9)}</p>
        <main id="today" tabIndex={-1}>

        {/* ---------- the top of the screen ---------- */}
        {!buy.activates ? (
          <Panel>
            <h1 className="h1">You're trying it</h1>
            <p className="lead">
              One blister, {buy.caps} capsules. A month is 2 blisters or 1 bottle — that's when your card
              switches on and {ME.sponsor} starts looking after you.
            </p>
            <button className="tap btn primary wide" onClick={() => setOrder(true)}>Start a month</button>
          </Panel>
        ) : !doseSet ? (
          <Panel>
            <h1 className="h1">Set your daily doses</h1>
            <p className="lead">How many capsules at each time of day. At least {MIN_DAILY} a day.</p>
            {ALL_SLOTS.map(k => (
              <div key={k} className={"slot-set" + (dose[k] ? " on" : "")}>
                <div className="slot-head">
                  <div className="grow">
                    <div className="slot-name">{SLOT_META[k].label}</div>
                    <div className="slot-note">{SLOT_META[k].note}</div>
                  </div>
                  <div className="stepper">
                    <button className="tap step" onClick={() => step(k, -1)} disabled={!dose[k]}
                      aria-label={"One less at " + SLOT_META[k].label}>−</button>
                    <div className="count">
                      {dose[k] ? <><b>{dose[k]}</b><span>caps</span></> : <em>off</em>}
                    </div>
                    <button className="tap step" onClick={() => step(k, 1)} disabled={dose[k] === 3}
                      aria-label={"One more at " + SLOT_META[k].label}>+</button>
                  </div>
                </div>
                {dose[k] > 0 && (
                  <div className="remind">
                    <span>Remind at</span>
                    <input type="time" value={times[k]} onChange={e => setTimes({ ...times, [k]: e.target.value })} />
                  </div>
                )}
              </div>
            ))}
            <p className={"total" + (perDay < MIN_DAILY ? " under" : "")}>
              Total: <b>{perDay} caps/day</b>.{perDay < MIN_DAILY
                ? " Below the " + MIN_DAILY + " a day minimum."
                : " Follow your product label or your doctor's advice."}
            </p>
            <button className="tap btn primary wide" disabled={perDay < MIN_DAILY} onClick={() => setDoseSet(true)}>
              {perDay < MIN_DAILY ? "At least " + MIN_DAILY + " caps a day" : "Save"}
            </button>
          </Panel>
        ) : !live_ ? (
          <>
            <Panel>
              <div className="row-between">
                <h2 className="h2">Today's doses</h2>
                <span className={"count-pill" + (slots.every(k => today[k]) ? " done" : "")}>
                  {slots.filter(k => today[k]).length} of {slots.length} done
                </span>
              </div>
              {slots.map(k => (
                <div key={k} className={"slot" + (today[k] ? " done" : "")}>
                  <div className="grow">
                    <div className="slot-name big">{SLOT_META[k].label}</div>
                    <div className="slot-note">{SLOT_META[k].note} · {dose[k]} {dose[k] === 1 ? "capsule" : "capsules"}</div>
                  </div>
                  {today[k]
                    ? <span className="tick">✓</span>
                    : <button className="tap btn ghost-good" onClick={() => confirmSlot(k)}>Done</button>}
                </div>
              ))}

              <div className="progress-head">
                <b>{days} {days === 1 ? "day done" : "days done"}</b>
                <span>Day {days + 1} of the first ten</span>
              </div>
              <div className="bar"><i style={{ width: (Math.min(days, ACTIVATION_DAYS) / ACTIVATION_DAYS) * 100 + "%" }} /></div>

              {notes.map((n, i) => (
                <div key={i} className="note" style={{ borderLeftColor: NOTE_STYLE[n.kind].fg }}>
                  <div className="note-label" style={{ color: NOTE_STYLE[n.kind].fg }}>{NOTE_STYLE[n.kind].label}</div>
                  <div className="note-title">{n.t}</div>
                  <p className="note-body">{n.d}</p>
                </div>
              ))}

              {touch && (
                <div className="touch">
                  <span className="avatar">{ME.sponsor[0]}</span>
                  <div className="grow">
                    <div className="slot-name">{ME.sponsor} will {touch === "call" ? "ring" : "message"} you today</div>
                    <div className="slot-note">Just to see how you're getting on{channel ? ", on " + channel : ""}.</div>
                  </div>
                </div>
              )}

              <button className="tap link" onClick={() => setWhy(!why)}>What happens on day ten?</button>
              {why && (
                <div className="fade why">
                  {[["Your card starts working", "The one in your wallet"],
                    ["You get the full app", "Your health, your team, your story"],
                    ["Your name is read out", "At Saturday's session, with the others"],
                    ["Then day 30", "Your first check, where you see what changed"]].map(([t, d]) => (
                    <div key={t} className="why-row"><span className="pip" /><div><b>{t}</b><em>{d}</em></div></div>
                  ))}
                  <p className="fine">No rush. If you miss a day, nothing is lost.</p>
                </div>
              )}

              <SupplyRow {...{ capsLeft, daysLeft, prompt: promptReorder, out, recurring: buy.recurring, program: bought, sponsor: ME.sponsor, onOrder: () => setOrder(true) }} />
            </Panel>

            {/* set-up checklist */}
            <SectionTitle>Set up <span className="of">{setupCount} of 3</span></SectionTitle>
            <Setup {...{ doseSet, perDay, slots, channel, setChannel, joined, setJoined, flash, onEditDose: () => setDoseSet(false) }} />
          </>
        ) : (
          <>
            <Panel>
              <div className="row-between">
                <h2 className="h2">Today's doses</h2>
                <span className={"count-pill" + (slots.every(k => today[k]) ? " done" : "")}>
                  {slots.filter(k => today[k]).length} of {slots.length} done
                </span>
              </div>
              {slots.map(k => (
                <div key={k} className={"slot" + (today[k] ? " done" : "")}>
                  <div className="grow">
                    <div className="slot-name big">{SLOT_META[k].label}</div>
                    <div className="slot-note">{SLOT_META[k].note} · {dose[k]} {dose[k] === 1 ? "capsule" : "capsules"}</div>
                  </div>
                  {today[k] ? <span className="tick">✓</span>
                    : <button className="tap btn ghost-good" onClick={() => confirmSlot(k)}>Done</button>}
                </div>
              ))}

              <div className="stats">
                <Stat n={capsLeft} label="Capsules left" tone={low || out ? C.clay : C.navy} />
                <Stat n={daysLeft + "d"} label="Supply left" tone={low || out ? C.clay : C.good} />
                <Stat n={streak} label="Day streak" tone={C.blue} />
              </div>

              <SupplyRow {...{ capsLeft, daysLeft, prompt: promptReorder, out, recurring: buy.recurring, program: bought, sponsor: ME.sponsor, onOrder: () => setOrder(true) }} />
            </Panel>
          </>
        )}

        {/* ---------- the month ---------- */}
        {doseSet && (
          <>
            <button className="tap cal-head" onClick={() => setCalOpen(!calOpen)} aria-expanded={calOpen}>
              <span className="h2">{MONTH_NAME}</span>
              <span className="of">Your record {calOpen ? "▲" : "▼"}</span>
            </button>
            {calOpen && <Calendar {...{ doneCount, slots }} />}
          </>
        )}

        <p className="foot-note">
          {bought} · {buy.note} · member since {ME.since}
        </p>

        </main>

        {/* demo only */}
        <Demo {...{ bought, setBought, setPurchased, setDays, setToday, setDoseSet, takenCaps, perDay }} />
      </div>

      {/* ---------- sticky reorder ---------- */}
      {doseSet && buy.activates && promptReorder && !settings && !order && !notifOpen && (
        <div className={"gg-foot" + (showFoot ? " on" : "")}>
          <div className="gg-foot-inner" {...(showFoot ? {} : { inert: "" })}>
            <div className="grow">
              <div className="foot-eyebrow">{refill ? "Refill needed" : "Your supply"}</div>
              <div className="foot-days" style={{ color: refill === 1 ? C.clay : refill === 5 ? C.goldD : refill ? C.blue : C.navy }}>
                {daysLeft} days left
              </div>
            </div>
            <button className="tap btn primary" onClick={() => setOrder(true)}
              style={{ background: refill === 1 ? C.clay : refill === 5 ? C.gold : C.blue, color: refill === 5 ? C.navy : "#fff" }}>
              Reorder
            </button>
          </div>
        </div>
      )}

      {/* ---------- sheets ---------- */}
      {settings && (
        <Sheet label="Settings" onClose={() => setSettings(false)}>
          <SheetHead title="Settings" sub="Change your dosing, reminders & alerts" onClose={() => setSettings(false)} />
          <div className="eyebrow-dark">Dosing · up to 3× a day</div>
          {ALL_SLOTS.map(k => (
            <div key={k} className={"slot-set" + (dose[k] ? " on" : "")}>
              <div className="slot-head">
                <div className="grow">
                  <div className="slot-name">{SLOT_META[k].label}</div>
                  <div className="slot-note">{SLOT_META[k].note}</div>
                </div>
                <div className="stepper">
                  <button className="tap step" onClick={() => step(k, -1)} disabled={!dose[k]} aria-label={"One less at " + SLOT_META[k].label}>−</button>
                  <div className="count">{dose[k] ? <><b>{dose[k]}</b><span>caps</span></> : <em>off</em>}</div>
                  <button className="tap step" onClick={() => step(k, 1)} disabled={dose[k] === 3} aria-label={"One more at " + SLOT_META[k].label}>+</button>
                </div>
              </div>
              {dose[k] > 0 && (
                <div className="remind">
                  <span>Remind at</span>
                  <input type="time" value={times[k]} onChange={e => setTimes({ ...times, [k]: e.target.value })} />
                </div>
              )}
            </div>
          ))}
          <p className={"total" + (perDay < MIN_DAILY ? " under" : "")}>
            Total: <b>{perDay} caps/day</b>.{perDay < MIN_DAILY ? " Below the minimum." : " Follow your product label or your doctor's advice."}
          </p>

          <div className="eyebrow-dark mt">How we reach you</div>
          {CHANNELS.map(c => (
            <button key={c} className={"tap choice" + (channel === c ? " on" : "")}
              onClick={() => { setChannel(c); flash("Test sent · " + c); }} aria-pressed={channel === c}>
              <span className="radio">{channel === c ? "✓" : ""}</span>{c}
            </button>
          ))}
          <p className="fine">Text always stays on as a backup.</p>
          <button className="tap btn navy wide mt" onClick={() => setSettings(false)}>Done</button>
        </Sheet>
      )}

      {order && (
        <Sheet label="Order more" onClose={() => { setOrder(false); setOrderStage("choose"); }}>
          {orderStage === "choose" ? (
            <>
              <SheetHead title="Order more" sub={perDay ? "At " + perDay + " a day. Pick what suits your month." : "Pick a month's supply."}
                onClose={() => setOrder(false)} />
              {Object.entries(PURCHASES).filter(([k]) => k !== "Trial").map(([k, p]) => (
                <button key={k} className={"tap prog" + (pick === k ? " on" : "")} onClick={() => setPick(k)} aria-pressed={pick === k}>
                  <span className="radio">{pick === k ? "✓" : ""}</span>
                  <span className="grow left">
                    <b>{k}</b><em>{p.note}</em>
                  </span>
                  {perDay > 0 && <span className="lasts"><b>{Math.floor(p.caps / perDay)}</b><em>days for you</em></span>}
                </button>
              ))}
              <div className="collect">
                <div><span>Collect from</span><b>Lagao centre</b></div>
                <div><span>Arranged by</span><b>{ME.sponsor}</b></div>
                {PURCHASES[pick].caps > 100 && <p className="fine">Released monthly so nothing sits in a drawer.</p>}
              </div>
              <button className="tap btn primary wide mt" onClick={placeOrder}>Place this order</button>
              <p className="fine center">No payment here. {ME.sponsor} will confirm the details with you.</p>
            </>
          ) : (
            <div className="center-block">
              <div className="big-tick">✓</div>
              <h2 className="h2">Order placed</h2>
              <p className="lead">{ME.sponsor} has been told, and will message you{channel ? " on " + channel : ""} to arrange it.</p>
              <button className="tap btn navy wide mt" onClick={() => { setOrder(false); setOrderStage("choose"); }}>Done</button>
            </div>
          )}
        </Sheet>
      )}

      {notifOpen && (
        <Sheet label="Notifications" onClose={() => setNotifOpen(false)}>
          <SheetHead title="Notifications" sub="What happened today" onClose={() => setNotifOpen(false)} />
          {notifs.map(n => (
            <div key={n.id} className={"notif " + n.kind}>
              <span className="notif-dot" />
              <div><b>{n.t}</b><em>{n.d}</em></div>
            </div>
          ))}
        </Sheet>
      )}

      {toast && <div className="fade toast">{toast}</div>}
    </div>
  );
}

/* ============ small pieces ============ */

const Panel = ({ children }) => <section className="panel">{children}</section>;
const SectionTitle = ({ children }) => <div className="sec-title">{children}</div>;
const Stat = ({ n, label, tone }) => (
  <div className="stat"><b style={{ color: tone }}>{n}</b><span>{label}</span></div>
);

function SupplyRow({ capsLeft, daysLeft, prompt, out, recurring, program, sponsor, onOrder }) {
  return (
    <div className="supply">
      <div className="grow">
        <span>{recurring ? "Your supply" : "Left of your " + program}</span>
        <b style={{ color: prompt || out ? C.warn : C.navy }}>{capsLeft} capsules · {daysLeft} days</b>
        {!recurring && !prompt && (
          <em className="paid">Already paid for. Nothing to buy yet.</em>
        )}
        {prompt && (
          <em className="paid warn">
            {out ? sponsor + " has been told." : sponsor + " will reach you before it runs out."}
          </em>
        )}
      </div>
      {(recurring || prompt) && (
        <button className={"tap btn " + (prompt ? "primary" : "outline")} onClick={onOrder}>
          {out ? "Order now" : prompt ? "Order now" : "Order more"}
        </button>
      )}
    </div>
  );
}

function Setup({ doseSet, perDay, slots, channel, setChannel, joined, setJoined, flash, onEditDose }) {
  const items = [
    { k: "dose", ok: doseSet, title: "Your daily doses",
      status: doseSet ? perDay + " a day · " + slots.map(k => SLOT_META[k].label).join(", ") : "Not set yet" },
    { k: "reach", ok: !!channel, title: "What platform do you prefer to be contacted?",
      status: channel ? channel + " · tested and working" : "Pick the one you actually read" },
    { k: "join", ok: joined, title: "Join the community page",
      status: joined ? "You're in · 2,400 members" : "Where members share what's working" },
  ];
  return (
    <ol className="setup">
      {items.map((it, i) => (
        <li key={it.k} className="setup-row">
          <div className="spine">
            <span className="rail" style={{ background: it.ok ? C.gold : C.line, top: i ? 0 : 26, bottom: i === 2 ? "calc(100% - 26px)" : -10 }} />
            <span className={"node" + (it.ok ? " on" : "")}>{it.ok ? "✓" : ""}</span>
          </div>
          <article className={"setup-card" + (!it.ok ? " due" : "")}>
            <div className="setup-head">
              <h3>{it.title}</h3>
              <p style={{ color: it.ok ? C.good : C.mute }}>{it.status}</p>
            </div>
            {it.k === "dose" && it.ok && <button className="tap btn outline sm" onClick={onEditDose}>Change</button>}
            {it.k === "reach" && !it.ok && (
              <div className="setup-body">
                <p className="fine">{ME.sponsor} will use this to check in on you, and to tell you before your supply runs out.</p>
                {CHANNELS.map(c => (
                  <button key={c} className="tap choice" onClick={() => { setChannel(c); flash("Test sent · " + c); }}>
                    <span className="radio" />{c}
                  </button>
                ))}
              </div>
            )}
            {it.k === "join" && !it.ok && (
              <div className="setup-body">
                <p className="fine">People on the same protocol, further along than you. Ask anything.</p>
                <button className="tap btn primary wide" onClick={() => { setJoined(true); flash("Joined · opening the group"); }}>
                  Join{channel ? " on " + channel : ""}
                </button>
              </div>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}

function Calendar({ doneCount, slots }) {
  const first = new Date(Y, MON, 1).getDay(), dim = new Date(Y, MON + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: dim }, (_, i) => i + 1)];
  const state = (d) => {
    if (d > TODAY) return "future";
    const n = doneCount(d);
    if (slots.length && n === slots.length) return "full";
    if (n > 0) return "partial";
    return d === TODAY ? "today" : "missed";
  };
  return (
    <div className="cal">
      {WD.map((w, i) => <div key={"h" + i} className="cal-h">{w}</div>)}
      {cells.map((d, i) => d
        ? <div key={d} className="cal-c" style={cellStyle(state(d))}>{d}</div>
        : <div key={"b" + i} />)}
    </div>
  );
}

function Demo({ bought, setBought, setPurchased, setDays, setToday, setDoseSet, takenCaps, perDay }) {
  return (
    <div className="demo">
      <div className="demo-label">Demo · what she bought</div>
      <div className="demo-row">
        {Object.keys(PURCHASES).map(k => (
          <button key={k} className={"tap demo-btn" + (bought === k ? " on" : "")}
            onClick={() => { setBought(k); setPurchased(PURCHASES[k].caps); setDays(0); setToday({}); setDoseSet(false); }}>
            {k}
          </button>
        ))}
      </div>
      <div className="demo-row">
        <button className="tap demo-btn" onClick={() => setDays(d => d + 1)}>+1 day</button>
        <button className="tap demo-btn" onClick={() => setDays(ACTIVATION_DAYS)}>Day 10</button>
        <button className="tap demo-btn" onClick={() => setPurchased(t => takenCaps + Math.max(2, perDay * 3))}>Run low</button>
      </div>
    </div>
  );
}

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
      const f = [...box.current.querySelectorAll("button:not([disabled]),input,[tabindex]:not([tabindex='-1'])")]
        .filter(el => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === box.current)) { e.preventDefault(); last.focus({ preventScroll: true }); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus({ preventScroll: true }); }
    };
    document.addEventListener("keydown", onKey);
    return () => { clearTimeout(t); document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev; opener.current?.focus?.({ preventScroll: true }); };
  }, []);
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={label} onClick={onClose}>
      <div className="sheet up" ref={box} tabIndex={-1} onClick={e => e.stopPropagation()}>
        <div className="grab" />
        {children}
      </div>
    </div>
  );
}

const SheetHead = ({ title, sub, onClose }) => (
  <div className="sheet-head">
    <div><h2 className="h2">{title}</h2><p className="fine">{sub}</p></div>
    <button className="tap pill" onClick={onClose}>Close</button>
  </div>
);

function Confetti({ fire }) {
  const [bits, setBits] = useState([]);
  useEffect(() => {
    if (!fire) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const cols = [C.gold, C.blue, C.navy, "#0205C6", C.good, "#fff"];
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

const Bell = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);
const Gear = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Style = () => (
  <style>{`
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Anton&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap');
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
html,body{overflow-x:hidden;margin:0;}
.gg{height:100vh;height:100dvh;overflow-y:auto;overflow-x:hidden;background:${C.paper};color:${C.ink};
    font-family:'Inter',system-ui,sans-serif;font-size:15px;-webkit-overflow-scrolling:touch;overscroll-behavior-y:contain;}
.gg *{max-width:100%;}
input{font-size:16px !important;}
button{font-family:'Sora',system-ui,sans-serif;border:none;cursor:pointer;min-height:44px;}
button:focus-visible,[tabindex]:focus-visible{outline:3px solid ${C.blue};outline-offset:2px;}
.tap{transition:transform .08s ease;} .tap:active{transform:scale(.98);}
.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}
.col{max-width:440px;margin:0 auto;padding:0 max(16px,env(safe-area-inset-left)) 130px;}
h1,h2,h3,p{margin:0;overflow-wrap:anywhere;}

/* masthead */
.mast{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;padding:22px 2px 4px;}
.brand{display:flex;align-items:flex-end;gap:8px;}
.serif{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:19px;line-height:.95;color:${C.navy};}
.mast-actions{display:flex;gap:8px;}
.icon-btn{position:relative;width:44px;height:44px;border-radius:999px;background:${C.card};
          border:1.5px solid ${C.line};display:grid;place-items:center;}
.icon-btn .dot{position:absolute;top:9px;right:10px;width:9px;height:9px;border-radius:99px;background:${C.clay};border:2px solid #fff;}
.sub{font-size:13.5px;color:${C.mute};padding:0 2px 10px;}

/* blocks */
.panel{background:${C.card};border:1.5px solid ${C.line};border-radius:18px;padding:18px 16px;margin-bottom:12px;}
.hero{background:${HERO};color:#fff;border-radius:18px;padding:20px 18px;margin-bottom:12px;}
.eyebrow{font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.85;}
.eyebrow-dark{font-family:'Sora',sans-serif;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;
              color:${C.mute};font-weight:600;margin:0 0 10px;}
.eyebrow-dark.mt{margin-top:22px;}
.h1{font-family:'Sora',sans-serif;font-size:21px;font-weight:700;color:${C.navy};line-height:1.32;}
.h1.white{color:#fff;margin-top:6px;}
.h2{font-family:'Sora',sans-serif;font-size:17px;font-weight:700;color:${C.navy};}
.lead{font-size:14.5px;color:${C.mute};margin-top:8px;line-height:1.62;}
.lead.white{color:rgba(255,255,255,.92);}
.row-between{display:flex;justify-content:space-between;align-items:baseline;gap:12px;}
.grow{flex:1;min-width:0;}
.mb{margin-bottom:12px;}
.mt{margin-top:14px;}
.center{text-align:center;}
.fine{font-size:12.5px;color:${C.mute};line-height:1.55;margin-top:8px;}
.sec-title{font-family:'Anton',sans-serif;font-size:15px;letter-spacing:.11em;text-transform:uppercase;
           color:${C.navy};margin:22px 0 12px;display:flex;justify-content:space-between;align-items:baseline;}
.of{font-family:'Inter',sans-serif;font-size:12.5px;letter-spacing:0;text-transform:none;color:${C.mute};font-weight:500;}

/* buttons */
.btn{border-radius:12px;font-size:15px;font-weight:700;padding:0 18px;min-height:48px;}
.btn.wide{width:100%;margin-top:14px;}
.btn.sm{min-height:40px;font-size:13px;padding:0 14px;margin-top:10px;}
.btn.primary{background:${C.blue};color:#fff;}
.btn.navy{background:${C.navy};color:#fff;}
.btn.white{background:#fff;color:${C.navy};}
.btn.outline{background:#fff;border:1.5px solid ${C.line};color:${C.navy};}
.btn.ghost-good{background:transparent;border:1.5px solid ${C.good};color:${C.good};min-height:44px;padding:0 18px;font-size:14px;}
.btn:disabled{background:${C.line};color:${C.mute};cursor:not-allowed;}
.link{background:none;color:${C.mute};font-size:13.5px;font-weight:600;text-decoration:underline;padding:12px 0 0;}
.pill{background:${C.card};border:1px solid ${C.line};border-radius:20px;padding:0 18px;min-height:44px;font-size:13.5px;font-weight:600;color:${C.mute};}

/* dose setting */
.slot-set{background:#fff;border:1px solid #EEF1F6;border-radius:12px;padding:12px 14px;margin-top:10px;}
.slot-set.on{border-color:${C.line};}
.slot-head{display:flex;align-items:center;gap:12px;}
.slot-name{font-family:'Sora',sans-serif;font-size:15px;font-weight:600;color:${C.navy};}
.slot-name.big{font-size:17.5px;font-weight:700;}
.slot-note{font-size:13px;color:${C.mute};margin-top:2px;}
.stepper{display:flex;align-items:center;gap:9px;flex-shrink:0;}
.step{width:44px;height:44px;border-radius:11px;background:${C.navy};color:#fff;font-size:21px;font-weight:700;
      display:flex;align-items:center;justify-content:center;line-height:1;}
.step:disabled{background:#F1F4F8;color:#C3CCD8;}
.count{width:46px;text-align:center;}
.count b{font-family:'Anton',sans-serif;font-size:20px;color:${C.navy};font-weight:400;}
.count span{display:block;font-size:9px;color:${C.mute};margin-top:-2px;}
.count em{font-size:12.5px;color:${C.mute};font-style:normal;}
.remind{display:flex;align-items:center;justify-content:space-between;margin-top:11px;padding-top:11px;border-top:1px solid ${C.line};}
.remind span{font-size:12.5px;color:${C.mute};}
.remind input{font-weight:600;padding:8px 10px;border:1.5px solid ${C.line};border-radius:9px;color:${C.navy};
              font-family:'Sora',sans-serif;background:#fff;}
.total{font-size:12.5px;color:${C.mute};margin-top:10px;}
.total b{color:${C.navy};} .total.under,.total.under b{color:${C.clay};}

/* today's doses */
.count-pill{font-size:14.5px;font-weight:700;color:${C.mute};}
.count-pill.done{color:${C.good};}
.slot{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid ${C.line};
      border-radius:13px;padding:15px;margin-top:10px;}
.slot.done{background:${C.goodBg};border-color:${C.good};}
.slot.done .slot-name{color:${C.good};}
.tick{width:40px;height:40px;border-radius:8px;background:${C.good};color:#fff;font-size:22px;
      display:flex;align-items:center;justify-content:center;flex-shrink:0;}

/* progress */
.progress-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-top:18px;}
.progress-head b{font-family:'Sora',sans-serif;font-size:17px;color:${C.navy};}
.progress-head span{font-size:13.5px;color:${C.mute};}
.bar{height:10px;border-radius:99px;background:#e8edf4;overflow:hidden;margin-top:10px;}
.bar i{display:block;height:100%;background:${C.gold};transition:width .45s cubic-bezier(.4,0,.2,1);}
.bar.sm{height:8px;margin-top:0;}

/* day notes */
.note{background:#fff;border:1.5px solid ${C.line};border-left-width:4px;border-radius:13px;padding:14px 15px;margin-top:12px;}
.note-label{font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;}
.note-title{font-family:'Sora',sans-serif;font-size:16px;font-weight:600;color:${C.navy};margin-top:5px;line-height:1.35;}
.note-body{font-size:14px;color:${C.ink};margin-top:5px;line-height:1.6;}
.touch{display:flex;align-items:center;gap:12px;background:#fff;border:1.5px solid ${C.blue};
       border-radius:13px;padding:13px 14px;margin-top:10px;}
.avatar{width:38px;height:38px;border-radius:99px;background:${C.blue};color:#fff;flex-shrink:0;
        display:grid;place-items:center;font-family:'Sora',sans-serif;font-weight:700;font-size:14px;}

/* why */
.why{margin-top:4px;padding-top:12px;border-top:1px solid ${C.line};}
.why-row{display:flex;gap:11px;align-items:flex-start;padding-bottom:11px;}
.pip{width:8px;height:8px;border-radius:99px;background:${C.gold};flex-shrink:0;margin-top:6px;}
.why-row b{display:block;font-family:'Sora',sans-serif;font-size:15px;font-weight:600;color:${C.navy};}
.why-row em{display:block;font-size:13.5px;color:${C.mute};font-style:normal;margin-top:1px;}

/* stats */
.stats{display:flex;gap:10px;margin-top:16px;}
.stat{flex:1;background:${C.paper};border:1px solid ${C.line};border-radius:12px;padding:12px 8px;text-align:center;}
.stat b{display:block;font-family:'Anton',sans-serif;font-size:24px;font-weight:400;line-height:1;}
.stat span{display:block;font-size:11.5px;color:${C.mute};margin-top:5px;}

/* next up */
.next-up{display:flex;align-items:center;gap:12px;background:${C.paper};border:1px solid ${C.line};
         border-radius:13px;padding:13px 14px;margin-top:12px;}
.next-up b{display:block;font-family:'Sora',sans-serif;font-size:15px;color:${C.navy};}
.next-up em{display:block;font-size:13px;color:${C.mute};font-style:normal;margin-top:2px;line-height:1.5;}
.ring{width:48px;height:48px;border-radius:99px;flex-shrink:0;display:grid;place-items:center;}
.ring span{width:36px;height:36px;border-radius:99px;background:#fff;display:grid;place-items:center;
           font-family:'Sora',sans-serif;font-size:13px;font-weight:700;color:${C.navy};}

/* supply */
.supply{display:flex;align-items:center;gap:12px;margin-top:16px;padding-top:16px;border-top:1px solid ${C.line};}
.supply span{display:block;font-size:13.5px;color:${C.mute};}
.supply b{display:block;font-family:'Sora',sans-serif;font-size:15.5px;margin-top:2px;}
.paid{display:block;font-size:13px;color:${C.mute};font-style:normal;margin-top:4px;line-height:1.5;}
.paid.warn{color:${C.warn};font-weight:600;}

/* set-up list */
.setup{list-style:none;margin:0;padding:0;}
.setup-row{display:flex;gap:12px;}
.spine{width:30px;position:relative;flex-shrink:0;}
.rail{position:absolute;left:14px;width:2px;}
.node{position:absolute;left:3px;top:16px;width:24px;height:24px;border-radius:99px;background:#fff;
      border:2.5px solid #c3cedd;display:grid;place-items:center;color:${C.navy};font-size:13px;font-weight:800;
      font-family:'Sora',sans-serif;z-index:1;}
.node.on{background:${C.gold};border-color:${C.gold};}
.setup-card{flex:1;min-width:0;background:${C.card};border:1.5px solid ${C.line};border-radius:14px;
            padding:14px 15px;margin-bottom:10px;}
.setup-card.due{border-color:${C.blue};}
.setup-head h3{font-family:'Sora',sans-serif;font-size:16px;font-weight:600;color:${C.navy};line-height:1.35;}
.setup-head p{font-size:14px;margin-top:5px;line-height:1.5;}
.setup-body{margin-top:12px;padding-top:12px;border-top:1px solid ${C.line};}
.choice{display:flex;align-items:center;gap:11px;width:100%;text-align:left;padding:12px 14px;min-height:52px;
        border-radius:12px;background:#fff;border:1.5px solid ${C.line};font-size:15px;font-weight:600;color:${C.navy};margin-top:8px;}
.choice.on{background:#F2F7FD;border-color:${C.blue};}
.choice.big{min-height:58px;font-size:16px;}
.radio{width:24px;height:24px;border-radius:99px;flex-shrink:0;display:grid;place-items:center;
       background:#fff;border:2px solid #c3cedd;color:${C.mute};font-size:12.5px;font-weight:800;}
.choice.on .radio{background:${C.blue};border-color:${C.blue};color:#fff;}

/* calendar */
.cal-head{display:flex;width:100%;align-items:center;justify-content:space-between;gap:12px;
          background:transparent;padding:22px 2px 12px;}
.cal{display:grid;grid-template-columns:repeat(7,1fr);gap:6px;}
.cal-h{text-align:center;font-family:'Sora',sans-serif;font-size:11px;color:${C.mute};font-weight:600;}
.cal-c{aspect-ratio:1;border-radius:10px;display:flex;align-items:center;justify-content:center;
       font-family:'Sora',sans-serif;font-size:15px;font-weight:700;}

/* sticky footer */
.gg-foot{position:fixed;left:0;right:0;bottom:0;z-index:45;pointer-events:none;}
.gg-foot-inner{max-width:440px;margin:0 auto;pointer-events:auto;background:#fff;border-top:1px solid ${C.line};
  box-shadow:0 -6px 24px rgba(15,36,68,.12);padding:10px 16px calc(10px + env(safe-area-inset-bottom));
  display:flex;align-items:center;gap:12px;
  transform:translateY(125%);visibility:hidden;
  transition:transform .28s cubic-bezier(.4,0,.2,1),visibility 0s linear .28s;}
.gg-foot.on .gg-foot-inner{transform:translateY(0);visibility:visible;
  transition:transform .28s cubic-bezier(.4,0,.2,1),visibility 0s;}
.foot-eyebrow{font-family:'Sora',sans-serif;font-size:10px;letter-spacing:1.2px;text-transform:uppercase;color:${C.mute};font-weight:600;}
.foot-days{font-family:'Sora',sans-serif;font-size:17px;font-weight:700;line-height:1.1;}
.foot-note{font-size:13px;color:${C.mute};text-align:center;margin-top:18px;line-height:1.6;}

/* sheets */
.modal{position:fixed;inset:0;z-index:60;background:rgba(14,34,73,.55);display:flex;align-items:flex-end;justify-content:center;}
.sheet{width:100%;max-width:440px;max-height:90vh;max-height:90dvh;overflow-y:auto;background:${C.card};
       border-radius:20px 20px 0 0;padding:14px 16px calc(26px + env(safe-area-inset-bottom));outline:none;}
.grab{width:40px;height:4px;border-radius:2px;background:${C.line};margin:0 auto 14px;}
.sheet-head{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:14px;}
.center-block{text-align:center;padding:8px 0 4px;}
.big-tick{width:54px;height:54px;border-radius:99px;background:${C.goodBg};border:2px solid ${C.good};
          margin:0 auto 14px;display:grid;place-items:center;color:${C.good};font-size:26px;font-weight:800;}

/* order */
.prog{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:14px;min-height:64px;
      border-radius:13px;background:#fff;border:2px solid ${C.line};margin-top:9px;}
.prog.on{background:#F2F7FD;border-color:${C.blue};}
.prog .left b{display:block;font-family:'Sora',sans-serif;font-size:16px;font-weight:700;color:${C.navy};}
.prog .left em{display:block;font-size:13px;color:${C.mute};font-style:normal;margin-top:2px;}
.lasts{text-align:right;flex-shrink:0;}
.lasts b{display:block;font-family:'Anton',sans-serif;font-size:20px;font-weight:400;color:${C.navy};line-height:1;}
.lasts em{display:block;font-size:11.5px;color:${C.mute};font-style:normal;margin-top:2px;}
.collect{margin-top:15px;padding:13px 14px;background:${C.paper};border:1px solid ${C.line};border-radius:13px;}
.collect div{display:flex;justify-content:space-between;gap:12px;margin-bottom:8px;}
.collect span{font-size:13.5px;color:${C.mute};}
.collect b{font-family:'Sora',sans-serif;font-size:14px;font-weight:600;color:${C.navy};}

/* check */
.cmp{padding-bottom:16px;}
.cmp b{font-family:'Sora',sans-serif;font-size:15px;color:${C.navy};}
.cmp .row-between span{font-size:13px;font-weight:700;}
.cmp-row{display:flex;align-items:center;gap:9px;margin-top:6px;}
.cmp-row span{font-size:11.5px;color:${C.mute};width:32px;flex-shrink:0;}
.cmp-row span.now{color:${C.navy};font-weight:700;}
.verdict{background:${C.goodBg};border:1.5px solid ${C.good};border-radius:14px;padding:15px;
         font-size:14.5px;color:${C.good};line-height:1.65;}
.verdict.flat{background:${C.oliveLt};border-color:#d7dccf;color:${C.olive};}

/* notifications */
.notif{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-top:1px solid ${C.line};}
.notif-dot{width:10px;height:10px;border-radius:99px;flex-shrink:0;margin-top:6px;background:${C.gold};}
.notif.page .notif-dot{background:${C.blue};}
.notif.room .notif-dot{background:${C.good};}
.notif b{display:block;font-family:'Sora',sans-serif;font-size:15.5px;font-weight:600;color:${C.navy};}
.notif em{display:block;font-size:14px;color:${C.mute};font-style:normal;margin-top:3px;line-height:1.55;}

/* sync chip */
.chip{display:inline-flex;align-items:center;gap:6px;padding:0 11px;height:44px;border-radius:999px;
      font-size:12px;font-weight:700;white-space:nowrap;border:1px solid ${C.line};background:${C.card};color:${C.mute};}
.chip i{width:8px;height:8px;border-radius:99px;background:${C.mute};}
.chip.ok{background:${C.goodBg};border-color:#BFE4CE;color:${C.good};} .chip.ok i{background:${C.good};}
.chip.down{background:${C.clayBg};border-color:${C.clay};color:${C.clay};} .chip.down i{background:${C.clay};}

/* releases + lapsed */
.releases{margin-top:16px;padding-top:16px;border-top:1px solid ${C.line};}
.rel{display:flex;align-items:center;gap:11px;padding:8px 0;font-size:14.5px;color:${C.navy};}
.rel em{font-size:13.5px;color:${C.mute};font-style:normal;}
.node.sm{position:static;width:22px;height:22px;font-size:12px;border-width:2px;}
.btn.inline{margin-top:0;}
.lapsed{margin-top:16px;padding:15px;background:${C.clayBg};border:1.5px solid ${C.clay};border-radius:14px;}
.lapsed b{font-family:'Sora',sans-serif;font-size:16px;color:${C.clay};}
.lapsed p{font-size:14px;color:${C.ink};margin-top:6px;line-height:1.6;}

/* skip link + about numbers */
.skip{position:absolute;left:-9999px;top:8px;z-index:100;background:${C.navy};color:#fff;
      padding:12px 18px;border-radius:10px;font-weight:700;text-decoration:none;}
.skip:focus{left:16px;}
main:focus{outline:none;}
.num{width:26px;height:26px;border-radius:99px;background:${C.navy};color:#fff;flex-shrink:0;
     display:grid;place-items:center;font-family:'Sora',sans-serif;font-weight:700;font-size:13px;}

/* demo */
.demo{margin-top:18px;padding:12px 13px;background:${C.card};border:1.5px dashed ${C.sky};border-radius:13px;}
.demo-label{font-size:11.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${C.mute};margin-bottom:9px;}
.demo-row{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;}
.demo-btn{flex:1 1 28%;min-height:44px;border-radius:10px;font-size:12px;font-weight:700;
          background:#fff;border:1.5px solid ${C.line};color:${C.mute};}
.demo-btn.on{background:${C.navy};border-color:${C.navy};color:#fff;}

/* toast + confetti */
.toast{position:fixed;left:16px;right:16px;bottom:96px;z-index:70;margin:0 auto;max-width:400px;text-align:center;
       background:${C.navy};color:#fff;padding:12px 18px;border-radius:12px;font-size:14px;
       box-shadow:0 12px 30px -10px rgba(14,34,73,.6);}
.cf-wrap{position:fixed;inset:0;z-index:90;pointer-events:none;overflow:hidden;}
.cf{position:absolute;top:26%;border-radius:2px;animation-name:cf;animation-timing-function:cubic-bezier(.15,.6,.4,1);animation-fill-mode:forwards;}
@keyframes cf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--tx),var(--ty)) rotate(var(--rot));opacity:0}}
@keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}} .fade{animation:fade .2s ease;}
@keyframes up{from{transform:translateY(20px);opacity:0}to{transform:none;opacity:1}} .up{animation:up .24s ease;}

/* small screens */
@media(max-width:400px){.gg{font-size:14.5px;}.col{padding-left:13px;padding-right:13px;}}
@media(max-width:360px){.col{padding-left:11px;padding-right:11px;}.stats{gap:7px;}.stat b{font-size:20px;}
  .spine{width:24px;}.slot{flex-wrap:wrap;}.slot .btn{width:100%;margin-top:8px;}}
@media(max-width:320px){.col{padding-left:9px;padding-right:9px;}.gg{font-size:14px;}}
@media(max-height:520px){.sheet{max-height:96dvh;}}
@media(prefers-reduced-motion:reduce){.fade,.up,.cf{animation:none;}.gg-foot-inner{transition:none;}}
  `}</style>
);
