import React, { useState } from "react";

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

const C = {
  navy: "#0e2249", navyD: "#07142e", paper: "#eef2f7", card: "#fff", ink: "#1a2740",
  mute: "#5a6b82", gold: "#f5b716", goldD: "#c08a0c", line: "#e2e8f0",
  good: "#157a43", blue: "#2569b8",
  /* three metals: arrival, company grade, field grade */
  bronzeLo: "#8C5A2B", bronze: "#B87A3D", bronzeHi: "#E2A96A",
  silverLo: "#7E8A9C", silver: "#B9C4D2", silverHi: "#EDF1F6",
  goldLo: "#B07E0A", goldHi: "#FFD968",
};
const METAL = {
  bronze: { lo: C.bronzeLo, mid: C.bronze, hi: C.bronzeHi, ink: "#3A2410" },
  silver: { lo: C.silverLo, mid: C.silver, hi: C.silverHi, ink: C.navy },
  gold:   { lo: C.goldLo,   mid: C.gold,   hi: C.goldHi,   ink: "#3A2A00" },
};

/* ---------------------------------------------------------------
   INSIGNIA
   AFP company grade = 1–3 triangles (Katipunan "Hasik" triangle:
   one member brings two). Field grade = suns. Both normally carry
   the baybayin ka. Our modification: the ka is replaced by the
   gentrep three-node mark, which is itself a triangle of nodes.
   --------------------------------------------------------------- */

let gid = 0;
const useMetal = (metal) => {
  const m = METAL[metal] || METAL.gold;
  const id = "m" + metal;
  return { m, id,
    defs: (
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0%" stopColor={m.hi} />
          <stop offset="42%" stopColor={m.mid} />
          <stop offset="72%" stopColor={m.lo} />
          <stop offset="100%" stopColor={m.mid} />
        </linearGradient>
      </defs>
    ) };
};

/* the three-node mark, in brand blue — the device at the centre of every insignia */
const NodeMark = ({ cx, cy, s, color = GENTREP_BLUE }) => (
  <g fill={color} stroke={color} strokeWidth={s * 0.15} strokeLinecap="round" strokeLinejoin="round">
    <line x1={cx - s * 0.42} y1={cy + s * 0.30} x2={cx + s * 0.12} y2={cy - s * 0.46} />
    <line x1={cx - s * 0.42} y1={cy + s * 0.30} x2={cx + s * 0.44} y2={cy + s * 0.28} />
    <circle cx={cx + s * 0.12} cy={cy - s * 0.46} r={s * 0.19} />
    <circle cx={cx - s * 0.42} cy={cy + s * 0.30} r={s * 0.25} />
    <circle cx={cx + s * 0.44} cy={cy + s * 0.28} r={s * 0.33} />
  </g>
);

/* Bars — company grade. Solid horizontal bars, never angled chevrons,
   so they read as officer rather than NCO. The g is engraved across them. */
const Bars = ({ n = 1, size = 46, metal = "silver", mark = true }) => {
  const { m, id, defs } = useMetal(metal);
  const bh = 21, gap = 9;
  const H = n * bh + (n - 1) * gap;
  const W = 100;
  return (
    <svg width={size * 1.7} height={size * 1.7 * (H / W)} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      {defs}
      {Array.from({ length: n }).map((_, i) => (
        <g key={i}>
          <rect x="1.5" y={i * (bh + gap) + 1.2} width={W - 3} height={bh - 2.4} rx={4}
                fill={`url(#${id})`} stroke={m.lo} strokeWidth="2.2" />
          <line x1="7" y1={i * (bh + gap) + bh * 0.34} x2={W - 7} y2={i * (bh + gap) + bh * 0.34}
                stroke={m.hi} strokeWidth="1.2" opacity=".55" />
        </g>
      ))}
      {mark && <NodeMark cx={W / 2} cy={H / 2} s={H * 0.42} />}
    </svg>
  );
};

/* Rank cluster — arranged as a Hasik pyramid, not a row of shoulder pips.
   1 = one, 2 = a pair, 3 = one over two. */
const Cluster = ({ n = 1, size = 44, metal = "silver" }) => {
  if (n === 1) return <Pip size={size} metal={metal} />;
  if (n === 2) return (
    <span style={{ display: "inline-flex", gap: 7, alignItems: "flex-end" }}>
      <Pip size={size} metal={metal} /><Pip size={size} metal={metal} />
    </span>
  );
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <Pip size={size * .82} metal={metal} />
      <span style={{ display: "inline-flex", gap: 5 }}>
        <Pip size={size * .82} metal={metal} mark={false} />
        <Pip size={size * .82} metal={metal} mark={false} />
      </span>
    </span>
  );
};

/* eight-rayed sun with the node mark inside — field grade */
/* D — Lozenge: a beveled diamond plate, no rays at all */
const LozengeEmblem = ({ size = 56, metal = "gold" }) => {
  const { m, id, defs } = useMetal(metal);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {defs}
      <path d="M50 4 L96 50 L50 96 L4 50 Z" fill={`url(#${id})`} stroke={m.lo} strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M50 15 L85 50 L50 85 L15 50 Z" fill="none" stroke={m.ink} strokeWidth="1.4" opacity=".3" />
      <path d="M50 4 L96 50 L50 50 Z" fill={m.hi} opacity=".28" />
      <NodeMark cx={50} cy={50} s={26} />
    </svg>
  );
};

/* activation seal — no rank yet, just the mark */
const Seal = ({ size = 52, metal = "bronze" }) => {
  const { m, id, defs } = useMetal(metal);
  return (
  <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
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
);};

/* Field grade — one to three lozenges in gold, mirroring the one to three
   silver bars of company grade. Major, Lieutenant Colonel, Colonel. */
const Field = ({ n = 1, size = 52, metal = "gold" }) => (
  <span style={{ display: "inline-flex", gap: n === 3 ? 5 : 7, alignItems: "center" }}>
    {Array.from({ length: n }).map((_, i) => (
      <LozengeEmblem key={i} size={n === 3 ? size * 0.82 : n === 2 ? size * 0.92 : size} metal={metal} />
    ))}
  </span>
);

const Insignia = ({ kind, n = 1, size = 46, metal }) => {
  if (kind === "seal") return <Seal size={size + 6} metal={metal || "bronze"} />;
  if (kind === "field") return <Field n={n} size={size + 10} metal={metal || "gold"} />;
  return <Bars n={n} size={size} metal={metal || "silver"} />;
};

/* Verification QR — seeded from the reference so every certificate differs */
const VerifyQR = ({ seedText = "GA", size = 74, fg = "#0e2249", bg = "#fff" }) => {
  let seed = 7; for (const ch of seedText) seed = (seed * 31 + ch.charCodeAt(0)) & 0x7fffffff;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const N = 21, cell = 100 / N, r = [];
  const finder = (x, y) => {
    r.push(<rect key={"f" + x + y} x={x * cell} y={y * cell} width={cell * 7} height={cell * 7} fill={fg} />);
    r.push(<rect key={"g" + x + y} x={(x + 1) * cell} y={(y + 1) * cell} width={cell * 5} height={cell * 5} fill={bg} />);
    r.push(<rect key={"h" + x + y} x={(x + 2) * cell} y={(y + 2) * cell} width={cell * 3} height={cell * 3} fill={fg} />);
  };
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const inFinder = (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9);
    if (!inFinder && rnd() > 0.52) r.push(<rect key={x + "_" + y} x={x * cell} y={y * cell} width={cell + .35} height={cell + .35} fill={fg} />);
  }
  finder(0, 0); finder(N - 7, 0); finder(0, N - 7);
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true"
         style={{ display: "block", background: bg, borderRadius: 4 }}>{r}</svg>
  );
};

/* ---------------------------------------------------------------
   THE FIVE CERTIFICATES
   --------------------------------------------------------------- */
const CERTS = [
  { k: "BASE", metal: "bronze", kind: "seal", n: 0, abbr: null,
    rank: "Activated Member",
    corps: "As an activated member of the Gutguard Lifestyle, having completed Admin and Compliance and all five activation events.",
    ref: "GA-BASE-0847", date: "28 July 2026" },

  { k: "TL", metal: "silver", kind: "tri", n: 1, abbr: "2Lt",
    rank: "Academy Second Lieutenant · Team Leader",
    corps: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Team Leader course and demonstrated them in the field.",
    ref: "GA-TL-0847", date: "16 August 2026" },

  { k: "SL", metal: "silver", kind: "tri", n: 2, abbr: "1Lt",
    rank: "Academy First Lieutenant · Squad Leader",
    corps: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Squad Leader course and presented before a room.",
    ref: "GA-SL-0847", date: "4 October 2026" },

  { k: "PL", metal: "silver", kind: "tri", n: 3, abbr: "Capt",
    rank: "Academy Captain · Platoon Leader",
    corps: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Platoon Leader course and trained a Team Leader through to certification.",
    ref: "GA-PL-0847", date: "22 November 2026" },

  { k: "CC", metal: "gold", kind: "field", n: 1, abbr: "Maj",
    rank: "Academy Major · Company Commander",
    corps: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Company Commander course and trained a Squad Leader through to certification.",
    ref: "GA-CC-0847", date: "14 February 2027" },

  { k: "BC", metal: "gold", kind: "field", n: 2, abbr: "LtCol",
    rank: "Academy Lieutenant Colonel · Battalion Commander",
    corps: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Battalion Commander course and raised a Company Commander to certification.",
    ref: "GA-BC-0847", date: "9 May 2027" },

  { k: "RC", metal: "gold", kind: "field", n: 3, abbr: "Col",
    rank: "Academy Colonel · Brigade Commander",
    corps: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Brigade Commander course and built a field of certified officers.",
    ref: "GA-RC-0847", date: "18 October 2027" },
];

const ME = { name: "Jesher Charles Dlonsod", team: "Bravo", card: "0240 5578 9012 3456" };

function Certificate({ c, dark = false }) {
  const bg = dark ? `linear-gradient(158deg, ${C.navy}, ${C.navyD})`
                  : `linear-gradient(160deg, #FCFAF4, #F3EFE4)`;
  const fg = dark ? "#fff" : C.navy;
  const soft = dark ? "rgba(255,255,255,.74)" : C.mute;
  const rule = dark ? "rgba(255,255,255,.20)" : "rgba(14,34,73,.20)";
  const accent = dark ? C.gold : C.goldD;
  return (
    <div className="cert hatch" style={{ background: bg, color: fg, borderRadius: 20, padding: "26px 22px 22px",
                  position: "relative", overflow: "hidden", isolation: "isolate",
                  border: dark ? "none" : `1px solid #E3DCC9`,
                  outline: dark ? "none" : `6px solid ${C.navy}`, outlineOffset: -14,
                  boxShadow: "0 26px 60px -30px rgba(8,20,46,.75)" }}>
      <GentrepLogo markOnly height={300} aria-hidden="true"
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: dark ? .10 : .05, zIndex: -1 }} />

      {/* corner rules */}
      {[["top:14px;left:14px", "border-top:2px solid;border-left:2px solid"],
        ["top:14px;right:14px", "border-top:2px solid;border-right:2px solid"],
        ["bottom:14px;left:14px", "border-bottom:2px solid;border-left:2px solid"],
        ["bottom:14px;right:14px", "border-bottom:2px solid;border-right:2px solid"]].map((s, i) => (
        <span key={i} aria-hidden="true" style={{ position: "absolute", width: 22, height: 22, borderColor: rule,
          ...(i === 0 ? { top: 14, left: 14, borderTop: `2px solid ${rule}`, borderLeft: `2px solid ${rule}` } :
              i === 1 ? { top: 14, right: 14, borderTop: `2px solid ${rule}`, borderRight: `2px solid ${rule}` } :
              i === 2 ? { bottom: 14, left: 14, borderBottom: `2px solid ${rule}`, borderLeft: `2px solid ${rule}` } :
                        { bottom: 14, right: 14, borderBottom: `2px solid ${rule}`, borderRight: `2px solid ${rule}` }) }} />
      ))}

      <div style={{ textAlign: "center" }}>

        {/* 1 — the Academy, on top */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 7 }}>
          <GentrepLogo height={22} color={fg} />
          <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontStyle: "italic", fontSize: 19, lineHeight: .92, color: fg }}>
            Academy
          </span>
        </div>

        {/* 2 — certification */}
        <div className="inr" style={{ fontSize: 11, letterSpacing: ".34em", textTransform: "uppercase",
                                      color: accent, marginTop: 15, fontWeight: 700, paddingLeft: ".34em" }}>
          Certification
        </div>

        {/* 3 — the insignia */}
        <div style={{ margin: "16px 0 2px", display: "flex", justifyContent: "center", alignItems: "flex-end", minHeight: 62 }}>
          <Insignia kind={c.kind} n={c.n} metal={c.metal} size={c.n === 3 ? 40 : 46} />
        </div>

        {/* 4 — rank and name */}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: "'Playfair Display',Georgia,serif", fontStyle: "italic", fontSize: 29,
                        lineHeight: 1.2, margin: "0 6px" }}>
            {c.abbr ? c.abbr + " " : ""}{ME.name}
          </div>
          <div className="inr" style={{ fontSize: 13, color: soft, marginTop: 7, letterSpacing: ".02em" }}>{c.rank}</div>
        </div>

        <div style={{ height: 1, background: rule, margin: "18px 26px" }} />

        {/* 5 — the citation */}
        <p className="inr" style={{ fontSize: 13.5, color: dark ? "rgba(255,255,255,.86)" : C.ink,
                                    lineHeight: 1.72, margin: "0 14px" }}>
          {c.corps}
        </p>

        {/* 6 — signatures */}
        <div style={{ display: "flex", gap: 18, justifyContent: "center", marginTop: 26 }}>
          {["Academy Commandant", "Chief Operating Officer"].map(t => (
            <div key={t} style={{ flex: 1, maxWidth: 160 }}>
              <div style={{ height: 1, background: rule }} />
              <div className="inr" style={{ fontSize: 10.5, letterSpacing: ".1em", textTransform: "uppercase",
                                            color: soft, marginTop: 6 }}>{t}</div>
            </div>
          ))}
        </div>

        {/* 7 — verification */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 22 }}>
          <div style={{ padding: 6, background: "#fff", borderRadius: 8,
                        border: dark ? "none" : `1px solid ${rule}` }}>
            <VerifyQR seedText={c.ref} size={72} />
          </div>
          <div className="inr" style={{ fontSize: 9.5, letterSpacing: ".13em", textTransform: "uppercase",
                                        color: soft, marginTop: 7 }}>
            Scan to verify
          </div>
        </div>

        {/* 8 — record */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 16, paddingTop: 13,
                      borderTop: `1px solid ${rule}` }}>
          <div style={{ textAlign: "left" }}>
            <div className="inr" style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: soft }}>Dated</div>
            <div className="osw" style={{ fontSize: 12.5, fontWeight: 600, marginTop: 2 }}>{c.date}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div className="inr" style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: soft }}>Card</div>
            <div className="osw" style={{ fontSize: 12.5, fontWeight: 600, marginTop: 2 }}>{ME.card.slice(-9)}</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="inr" style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: soft }}>Reference</div>
            <div className="osw" style={{ fontSize: 12.5, fontWeight: 600, marginTop: 2, letterSpacing: ".03em" }}>{c.ref}</div>
          </div>
        </div>

        <p className="inr" style={{ fontSize: 10, color: soft, lineHeight: 1.5, margin: "13px 8px 0", opacity: .8 }}>
          An internal distinction of the Gentrep Academy.
        </p>
      </div>
    </div>
  );
}

export default function CertificateSamples() {
  const dark = false;   // cream stock is the finished version
  return (
    <div className="wrap">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Anton&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap');
        *{box-sizing:border-box;}
        .osw{font-family:'Sora',system-ui,sans-serif;} .ant{font-family:'Anton',system-ui,sans-serif;}
        .inr{font-family:'Inter',system-ui,sans-serif;}
        button{font-family:'Sora',sans-serif;cursor:pointer;border:none;min-height:44px;}
        .wrap{min-height:100vh;background:${C.paper};padding:26px 16px 60px;font-family:'Inter',system-ui,sans-serif;color:${C.ink};}
        .col{max-width:460px;margin:0 auto;}
        .hatch{background-image:repeating-linear-gradient(115deg,rgba(255,255,255,.06) 0 2px,transparent 2px 13px);}
        .cert{margin-bottom:16px;}
        .lbl{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:${C.mute};font-weight:700;margin:26px 0 8px;}
        @media(min-width:940px){
          .col{max-width:1080px;}
          .grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;}
          .cert{margin-bottom:0;}
        }
      `}</style>
      <div className="col">
        <div style={{ marginBottom: 6 }}>
          <GentrepLogo height={28} color={C.navy} />
          <div className="inr" style={{ fontSize: 13.5, color: C.mute, marginTop: 7 }}>
            Certificates · seven levels · final
          </div>
        </div>

        {/* insignia key */}
        <div style={{ background: C.card, border: `1.5px solid ${C.line}`, borderRadius: 16, padding: "16px 16px 8px", marginTop: 14 }}>
          <div className="inr" style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: C.mute, fontWeight: 700 }}>
            The insignia
          </div>
          <p className="inr" style={{ fontSize: 13.5, color: C.ink, lineHeight: 1.65, margin: "8px 0 14px" }}>
            Inspired by the Katipunan's <i>Hasik</i> method — one member brings two, making a network of triangles —
            which is also how this business grows. Deliberately drawn <i>unlike</i> AFP insignia: the pips are rounded
            keystones with a truncated apex, stacked as a pyramid rather than worn in a row, the centre carries the gentrep <i>g</i> instead of the baybayin <i>ka</i>, and the field-grade emblem is a twelve-node ring, not an eight-rayed sun.
            The metal carries the grade: <b>bronze</b> on arrival, <b>silver</b> through the company grades,
            <b>gold</b> when you reach field grade.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "flex-end", paddingBottom: 10 }}>
            {[["Activated", "seal", 0, "bronze"], ["2Lt", "tri", 1, "silver"], ["1Lt", "tri", 2, "silver"],
              ["Capt", "tri", 3, "silver"], ["Maj", "field", 1, "gold"], ["LtCol", "field", 2, "gold"],
              ["Col", "field", 3, "gold"]].map(([l, k, n, mt]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ minHeight: 46, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                  <Insignia kind={k} n={n} metal={mt} size={n === 3 ? 22 : 26} />
                </div>
                <div className="inr" style={{ fontSize: 12, color: C.mute, marginTop: 7, fontWeight: 600 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lbl">Certificates</div>
        <div className="grid">
          {CERTS.map(c => <Certificate key={c.k} c={c} dark={dark} />)}
        </div>
      </div>
    </div>
  );
}
