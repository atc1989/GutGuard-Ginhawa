import React, { useState, useRef, useEffect } from "react";

/* ------------------------------------------------------------------
   NOTE FOR JESH: this file was recovered from a compiled build, so the
   markup is expressed as jsx()/jsxs() calls rather than JSX tags.
   It is ordinary React and behaves identically. The two helpers below
   stand in for "react/jsx-runtime".
   ------------------------------------------------------------------ */
const Fragment = React.Fragment;
const jsx = (type, props, key) => {
  const { children, ...rest } = props || {};
  return React.createElement(type, key === undefined ? rest : { ...rest, key }, children);
};
const jsxs = (type, props, key) => {
  const { children, ...rest } = props || {};
  return React.createElement(type, key === undefined ? rest : { ...rest, key },
                             ...(Array.isArray(children) ? children : [children]));
};

const GENTREP_BLUE = "#0205C6";
const GentrepLogo = ({
  height = 28,
  color = "currentColor",
  markOnly = false,
  style
}) => jsxs("svg", { viewBox: markOnly ? "8 1 289 356" : "0 0 1688 508", height, style: {
  display: "block",
  overflow: "visible",
  ...style
}, role: "img", "aria-label": "Gentrep", children: [
  !markOnly && jsx("path", { d: "M198.0 502.4C196.6 502.2 190.3 501.3 184.0 500.4C154.0 496.1 125.7 484.6 105.7 468.5C103.7 466.9 102.0 465.1 102.0 464.6C102.0 463.5 116.8 441.3 118.0 440.5C118.5 440.2 122.1 442.5 126.2 445.6C130.2 448.6 139.3 454.0 146.5 457.5C169.2 468.6 189.8 473.2 217.0 473.3C269.8 473.4 298.1 453.8 307.0 411.0C308.8 402.5 309.3 395.8 309.7 375.8C310.3 350.0 309.9 347.5 306.4 354.2C304.1 358.7 288.6 374.0 281.5 378.7C261.5 392.1 239.0 398.4 211.0 398.4C194.6 398.4 180.8 396.3 167.6 391.8C131.6 379.6 104.2 352.6 92.6 318.0C87.7 303.2 86.5 294.8 86.6 276.0C86.6 260.3 86.9 257.3 89.4 247.1C92.5 234.8 96.2 225.0 100.6 217.5L103.3 212.8L106.7 218.1C111.1 225.1 117.4 238.3 119.1 244.0C120.0 247.1 120.4 255.8 120.5 271.5C120.6 293.6 120.7 294.9 123.3 303.4C131.1 328.6 144.4 345.3 166.0 357.2C198.5 375.1 245.6 372.3 274.9 350.7C300.5 331.9 313.8 300.0 310.2 266.7C305.3 221.4 273.4 190.5 226.8 185.8C212.6 184.4 195.5 185.7 184.5 189.2C175.3 192.1 157.5 192.3 148.5 189.6C141.3 187.5 131.0 183.0 131.0 182.0C131.0 180.8 144.2 172.8 153.5 168.4C187.9 152.2 233.9 152.0 267.4 168.0C271.8 170.2 278.4 173.8 281.9 176.2C289.5 181.1 302.2 193.4 307.0 200.5L310.5 205.5L310.8 181.8L311.0 158.0L327.0 158.0L343.1 158.0L342.8 280.2L342.5 402.5L340.2 414.0C334.9 440.5 326.7 457.4 312.1 472.1C297.6 486.6 279.8 495.3 254.9 500.0C245.9 501.8 239.0 502.3 222.0 502.5C210.2 502.7 199.4 502.7 198.0 502.4ZM1448.7 468.4C1448.3 468.0 1448.0 398.2 1448.0 313.3L1448.0 159.0L1467.5 159.0L1487.0 159.0L1487.0 176.5C1487.0 186.1 1487.2 194.0 1487.4 194.0C1487.6 194.0 1490.9 190.8 1494.7 186.9C1502.6 178.6 1510.7 172.7 1520.6 167.7C1549.1 153.4 1591.9 153.9 1621.5 168.7C1651.6 183.8 1671.9 209.7 1679.8 243.4C1682.1 253.1 1682.4 256.7 1682.5 272.0C1682.5 286.8 1682.1 291.1 1680.2 300.0C1670.3 344.1 1641.0 374.5 1598.0 385.1C1589.7 387.2 1586.0 387.5 1569.5 387.5C1552.7 387.5 1549.4 387.2 1541.5 385.1C1524.0 380.6 1505.2 369.7 1494.8 358.1C1492.3 355.3 1489.9 353.0 1489.6 353.0C1489.3 353.0 1488.9 379.0 1488.8 410.8L1488.5 468.5L1468.9 468.8C1458.2 468.9 1449.1 468.7 1448.7 468.4ZM964.7 388.0C943.6 384.2 927.7 374.2 918.6 359.1C916.7 356.0 913.9 349.7 912.4 345.0L909.5 336.5L909.0 265.0L908.5 193.5L889.2 193.2L870.0 193.0L870.0 176.5L870.0 160.0L889.2 159.8L908.5 159.5L908.8 134.8L909.0 110.0L929.0 110.0L949.0 110.0L949.2 134.8L949.5 159.5L982.0 160.0L1014.5 160.5L1014.8 176.7L1015.0 193.0L982.3 193.2L949.5 193.5L949.5 259.5L949.5 325.5L951.9 332.5C955.0 341.4 960.7 347.7 969.3 351.6C974.9 354.2 976.5 354.4 986.0 354.3C997.4 354.2 1005.0 352.3 1012.2 347.5C1014.3 346.1 1016.3 345.0 1016.8 345.0C1017.2 345.0 1019.3 348.9 1021.4 353.8C1023.5 358.6 1026.3 364.9 1027.6 367.8L1030.0 373.2L1027.7 375.1C1023.7 378.6 1013.7 383.3 1005.0 385.7C995.6 388.4 973.7 389.7 964.7 388.0ZM474.0 387.4C445.4 382.3 430.4 376.0 412.0 361.4C393.5 346.7 381.3 326.8 374.9 301.0C372.9 292.8 372.6 289.0 372.5 273.0C372.5 257.2 372.8 253.0 374.8 244.0C383.9 203.7 411.7 173.7 450.9 162.1C472.8 155.6 499.5 155.6 521.5 162.2C557.3 173.0 583.1 200.7 593.5 239.5C595.8 248.1 596.3 252.1 596.7 267.8L597.2 286.0L505.1 286.0L413.0 286.0L413.0 288.3C413.0 289.5 413.9 293.8 415.0 297.8C426.3 338.5 469.7 360.5 518.0 350.0C532.2 346.9 544.4 340.5 554.8 330.7L560.2 325.5L564.2 330.0C573.9 340.8 582.0 350.8 582.0 352.0C582.0 353.8 573.3 362.0 565.7 367.3C554.1 375.6 540.5 381.5 524.5 385.2C517.3 386.9 511.6 387.3 496.0 387.6C485.3 387.7 475.4 387.6 474.0 387.4ZM1279.0 385.6C1255.2 380.7 1236.5 371.2 1220.6 355.9C1202.5 338.6 1191.8 318.1 1188.0 293.5C1185.1 275.2 1187.1 247.8 1192.4 232.2C1206.7 190.3 1242.6 162.2 1287.4 157.9C1349.2 151.9 1399.2 188.4 1409.5 247.0C1411.4 257.9 1412.5 275.3 1411.6 281.3L1410.9 286.0L1318.9 286.0L1227.0 286.0L1227.6 290.2C1227.9 292.6 1229.2 297.5 1230.5 301.2C1239.1 326.7 1260.8 345.1 1288.9 350.7C1299.7 352.9 1319.5 352.8 1330.2 350.7C1344.5 347.8 1358.7 340.6 1369.8 330.5C1372.7 327.9 1375.2 325.9 1375.4 326.1C1391.6 344.8 1397.0 351.3 1397.0 352.0C1397.0 353.5 1383.5 365.4 1376.6 369.9C1366.8 376.2 1353.5 381.7 1341.0 384.7C1332.1 386.9 1327.5 387.3 1310.5 387.6C1292.5 387.9 1289.4 387.7 1279.0 385.6ZM633.0 272.5L633.0 159.0L652.2 159.2L671.5 159.5L672.0 175.9L672.5 192.3L675.9 188.4C688.3 174.1 709.0 163.0 730.1 159.1C749.2 155.7 771.8 157.0 788.9 162.5C820.6 172.8 839.3 195.6 845.7 231.6C847.2 240.4 847.4 249.5 847.5 313.5L847.5 385.5L827.3 385.8L807.1 386.0L806.7 315.8C806.4 253.3 806.1 244.7 804.6 238.0C797.8 209.2 777.3 193.9 745.5 193.9C729.9 193.9 718.8 196.4 706.8 202.7C691.8 210.5 681.1 224.9 675.8 244.5C673.7 252.3 673.6 254.4 673.2 319.2L672.9 386.0L652.9 386.0L633.0 386.0L633.0 272.5ZM1059.5 384.8C1059.2 384.1 1059.1 333.1 1059.2 271.5L1059.5 159.5L1078.8 159.2L1098.0 159.0L1098.0 176.8C1098.0 186.6 1098.3 195.0 1098.6 195.3C1099.0 195.7 1100.6 194.0 1102.1 191.6C1108.1 182.6 1119.5 172.8 1130.6 167.2C1140.5 162.2 1164.8 157.0 1178.7 157.0L1181.0 157.0L1181.0 176.5L1181.0 196.0L1174.7 196.0C1166.0 196.0 1152.5 197.8 1146.5 199.7C1128.1 205.5 1113.6 218.7 1106.5 236.1C1100.7 250.4 1100.6 251.0 1100.0 321.0L1099.5 385.5L1079.7 385.8C1064.5 386.0 1059.8 385.8 1059.5 384.8ZM1584.1 350.5C1604.7 346.1 1623.6 331.1 1633.0 311.5C1637.7 301.7 1639.6 294.6 1641.1 281.4C1643.2 264.2 1639.2 243.8 1630.9 229.4C1617.9 206.5 1593.3 193.0 1565.0 193.0C1533.3 193.0 1507.5 209.5 1495.2 237.5C1487.0 256.2 1486.8 287.5 1494.7 306.4C1505.6 332.6 1526.2 347.9 1556.5 352.4C1561.6 353.1 1576.3 352.1 1584.1 350.5ZM557.7 251.1C556.3 238.3 548.2 222.4 537.6 212.0C529.5 204.1 521.1 198.9 510.5 195.3C502.9 192.6 501.5 192.5 485.0 192.5C468.3 192.6 467.1 192.7 460.0 195.4C443.0 201.8 428.9 213.8 421.2 228.8C417.0 236.7 413.0 249.3 413.0 254.2L413.0 257.0L485.6 257.0L558.3 257.0L557.7 251.1ZM1372.6 255.7C1373.3 253.7 1368.5 235.9 1365.7 230.4C1357.4 214.1 1343.2 201.7 1325.5 195.4C1317.9 192.6 1316.7 192.5 1300.0 192.5C1283.4 192.5 1282.1 192.7 1275.1 195.2C1254.0 203.1 1240.0 216.4 1232.0 236.4C1229.7 242.4 1227.0 252.8 1227.0 256.2C1227.0 256.6 1259.6 257.0 1299.5 257.0C1357.6 257.0 1372.2 256.7 1372.6 255.7Z", fill: color, fillRule: "evenodd" }),
  " ",
  jsx("path", { d: "M201.0 351.6C172.3 345.2 151.1 326.4 142.0 299.3C138.8 289.7 138.7 289.1 138.0 265.0C137.0 233.8 135.5 227.6 126.2 214.5C120.2 206.2 114.8 200.1 109.1 195.5C102.2 189.7 98.8 189.6 88.8 194.6C78.6 199.7 73.7 201.0 63.5 201.0C49.0 201.0 38.5 196.7 28.4 186.6C17.3 175.5 11.2 157.5 13.9 144.3C14.6 141.1 15.3 137.8 15.4 137.0C15.9 134.0 19.0 128.0 23.0 122.1C31.4 109.6 47.9 101.0 63.5 101.0C70.1 101.0 78.1 103.1 90.6 108.0C98.6 111.2 98.8 111.2 102.3 109.5C107.2 107.2 132.7 80.8 135.1 75.6C137.5 70.2 137.5 64.7 134.9 57.4C133.3 52.8 132.9 49.8 133.2 43.5C133.9 28.9 142.0 16.7 155.4 9.7C161.2 6.7 162.1 6.5 172.5 6.5C183.0 6.5 183.9 6.7 190.2 9.8C206.1 17.6 215.2 35.0 212.1 51.6C211.4 55.3 209.7 60.8 208.3 63.7C205.0 70.4 196.7 78.3 189.3 81.8C183.7 84.4 182.9 84.5 166.0 84.5C151.5 84.5 148.0 84.8 145.4 86.2C137.6 90.5 111.9 113.3 109.4 118.2C107.4 122.1 107.7 125.4 110.7 133.9C114.3 144.2 114.5 157.3 111.1 167.2C109.9 170.9 108.4 174.2 107.9 174.5C107.4 174.9 107.0 176.9 107.0 179.2C107.0 182.4 107.6 183.8 110.1 186.1C115.0 190.7 128.8 199.5 137.5 203.6C144.3 206.9 146.6 207.5 154.0 207.8C165.0 208.3 174.5 206.8 187.8 202.5C208.2 195.8 224.7 195.7 242.8 202.2C264.2 210.0 282.0 228.2 289.6 250.5C292.0 257.4 292.5 260.4 292.8 272.6C293.1 284.8 292.9 287.9 291.0 294.6C281.5 329.6 250.6 353.3 215.2 352.9C210.4 352.8 204.0 352.2 201.0 351.6Z", fill: GENTREP_BLUE, fillRule: "evenodd" })
] });
const MET = {
  bronze: {
    lo: "#8C5A2B",
    mid: "#B87A3D",
    hi: "#E2A96A",
    ink: "#3A2410"
  },
  silver: {
    lo: "#7E8A9C",
    mid: "#B9C4D2",
    hi: "#EDF1F6",
    ink: "#0e2249"
  },
  gold: {
    lo: "#B07E0A",
    mid: "#f5b716",
    hi: "#FFD968",
    ink: "#3A2A00"
  }
};
const useMetal = (metal) => {
  const m = MET[metal] || MET.silver, id = "gm-" + metal;
  return {
    m,
    id,
    defs: jsxs("defs", { children: [
      " ",
      jsxs("linearGradient", { id, x1: "0", y1: "0", x2: "0.35", y2: "1", children: [
        " ",
        jsx("stop", { offset: "0%", stopColor: m.hi }),
        " ",
        jsx("stop", { offset: "42%", stopColor: m.mid }),
        " ",
        jsx("stop", { offset: "72%", stopColor: m.lo }),
        " ",
        jsx("stop", { offset: "100%", stopColor: m.mid })
      ] })
    ] })
  };
};
const NodeMark = ({
  cx,
  cy,
  s,
  color = GENTREP_BLUE
}) => jsxs("g", { fill: color, stroke: color, strokeWidth: s * 0.15, strokeLinecap: "round", strokeLinejoin: "round", children: [
  " ",
  jsx("line", { x1: cx - s * 0.42, y1: cy + s * 0.3, x2: cx + s * 0.12, y2: cy - s * 0.46 }),
  " ",
  jsx("line", { x1: cx - s * 0.42, y1: cy + s * 0.3, x2: cx + s * 0.44, y2: cy + s * 0.28 }),
  " ",
  jsx("circle", { cx: cx + s * 0.12, cy: cy - s * 0.46, r: s * 0.19 }),
  " ",
  jsx("circle", { cx: cx - s * 0.42, cy: cy + s * 0.3, r: s * 0.25 }),
  " ",
  jsx("circle", { cx: cx + s * 0.44, cy: cy + s * 0.28, r: s * 0.33 })
] });
const Bars = ({
  n = 1,
  size = 40,
  metal = "silver",
  mark = true
}) => {
  const {
    m,
    id,
    defs
  } = useMetal(metal);
  const bh = 21, gap = 9, W = 100, H = n * bh + (n - 1) * gap;
  return jsxs("svg", { width: size * 1.7, height: size * 1.7 * (H / W), viewBox: `0 0 ${W} ${H}`, "aria-hidden": "true", children: [
    defs,
    Array.from({
      length: n
    }).map((_, i) => jsxs("g", { children: [
      " ",
      jsx("rect", { x: "1.5", y: i * (bh + gap) + 1.2, width: W - 3, height: bh - 2.4, rx: 4, fill: `url(#${id})`, stroke: m.lo, strokeWidth: "2.2" }),
      " ",
      jsx("line", { x1: "7", y1: i * (bh + gap) + bh * 0.34, x2: W - 7, y2: i * (bh + gap) + bh * 0.34, stroke: m.hi, strokeWidth: "1.2", opacity: ".55" })
    ] }, i)),
    mark && jsx(NodeMark, { cx: W / 2, cy: H / 2, s: H * 0.42 })
  ] });
};
const Lozenge = ({
  size = 46,
  metal = "gold",
  mark = true
}) => {
  const {
    m,
    id,
    defs
  } = useMetal(metal);
  return jsxs("svg", { width: size, height: size, viewBox: "0 0 100 100", "aria-hidden": "true", children: [
    defs,
    " ",
    jsx("path", { d: "M50 4 L96 50 L50 96 L4 50 Z", fill: `url(#${id})`, stroke: m.lo, strokeWidth: "2.6", strokeLinejoin: "round" }),
    " ",
    jsx("path", { d: "M50 15 L85 50 L50 85 L15 50 Z", fill: "none", stroke: m.ink, strokeWidth: "1.4", opacity: ".3" }),
    " ",
    jsx("path", { d: "M50 4 L96 50 L50 50 Z", fill: m.hi, opacity: ".28" }),
    mark && jsx(NodeMark, { cx: 50, cy: 50, s: 26 })
  ] });
};
const SealMark = ({
  size = 46,
  metal = "bronze"
}) => {
  const {
    m,
    id,
    defs
  } = useMetal(metal);
  return jsxs("svg", { width: size, height: size, viewBox: "0 0 100 100", "aria-hidden": "true", children: [
    defs,
    " ",
    jsx("circle", { cx: "50", cy: "50", r: "46", fill: `url(#${id})`, stroke: m.lo, strokeWidth: "2.4" }),
    " ",
    jsx("circle", { cx: "50", cy: "50", r: "38", fill: "none", stroke: m.ink, strokeWidth: "1.5", opacity: ".32" }),
    Array.from({
      length: 24
    }).map((_, i) => {
      const a = i * 15 * Math.PI / 180;
      return jsx("line", { x1: 50 + Math.cos(a) * 39, y1: 50 + Math.sin(a) * 39, x2: 50 + Math.cos(a) * 45, y2: 50 + Math.sin(a) * 45, stroke: m.ink, strokeWidth: "1.3", opacity: ".42" }, i);
    }),
    " ",
    jsx(NodeMark, { cx: 50, cy: 50, s: 26 })
  ] });
};
const Insignia = ({
  kind,
  n = 1,
  size = 40,
  metal,
  mark = true
}) => {
  if (kind === "seal") return jsx(SealMark, { size, metal: metal || "bronze" });
  if (kind === "field") return jsx("span", { style: {
    display: "inline-flex",
    gap: n === 3 ? 4 : 6,
    alignItems: "center"
  }, children: Array.from({
    length: n
  }).map((_, i) => jsx(Lozenge, { size: n === 3 ? size * 0.8 : n === 2 ? size * 0.9 : size, metal: metal || "gold", mark }, i)) });
  return jsx(Bars, { n, size, metal: metal || "silver", mark });
};
const VerifyQR = ({
  seedText = "GA",
  size = 74,
  fg = "#0e2249"
}) => {
  let seed = 7;
  for (const ch of seedText) seed = seed * 31 + ch.charCodeAt(0) & 2147483647;
  const rnd = () => {
    seed = seed * 1103515245 + 12345 & 2147483647;
    return seed / 2147483647;
  };
  const N = 21, cell = 100 / N, r = [];
  const finder = (x, y) => {
    r.push(jsx("rect", { x: x * cell, y: y * cell, width: cell * 7, height: cell * 7, fill: fg }, "f" + x + y));
    r.push(jsx("rect", { x: (x + 1) * cell, y: (y + 1) * cell, width: cell * 5, height: cell * 5, fill: "#fff" }, "g" + x + y));
    r.push(jsx("rect", { x: (x + 2) * cell, y: (y + 2) * cell, width: cell * 3, height: cell * 3, fill: fg }, "h" + x + y));
  };
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const f = x < 8 && y < 8 || x > N - 9 && y < 8 || x < 8 && y > N - 9;
    if (!f && rnd() > 0.52) r.push(jsx("rect", { x: x * cell, y: y * cell, width: cell + 0.35, height: cell + 0.35, fill: fg }, x + "_" + y));
  }
  finder(0, 0);
  finder(N - 7, 0);
  finder(0, N - 7);
  return jsx("svg", { viewBox: "0 0 100 100", width: size, height: size, "aria-hidden": "true", style: {
    display: "block",
    background: "#fff",
    borderRadius: 4
  }, children: r });
};
const RANK_DEVICE = {
  0: {
    kind: "seal",
    n: 0,
    metal: "bronze"
  },
  1: {
    kind: "bars",
    n: 1,
    metal: "silver"
  },
  2: {
    kind: "bars",
    n: 2,
    metal: "silver"
  },
  3: {
    kind: "bars",
    n: 3,
    metal: "silver"
  },
  4: {
    kind: "field",
    n: 1,
    metal: "gold"
  }
};
const GEMA = (() => {
  const scans = [];
  let seq = 0, online = true, latency = 500;
  return {
    setOnline: (v) => {
      online = v;
    },
    isOnline: () => online,
    /* POST /v1/attendance — the door device */
    postScan: ({
      eventId,
      cardNo,
      station = "Door 1"
    }) => {
      scans.push({
        id: ++seq,
        kind: "scan",
        eventId,
        cardNo,
        station,
        at: (new Date()).toISOString()
      });
      return {
        ok: true,
        id: seq
      };
    },
    /* POST /v1/signoff — an upline's device, witnessing a demonstration */
    postSignoff: ({
      reqId,
      cardNo,
      by = "Rey T.",
      byRank = "Platoon Leader"
    }) => {
      scans.push({
        id: ++seq,
        kind: "signoff",
        reqId,
        cardNo,
        by,
        byRank,
        at: (new Date()).toISOString()
      });
      return {
        ok: true,
        id: seq
      };
    },
    /* emitted by GEMA itself when someone you trained certifies */
    postDerived: ({
      reqId,
      cardNo,
      trainee = "Marilou D.",
      trained = "Team Leader"
    }) => {
      scans.push({
        id: ++seq,
        kind: "derived",
        reqId,
        cardNo,
        trainee,
        trained,
        at: (new Date()).toISOString()
      });
      return {
        ok: true,
        id: seq
      };
    },
    /* GET /v1/attendance?card=…&since=cursor */
    fetchAttendance: ({
      cardNo,
      since = 0
    }) => new Promise((resolve, reject) => setTimeout(() => {
      if (!online) return reject(new Error("GEMA unreachable"));
      resolve({
        cursor: seq,
        records: scans.filter((r) => r.id > since && r.cardNo === cardNo)
      });
    }, latency + Math.random() * 350))
  };
})();
const C = {
  navy: "#0e2249",
  navyD: "#081530",
  blue: "#2569b8",
  blueLite: "#eaf2fb",
  sky: "#9DB8DE",
  paper: "#eef2f7",
  card: "#ffffff",
  ink: "#1a2740",
  mute: "#5a6b82",
  gold: "#f5b716",
  goldD: "#8a5a00",
  line: "#e2e8f0",
  good: "#157a43",
  goodBg: "#E4F4EC",
  warn: "#8a5a00",
  warnBg: "#FDF4E0",
  clay: "#a63a20",
  clayBg: "#FBEAE5",
  olive: "#3f4c37",
  oliveLt: "#EDEFE9",
  brand: "#1f5d99",
  brandD: "#163f66",
  tg: "#1373a2"
};
const HERO = `linear-gradient(160deg, ${C.brand}, ${C.brandD})`;
const ME = {
  name: "Rey Aquino",
  team: "Bravo",
  card: "0240 5578 9012 3456"
};
const TEAM_CHAT = {
  name: "Team Bravo",
  handle: "@gentrep_bravo",
  url: "https://t.me/",
  members: 24,
  unread: 3
};
const EVENTS = [{
  id: 11,
  type: "Testimonial Session",
  date: "Sat 2 Aug",
  time: "2:00 PM",
  place: "Robinsons, Davao",
  host: "Jesh M.",
  rank: 4,
  seats: 4
}, {
  id: 12,
  type: "Product Presentation",
  date: "Sat 2 Aug",
  time: "4:00 PM",
  place: "Lagao Hall",
  host: "Ana R.",
  rank: 3,
  seats: 15
}, {
  id: 13,
  type: "Business Orientation",
  date: "Sun 3 Aug",
  time: "3:00 PM",
  place: "Koronadal",
  host: "Rey T.",
  rank: 3,
  seats: 22
}, {
  id: 14,
  type: "Testimonial Session",
  date: "Sat 9 Aug",
  time: "2:00 PM",
  place: "Lagao Hall",
  host: "Ana R.",
  rank: 3,
  seats: 0
}, {
  id: 15,
  type: "Ginhawa Talk",
  date: "Sat 9 Aug",
  time: "9:00 AM",
  place: "Polomolok",
  host: "Ana R.",
  rank: 3,
  seats: 30
}, {
  id: 16,
  type: "Business Orientation",
  date: "Sat 16 Aug",
  time: "4:00 PM",
  place: "Lagao Hall",
  host: "Ana R.",
  rank: 3,
  seats: 9
}, {
  id: 17,
  type: "Leaders' Training",
  date: "Sat 16 Aug",
  time: "1:00 PM",
  place: "Robinsons, Davao",
  host: "Rey T.",
  rank: 3,
  seats: 8
}, {
  id: 18,
  type: "Testimonial Session",
  date: "Sat 23 Aug",
  time: "2:00 PM",
  place: "Koronadal",
  host: "Jesh M.",
  rank: 4,
  seats: 20
}, {
  id: 19,
  type: "Leaders' Training",
  date: "Sat 30 Aug",
  time: "1:00 PM",
  place: "Lagao Hall",
  host: "Ana R.",
  rank: 3,
  seats: 10
}, {
  id: 20,
  type: "Product Presentation",
  date: "Sun 24 Aug",
  time: "3:00 PM",
  place: "Robinsons, Davao",
  host: "Jesh M.",
  rank: 4,
  seats: 18
}, {
  id: 21,
  type: "Your First Twenty Names",
  date: "Sat 2 Aug",
  time: "1:00 PM",
  place: "Koronadal",
  host: "Ana R.",
  rank: 3,
  seats: 8
}, {
  id: 22,
  type: "The Invite Conversation",
  date: "Sat 9 Aug",
  time: "2:00 PM",
  place: "Polomolok",
  host: "Jesh M.",
  rank: 4,
  seats: 25
}, {
  id: 23,
  type: "Following Up",
  date: "Sat 16 Aug",
  time: "1:00 PM",
  place: "Lagao Hall",
  host: "Rey T.",
  rank: 3,
  seats: 16
}, {
  id: 24,
  type: "Handling a Guest",
  date: "Sat 23 Aug",
  time: "10:00 AM",
  place: "Koronadal",
  host: "Ana R.",
  rank: 3,
  seats: 12
}, {
  id: 25,
  type: "What You May Not Say",
  date: "Sat 30 Aug",
  time: "9:00 AM",
  place: "Lagao Hall",
  host: "Jesh M.",
  rank: 4,
  seats: 30
}];
const PURCHASES = {
  "Trial": {
    caps: 10,
    activates: false,
    releases: false,
    doseChoice: false,
    reorderEachMonth: true,
    note: "1 blister"
  },
  "Card minimum": {
    caps: 30,
    activates: true,
    releases: false,
    doseChoice: false,
    reorderEachMonth: true,
    note: "1 bottle"
  },
  "Start@30": {
    caps: 40,
    activates: true,
    releases: false,
    doseChoice: true,
    reorderEachMonth: false,
    note: "40 capsules"
  },
  "Grow@60": {
    caps: 120,
    activates: true,
    releases: true,
    doseChoice: true,
    reorderEachMonth: false,
    note: "120 capsules"
  },
  "Peak@90": {
    caps: 400,
    activates: true,
    releases: true,
    doseChoice: true,
    reorderEachMonth: false,
    note: "400 capsules"
  }
};
const ACTIVATION_DAYS = 10;


/* What lands in Notifications. Everything here is a human act or a real
   record \u2014 the system never speaks to the member in its own voice. */
const FEED_SEED = [
  { id: "f1", kind: "post", who: "Marilou D.", when: "2 days ago",
    text: "Day 24 for me. Sleeping through the night now, which I had stopped expecting." },
  { id: "f2", kind: "sponsor", who: "Ana R.", when: "3 days ago",
    text: "Kumusta? Just checking you got started alright. No need to reply if all is well." },
  { id: "f3", kind: "post", who: "Jun P.", when: "5 days ago",
    text: "Reminder for the newcomers \u2014 empty stomach in the morning works best for me." },
];


const CHECK_ITEMS = [
  { k: "sleep",  q: "How have you been sleeping?",        lo: "Badly",        hi: "Well" },
  { k: "energy", q: "How is your energy through the day?", lo: "Very low",     hi: "Good" },
  { k: "gut",    q: "How has your stomach been?",          lo: "Uncomfortable", hi: "Settled" },
  { k: "mood",   q: "How have you felt in yourself?",      lo: "Low",          hi: "Steady" },
  { k: "focus",  q: "How clear has your thinking been?",   lo: "Foggy",        hi: "Clear" },
];
const BASELINE = { sleep: 2, energy: 2, gut: 1, mood: 2, focus: 2, when: "12 May" };
const CHECK_DAY = 30;

/* A line for the days that matter. About the process, never about results \u2014
   Beehive to confirm the wording before this ships. */
/* One card per day for the first ten. Three kinds, and the difference matters:
   "how"  = practical handling, safe for us to write
   "why"  = mechanism / evidence — PLACEHOLDER, Beehive must supply the wording
            and the citation before this ships
   "care" = what to do if something feels wrong
   Nothing here forecasts a result. */
const DAY_NOTES = {
  1:  { kind: "how",   t: "Morning dose on an empty stomach",
        d: "Before breakfast, with plain water. The other doses can go with food." },
  2:  { kind: "study", t: "Why the first days are quiet",
        d: "PLACEHOLDER \u2014 Beehive to supply a plain-language summary of what pre-, pro- and postbiotics are doing in week one.",
        src: "Source to be cited by Beehive" },
  3:  { kind: "how",   t: "Your gut may speak up first",
        d: "Some people notice their digestion changing early on. That is the gut settling." },
  4:  { kind: "care",  t: "Ana will check in today",
        d: "Your first blister is about done. Tell her honestly how it has gone \u2014 that is what she is for." },
  5:  { kind: "how",   t: "Most people feel nothing yet",
        d: "That is normal. This is a slow protocol \u2014 it is not meant to be felt in a week." },
  6:  { kind: "med",   t: "If you are on antibiotics",
        d: "PLACEHOLDER \u2014 Beehive to write the exact guidance on taking the protocol alongside a course of antibiotics.",
        flag: true },
  7:  { kind: "care",  t: "If anything feels off, say so",
        d: "Tell Ana rather than stopping quietly. She has seen it before and can tell you what is usual." },
  8:  { kind: "study", t: "What the research says",
        d: "PLACEHOLDER \u2014 Beehive to supply one finding, in plain words, with its citation.",
        src: "Source to be cited by Beehive" },
  9:  { kind: "how",   t: "Almost there",
        d: "One more day. Tomorrow your card goes live and your name is read out at the next session." },
};

const NOTE_TONE  = { how: "#8a5a00", study: "#2569b8", care: "#157a43", med: "#a63a20" };
const NOTE_LABEL = { how: "How to take it", study: "Worth knowing", care: "From your sponsor", med: "Important" };

const PROGRAMS = {
  "Card minimum": {
    caps: 20,
    note: "2 blisters"
  },
  "Start@30": {
    caps: 40,
    note: "40 capsules"
  },
  "Grow@60": {
    caps: 120,
    note: "120 capsules"
  },
  "Peak@90": {
    caps: 400,
    note: "400 capsules"
  }
};
const META = {
  morning: {
    label: "Morning Habit",
    note: "before meals \xB7 empty stomach",
    t: "07:00"
  },
  midday: {
    label: "Midday Boost",
    note: "after lunch",
    t: "12:30"
  },
  dreams: {
    label: "Sweet Dreams",
    note: "before bedtime",
    t: "21:00"
  }
};
const ALL_SLOTS = ["morning", "midday", "dreams"];
const WD = ["S", "M", "T", "W", "T", "F", "S"];
const NOW = new Date();
const Y = NOW.getFullYear();
const M = NOW.getMonth();
const TODAY = NOW.getDate();
const MONTH_NAME = NOW.toLocaleString("en-US", {
  month: "long",
  year: "numeric"
});
function ownCell(s) {
  switch (s) {
    case "proof":
      return {
        background: "#157a43",
        color: "#fff",
        border: "none"
      };
    case "full":
      return {
        background: "#BFE4CE",
        color: "#0e2249",
        border: "none"
      };
    case "partial":
      return {
        background: "#F5E4C4",
        color: "#8A6414",
        border: "none"
      };
    case "missed":
      return {
        background: "#E7C4BC",
        color: "#9A6A5E",
        border: "none"
      };
    case "today":
      return {
        background: "#fff",
        color: "#2569b8",
        border: "2px solid #2569b8"
      };
    default:
      return {
        background: "#ffffff",
        color: "#C3CCD8",
        border: "1px solid #e2e8f0"
      };
  }
}
const stepBtn = (dis) => ({
  width: 44,
  height: 44,
  borderRadius: 9,
  fontSize: 19,
  fontWeight: 700,
  background: dis ? "#F1F4F8" : "#0e2249",
  color: dis ? "#C3CCD8" : "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1,
  minHeight: 34
});
const MIN_DAILY = 2;
const LICA = {
  program: "Start@30",
  capsLeft: 34,
  dose: "mild",
  month: 3,
  channel: "Messenger",
  sponsor: "Ana R.",
  since: "12 May 2026",
  cardActive: true,
  reachTested: true,
  checkDue: true,
  community: false,
  releases: false
  // true for Grow@60 / Peak@90
};
const RANKS = [{
  k: "LICA",
  n: "LICA",
  full: "Lifestyle Card Activation",
  phase: "Your membership",
  pips: 0,
  kind: "state",
  abbr: null,
  ref: "GA-LICA-0847",
  reqs: []
}, {
  k: "BASE",
  n: "BASE",
  full: "Base Activation",
  kind: "course",
  phase: "Member",
  pips: 0,
  pin: "activated",
  opens: "My Team opens.",
  abbr: null,
  ref: "GA-BASE-0847",
  cite: "As an activated member of the Gutguard Lifestyle, having completed Admin and Compliance and all five activation events.",
  reqs: [{
    id: "b-orient",
    type: "document",
    title: "Gutguard Dashboard Orientation",
    mins: "4 min",
    blurb: "Where everything lives \u2014 content, sales, your team.",
    blurbTl: "Dito nakalagay ang lahat \u2014 content, sales, at ang team mo."
  }, {
    id: "b-da",
    type: "document",
    title: "Distributor's Agreement",
    mins: "6 min",
    doc: "Agreement v3.1",
    blurb: "What you're agreeing to, in plain terms.",
    blurbTl: "Ang pinapasukan mo, sa simpleng salita.",
    docTl: "Kasunduan ng Distributor v3.1",
    bodyTl: "Ang kasunduang ito ay sa pagitan ng Gutguard Philippines Inc. at ikaw bilang isang independent distributor. Hindi ka empleyado. Kumikita ka mula sa produktong nabenta, hindi mula sa pagre-recruit lamang. Bawal kang mag-claim ng anumang medikal na epekto ng produkto. Bawal mong pilitin ang sinumang nasa ilalim mo na bumili ng stock. Maaaring wakasan ninuman sa atin ang kasunduang ito sa pamamagitan ng sulat, anumang oras. Ang card number mo at ang talaan ng iyong downline ay pag-aari ng kompanya.",
    body: "This Agreement is between Gutguard Philippines Inc. and you as an independent distributor. You are not an employee. You earn from product sold, never from recruitment alone. You may not make medical claims about any product. You may not require anyone below you to purchase stock. Either party may end this Agreement in writing at any time. Your card number and downline records remain the property of the company."
  }, {
    id: "b-eth",
    type: "document",
    title: "Code of Ethics",
    mins: "5 min",
    doc: "Code v2.0",
    blurb: "How we speak about the product, and about each other.",
    blurbTl: "Kung paano tayo magsalita tungkol sa produkto, at sa isa't isa.",
    docTl: "Kodigo ng Etika v2.0",
    bodyTl: "Sabihin lamang kung ano talaga ang produkto: pagkain, iniinom araw-araw. Huwag mangakong may lunas, huwag mag-diagnose, at huwag pigilan ang sinuman na magpatingin sa doktor. Ipakita lamang ang totoong testimonya nang may pahintulot ng may-ari nito, at huwag itong baguhin para maging claim. Huwag agawin ang prospect ng ibang distributor. Huwag magbenta nang mas mababa sa nakatakdang presyo. Huwag sabihing garantisado ang kita, at huwag magpakita ng kinita nang hindi ipinapakita ang pinagpaguran.",
    body: "Speak only to what the product is: food, taken daily. Never promise a cure, never diagnose, never discourage anyone from seeing a doctor. Show real testimonies with the person's consent and never edit them into a claim. Do not poach another distributor's prospect. Do not sell below the posted price. Do not present income as guaranteed, and never show earnings without showing the work behind them."
  }, {
    id: "b-creed",
    type: "document",
    title: "Gentrep Creed",
    mins: "2 min",
    doc: "The Creed",
    blurb: "What we hold ourselves to.",
    blurbTl: "Ang pinanghahawakan natin sa sarili.",
    docTl: "Ang Gentrep Creed",
    bodyTl: "Kumikita ako, hindi ako nangungurakot. Isinasama ko lang ang tao kung paano ko rin gustong isama ako. Sinasabi ko ang totoo tungkol sa produkto, sa pera, at sa trabaho. Hindi ko iiwan ang taong isinama ko para mag-isang mag-isip. Ang itinatayo ko ay dapat tumayo pa rin kahit tumigil na ako sa pagtatayo.",
    body: "I earn, I do not extract. I bring people in only when I would want to be brought in the same way. I tell the truth about the product, the money, and the work. I do not leave someone I signed up to figure it out alone. What I build should still stand if I stop building it."
  }, {
    id: "b-1",
    type: "attendance",
    title: "Ginhawa Talk",
    note: "Where it starts"
  }, {
    id: "b-2",
    type: "attendance",
    title: "Product Presentation",
    note: "What it is, how to use it"
  }, {
    id: "b-3",
    type: "attendance",
    title: "Testimonial Session",
    note: "Real members, real results"
  }, {
    id: "b-4",
    type: "attendance",
    title: "Business Orientation",
    note: "How earning actually works"
  }, {
    id: "b-5",
    type: "attendance",
    title: "Leaders' Training",
    note: "Running your own table"
  }]
}, {
  k: "TL",
  kind: "course",
  n: "TL",
  full: "Team Leader",
  phase: "Lead Generator",
  pips: 1,
  pin: "pinned Team Leader",
  opens: "You'll be invited to a Recognition Night.",
  abbr: "2Lt",
  ref: "GA-TL-0847",
  cite: "As an official member of the Gutguard Corps of Officers, having passed all training requirements of the Team Leader course and demonstrated them in the field.",
  reqs: [{
    id: "t-1",
    type: "attendance",
    title: "Your First Twenty Names",
    note: "Where leads actually come from"
  }, {
    id: "t-2",
    type: "attendance",
    title: "The Invite Conversation",
    note: "Asking without pressure"
  }, {
    id: "t-3",
    type: "attendance",
    title: "Following Up",
    note: "Staying in touch, not chasing"
  }, {
    id: "t-4",
    type: "attendance",
    title: "Handling a Guest",
    note: "From the door to the seat"
  }, {
    id: "t-5",
    type: "attendance",
    title: "What You May Not Say",
    note: "Claims, income, and the line"
  }, {
    id: "t-demo",
    type: "demonstration",
    title: "Bring three guests",
    note: "They check in, with a Platoon Leader in the room"
  }]
}, {
  k: "SL",
  kind: "course",
  n: "SL",
  full: "Squad Leader",
  phase: "Presenter",
  pips: 2,
  pin: "pinned Squad Leader",
  locked: true,
  abbr: "1Lt",
  ref: "GA-SL-0847",
  reqs: []
}, {
  k: "PL",
  kind: "course",
  n: "PL",
  full: "Platoon Leader",
  phase: "Trains Team Leaders",
  pips: 3,
  pin: "pinned Platoon Leader",
  locked: true,
  abbr: "Capt",
  ref: "GA-PL-0847",
  reqs: [{
    id: "p-der",
    type: "derived",
    title: "A Team Leader you trained is certified",
    note: "Their certificate, not your word"
  }]
}, {
  k: "CC",
  kind: "course",
  n: "CC",
  full: "Company Commander",
  phase: "Trains Squad Leaders",
  pips: 4,
  pin: "pinned Company Commander",
  locked: true,
  abbr: "Maj",
  ref: "GA-CC-0847",
  reqs: []
}];
const ABOUT_INTRO = "The Gentrep Academy is where you learn this business, one level at a time. Every level is a short course: a few sessions you attend in person, and a scan at the door that records you were there. You never tick your own boxes \u2014 that is what makes them worth something.";
const ABOUT_LEVELS = [{
  n: "Base Activation",
  sub: "Everyone starts here",
  d: "Paperwork and five sessions. You learn what the product is, how the day works, and what you may and may not say. Finish it and My Team opens, so you can start bringing people in."
}, {
  n: "Team Leader",
  sub: "Lead generator",
  d: "Five classes on finding and inviting people, then one demonstration: bring three guests who check in, with a Platoon Leader watching."
}, {
  n: "Squad Leader",
  sub: "Presenter",
  d: "You learn to run the room yourself \u2014 presenting the product and the business to a group, not one by one."
}, {
  n: "Platoon Leader",
  sub: "Trains Team Leaders",
  d: "You learn to teach. This level is proven differently: it completes when a Team Leader you trained becomes certified."
}, {
  n: "Company Commander",
  sub: "Trains Squad Leaders",
  d: "The same again, one level up. You develop the people who develop the presenters."
}];
const ABOUT_STEPS = [{
  h: "Some courses start with Admin and Compliance",
  p: "Base Activation begins with four things to watch, three of which have a document to read and agree to. You can read them in English or Tagalog, and the app records which one you chose. Until these are done, you cannot book a seat."
}, {
  h: "Pick your own dates",
  p: "Every course lists what you need to attend. Tap See dates on any one of them and you will see every session posted for it \u2014 different Saturdays, different towns, with the time, the host and the seats left. Choose what you can reach."
}, {
  h: "Show your pass at the door",
  p: "Once you reserve, the button becomes My pass. Show that QR code when you arrive. The scan ticks the requirement off by itself."
}, {
  h: "Finish, and you are certified",
  p: "When every requirement is met you get a certificate with your name, your level, the date and a reference number, and you can share it with your team. For Team Leader and above, you are then invited to a Recognition Night to be pinned."
}];
const ABOUT_RULES = [["Cannot make it?", "Open the date and tap cancel. The seat goes back to someone else. Do it early if you can."], ["Want a different date?", "Tap Switch on the one you prefer. There is no need to cancel first."], ["Session full?", "Join the waitlist and you will be told when a seat opens."], ["Missed one?", "The row turns red. Just pick another date. Nothing else you have done is lost."], ["No dates posted yet?", "That one is waiting on us, not on you. You will be notified when a date appears."], ["Is there a deadline?", "No. Most people finish a level in about three weeks, but nothing expires. Take the time you need."]];
const ABOUT_LEGEND = [["Gold tick", "Done, and proven by a scan"], ["Gold ring", "Booked, not attended yet"], ["Red mark", "Missed \u2014 pick another date"], ["Blue button", "Something for you to tap"], ["The chain on the left", "Your progress through the course, top to bottom"]];
const ACAD_TITLE = {
  TL: "Academy Second Lieutenant",
  SL: "Academy First Lieutenant",
  PL: "Academy Captain",
  CC: "Academy Major"
};
const TYPE_LABEL = {
  document: "Watch and agree",
  attendance: "Attend",
  demonstration: "Show it",
  derived: "Earned by your trainee"
};
const LockIcon = ({
  size = 15,
  color = "#5a6b82"
}) => jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  " ",
  jsx("rect", { x: "4", y: "10.5", width: "16", height: "11", rx: "2.5" }),
  " ",
  jsx("path", { d: "M8 10.5V7a4 4 0 0 1 8 0v3.5" })
] });
const BellIcon = ({ size = 18, color = "#0e2249" }) => (
  jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color,
    strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
      jsx("path", { d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" }),
      jsx("path", { d: "M13.7 21a2 2 0 0 1-3.4 0" })
    ] })
);

const GearIcon = ({
  size = 19,
  color = "#5a6b82"
}) => jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  " ",
  jsx("circle", { cx: "12", cy: "12", r: "3" }),
  " ",
  jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
] });
const ShareIcon = ({
  size = 18,
  color = "#fff"
}) => jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "2.1", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  " ",
  jsx("path", { d: "M12 16V3" }),
  " ",
  jsx("path", { d: "M7.5 7.5 12 3l4.5 4.5" }),
  " ",
  jsx("path", { d: "M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" })
] });
const TgIcon = ({
  size = 20,
  color = "#fff"
}) => jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: color, "aria-hidden": "true", children: [
  " ",
  jsx("path", { d: "M21.9 4.3 18.9 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.3-.1-.5-.6-.2L7.2 12.6 2.7 11.2c-1-.3-1-1 .2-1.4l18-6.9c.8-.3 1.5.2 1 1.4z" })
] });
const PassQR = ({
  size = 150
}) => {
  let seed = 4711;
  const r = () => {
    seed = seed * 1103515245 + 12345 & 2147483647;
    return seed / 2147483647;
  };
  const N = 21, rects = [];
  const F = (x, y) => {
    rects.push(jsx("rect", { x: x * 100 / N, y: y * 100 / N, width: 700 / N, height: 700 / N, fill: C.navy }, "a" + x + y));
    rects.push(jsx("rect", { x: (x + 1) * 100 / N, y: (y + 1) * 100 / N, width: 500 / N, height: 500 / N, fill: "#fff" }, "b" + x + y));
    rects.push(jsx("rect", { x: (x + 2) * 100 / N, y: (y + 2) * 100 / N, width: 300 / N, height: 300 / N, fill: C.navy }, "c" + x + y));
  };
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const f = x < 7 && y < 7 || x > N - 8 && y < 7 || x < 7 && y > N - 8;
    if (!f && r() > 0.5) rects.push(jsx("rect", { x: x * 100 / N, y: y * 100 / N, width: 100 / N + 0.4, height: 100 / N + 0.4, fill: C.navy }, x + "-" + y));
  }
  F(0, 0);
  F(N - 7, 0);
  F(0, N - 7);
  return jsx("svg", { viewBox: "0 0 100 100", width: size, height: size, "aria-hidden": "true", children: rects });
};
function Confetti({
  fire,
  big
}) {
  const [bits, setBits] = useState([]);
  useEffect(() => {
    if (!fire) return;
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const n = big ? 90 : 34;
    const cols = [C.gold, C.blue, C.navy, "#0205C6", C.good, "#fff"];
    setBits(Array.from({
      length: n
    }, (_, i) => ({
      i: fire + "-" + i,
      left: 50 + (Math.random() - 0.5) * (big ? 70 : 34),
      tx: (Math.random() - 0.5) * (big ? 620 : 300),
      ty: big ? 120 + Math.random() * 260 : 80 + Math.random() * 160,
      rot: (Math.random() - 0.5) * 900,
      c: cols[Math.random() * cols.length | 0],
      w: 6 + Math.random() * 7,
      h: 9 + Math.random() * 12,
      d: (big ? 1.5 : 1.1) + Math.random() * 0.8,
      delay: Math.random() * 0.22
    })));
    const t = setTimeout(() => setBits([]), big ? 2800 : 2100);
    return () => clearTimeout(t);
  }, [fire, big]);
  if (!bits.length) return null;
  return jsx("div", { "aria-hidden": "true", style: {
    position: "fixed",
    inset: 0,
    zIndex: 90,
    pointerEvents: "none",
    overflow: "hidden"
  }, children: bits.map((b) => jsx("span", { className: "cf", style: {
    left: b.left + "%",
    top: big ? "26%" : "34%",
    width: b.w,
    height: b.h,
    background: b.c,
    "--tx": b.tx + "px",
    "--ty": b.ty + "px",
    "--rot": b.rot + "deg",
    animationDuration: b.d + "s",
    animationDelay: b.delay + "s"
  } }, b.i)) });
}
function Academy() {
  const [rankKey, setRankKey] = useState("LICA");
  const [dose, setDose] = useState({
    morning: 0,
    midday: 0,
    dreams: 0
  });
  const [doseSet, setDoseSet] = useState(false);
  const [today, setToday] = useState({});
  const [times, setTimes] = useState({
    morning: "07:00",
    midday: "12:30",
    dreams: "21:00"
  });
  const [why, setWhy] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showFoot, setShowFoot] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const [check, setCheck] = useState(null);
  const [notifs, setNotifs] = useState([]);
  const [notifOpen, setNotifOpen] = useState(false);        // null | "ask" | "result"
  const [answers, setAnswers] = useState({});
  const [checkDone, setCheckDone] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [feedOpen, setFeedOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  /* The scroller is this element, not the window: inside an iframe the window
     often never scrolls, so a window-based listener would never fire. */
  const scroller = useRef(null);
  useEffect(() => {
    let last = 0, ticking = false;
    const el = () => scroller.current;
    const metrics = () => {
      const n = el();
      if (n && n.scrollHeight > n.clientHeight + 4)
        return { y: n.scrollTop, view: n.clientHeight, h: n.scrollHeight };
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      const h = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      return { y, view: window.innerHeight, h };
    };
    const evaluate = () => {
      ticking = false;
      const { y, view, h } = metrics();
      if (h <= view + 8) { setShowFoot(true); return; }   // nothing to scroll: just show it
      const nearBottom = y + view >= h - 48;
      const dy = y - last;
      if (y <= 100) setShowFoot(false);
      else if (nearBottom) setShowFoot(true);
      else if (dy > 5) setShowFoot(true);
      else if (dy < -5) setShowFoot(false);
      if (Math.abs(dy) > 5) last = y;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(evaluate); } };
    const n = el();
    if (n) n.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const t = setTimeout(evaluate, 60);
    evaluate();
    return () => {
      clearTimeout(t);
      if (n) n.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const [channel, setChannel] = useState(LICA.channel);
  const [log, setLog] = useState(() => {
    const L = {};
    const pat = [3, 3, 2, 3, 3, 3, 1, 3, 3, 2, 3, 3, 3, 3, 0, 3, 3, 2, 3, 3, 3, 3, 1, 3];
    pat.forEach((n, i) => {
      const d = i + 1;
      if (d < TODAY && n > 0) {
        L[d] = {};
        ["morning", "midday", "dreams"].slice(0, n).forEach((k) => {
          L[d][k] = true;
        });
      }
    });
    return L;
  });
  const [reachOk, setReachOk] = useState(false);
  const [bought_total, setBoughtTotal] = useState(PURCHASES["Start@30"].caps);
  const [joined, setJoined] = useState(false);
  const [order, setOrder] = useState(false);
  const [showLadder, setShowLadder] = useState(false);
  const [bought, setBought] = useState("Start@30");
  const [daysConsumed, setDaysConsumed] = useState(0);
  const wasLive = useRef(false);
  const [orderStage, setOrderStage] = useState("choose");
  const [pick, setPick] = useState("Start@30");
  const [expanded, setExpanded] = useState(null);
  const [sheet, setSheet] = useState(null);
  const [pass, setPass] = useState(null);
  const [cert, setCert] = useState(false);
  const [guide, setGuide] = useState(false);
  const [lang, setLang] = useState("en");
  const [watched, setWatched] = useState({});
  const [confirm, setConfirm] = useState(null);
  const [toast, setToast] = useState("");
  const [fire, setFire] = useState(0);
  const [bigFire, setBigFire] = useState(false);
  const refs = useRef({});
  const [live, setLive] = useState("");
  const [cursor, setCursor] = useState(0);
  const [sync, setSync] = useState({
    state: "idle",
    at: null,
    tries: 0
  });
  const flash = (m) => {
    setToast(m);
    setLive(m);
    setTimeout(() => setToast(""), 2400);
  };
  const pop = (big) => {
    setBigFire(!!big);
    setFire(Date.now());
  };
  const [st, setSt] = useState({
    "b-orient": {
      s: "done",
      when: "28 Jul"
    },
    "b-da": {
      s: "done",
      when: "28 Jul"
    },
    "b-eth": {
      s: "done",
      when: "28 Jul"
    },
    "b-creed": {
      s: "done",
      when: "28 Jul"
    },
    "b-1": {
      s: "done",
      when: "19 Jul"
    },
    "b-2": {
      s: "missed",
      when: "26 Jul"
    },
    "b-3": {
      s: "booked",
      ev: 11
    },
    "b-4": {
      s: "open"
    },
    "b-5": {
      s: "open"
    },
    "t-1": {
      s: "open"
    },
    "t-2": {
      s: "open"
    },
    "t-3": {
      s: "open"
    },
    "t-4": {
      s: "open"
    },
    "t-5": {
      s: "open"
    },
    "t-demo": {
      s: "open"
    },
    "p-der": {
      s: "open"
    }
  });
  const SLOTS = ALL_SLOTS.filter((k) => dose[k] > 0);
  const perDay = ALL_SLOTS.reduce((a, k) => a + dose[k], 0);
  const setCap = (k, d) => setDose((x) => ({
    ...x,
    [k]: Math.max(0, Math.min(3, x[k] + d))
  }));
  const takenToday = SLOTS.filter((k) => today[k]).reduce((a, k) => a + dose[k], 0);
  const dayLog = (d) => d === TODAY ? today : log[d] || {};
  const takenCaps = (() => {
    let n = 0;
    for (let d = 1; d <= TODAY; d++) ALL_SLOTS.forEach((k) => {
      if (dayLog(d)[k]) n += dose[k];
    });
    return n;
  })();
  const doneCount = (d) => SLOTS.filter((k) => dayLog(d)[k]).length;
  const cells = (() => {
    const fw = new Date(Y, M, 1).getDay(), dim = new Date(Y, M + 1, 0).getDate(), c = [];
    for (let i = 0; i < fw; i++) c.push(null);
    for (let d = 1; d <= dim; d++) c.push(d);
    return c;
  })();
  const cellState = (d) => {
    if (d > TODAY) return "future";
    const n = doneCount(d);
    if (SLOTS.length && n === SLOTS.length) return "full";
    if (n > 0) return "partial";
    if (d === TODAY) return "today";
    return "missed";
  };
  const slotsLeft = SLOTS.filter((k) => !today[k]);
  const capsLeft = Math.max(0, bought_total - takenCaps);
  const streak = (() => {
    let n = 0;
    for (let d = TODAY; d >= 1; d--) {
      if (SLOTS.length && doneCount(d) === SLOTS.length) n++;
      else if (d !== TODAY) break;
      else break;
    }
    return n;
  })();
  const refillStage = (daysLeftRaw) => daysLeftRaw <= 1 ? 1 : daysLeftRaw <= 5 ? 5 : daysLeftRaw <= 10 ? 10 : null;
  const daysLeft = Math.floor(capsLeft / perDay);
  const fullDays = Math.floor(PURCHASES[bought].caps / perDay);
  const low = capsLeft > 0 && daysLeft <= Math.max(4, Math.round(fullDays * 0.3));
  const out = capsLeft <= 0;
  const runOut = (() => {
    const d = new Date(2026, 7, 9);
    d.setDate(d.getDate() + daysLeft);
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long"
    });
  })();
  const buy = PURCHASES[bought];
  const supplyOk = capsLeft > 0 && !low;
  const consumeOk = daysConsumed >= ACTIVATION_DAYS;
  const SETUP = [{
    k: "dose",
    title: "Your daily doses",
    ok: doseSet,
    status: doseSet ? perDay + " a day \xB7 " + SLOTS.map((k) => META[k].label).join(", ") : "Set them at the top of this screen"
  }, {
    k: "reach",
    title: "What platform do you prefer to be contacted?",
    ok: reachOk,
    status: reachOk ? channel + " \xB7 tested and working" : "Pick the one you actually read"
  }, {
    k: "community",
    title: "Join the community page",
    ok: joined,
    status: joined ? "You're in \xB7 2,400 members" : "Where members share what's working"
  }];
  const setupDone = SETUP.every((i) => i.ok);
  const LICA_ITEMS = SETUP.map((i) => ({
    ...i,
    every: "Once",
    due: !i.ok
  }));
  const licaDone = SETUP.filter((i) => i.ok).length;
  const licaAll = SETUP.length;
  const cardLive = buy.activates && setupDone && consumeOk;
  useEffect(() => {
    if (cardLive && !wasLive.current) {
      wasLive.current = true;
      pop(true);
      flash("Your card is awake \u00b7 next stop, day 30");
      setNotifs(n => [
        { id: "act", kind: "you",  t: "Your card is active",
          d: "Ten days done. You are a Lifestyle Member.", when: "just now" },
        { id: "post", kind: "page", t: "Posted to " + TEAM_CHAT.name,
          d: "\u201C" + ME.name.split(" ")[0] + " finished her first ten days.\u201D Eleven others did too this week.", when: "just now" },
        { id: "night", kind: "room", t: "You'll be read out on Saturday",
          d: "At the next session, with the others who made it.", when: "just now" },
        ...n
      ]);
      setLive("Your card is now active. Your next milestone is your month-one check on day 30.");
    }
    if (!cardLive) wasLive.current = false;
  }, [cardLive]);
  /* The refill bar is not a scroll ornament: when supply is short it stays
     up regardless. Otherwise it follows the scroll direction. */
  const needsRefill = doseSet && (refillStage(daysLeft) !== null || out);
  const footVisible = needsRefill || showFoot;
  /* Day 30 is counted from activation, in days actually consumed. */
  const checkDue = cardLive && !checkDone && daysConsumed >= CHECK_DAY;
  const feed = cardLive
    ? [{ id: "f0", kind: "recognition", who: "Gutguard Lifestyle", when: "Today",
         text: ME.name + " completed the first ten days. Read out at Saturday's session, and posted to " +
               TEAM_CHAT.name + "." }, ...FEED_SEED]
    : FEED_SEED;
  const unseen = seen ? 0 : feed.length;
  const baseTotal = CHECK_ITEMS.reduce((a, i) => a + BASELINE[i.k], 0);
  const nowTotal = CHECK_ITEMS.reduce((a, i) => a + (answers[i.k] || 0), 0);
  const moved = CHECK_ITEMS.filter(i => (answers[i.k] || 0) > BASELINE[i.k]);
  const flat = Object.keys(answers).length === CHECK_ITEMS.length && nowTotal <= baseTotal;
  const rank = RANKS.find((r) => r.k === rankKey);
  const reqs = rank.reqs;
  const stateOf = (id) => st[id] || {
    s: "open"
  };
  const done = reqs.filter((r) => stateOf(r.id).s === "done").length;
  const booked = reqs.filter((r) => stateOf(r.id).s === "booked").length;
  const missed = reqs.filter((r) => stateOf(r.id).s === "missed").length;
  const total = reqs.length;
  const complete = total > 0 && done === total;
  const nextReq = reqs.find((r) => ["open", "missed"].includes(stateOf(r.id).s));
  const evById = (id) => EVENTS.find((e) => e.id === id);
  const set = (id, v) => {
    const next = {
      ...st,
      [id]: v
    };
    setSt(next);
    if (v.s === "done") {
      const all = reqs.every((r) => (next[r.id] || {}).s === "done");
      pop(all);
      if (all) {
        setLive("All requirements complete. Certificate ready.");
        setTimeout(() => setCert(true), 420);
      } else flash("Recorded. " + reqs.filter((r) => (next[r.id] || {}).s === "done").length + " of " + total + " complete.");
    }
  };
  const stRef = useRef(st);
  stRef.current = st;
  const curRef = useRef(cursor);
  curRef.current = cursor;
  const applyScans = (records) => {
    if (!records.length) return;
    const next = {
      ...stRef.current
    };
    const hits = [];
    for (const rec of records) {
      if (rec.kind === "signoff" || rec.kind === "derived") {
        for (const rk2 of RANKS) {
          const r = rk2.reqs.find((x) => x.id === rec.reqId);
          if (!r) continue;
          next[r.id] = rec.kind === "signoff" ? {
            s: "done",
            when: "today",
            via: "signoff",
            by: rec.by,
            byRank: rec.byRank
          } : {
            s: "done",
            when: "today",
            via: "derived",
            trainee: rec.trainee
          };
          hits.push({
            rk: rk2,
            req: r,
            walkIn: false,
            kind: rec.kind,
            rec
          });
          break;
        }
        continue;
      }
      const ev = EVENTS.find((e) => e.id === rec.eventId);
      if (!ev) continue;
      let target = null;
      for (const rk2 of RANKS) {
        const booked2 = rk2.reqs.find((r) => (next[r.id] || {}).ev === rec.eventId && (next[r.id] || {}).s !== "done");
        if (booked2) {
          target = {
            rk: rk2,
            req: booked2,
            walkIn: false
          };
          break;
        }
      }
      if (!target) {
        for (const rk2 of RANKS) {
          const byType = rk2.reqs.find((r) => r.type === "attendance" && r.title === ev.type && (next[r.id] || {}).s !== "done");
          if (byType) {
            target = {
              rk: rk2,
              req: byType,
              walkIn: true
            };
            break;
          }
        }
      }
      if (!target) continue;
      next[target.req.id] = {
        s: "done",
        when: ev.date.replace(/^(Sat|Sun|Mon|Tue|Wed|Thu|Fri) /, ""),
        via: "scan",
        station: rec.station
      };
      hits.push(target);
    }
    if (!hits.length) return;
    setSt(next);
    const last = hits[hits.length - 1];
    const rk = last.rk;
    const all = rk.reqs.every((r) => (next[r.id] || {}).s === "done");
    if (all) {
      setLive("Scanned in at " + last.req.title + ". All requirements complete \u2014 certificate ready.");
      pop(true);
      setTimeout(() => {
        setRankKey(rk.k);
        setCert(true);
      }, 460);
    } else {
      const n = rk.reqs.filter((r) => (next[r.id] || {}).s === "done").length;
      flash(last.kind === "signoff" ? last.rec.byRank + " signed off \xB7 " + last.req.title : last.kind === "derived" ? last.rec.trainee + " certified \xB7 " + last.req.title : (last.walkIn ? "Walk-in recorded \xB7 " : "Scanned in \xB7 ") + last.req.title);
      setLive(last.req.title + " ticked by the door scan. " + n + " of " + rk.reqs.length + " complete.");
      pop(false);
    }
  };
  const poll = async () => {
    setSync((v) => ({
      ...v,
      state: "syncing"
    }));
    try {
      const res = await GEMA.fetchAttendance({
        cardNo: ME.card,
        since: curRef.current
      });
      applyScans(res.records);
      setCursor(res.cursor);
      setSync({
        state: "ok",
        at: new Date(),
        tries: 0
      });
    } catch (e) {
      setSync((v) => ({
        state: "down",
        at: v.at,
        tries: v.tries + 1
      }));
    }
  };
  useEffect(() => {
    poll();
    const t = setInterval(poll, 4e3);
    const onFocus = () => poll();
    window.addEventListener("focus", onFocus);
    return () => {
      clearInterval(t);
      window.removeEventListener("focus", onFocus);
    };
  }, []);
  const reserve = (req, e) => {
    setSt({
      ...st,
      [req.id]: {
        s: "booked",
        ev: e.id
      }
    });
    setConfirm(null);
    flash("Seat reserved \xB7 " + e.date + ", " + e.place);
    setLive("Seat reserved for " + req.title + " on " + e.date + " at " + e.place + ". " + done + " of " + total + " complete.");
  };
  const cancel = (req) => {
    setSt({
      ...st,
      [req.id]: {
        s: "open"
      }
    });
    setConfirm(null);
    flash("Seat released");
    setLive("Seat released for " + req.title + ". This requirement is open again.");
  };
  const lockMsg = (r) => {
    const i = RANKS.findIndex((x) => x.k === r.k);
    const prev = RANKS[i - 1];
    return prev ? "Finish " + prev.full + " first" : "Not open yet";
  };
  const goNext = () => {
    if (!nextReq) return;
    if (nextReq.type === "document") return setSheet(nextReq.id);
    setExpanded(nextReq.id);
    setTimeout(() => refs.current[nextReq.id]?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), 60);
  };
  const openChat = (msg) => {
    flash("Opening " + TEAM_CHAT.name + " on Telegram\u2026");
    try {
      window.open(TEAM_CHAT.url, "_blank");
    } catch (e) {
    }
  };
  const shareCert = async () => {
    const title = (rank.abbr ? rank.abbr + " " : "") + ME.name;
    const line = rank.k === "BASE" ? title + " is now an activated member of the Gutguard Lifestyle." : title + " \u2014 " + (ACAD_TITLE[rank.k] || rank.full) + ", Gentrep Academy.";
    const url = "https://ggverse.ph/v/" + rank.ref;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Gentrep Academy",
          text: line,
          url
        });
        setLive("Share sheet opened");
        return;
      }
    } catch (e) {
      if (e && e.name === "AbortError") return;
    }
    try {
      await navigator.clipboard.writeText(line + " " + url);
      flash("Copied \u2014 paste it anywhere");
    } catch (e) {
      flash(url);
    }
  };
  const sheetReq = reqs.find((r) => r.id === sheet);
  const passReq = reqs.find((r) => r.id === pass);
  const passEv = passReq ? evById(stateOf(passReq.id).ev) : null;
  return jsxs("div", { className: "gg", lang: "en", ref: scroller, children: [
    " ",
    jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Anton&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital@1&display=swap');
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent;}
        .osw{font-family:'Sora',system-ui,sans-serif;} .ant{font-family:'Anton',system-ui,sans-serif;}
        .inr{font-family:'Inter',system-ui,sans-serif;}
        button{font-family:'Sora',system-ui,sans-serif;cursor:pointer;border:none;min-height:44px;}
        button,[role="button"]{min-height:44px;}
        button.link{min-height:44px;}
        button:focus-visible,[role="button"]:focus-visible{outline:3px solid ${C.blue};outline-offset:2px;}
        .tap{transition:transform .08s ease;} .tap:active{transform:scale(.98);}
        @keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}} .fade{animation:fade .2s ease;}
        @keyframes up{from{transform:translateY(20px);opacity:0}to{transform:none;opacity:1}} .up{animation:up .24s ease;}
        @keyframes cf{0%{transform:translate(0,0) rotate(0);opacity:1}100%{transform:translate(var(--tx),var(--ty)) rotate(var(--rot));opacity:0}}
        .cf{position:absolute;border-radius:2px;animation-name:cf;animation-timing-function:cubic-bezier(.15,.6,.4,1);animation-fill-mode:forwards;}
        @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(37,105,184,.36)}50%{box-shadow:0 0 0 9px rgba(37,105,184,0)}}
        .pulse{animation:pulse 2.2s ease-in-out infinite;}
        .gg{min-height:100vh;background:${C.paper};color:${C.ink};font-family:'Inter',system-ui,sans-serif;font-size:15px;}
        .shell{display:block;}
        .col{max-width:440px;margin:0 auto;padding:0 16px 118px;}
        .side{display:none;}
        .grid{display:grid;grid-template-columns:1fr;gap:0;}
        .rail{order:-1;}
        .modal{align-items:flex-end;}
        .sheet{width:100%;max-width:440px;border-radius:20px 20px 0 0;max-height:90vh;}
        .only-desktop{display:none;}

        /* --- small phones --- */
        @media(max-width:359px){
          .col{padding:0 12px 118px;}
          .spine{width:24px !important;}
          .rail-date{width:46px;}
          .ev{flex-wrap:wrap;}
          .ev-act{width:100%;}
        }

        /* --- tablet --- */
        @media(min-width:600px) and (max-width:899px){
          .col{max-width:600px;padding-bottom:118px;}
        }

        /* --- desktop --- */
        @media(min-width:900px){
          .shell{display:flex;max-width:1240px;margin:0 auto;min-height:100vh;align-items:stretch;}
          .side{display:flex;flex-direction:column;width:280px;flex-shrink:0;gap:10px;
                padding:28px 20px;background:${C.card};border-right:1px solid ${C.line};position:sticky;top:0;height:100vh;overflow-y:auto;}
          .col{flex:1;max-width:100%;margin:0;padding:30px 34px 60px;}
          .grid{grid-template-columns:minmax(0,1fr) 330px;gap:26px;align-items:start;}
          .rail{order:2;position:sticky;top:30px;}
          .only-mobile{display:none !important;}
          .only-desktop{display:flex;}
          .foot{display:none;}
          .modal{align-items:center;padding:24px;}
          .sheet{max-width:540px;border-radius:20px;max-height:86vh;}
        }
        @media(min-width:1180px){ .col{padding:34px 48px 70px;} .grid{gap:34px;} }
        .sec{font-family:'Anton',sans-serif;font-size:15px;letter-spacing:.11em;text-transform:uppercase;color:${C.navy};}
        .bar{display:flex;align-items:center;gap:10px;margin:24px 0 14px;}
        .bar:after{content:"";flex:1;height:1px;background:${C.line};}
        .noscroll::-webkit-scrollbar{display:none;} .noscroll{scrollbar-width:none;}
        .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;
                 clip:rect(0 0 0 0);white-space:nowrap;border:0;}
        .skip{position:absolute;left:-9999px;top:8px;z-index:100;background:${C.navy};color:#fff;
              padding:12px 18px;border-radius:10px;font-weight:700;}
        .skip:focus{left:16px;}
        ol.reqs{list-style:none;margin:0;padding:0;}
        @media(prefers-contrast:more){
          .card-b{border-width:2px !important;border-color:${C.navy} !important;}
          .sec,h1,h2{color:#000 !important;}
        }
        .gg-foot{position:fixed;left:0;right:0;bottom:0;z-index:41;pointer-events:none;}
        @media(min-width:900px){
          .gg-foot{left:280px;}
          .gg-foot-inner{max-width:620px;border-radius:16px 16px 0 0;border:1px solid ${C.line};border-bottom:none;}
        }
        .gg-foot-inner{transform:translateY(125%);visibility:hidden;
                       transition:transform .28s cubic-bezier(.4,0,.2,1),visibility 0s linear .28s;}
        .gg-foot.on .gg-foot-inner{transform:translateY(0);visibility:visible;
                       transition:transform .28s cubic-bezier(.4,0,.2,1),visibility 0s;}
        @media(prefers-reduced-motion:reduce){.gg-foot-inner{transition:none;}}
        .gg-foot-inner{max-width:440px;margin:0 auto;pointer-events:auto;background:#ffffff;
          border-top:1px solid ${C.line};box-shadow:0 -6px 24px rgba(15,36,68,.12);
          padding:10px 16px calc(10px + env(safe-area-inset-bottom));}
        .foot{position:fixed;left:0;right:0;bottom:0;z-index:40;background:${C.card};border-top:1px solid ${C.line};
              box-shadow:0 -8px 26px rgba(15,36,68,.12);padding:12px 16px calc(12px + env(safe-area-inset-bottom));}
        .foot-in{max-width:440px;margin:0 auto;}
        .hatch{background-image:repeating-linear-gradient(115deg,rgba(255,255,255,.075) 0 2px,transparent 2px 13px);}
        @media (prefers-reduced-motion:reduce){.fade,.up,.cf,.pulse{animation:none}}

        /* ============ MOBILE HARDENING ============ */
        html,body{overflow-x:hidden;}
        .gg{height:100vh;height:100dvh;overflow-y:auto;overflow-x:hidden;
            overscroll-behavior-y:contain;-webkit-overflow-scrolling:touch;position:relative;}
        .gg *{max-width:100%;}
        img,svg{max-width:100%;height:auto;}

        /* iOS zooms any input under 16px — keep them at 16 */
        input,select,textarea{font-size:16px !important;}

        /* respect the notch and the home indicator */
        .col{padding-left:max(16px,env(safe-area-inset-left));
             padding-right:max(16px,env(safe-area-inset-right));}
        .gg-foot-inner{padding-bottom:calc(10px + env(safe-area-inset-bottom));}
        .sheet{padding-bottom:calc(26px + env(safe-area-inset-bottom)) !important;}

        /* long words and card numbers must not push the layout sideways */
        .osw,.inr,.ant,h1,h2,h3,h4,p,span,div{overflow-wrap:anywhere;}

        /* ---- 390px and under: the common Android/iPhone width ---- */
        @media(max-width:400px){
          .gg{font-size:14.5px;}
          .col{padding-left:max(13px,env(safe-area-inset-left));
               padding-right:max(13px,env(safe-area-inset-right));}
          .gg-foot-inner{padding-left:13px;padding-right:13px;}
        }

        /* ---- 360px and under: budget Android ---- */
        @media(max-width:360px){
          .col{padding-left:11px;padding-right:11px;}
          .spine{width:22px !important;}
          .rail-date{width:44px !important;}
          /* the three stat tiles get tight — let them shrink, not clip */
          .stat-row{gap:7px !important;}
          .stat-row .ant{font-size:20px !important;}
          /* event rows wrap their action onto a second line */
          .ev{flex-wrap:wrap;}
          .ev-act{width:100%;margin-top:8px;}
          /* dose steppers keep their targets but tighten the gap */
          .dose-step{gap:6px !important;}
        }

        /* ---- very small / large text settings ---- */
        @media(max-width:320px){
          .col{padding-left:9px;padding-right:9px;}
          .gg{font-size:14px;}
        }

        /* ---- landscape phone: sheets must not exceed the viewport ---- */
        @media(max-height:520px){
          .sheet{max-height:96vh !important;max-height:96dvh !important;}
          .modal{align-items:flex-end;}
        }
      ` }),
    " ",
    jsx(Confetti, { fire, big: bigFire }),
    " ",
    jsx("a", { className: "skip inr", href: "#reqs", children: "Skip to what it takes" }),
    " ",
    jsxs("div", { className: "shell", children: [
      " ",
      jsxs("aside", { className: "side", "aria-label": "Academy navigation", children: [
        " ",
        jsxs("div", { style: {
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          paddingBottom: 4
        }, children: [
          " ",
          jsx(GentrepLogo, { height: 26, color: C.navy }),
          " ",
          jsx("span", { style: {
            fontFamily: "'Playfair Display',Georgia,serif",
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 0.95,
            color: C.navy
          }, children: "Academy" })
        ] }),
        " ",
        jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 11,
          padding: "12px 0 16px",
          borderBottom: `1px solid ${C.line}`
        }, children: [
          " ",
          jsx("span", { style: {
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: C.navy,
            color: "#fff",
            display: "grid",
            placeItems: "center",
            fontFamily: "'Sora',sans-serif",
            fontWeight: 700,
            fontSize: 14,
            flexShrink: 0
          }, children: ME.name.split(" ").map((w) => w[0]).join("").slice(0, 2) }),
          " ",
          jsxs("span", { style: {
            minWidth: 0
          }, children: [
            " ",
            jsx("span", { className: "osw", style: {
              display: "block",
              fontSize: 15,
              fontWeight: 700,
              color: C.navy
            }, children: ME.name }),
            " ",
            jsxs("span", { className: "inr", style: {
              display: "block",
              fontSize: 13,
              color: C.mute
            }, children: [
              "Team ",
              ME.team
            ] })
          ] })
        ] }),
        " ",
        jsx("nav", { "aria-label": "Ranks", style: {
          display: "flex",
          flexDirection: "column",
          gap: 6,
          paddingTop: 4
        }, children: RANKS.map((r) => {
          const on = r.k === rankKey;
          const rDone = r.reqs.length && r.reqs.every((x) => (st[x.id] || {}).s === "done");
          const isState = r.kind === "state";
          return jsxs("button", { className: "tap", "aria-current": on ? "page" : void 0, "aria-disabled": r.locked || void 0, onClick: () => r.locked ? (flash(lockMsg(r)), setLive(r.full + " is locked. " + lockMsg(r))) : (setRankKey(r.k), setExpanded(null), setLive(r.full + ", " + r.phase + " selected")), style: {
            display: "flex",
            alignItems: "center",
            gap: 11,
            width: "100%",
            textAlign: "left",
            padding: "11px 13px",
            borderRadius: 12,
            cursor: r.locked ? "not-allowed" : "pointer",
            background: on ? C.navy : "transparent",
            color: on ? "#fff" : r.locked ? C.mute : C.ink,
            border: r.locked ? "1.5px dashed #cbd5e3" : "1.5px solid transparent"
          }, children: [
            r.locked ? jsx(LockIcon, { size: 17, color: C.mute }) : jsxs("span", { style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 26,
              flexShrink: 0
            }, children: [
              " ",
              jsx(Insignia, { ...RANK_DEVICE[r.pips], size: r.pips === 0 ? 22 : r.pips === 4 ? 21 : 13, mark: false })
            ] }),
            " ",
            jsxs("span", { style: {
              flex: 1,
              minWidth: 0
            }, children: [
              " ",
              jsx("span", { className: "osw", style: {
                display: "block",
                fontSize: 14.5,
                fontWeight: 700
              }, children: r.full }),
              " ",
              jsx("span", { className: "inr", style: {
                display: "block",
                fontSize: 12.5,
                opacity: on ? 0.82 : 0.72
              }, children: r.locked ? lockMsg(r) : r.phase })
            ] }),
            r.locked && jsx(LockIcon, { size: 14, color: C.mute })
          ] }, r.k);
        }) }),
        " ",
        jsxs("div", { style: {
          marginTop: 8
        }, children: [
          " ",
          jsx(SyncChip, { sync })
        ] }),
        " ",
        rankKey === "LICA" && doseSet && jsx("button", { className: "tap", onClick: () => setOrder(true), style: {
          marginTop: 6,
          width: "100%",
          minHeight: 48,
          borderRadius: 12,
          background: refillStage(daysLeft) === 1 ? C.clay : refillStage(daysLeft) === 5 ? C.gold : C.blue,
          color: refillStage(daysLeft) === 5 ? C.navy : "#fff",
          fontSize: 15,
          fontWeight: 700
        }, children: refillStage(daysLeft) ? "Reorder \u00b7 " + daysLeft + " days left" : "Reorder supply" }),
        jsxs("button", { className: "tap", onClick: () => setSettingsOpen(true), style: {
          marginTop: 6,
          width: "100%",
          textAlign: "left",
          padding: "11px 13px",
          borderRadius: 12,
          background: C.paper,
          border: `1.5px solid ${C.line}`,
          color: C.navy,
          fontSize: 14,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 9
        }, children: [
          " ",
          jsx(GearIcon, { size: 17, color: C.navy }),
          " Settings"
        ] }),
        " ",
        jsx("button", { className: "tap", onClick: () => setGuide(true), style: {
          marginTop: 6,
          width: "100%",
          textAlign: "left",
          padding: "11px 13px",
          borderRadius: 12,
          background: C.paper,
          border: `1.5px solid ${C.line}`,
          color: C.navy,
          fontSize: 14,
          fontWeight: 700
        }, children: "About Gentrep Academy" }),
        rank.kind !== "state" && !complete && nextReq && jsxs("div", { style: {
          marginTop: "auto",
          paddingTop: 18,
          borderTop: `1px solid ${C.line}`
        }, children: [
          " ",
          jsx("div", { className: "inr", style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".07em",
            textTransform: "uppercase",
            color: C.mute
          }, children: "Do this next" }),
          " ",
          jsx("div", { className: "osw", style: {
            fontSize: 15,
            fontWeight: 600,
            color: C.navy,
            margin: "5px 0 10px",
            lineHeight: 1.35
          }, children: nextReq.title }),
          " ",
          jsx("button", { className: "tap", onClick: goNext, style: {
            width: "100%",
            borderRadius: 12,
            background: C.blue,
            color: "#fff",
            fontSize: 14.5,
            fontWeight: 700
          }, children: nextReq.type === "document" ? "Watch the video" : "Pick a date" })
        ] })
      ] }),
      " ",
      jsxs("main", { className: "col", children: [
        " ",
        jsxs("header", { className: "only-mobile", style: {
          display: "flex",
          alignItems: "flex-end",
          gap: 9,
          padding: "20px 2px 4px"
        }, children: [
          " ",
          jsx(GentrepLogo, { height: 30, color: C.navy }),
          " ",
          jsx("span", { style: {
            fontFamily: "'Playfair Display',Georgia,serif",
            fontStyle: "italic",
            fontSize: 23,
            lineHeight: 0.95,
            color: C.navy
          }, children: "Academy" })
        ] }),
        " ",
        jsxs("div", { className: "only-mobile", style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          padding: "0 2px 8px"
        }, children: [
          " ",
          jsxs("span", { className: "inr", style: {
            fontSize: 13.5,
            color: C.mute
          }, children: [
            ME.name,
            " \xB7 Team ",
            ME.team
          ] }),
          " ",
          jsxs("span", { style: {
            display: "flex",
            alignItems: "center",
            gap: 8
          }, children: [
            " ",
            jsx(SyncChip, { sync }),
            " ",
            notifs.length > 0 && jsxs("button", { className: "tap", onClick: () => setNotifOpen(true), "aria-label": "Notifications",
              style: { position: "relative", width: 44, height: 44, minHeight: 44, borderRadius: 999,
                       background: C.card, border: `1.5px solid ${C.line}`, display: "grid", placeItems: "center" },
              children: [
                jsxs("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: C.navy,
                  strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
                    jsx("path", { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }),
                    jsx("path", { d: "M13.7 21a2 2 0 0 1-3.4 0" })
                  ] }),
                jsx("span", { style: { position: "absolute", top: 8, right: 9, width: 9, height: 9,
                    borderRadius: 99, background: C.clay, border: "2px solid #fff" } })
              ] }),
            jsx("button", { className: "tap", onClick: () => setGuide(true), style: {
              minHeight: 44,
              padding: "0 14px",
              borderRadius: 999,
              background: C.card,
              border: `1.5px solid ${C.line}`,
              color: C.navy,
              fontSize: 13,
              fontWeight: 700
            }, children: "About" }),
            " ",
            jsxs("button", { className: "tap", onClick: () => { setFeedOpen(true); setSeen(true); },
              "aria-label": "Notifications", style: {
              width: 44, height: 44, minHeight: 44, borderRadius: 999, background: C.card,
              border: `1.5px solid ${C.line}`, display: "grid", placeItems: "center", position: "relative"
            }, children: [
              jsx(BellIcon, { size: 18, color: C.navy }),
              unseen > 0 && jsx("span", { style: { position: "absolute", top: 6, right: 7, width: 9, height: 9,
                borderRadius: 99, background: C.clay, border: "2px solid #fff" } })
            ] }),
            jsxs("button", { className: "tap", onClick: () => setSettingsOpen(true), "aria-label": "Settings", style: {
              width: 44,
              height: 44,
              minHeight: 44,
              borderRadius: 999,
              background: C.card,
              border: `1.5px solid ${C.line}`,
              display: "grid",
              placeItems: "center"
            }, children: [
              " ",
              jsx(GearIcon, { size: 17, color: C.navy })
            ] })
          ] })
        ] }),
        rankKey === "LICA" && !showLadder ? jsx("button", { className: "tap only-mobile", onClick: () => setShowLadder(true), style: {
          width: "100%",
          marginTop: 10,
          minHeight: 46,
          borderRadius: 12,
          background: "transparent",
          border: `1.5px dashed ${C.line}`,
          color: C.mute,
          fontSize: 13.5,
          fontWeight: 700
        }, children: "Training and ranks" }) : jsx("nav", { className: "noscroll only-mobile", "aria-label": "Ranks", style: {
          display: "flex",
          gap: 8,
          overflowX: "auto",
          padding: "8px 0 2px"
        }, children: RANKS.map((r) => {
          const on = r.k === rankKey;
          return jsxs("button", { className: "tap", "aria-current": on ? "page" : void 0, "aria-disabled": r.locked || void 0, onClick: () => r.locked ? (flash(lockMsg(r)), setLive(r.full + " is locked. " + lockMsg(r))) : (setRankKey(r.k), setExpanded(null)), style: {
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 15px",
            borderRadius: 12,
            cursor: r.locked ? "not-allowed" : "pointer",
            background: on ? C.navy : r.locked ? "#f4f7fb" : C.card,
            border: `1.5px ${r.locked ? "dashed" : "solid"} ${on ? C.navy : r.locked ? "#cbd5e3" : C.line}`,
            color: on ? "#fff" : r.locked ? C.mute : C.ink
          }, children: [
            r.locked ? jsx(LockIcon, { size: 14, color: C.mute }) : jsxs("span", { style: {
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 22,
              flexShrink: 0
            }, children: [
              " ",
              jsx(Insignia, { ...RANK_DEVICE[r.pips], size: r.pips === 0 ? 18 : r.pips === 4 ? 17 : 11, mark: false })
            ] }),
            " ",
            jsx("span", { className: "ant", style: {
              fontSize: 15,
              letterSpacing: ".06em"
            }, children: r.n }),
            " ",
            jsxs("span", { className: "sr-only", children: [
              r.full,
              ", ",
              r.phase,
              r.locked ? ", locked. " + lockMsg(r) : ""
            ] }),
            r.locked && jsx("span", { className: "inr", style: {
              fontSize: 12,
              fontWeight: 600
            }, children: "Locked" })
          ] }, r.k);
        }) }),
        " ",
        jsxs("div", { className: "grid", children: [
          " ",
          jsxs("div", { className: "rail", children: [
            " ",
            jsxs("section", { className: "hatch", style: {
              background: complete ? `linear-gradient(160deg,#1a7a49,#0f5a35)` : HERO,
              borderRadius: 18,
              padding: "20px 18px",
              color: "#fff",
              marginTop: 14,
              position: "relative",
              overflow: "hidden",
              isolation: "isolate",
              boxShadow: "0 18px 40px -22px rgba(14,34,73,.7)"
            }, children: [
              " ",
              jsx(GentrepLogo, { markOnly: true, height: 250, "aria-hidden": "true", style: {
                position: "absolute",
                top: "50%",
                left: "76%",
                transform: "translateY(-50%)",
                opacity: 0.16,
                zIndex: -1
              } }),
              " ",
              jsxs("div", { style: {
                display: "flex",
                alignItems: "center",
                gap: 9
              }, children: [
                " ",
                jsx("span", { style: {
                  height: 2,
                  width: 22,
                  background: C.gold,
                  display: "block"
                } }),
                " ",
                jsx("span", { className: "inr", style: {
                  fontSize: 12.5,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  opacity: 0.92
                }, children: rankKey === "LICA" ? "Lifestyle Card Activation" : rankKey === "BASE" ? "Activation" : "Rank certification" })
              ] }),
              " ",
              jsx("h1", { className: "ant", style: {
                fontSize: 30,
                letterSpacing: ".03em",
                margin: "7px 0 0",
                lineHeight: 1.02,
                textTransform: "uppercase"
              }, children: rank.full }),
              " ",
              jsxs("div", { className: "inr", style: {
                fontSize: 14,
                color: "rgba(255,255,255,.8)",
                marginTop: 5,
                letterSpacing: ".01em"
              }, children: [
                rank.phase,
                rank.k !== "BASE" ? " \xB7 " + rank.n : ""
              ] }),
              " ",
              jsxs("div", { style: {
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: 12,
                marginTop: 12
              }, children: [
                " ",
                jsx("div", { className: "inr", style: {
                  fontSize: 15,
                  fontWeight: 600
                }, children: complete ? "All done." : `${done} of ${total} done` }),
                " ",
                jsx("div", { style: {
                  display: "flex",
                  gap: 4
                }, children: (rank.kind === "state" ? [] : reqs).map((r) => jsx("span", { style: {
                  width: 9,
                  height: 9,
                  borderRadius: 2,
                  transform: "rotate(45deg)",
                  background: stateOf(r.id).s === "done" ? C.gold : stateOf(r.id).s === "booked" ? "rgba(245,183,22,.5)" : "rgba(255,255,255,.28)"
                } }, r.id)) })
              ] }),
              rank.kind !== "state" && jsxs("div", { role: "progressbar", "aria-valuenow": done, "aria-valuemin": 0, "aria-valuemax": total, "aria-label": rank.full + " progress", "aria-valuetext": `${done} of ${total} requirements complete`, style: {
                height: 8,
                background: "rgba(255,255,255,.25)",
                borderRadius: 99,
                marginTop: 10,
                overflow: "hidden"
              }, children: [
                " ",
                jsx("div", { style: {
                  width: `${total ? done / total * 100 : 0}%`,
                  height: "100%",
                  background: C.gold,
                  transition: "width .45s cubic-bezier(.4,0,.2,1)"
                } })
              ] }),
              " ",
              jsx("div", { className: "inr", style: {
                fontSize: 13,
                opacity: 0.92,
                marginTop: 9
              }, children: rank.kind === "state" ? cardLive ? LICA.month + " months unbroken \xB7 " + daysLeft + " days left" : licaDone + " of " + licaAll + " to activate" : [booked ? booked + " booked" : null, missed ? missed + " missed" : null].filter(Boolean).join(" \xB7 ") || "\xA0" })
            ] }),
            " ",
            jsxs("button", { className: "tap", onClick: () => openChat(), style: {
              width: "100%",
              marginTop: 12,
              background: C.card,
              border: `1.5px solid ${C.line}`,
              borderRadius: 14,
              padding: "13px 14px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textAlign: "left"
            }, children: [
              " ",
              jsxs("span", { style: {
                width: 42,
                height: 42,
                borderRadius: 12,
                background: C.tg,
                display: "grid",
                placeItems: "center",
                flexShrink: 0
              }, children: [
                " ",
                jsx(TgIcon, { size: 22 })
              ] }),
              " ",
              jsxs("span", { style: {
                flex: 1,
                minWidth: 0
              }, children: [
                " ",
                jsxs("span", { className: "osw", style: {
                  display: "block",
                  fontSize: 15.5,
                  fontWeight: 600,
                  color: C.navy
                }, children: [
                  TEAM_CHAT.name,
                  " chat"
                ] }),
                " ",
                jsxs("span", { className: "inr", style: {
                  display: "block",
                  fontSize: 13.5,
                  color: C.mute,
                  marginTop: 2
                }, children: [
                  TEAM_CHAT.members,
                  " members \xB7 ask before you go"
                ] })
              ] }),
              TEAM_CHAT.unread > 0 && jsxs("span", { className: "inr", style: {
                background: C.clay,
                color: "#fff",
                borderRadius: 99,
                fontSize: 12.5,
                fontWeight: 700,
                padding: "3px 9px",
                flexShrink: 0
              }, children: [
                TEAM_CHAT.unread,
                " new"
              ] })
            ] })
          ] }),
          " ",
          jsxs("div", { className: "list", children: [
            rank.kind === "state" ? jsxs(Fragment, { children: [
              " ",
              jsx("div", { style: {
                background: out ? C.clayBg : low ? C.warnBg : C.card,
                border: `1.5px solid ${out ? C.clay : low ? C.gold : C.line}`,
                borderRadius: 18,
                padding: "20px 18px",
                marginTop: 4
              }, children: !buy.activates ? jsxs(Fragment, { children: [
                " ",
                jsx("div", { className: "osw", style: {
                  fontSize: 20,
                  fontWeight: 700,
                  color: C.navy,
                  lineHeight: 1.3
                }, children: "You're trying it" }),
                " ",
                jsxs("p", { className: "inr", style: {
                  fontSize: 14.5,
                  color: C.ink,
                  margin: "7px 0 0",
                  lineHeight: 1.65
                }, children: [
                  "One blister, ",
                  buy.caps,
                  " capsules. A month is 2 blisters or 1 bottle \\u2014 that's where your card switches on and ",
                  LICA.sponsor,
                  " starts looking after you."
                ] }),
                " ",
                jsx("button", { className: "tap", onClick: () => setOrder(true), style: {
                  width: "100%",
                  marginTop: 15,
                  minHeight: 54,
                  borderRadius: 13,
                  background: C.blue,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 700
                }, children: "Start a month" })
              ] }) : !cardLive ? jsx(Fragment, { children: !doseSet ? jsxs(Fragment, { children: [
                " ",
                jsx("div", { className: "osw", style: {
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: C.mute,
                  fontWeight: 600,
                  margin: "0 0 10px"
                }, children: "Dosing \\u00b7 up to 3\\u00d7 a day" }),
                ALL_SLOTS.map((k) => {
                  const on = dose[k] > 0;
                  return jsxs("div", { style: {
                    background: C.card,
                    border: `1px solid ${on ? C.line : "#EEF1F6"}`,
                    borderRadius: 12,
                    padding: "12px 14px",
                    marginBottom: 9
                  }, children: [
                    " ",
                    jsxs("div", { style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 12
                    }, children: [
                      " ",
                      jsxs("div", { style: {
                        flex: 1,
                        minWidth: 0
                      }, children: [
                        " ",
                        jsx("div", { className: "osw", style: {
                          fontSize: 15,
                          fontWeight: 600,
                          color: on ? C.navy : C.mute
                        }, children: META[k].label }),
                        " ",
                        jsx("div", { className: "inr", style: {
                          fontSize: 12,
                          color: C.mute
                        }, children: META[k].note })
                      ] }),
                      " ",
                      jsxs("div", { className: "dose-step", style: {
                        display: "flex",
                        alignItems: "center",
                        gap: 9
                      }, children: [
                        " ",
                        jsx("button", { className: "tap", onClick: () => setCap(k, -1), disabled: dose[k] === 0, "aria-label": "One less at " + META[k].label, style: stepBtn(dose[k] === 0), children: "\u2212" }),
                        " ",
                        jsx("div", { style: {
                          width: 44,
                          textAlign: "center"
                        }, children: on ? jsxs(Fragment, { children: [
                          " ",
                          jsx("span", { className: "ant", style: {
                            fontSize: 20,
                            color: C.navy
                          }, children: dose[k] }),
                          " ",
                          jsx("div", { className: "inr", style: {
                            fontSize: 9,
                            color: C.mute,
                            marginTop: -2
                          }, children: "caps" })
                        ] }) : jsx("span", { className: "inr", style: {
                          fontSize: 12.5,
                          color: C.mute
                        }, children: "off" }) }),
                        " ",
                        jsx("button", { className: "tap", onClick: () => setCap(k, 1), disabled: dose[k] === 3, "aria-label": "One more at " + META[k].label, style: stepBtn(dose[k] === 3), children: "+" })
                      ] })
                    ] }),
                    on && jsxs("div", { style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 11,
                      paddingTop: 11,
                      borderTop: `1px solid ${C.line}`
                    }, children: [
                      " ",
                      jsx("span", { className: "inr", style: {
                        fontSize: 12.5,
                        color: C.mute
                      }, children: "Remind at" }),
                      " ",
                      jsx("input", { type: "time", value: times[k], onChange: (e) => setTimes((t) => ({
                        ...t,
                        [k]: e.target.value
                      })), style: {
                        fontSize: 15,
                        fontWeight: 600,
                        padding: "7px 10px",
                        border: `1.5px solid ${C.line}`,
                        borderRadius: 9,
                        color: C.navy,
                        fontFamily: "'Sora',sans-serif",
                        background: "#fff"
                      } })
                    ] })
                  ] }, k);
                }),
                " ",
                jsxs("div", { className: "inr", style: {
                  fontSize: 12,
                  color: C.mute,
                  marginTop: 2
                }, children: [
                  "Total: ",
                  jsxs("b", { style: {
                    color: C.navy
                  }, children: [
                    perDay,
                    " caps/day"
                  ] }),
                  ". Follow your product label or your doctor's advice."
                ] }),
                " ",
                jsx("button", { className: "tap", disabled: perDay < MIN_DAILY, onClick: () => setDoseSet(true), style: {
                  width: "100%",
                  marginTop: 14,
                  minHeight: 50,
                  borderRadius: 12,
                  fontSize: 15.5,
                  fontWeight: 700,
                  background: perDay < MIN_DAILY ? C.line : C.blue,
                  color: perDay < MIN_DAILY ? C.mute : "#fff",
                  cursor: perDay < MIN_DAILY ? "not-allowed" : "pointer"
                }, children: perDay < MIN_DAILY ? "At least " + MIN_DAILY + " caps a day" : "Save" })
              ] }) : jsxs(Fragment, { children: [
                " ",
                jsxs("div", { style: {
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: 12
                }, children: [
                  " ",
                  jsx("div", { className: "osw", style: {
                    fontSize: 16,
                    fontWeight: 600,
                    color: C.navy
                  }, children: "Today's doses" }),
                  " ",
                  jsxs("div", { className: "inr", style: {
                    fontSize: 15,
                    fontWeight: 700,
                    color: SLOTS.filter((k) => today[k]).length === SLOTS.length ? C.good : C.mute
                  }, children: [
                    SLOTS.filter((k) => today[k]).length,
                    " of ",
                    SLOTS.length,
                    " done"
                  ] })
                ] }),
                SLOTS.map((k) => {
                  const done2 = !!today[k];
                  return jsxs("div", { className: "ev", style: {
                    background: done2 ? C.goodBg : C.card,
                    border: `1px solid ${done2 ? C.good : C.line}`,
                    borderRadius: 13,
                    padding: "15px 15px",
                    marginBottom: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 12
                  }, children: [
                    " ",
                    jsxs("div", { style: {
                      flex: 1,
                      minWidth: 0
                    }, children: [
                      " ",
                      jsx("div", { className: "osw", style: {
                        fontSize: 18,
                        fontWeight: 700,
                        color: done2 ? C.good : C.navy
                      }, children: META[k].label }),
                      " ",
                      jsxs("div", { className: "inr", style: {
                        fontSize: 14,
                        color: C.mute
                      }, children: [
                        META[k].note,
                        " \\u00b7 ",
                        dose[k],
                        " ",
                        dose[k] === 1 ? "capsule" : "capsules"
                      ] })
                    ] }),
                    done2 ? jsx("span", { style: {
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      background: C.good,
                      color: "#fff",
                      fontSize: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }, children: "\u2713" }) : jsx("button", { className: "tap", onClick: () => {
                      const nx = {
                        ...today,
                        [k]: true
                      };
                      setToday(nx);
                      const left = SLOTS.filter((x) => !nx[x]).length;
                      if (left === 0 && daysConsumed < ACTIVATION_DAYS) {
                        setDaysConsumed(daysConsumed + 1);
                        setLog((L) => ({
                          ...L,
                          [TODAY]: SLOTS.length
                        }));
                        setToday({});
                        flash(daysConsumed + 1 >= ACTIVATION_DAYS ? "That's all ten days" : "All doses done today!");
                      } else flash(META[k].label + " done");
                    }, style: {
                      background: "transparent",
                      color: C.good,
                      fontSize: 13,
                      fontWeight: 700,
                      border: `1.5px solid ${C.good}`,
                      borderRadius: 8,
                      padding: "9px 16px",
                      minHeight: 40,
                      flexShrink: 0
                    }, children: "Done" })
                  ] }, k);
                }),
                " ",
                jsxs("div", { className: "stat-row", style: {
                  display: "flex",
                  gap: 10,
                  marginTop: 12
                }, children: [
                  " ",
                  jsx(Stat, { big: capsLeft, label: "Capsules left", tone: low ? C.clay : C.navy }),
                  " ",
                  jsx(Stat, { big: daysLeft + "d", label: "Supply left", tone: low ? C.clay : C.good }),
                  " ",
                  jsx(Stat, { big: streak, label: "Streak", tone: C.blue })
                ] }),
                " ",
                jsxs("div", { style: { marginTop: 16 }, children: [
                  jsxs("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }, children: [
                    jsxs("span", { className: "osw", style: { fontSize: 17, fontWeight: 700, color: C.navy }, children: [
                      daysConsumed, daysConsumed === 1 ? " day done" : " days done"
                    ] }),
                    jsx("span", { className: "inr", style: { fontSize: 13.5, color: C.mute },
                        children: "Day " + (daysConsumed + 1) + " of the first ten" })
                  ] }),
                  jsx("div", { style: { height: 10, borderRadius: 99, background: "#e8edf4", marginTop: 10, overflow: "hidden" },
                      children: jsx("div", { style: { width: (Math.min(daysConsumed, ACTIVATION_DAYS) / ACTIVATION_DAYS) * 100 + "%",
                        height: "100%", background: C.gold, transition: "width .45s cubic-bezier(.4,0,.2,1)" } }) })
                ] }),

                DAY_NOTES[Math.min(daysConsumed + 1, ACTIVATION_DAYS)] && (() => {
                  const n = DAY_NOTES[Math.min(daysConsumed + 1, ACTIVATION_DAYS)];
                  const tone = NOTE_TONE[n.kind];
                  return jsxs("div", { style: {
                    marginTop: 14, background: "#fff", border: `1.5px solid ${C.line}`,
                    borderLeft: `4px solid ${tone}`, borderRadius: 13, padding: "14px 15px"
                  }, children: [
                    jsx("div", { className: "inr", style: { fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em",
                        textTransform: "uppercase", color: tone }, children: NOTE_LABEL[n.kind] }),
                    jsx("div", { className: "osw", style: { fontSize: 16, fontWeight: 600, color: C.navy,
                        marginTop: 5, lineHeight: 1.35 }, children: n.t }),
                    jsx("p", { className: "inr", style: { fontSize: 14, color: C.ink, margin: "5px 0 0", lineHeight: 1.6 },
                        children: n.d }),
                    n.src && jsx("div", { className: "inr", style: { fontSize: 11.5, color: C.mute, marginTop: 8,
                        fontStyle: "italic" }, children: n.src })
                  ] });
                })(),

                jsx("button", { className: "tap", onClick: () => setWhy(!why), style: {
                  background: "none",
                  padding: "10px 0 0",
                  color: C.mute,
                  fontSize: 13.5,
                  fontWeight: 600,
                  textDecoration: "underline",
                  minHeight: 40
                }, children: "What happens then?" }),
                why && jsxs("div", { className: "fade", style: {
                  marginTop: 4,
                  paddingTop: 12,
                  borderTop: `1px solid ${C.line}`
                }, children: [
                  [["Your card starts working", "The one in your wallet"], ["You get the full app", "Your health, your team, your story"], ["Then day 30", "Your first check, where you see what changed"], ["Your name is read out", "At the next meeting, with the others"]].map(([t, d]) => jsxs("div", { style: {
                    display: "flex",
                    gap: 11,
                    alignItems: "flex-start",
                    paddingBottom: 11
                  }, children: [
                    " ",
                    jsx("span", { style: {
                      width: 8,
                      height: 8,
                      borderRadius: 99,
                      background: C.gold,
                      flexShrink: 0,
                      marginTop: 6
                    } }),
                    " ",
                    jsxs("span", { style: {
                      minWidth: 0
                    }, children: [
                      " ",
                      jsx("span", { className: "osw", style: {
                        display: "block",
                        fontSize: 15,
                        fontWeight: 600,
                        color: C.navy
                      }, children: t }),
                      " ",
                      jsx("span", { className: "inr", style: {
                        display: "block",
                        fontSize: 13.5,
                        color: C.mute,
                        marginTop: 1
                      }, children: d })
                    ] })
                  ] }, t)),
                  " ",
                  jsx("p", { className: "inr", style: {
                    fontSize: 13.5,
                    color: C.mute,
                    margin: 0,
                    lineHeight: 1.55
                  }, children: "No rush. If you miss a day, nothing is lost." })
                ] })
              ] }) }) : jsxs(Fragment, { children: [
                checkDue && jsxs("div", { style: {
                  background: HERO, borderRadius: 16, padding: "18px 16px", color: "#fff", marginBottom: 16
                }, children: [
                  jsx("div", { className: "inr", style: { fontSize: 12, fontWeight: 700, letterSpacing: ".1em",
                       textTransform: "uppercase", opacity: .85 }, children: "One month in" }),
                  jsx("div", { className: "osw", style: { fontSize: 20, fontWeight: 700, marginTop: 6, lineHeight: 1.3 },
                       children: "Let's see what has changed." }),
                  jsx("p", { className: "inr", style: { fontSize: 14, opacity: .92, margin: "8px 0 0", lineHeight: 1.6 },
                       children: "Five questions, the same ones you answered in May. Two minutes." }),
                  jsx("button", { className: "tap", onClick: () => { setQIdx(0); setCheck("ask"); },
                    style: { width: "100%", marginTop: 15, minHeight: 52, borderRadius: 12, background: "#fff",
                             color: C.navy, fontSize: 15.5, fontWeight: 700 }, children: "Take the check" })
                ] }),
                checkDone && jsxs("button", { className: "tap", onClick: () => setCheck("result"),
                  style: { width: "100%", marginBottom: 16, minHeight: 50, borderRadius: 12, background: C.goodBg,
                           border: `1.5px solid ${C.good}`, color: C.good, fontSize: 14.5, fontWeight: 700 },
                  children: ["See your month-one result"] }),
                jsx("div", { className: "inr", style: {
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: C.mute
                }, children: "Your supply" }),
                " ",
                jsxs("div", { style: {
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 10,
                  marginTop: 6
                }, children: [
                  " ",
                  jsx("span", { className: "ant", style: {
                    fontSize: 52,
                    lineHeight: 0.95,
                    color: out ? C.clay : low ? C.warn : C.navy
                  }, children: out ? "0" : daysLeft }),
                  " ",
                  jsx("span", { className: "osw", style: {
                    fontSize: 18,
                    fontWeight: 600,
                    color: C.mute,
                    paddingBottom: 6
                  }, children: out ? "left" : daysLeft === 1 ? "day left" : "days left" })
                ] }),
                " ",
                daysConsumed < CHECK_DAY && jsxs("div", { style: {
                  display: "flex", alignItems: "center", gap: 12, marginTop: 14,
                  background: C.paper, border: `1px solid ${C.line}`, borderRadius: 13, padding: "12px 14px"
                }, children: [
                  jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                    jsx("div", { className: "osw", style: { fontSize: 15, fontWeight: 700, color: C.navy },
                        children: (CHECK_DAY - daysConsumed) + " days to your first check" }),
                    jsx("div", { className: "inr", style: { fontSize: 13, color: C.mute, marginTop: 2, lineHeight: 1.5 },
                        children: "The same five questions you answered in May, so you can see what moved." })
                  ] }),
                  jsx("div", { style: { width: 46, height: 46, flexShrink: 0, borderRadius: 99,
                        background: "conic-gradient(" + C.gold + " " + Math.round((daysConsumed / CHECK_DAY) * 360) + "deg, #e8edf4 0)",
                        display: "grid", placeItems: "center" },
                      children: jsx("div", { style: { width: 34, height: 34, borderRadius: 99, background: "#fff",
                        display: "grid", placeItems: "center", fontFamily: "'Sora',sans-serif", fontSize: 12.5,
                        fontWeight: 700, color: C.navy }, children: daysConsumed }) })
                ] }),
                jsx("p", { className: "inr", style: {
                  fontSize: 15,
                  color: C.ink,
                  margin: "14px 0 0",
                  lineHeight: 1.6
                }, children: out ? jsxs(Fragment, { children: [
                  " ",
                  jsxs("b", { children: [
                    LICA.sponsor,
                    " has been told."
                  ] }),
                  " Order now and keep going without a gap."
                ] }) : low ? jsxs(Fragment, { children: [
                  "Runs out ",
                  runOut,
                  ".  ",
                  jsxs("b", { children: [
                    LICA.sponsor,
                    " will message you"
                  ] }),
                  " \\u2014 or order now."
                ] }) : jsxs(Fragment, { children: [
                  "Covered until ",
                  runOut,
                  ". ",
                  LICA.sponsor,
                  " will reach you before it runs low."
                ] }) }),
                " ",
                jsx("button", { className: "tap", onClick: () => setOrder(true), style: {
                  width: "100%",
                  marginTop: 15,
                  minHeight: 54,
                  borderRadius: 13,
                  fontSize: 16,
                  fontWeight: 700,
                  background: out || low ? C.blue : "#fff",
                  border: out || low ? "none" : `1.5px solid ${C.line}`,
                  color: out || low ? "#fff" : C.navy
                }, children: out ? "Order now" : low ? "Order now \u2014 don't wait" : "Order more" })
              ] }) }),
              !cardLive && jsxs("div", { className: "bar", children: [
                " ",
                jsx("span", { className: "sec", children: "Set up" })
              ] }),
              " ",
              jsx("ol", { className: "reqs", style: {
                display: cardLive ? "none" : void 0
              }, children: LICA_ITEMS.map((it, i) => {
                const ok = it.ok;
                return jsxs("li", { style: {
                  display: "flex",
                  gap: 12,
                  alignItems: "stretch"
                }, children: [
                  " ",
                  jsxs("div", { style: {
                    width: 30,
                    position: "relative",
                    flexShrink: 0
                  }, "aria-hidden": "true", children: [
                    " ",
                    jsx("span", { style: {
                      position: "absolute",
                      left: 14,
                      top: i === 0 ? 30 : 0,
                      bottom: i === LICA_ITEMS.length - 1 ? "calc(100% - 30px)" : -10,
                      width: 2,
                      background: ok ? C.gold : C.line
                    } }),
                    " ",
                    jsx("span", { style: {
                      position: "absolute",
                      left: 3,
                      top: 18,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: ok ? C.gold : "#fff",
                      border: `2.5px solid ${ok ? C.gold : it.due ? C.blue : "#c3cedd"}`,
                      display: "grid",
                      placeItems: "center",
                      color: C.navy,
                      fontSize: 13,
                      fontWeight: 800,
                      fontFamily: "'Sora',sans-serif",
                      zIndex: 1
                    }, children: ok ? "\u2713" : "" })
                  ] }),
                  " ",
                  jsxs("article", { className: "card-b", style: {
                    flex: 1,
                    minWidth: 0,
                    background: C.card,
                    borderRadius: 14,
                    marginBottom: 10,
                    overflow: "hidden",
                    border: `1.5px solid ${it.due && !ok ? C.blue : C.line}`,
                    boxShadow: it.due && !ok ? "0 10px 26px -18px rgba(37,105,184,.9)" : "none"
                  }, children: [
                    " ",
                    jsxs("div", { style: {
                      padding: "14px 15px 13px"
                    }, children: [
                      " ",
                      jsx("div", { className: "inr", style: {
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: ".07em",
                        textTransform: "uppercase",
                        color: it.due && !ok ? C.blue : C.mute
                      }, children: it.every }),
                      " ",
                      jsx("h3", { className: "osw", style: {
                        fontSize: 16.5,
                        fontWeight: 600,
                        color: C.navy,
                        margin: "4px 0 0",
                        lineHeight: 1.3
                      }, children: it.title }),
                      " ",
                      jsx("p", { className: "inr", style: {
                        fontSize: 14,
                        color: ok ? C.good : C.mute,
                        margin: "5px 0 0",
                        lineHeight: 1.55,
                        fontWeight: ok ? 600 : 400
                      }, children: it.status })
                    ] }),
                    it.k === "reach" && !reachOk && jsxs("div", { style: {
                      borderTop: `1px solid ${C.line}`,
                      background: C.paper,
                      padding: "13px 14px"
                    }, children: [
                      " ",
                      jsxs("p", { className: "inr", style: {
                        fontSize: 13.5,
                        color: C.mute,
                        margin: "0 0 11px",
                        lineHeight: 1.6
                      }, children: [
                        LICA.sponsor,
                        " will use this to check in on you, and to tell you before your supply runs out."
                      ] }),
                      " ",
                      jsx("div", { style: {
                        display: "grid",
                        gap: 7
                      }, children: ["Text", "Messenger", "Viber", "WhatsApp", "Telegram"].map((c) => jsx("button", { className: "tap", onClick: () => {
                        setChannel(c);
                        setReachOk(true);
                        flash("Test sent \xB7 " + c);
                      }, style: {
                        minHeight: 50,
                        borderRadius: 11,
                        background: "#fff",
                        border: `1.5px solid ${C.line}`,
                        color: C.navy,
                        fontSize: 15,
                        fontWeight: 600,
                        textAlign: "left",
                        padding: "0 14px"
                      }, children: c }, c)) })
                    ] }),
                    it.k === "community" && !joined && jsxs("div", { style: {
                      borderTop: `1px solid ${C.line}`,
                      background: C.paper,
                      padding: "13px 14px"
                    }, children: [
                      " ",
                      jsx("p", { className: "inr", style: {
                        fontSize: 13.5,
                        color: C.mute,
                        margin: 0,
                        lineHeight: 1.6
                      }, children: "People on the same protocol, further along than you. Ask anything." }),
                      " ",
                      jsxs("button", { className: "tap", onClick: () => {
                        setJoined(true);
                        flash("Joined \xB7 opening the group");
                      }, style: {
                        width: "100%",
                        marginTop: 11,
                        minHeight: 50,
                        borderRadius: 12,
                        background: C.blue,
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: 700
                      }, children: [
                        "Join on ",
                        channel
                      ] })
                    ] })
                  ] })
                ] }, it.k);
              }) }),
" ",
              jsxs("button", { className: "tap", onClick: () => setCalOpen(!calOpen), "aria-expanded": calOpen, style: {
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                background: "transparent",
                padding: "22px 2px 12px",
                minHeight: 48
              }, children: [
                " ",
                jsx("span", { className: "osw", style: {
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.navy
                }, children: MONTH_NAME }),
                " ",
                jsxs("span", { className: "inr", style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: C.mute
                }, children: [
                  (() => {
                    let n = 0;
                    for (let d = 1; d <= TODAY; d++) if (SLOTS.length && doneCount(d) === SLOTS.length) n++;
                    return n;
                  })(),
                  " full days ",
                  jsx("span", { style: {
                    fontSize: 10
                  }, children: calOpen ? "\u25B2" : "\u25BC" })
                ] })
              ] }),
              calOpen && jsxs("div", { className: "fade", style: {
                display: "grid",
                gridTemplateColumns: "repeat(7,1fr)",
                gap: 6
              }, children: [
                WD.map((w, i) => jsx("div", { className: "osw", style: {
                  textAlign: "center",
                  fontSize: 11,
                  color: C.mute,
                  fontWeight: 600
                }, children: w }, "h" + i)),
                cells.map((d, i) => {
                  if (!d) return jsx("div", {}, "b" + i);
                  const st2 = ownCell(cellState(d));
                  const full = cellState(d) === "full" || cellState(d) === "proof";
                  return jsxs("div", { style: {
                    aspectRatio: "1",
                    borderRadius: 10,
                    fontSize: 16,
                    fontWeight: 700,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Sora',sans-serif",
                    ...st2
                  }, children: [
                    d,
                    full && jsx("span", { style: {
                      position: "absolute",
                      bottom: 3,
                      fontSize: 9,
                      lineHeight: 1,
                      opacity: 0.9
                    }, children: "\u2713" })
                  ] }, d);
                })
              ] }),
              " ",
              jsxs("div", { className: "no-print", style: {
                marginTop: 16,
                padding: "12px 13px",
                background: C.card,
                border: `1.5px dashed ${C.sky}`,
                borderRadius: 13
              }, children: [
                " ",
                jsx("div", { className: "inr", style: {
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: C.mute,
                  marginBottom: 9
                }, children: "Demo \xB7 what she bought" }),
                " ",
                jsx("div", { style: {
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap"
                }, children: Object.keys(PURCHASES).map((k) => jsx("button", { className: "tap", onClick: () => {
                  setBought(k);
                  setBoughtTotal(PURCHASES[k].caps);
                  setDaysConsumed(0);
                  setTakenToday(0);
                  setDoseSet(false);
                }, style: {
                  flex: "1 1 30%",
                  minHeight: 44,
                  borderRadius: 10,
                  fontSize: 12,
                  fontWeight: 700,
                  background: bought === k ? C.navy : "#fff",
                  border: `1.5px solid ${bought === k ? C.navy : C.line}`,
                  color: bought === k ? "#fff" : C.mute
                }, children: k }, k)) }),
                " ",
                jsxs("div", { style: {
                  display: "flex",
                  gap: 6,
                  marginTop: 8
                }, children: [
                  " ",
                  jsx("button", { className: "tap", onClick: () => setDaysConsumed(Math.min(120, daysConsumed + 1)), style: {
                    flex: 1,
                    minHeight: 44,
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 700,
                    background: "#fff",
                    border: `1.5px solid ${C.line}`,
                    color: C.navy
                  }, children: "+1 day" }),
                  " ",
                  jsx("button", { className: "tap", onClick: () => setDaysConsumed(ACTIVATION_DAYS), style: {
                    flex: 1,
                    minHeight: 44,
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 700,
                    background: "#fff",
                    border: `1.5px solid ${C.line}`,
                    color: C.navy
                  }, children: "Skip to 10" }),
                  jsx("button", { className: "tap", onClick: () => setDaysConsumed(CHECK_DAY), style: {
                    flex: 1, minHeight: 44, borderRadius: 10, fontSize: 12, fontWeight: 700,
                    background: "#fff", border: `1.5px solid ${C.line}`, color: C.navy
                  }, children: "Day 30" }),
                  " ",
                  jsx("button", { className: "tap", onClick: () => setBoughtTotal(takenCaps + Math.max(2, Math.round(PURCHASES[bought].caps * 0.15))), style: {
                    flex: 1,
                    minHeight: 44,
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 700,
                    background: "#fff",
                    border: `1.5px solid ${C.line}`,
                    color: C.navy
                  }, children: "Run low" })
                ] })
              ] })
            ] }) : jsxs(Fragment, { children: [
              " ",
              jsxs("div", { className: "bar", style: {
                marginTop: 4
              }, children: [
                " ",
                jsx("h2", { className: "sec", id: "reqs", tabIndex: -1, style: {
                  margin: 0
                }, children: "What it takes" })
              ] }),
              " ",
              jsx("p", { className: "sr-only", children: rank.kind === "state" ? `Card ${cardLive ? "active" : "not yet active"}. ${licaDone} of ${licaAll} done. ${daysLeft} days of supply left.` : `${done} of ${total} requirements complete. ${booked} booked, ${missed} missed.` }),
              " ",
              jsxs("ol", { className: "reqs", children: [
                reqs.length === 0 && jsx("p", { className: "inr", style: {
                  fontSize: 14.5,
                  color: C.mute,
                  background: C.card,
                  border: `1px solid ${C.line}`,
                  borderRadius: 14,
                  padding: "18px 16px",
                  lineHeight: 1.6
                }, children: "This curriculum is still being written. It will appear here when GEMA posts it." }),
                reqs.map((req, idx) => {
                  const s = stateOf(req.id);
                  const prevDone = idx > 0 && stateOf(reqs[idx - 1].id).s === "done";
                  const isOpen = expanded === req.id;
                  const dates = EVENTS.filter((e) => e.type === req.title);
                  const bookedEv = s.ev ? evById(s.ev) : null;
                  const isNext = nextReq && nextReq.id === req.id;
                  const tone = s.s === "done" ? C.good : s.s === "booked" ? C.warn : s.s === "missed" ? C.clay : C.mute;
                  const nodeBg = s.s === "done" ? C.gold : "#fff";
                  const nodeBrd = s.s === "done" ? C.gold : s.s === "booked" ? C.gold : s.s === "missed" ? C.clay : "#c3cedd";
                  const status = s.s === "done" ? req.type === "document" ? "Agreed" + (s.lang === "tl" ? " sa Tagalog" : "") + " \xB7 " + s.when : s.via === "signoff" ? "Signed off by " + s.by + " \xB7 " + s.byRank : s.via === "derived" ? s.trainee + " certified \xB7 your requirement is met" : "Attended \xB7 " + s.when : s.s === "booked" ? "Booked \xB7 " + bookedEv.date + ", " + bookedEv.place : s.s === "missed" ? "Missed \xB7 " + s.when + " \u2014 pick another date" : req.type === "attendance" ? dates.length ? dates.length + " dates posted" : "No dates posted yet" : req.type === "document" ? "Video " + req.mins + (req.doc ? " \xB7 then read and agree" : "") : req.note;
                  return jsxs("li", { style: {
                    display: "flex",
                    gap: 12,
                    alignItems: "stretch"
                  }, children: [
                    " ",
                    jsxs("div", { className: "spine", style: {
                      width: 30,
                      position: "relative",
                      flexShrink: 0
                    }, "aria-hidden": "true", children: [
                      " ",
                      jsx("span", { style: {
                        position: "absolute",
                        left: 14,
                        top: idx === 0 ? 30 : 0,
                        bottom: idx === reqs.length - 1 ? "calc(100% - 30px)" : -10,
                        width: 2,
                        background: prevDone && s.s === "done" ? C.gold : C.line
                      } }),
                      " ",
                      jsx("span", { style: {
                        position: "absolute",
                        left: 3,
                        top: 18,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        background: nodeBg,
                        border: `2.5px solid ${nodeBrd}`,
                        display: "grid",
                        placeItems: "center",
                        color: C.navy,
                        fontSize: 13,
                        fontWeight: 800,
                        fontFamily: "'Sora',sans-serif",
                        zIndex: 1
                      }, children: s.s === "done" ? "\u2713" : s.s === "missed" ? "!" : "" })
                    ] }),
                    " ",
                    jsxs("article", { ref: (el) => refs.current[req.id] = el, className: "card-b", style: {
                      flex: 1,
                      minWidth: 0,
                      background: C.card,
                      borderRadius: 14,
                      marginBottom: 10,
                      overflow: "hidden",
                      border: `1.5px solid ${s.s === "missed" ? C.clay : isOpen || isNext ? C.blue : C.line}`,
                      boxShadow: isNext ? "0 10px 26px -18px rgba(37,105,184,.9)" : "none"
                    }, children: [
                      " ",
                      jsxs("div", { style: {
                        padding: "14px 15px 13px"
                      }, children: [
                        " ",
                        jsx("div", { className: "inr", style: {
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: ".07em",
                          textTransform: "uppercase",
                          color: isNext ? C.blue : C.mute
                        }, children: isNext ? "Do this next \xB7 " + TYPE_LABEL[req.type] : TYPE_LABEL[req.type] }),
                        " ",
                        jsxs("h3", { className: "osw", style: {
                          fontSize: 16.5,
                          fontWeight: 600,
                          color: C.navy,
                          margin: "4px 0 0",
                          lineHeight: 1.3
                        }, children: [
                          req.title,
                          " ",
                          jsxs("span", { className: "sr-only", children: [
                            ". Requirement ",
                            idx + 1,
                            " of ",
                            total,
                            ". Status: ",
                            status
                          ] })
                        ] }),
                        " ",
                        jsx("p", { className: "inr", style: {
                          fontSize: 14,
                          color: tone,
                          margin: "5px 0 0",
                          lineHeight: 1.5,
                          fontWeight: s.s === "open" ? 400 : 600
                        }, children: status })
                      ] }),
                      req.type === "document" && s.s !== "done" && jsxs("div", { style: {
                        padding: "0 15px 15px"
                      }, children: [
                        " ",
                        jsx("button", { className: "tap" + (isNext ? " pulse" : ""), onClick: () => setSheet(req.id), style: {
                          width: "100%",
                          background: C.blue,
                          color: "#fff",
                          borderRadius: 12,
                          fontSize: 15,
                          fontWeight: 700
                        }, children: "Watch the video" })
                      ] }),
                      req.type === "attendance" && s.s !== "done" && jsxs("div", { style: {
                        padding: "0 15px 15px",
                        display: "flex",
                        gap: 8
                      }, children: [
                        " ",
                        jsx("button", { className: "tap" + (isNext ? " pulse" : ""), "aria-expanded": isOpen, "aria-controls": "dates-" + req.id, onClick: () => {
                          setExpanded(isOpen ? null : req.id);
                          setLive(isOpen ? "Dates hidden" : dates.length + " dates listed for " + req.title);
                        }, style: {
                          flex: 1,
                          borderRadius: 12,
                          fontSize: 15,
                          fontWeight: 700,
                          background: s.s === "booked" ? "#fff" : C.blue,
                          border: s.s === "booked" ? `1.5px solid ${C.line}` : "none",
                          color: s.s === "booked" ? C.navy : "#fff"
                        }, children: isOpen ? "Hide dates" : s.s === "booked" ? "Change date" : s.s === "missed" ? "Pick another date" : "See " + dates.length + " dates" }),
                        s.s === "booked" && jsx("button", { className: "tap", onClick: () => setPass(req.id), style: {
                          padding: "0 16px",
                          borderRadius: 12,
                          background: C.warnBg,
                          border: `1.5px solid ${C.gold}`,
                          color: C.warn,
                          fontSize: 14.5,
                          fontWeight: 700
                        }, children: "My pass" })
                      ] }),
                      isOpen && jsxs("div", { className: "fade", id: "dates-" + req.id, role: "group", "aria-label": "Dates for " + req.title, style: {
                        borderTop: `1px solid ${C.line}`,
                        background: C.paper,
                        padding: "6px 12px 12px"
                      }, children: [
                        dates.length === 0 && jsx("p", { className: "inr", style: {
                          fontSize: 14,
                          color: C.mute,
                          padding: "14px 4px",
                          margin: 0
                        }, children: "GEMA hasn't posted a date for this yet. You'll be told when one appears." }),
                        dates.map((e) => {
                          const mine = s.ev === e.id, full = e.seats === 0;
                          return jsxs("div", { className: "ev", style: {
                            background: C.card,
                            border: `1.5px solid ${mine ? C.gold : C.line}`,
                            borderRadius: 12,
                            padding: 12,
                            marginTop: 8,
                            display: "flex",
                            gap: 12,
                            alignItems: "center"
                          }, children: [
                            " ",
                            jsxs("div", { className: "rail-date", style: {
                              width: 54,
                              flexShrink: 0,
                              textAlign: "center",
                              padding: "6px 0",
                              borderRadius: 10,
                              background: C.paper,
                              border: `1px solid ${C.line}`
                            }, children: [
                              " ",
                              jsx("div", { className: "inr", style: {
                                fontSize: 11.5,
                                color: C.mute,
                                textTransform: "uppercase"
                              }, children: e.date.split(" ")[0] }),
                              " ",
                              jsx("div", { className: "ant", style: {
                                fontSize: 20,
                                color: C.navy,
                                lineHeight: 1.05
                              }, children: e.date.split(" ")[1] }),
                              " ",
                              jsx("div", { className: "inr", style: {
                                fontSize: 11.5,
                                color: C.mute,
                                textTransform: "uppercase"
                              }, children: e.date.split(" ")[2] })
                            ] }),
                            " ",
                            jsxs("div", { style: {
                              flex: 1,
                              minWidth: 0
                            }, children: [
                              " ",
                              jsx("div", { className: "osw", style: {
                                fontSize: 15,
                                fontWeight: 600,
                                color: C.navy
                              }, children: e.place }),
                              " ",
                              jsxs("div", { className: "inr", style: {
                                fontSize: 13.5,
                                color: C.mute,
                                marginTop: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                                flexWrap: "wrap"
                              }, children: [
                                " ",
                                jsx("span", { children: e.time }),
                                " ",
                                jsx("span", { "aria-hidden": "true", children: "\xB7" }),
                                " ",
                                jsxs("span", { style: {
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: 5
                                }, children: [
                                  " ",
                                  jsx(Insignia, { ...RANK_DEVICE[e.rank], size: e.rank === 4 ? 13 : 8, mark: false }),
                                  e.host
                                ] })
                              ] }),
                              " ",
                              jsx("div", { className: "inr", style: {
                                fontSize: 13.5,
                                marginTop: 3,
                                fontWeight: full || e.seats <= 5 ? 600 : 400,
                                color: full ? C.clay : e.seats <= 5 ? C.warn : C.mute
                              }, children: full ? "Full \u2014 join the waitlist" : e.seats + " seats left" })
                            ] }),
                            mine ? confirm === e.id ? jsxs("div", { style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: 6,
                              flexShrink: 0
                            }, children: [
                              " ",
                              jsx("button", { className: "tap", onClick: () => cancel(req), style: {
                                padding: "0 12px",
                                borderRadius: 10,
                                background: "#fff",
                                border: `1.5px solid ${C.clay}`,
                                color: C.clay,
                                fontSize: 13.5,
                                fontWeight: 700
                              }, children: "Give it up" }),
                              " ",
                              jsx("button", { className: "tap", onClick: () => setConfirm(null), style: {
                                padding: "0 12px",
                                borderRadius: 10,
                                background: C.navy,
                                color: "#fff",
                                fontSize: 13.5,
                                fontWeight: 700
                              }, children: "Keep" })
                            ] }) : jsx("button", { className: "tap", "aria-label": "Cancel your seat on " + e.date + ", " + e.place, onClick: () => setConfirm(e.id), style: {
                              padding: "0 14px",
                              borderRadius: 10,
                              background: C.warnBg,
                              border: `1.5px solid ${C.gold}`,
                              color: C.warn,
                              fontSize: 13.5,
                              fontWeight: 700,
                              flexShrink: 0
                            }, children: "Booked \xB7 cancel" }) : jsx("button", { className: "tap ev-act", "aria-label": (full ? "Join waitlist for " : "Reserve seat for ") + req.title + ", " + e.date + ", " + e.time + ", " + e.place, onClick: () => full ? flash("Added to the waitlist") : reserve(req, e), style: {
                              padding: "0 16px",
                              borderRadius: 10,
                              flexShrink: 0,
                              fontSize: 14,
                              fontWeight: 700,
                              background: full ? "#fff" : C.blue,
                              color: full ? C.navy : "#fff",
                              border: full ? `1.5px solid ${C.line}` : "none"
                            }, children: full ? "Waitlist" : s.s === "booked" ? "Switch" : "Reserve" })
                          ] }, e.id);
                        })
                      ] })
                    ] })
                  ] }, req.id);
                })
              ] })
            ] }),
            rank.kind !== "state" && reqs.length > 0 && jsxs(Fragment, { children: [
              " ",
              jsxs("div", { className: "bar", children: [
                " ",
                jsx("span", { className: "sec", children: "Then" })
              ] }),
              " ",
              jsxs("div", { style: {
                display: "flex",
                gap: 12,
                alignItems: "center",
                background: complete ? C.goodBg : C.oliveLt,
                border: `1.5px solid ${complete ? C.good : "#d7dccf"}`,
                borderRadius: 14,
                padding: "16px 15px"
              }, children: [
                " ",
                jsx(Insignia, { ...RANK_DEVICE[rank.pips], size: rank.pips === 0 ? 26 : rank.pips === 4 ? 24 : 16 }),
                " ",
                jsx("p", { className: "inr", style: {
                  fontSize: 14.5,
                  color: complete ? C.good : C.olive,
                  margin: 0,
                  lineHeight: 1.55,
                  fontWeight: 500
                }, children: complete ? "Done \u2014 " + rank.opens : "Finish all " + total + " and you're " + rank.pin + ". " + (rank.opens || "") })
              ] }),
              complete && jsx("button", { className: "tap", onClick: () => setCert(true), style: {
                width: "100%",
                marginTop: 10,
                borderRadius: 12,
                background: C.navy,
                color: "#fff",
                fontSize: 15,
                fontWeight: 700
              }, children: "See my certificate" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    rank.kind !== "state" && !complete && nextReq && jsxs("div", { className: "foot only-mobile", children: [
      " ",
      jsxs("div", { className: "foot-in", style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
      }, children: [
        " ",
        jsxs("div", { style: {
          flex: 1,
          minWidth: 0
        }, children: [
          " ",
          jsx("div", { className: "inr", style: {
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".07em",
            textTransform: "uppercase",
            color: C.mute
          }, children: "Next" }),
          " ",
          jsx("div", { className: "osw", style: {
            fontSize: 15,
            fontWeight: 600,
            color: C.navy,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }, children: nextReq.title })
        ] }),
        " ",
        jsx("button", { className: "tap", onClick: goNext, style: {
          padding: "0 20px",
          borderRadius: 12,
          background: C.blue,
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          flexShrink: 0
        }, children: nextReq.type === "document" ? "Watch" : "Pick a date" })
      ] })
    ] }),
    sheetReq && jsxs(Sheet, { onClose: () => setSheet(null), label: sheetReq.title, children: [
      " ",
      jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "flex-start"
      }, children: [
        " ",
        jsxs("div", { style: {
          minWidth: 0
        }, children: [
          " ",
          jsx("h2", { className: "osw", style: {
            fontSize: 19,
            fontWeight: 700,
            color: C.navy,
            margin: 0
          }, children: sheetReq.title }),
          " ",
          jsx("p", { className: "inr", style: {
            fontSize: 14,
            color: C.mute,
            margin: "4px 0 0"
          }, children: lang === "tl" && sheetReq.blurbTl ? sheetReq.blurbTl : sheetReq.blurb })
        ] }),
        " ",
        jsx("button", { onClick: () => setSheet(null), "aria-label": "Close", style: {
          background: "none",
          color: C.mute,
          fontSize: 26,
          lineHeight: 1,
          padding: "0 4px"
        }, children: "\xD7" })
      ] }),
      " ",
      jsx("div", { role: "group", "aria-label": "Language", style: {
        display: "flex",
        gap: 6,
        marginTop: 14,
        padding: 4,
        background: C.paper,
        border: `1px solid ${C.line}`,
        borderRadius: 12
      }, children: [["en", "English"], ["tl", "Tagalog"]].map(([k, label]) => jsx("button", { className: "tap", onClick: () => setLang(k), "aria-pressed": lang === k, style: {
        flex: 1,
        minHeight: 40,
        borderRadius: 9,
        fontSize: 14,
        fontWeight: 700,
        background: lang === k ? C.navy : "transparent",
        color: lang === k ? "#fff" : C.mute
      }, children: label }, k)) }),
      " ",
      jsxs("div", { className: "tap", role: "button", tabIndex: 0, "aria-label": "Play video", onClick: () => setWatched({
        ...watched,
        [sheetReq.id]: true
      }), onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setWatched({
            ...watched,
            [sheetReq.id]: true
          });
        }
      }, "aria-pressed": !!watched[sheetReq.id], style: {
        aspectRatio: "16/9",
        borderRadius: 14,
        marginTop: 12,
        background: watched[sheetReq.id] ? C.goodBg : HERO,
        display: "grid",
        placeItems: "center",
        cursor: "pointer"
      }, children: [
        " ",
        jsxs("div", { style: {
          textAlign: "center"
        }, children: [
          " ",
          jsx("div", { style: {
            width: 52,
            height: 52,
            borderRadius: "50%",
            margin: "0 auto",
            background: watched[sheetReq.id] ? C.good : "rgba(255,255,255,.25)",
            display: "grid",
            placeItems: "center",
            color: "#fff",
            fontSize: 18
          }, children: watched[sheetReq.id] ? "\u2713" : "\u25B6" }),
          " ",
          jsx("div", { className: "inr", style: {
            fontSize: 14,
            color: watched[sheetReq.id] ? C.good : "#fff",
            marginTop: 10,
            fontWeight: 600
          }, children: watched[sheetReq.id] ? lang === "tl" ? "Napanood na" : "Watched" : (lang === "tl" ? "I-play \xB7 " : "Play \xB7 ") + sheetReq.mins })
        ] })
      ] }),
      sheetReq.doc && jsxs(Fragment, { children: [
        " ",
        jsx("div", { className: "inr", style: {
          fontSize: 12,
          letterSpacing: ".09em",
          textTransform: "uppercase",
          color: C.mute,
          margin: "18px 0 8px",
          fontWeight: 700
        }, children: lang === "tl" && sheetReq.docTl ? sheetReq.docTl : sheetReq.doc }),
        " ",
        jsx("div", { className: "inr", style: {
          maxHeight: 200,
          overflowY: "auto",
          padding: 15,
          borderRadius: 12,
          background: C.paper,
          border: `1px solid ${C.line}`,
          fontSize: 14,
          color: C.ink,
          lineHeight: 1.75,
          opacity: watched[sheetReq.id] ? 1 : 0.5
        }, lang: lang === "tl" ? "tl" : "en", children: lang === "tl" && sheetReq.bodyTl ? sheetReq.bodyTl : sheetReq.body }),
        !watched[sheetReq.id] && jsx("p", { className: "inr", style: {
          fontSize: 13.5,
          color: C.mute,
          margin: "9px 0 0"
        }, children: lang === "tl" ? "Panoorin muna ang video." : "Watch the video first." })
      ] }),
      " ",
      jsx("button", { disabled: !watched[sheetReq.id], onClick: () => {
        setSheet(null);
        set(sheetReq.id, {
          s: "done",
          when: "28 Jul",
          lang
        });
      }, style: {
        width: "100%",
        marginTop: 20,
        padding: "15px 0",
        borderRadius: 12,
        fontSize: 15.5,
        fontWeight: 700,
        background: watched[sheetReq.id] ? C.blue : C.line,
        color: watched[sheetReq.id] ? "#fff" : C.mute,
        cursor: watched[sheetReq.id] ? "pointer" : "not-allowed"
      }, children: sheetReq.doc ? lang === "tl" ? "Nabasa ko ito at sumasang-ayon ako" : "I have read this and I agree" : lang === "tl" ? "Tapos \u2014 napanood ko na" : "Done \u2014 I've watched it" }),
      sheetReq.doc && jsx("p", { className: "inr", style: {
        fontSize: 13,
        color: C.mute,
        marginTop: 10,
        textAlign: "center",
        lineHeight: 1.55
      }, children: lang === "tl" ? "Ang pangalan mo, ang petsa, ang bersyon, at kung anong wika mo ito binasa ay nakatala." : "Your name, the date, the version, and the language you read it in are kept on file." })
    ] }),
    passReq && passEv && jsxs(Sheet, { onClose: () => setPass(null), label: "Your pass", children: [
      " ",
      jsxs("div", { style: {
        textAlign: "center"
      }, children: [
        " ",
        jsx("h2", { className: "osw", style: {
          fontSize: 19,
          fontWeight: 700,
          color: C.navy,
          margin: 0
        }, children: passReq.title }),
        " ",
        jsxs("p", { className: "inr", style: {
          fontSize: 14.5,
          color: C.mute,
          margin: "5px 0 0"
        }, children: [
          passEv.date,
          " \xB7 ",
          passEv.time,
          " \xB7 ",
          passEv.place
        ] }),
        " ",
        jsxs("div", { style: {
          display: "inline-block",
          padding: 14,
          background: "#fff",
          border: `1.5px solid ${C.line}`,
          borderRadius: 16,
          marginTop: 16
        }, children: [
          " ",
          jsx(PassQR, { size: 168 })
        ] }),
        " ",
        jsx("p", { className: "inr", style: {
          fontSize: 14,
          color: C.mute,
          margin: "14px 0 0",
          lineHeight: 1.6
        }, children: "Show this at the door. The scan ticks this off \u2014 there's nothing to fill in." }),
        " ",
        jsxs("div", { style: {
          display: "flex",
          gap: 8,
          marginTop: 18
        }, children: [
          " ",
          jsxs("button", { className: "tap", onClick: () => openChat(), style: {
            flex: 1,
            borderRadius: 12,
            background: C.tg,
            color: "#fff",
            fontSize: 14.5,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8
          }, children: [
            " ",
            jsx(TgIcon, { size: 17 }),
            " Ask the team"
          ] }),
          " ",
          jsxs("span", { style: {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            borderRadius: 12,
            background: C.paper,
            border: `1.5px dashed ${C.sky}`,
            color: C.mute,
            fontSize: 13.5,
            fontWeight: 600,
            minHeight: 44
          }, children: [
            " ",
            jsx("span", { className: "pulse", style: {
              width: 9,
              height: 9,
              borderRadius: 99,
              background: C.blue
            } }),
            "Waiting for the door scan"
          ] })
        ] })
      ] })
    ] }),
    order && jsx(Sheet, { onClose: () => {
      setOrder(false);
      setOrderStage("choose");
    }, label: "Order more", children: orderStage === "choose" ? jsxs(Fragment, { children: [
      " ",
      jsx("h2", { className: "osw", style: {
        fontSize: 19,
        fontWeight: 700,
        color: C.navy,
        margin: 0
      }, children: "Order more" }),
      " ",
      jsxs("p", { className: "inr", style: {
        fontSize: 14,
        color: C.mute,
        margin: "5px 0 0",
        lineHeight: 1.6
      }, children: [
        "At ",
        perDay,
        " a day. Pick what suits your month."
      ] }),
      " ",
      jsx("div", { style: {
        display: "grid",
        gap: 9,
        marginTop: 16
      }, children: Object.entries(PROGRAMS).filter(([k]) => k !== "Card minimum").map(([k, p]) => {
        const on = pick === k;
        const lasts = Math.floor(p.caps / perDay);
        return jsxs("button", { className: "tap", onClick: () => setPick(k), "aria-pressed": on, style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          textAlign: "left",
          padding: "14px 14px",
          borderRadius: 13,
          minHeight: 62,
          background: on ? "#F2F7FD" : "#fff",
          border: `2px solid ${on ? C.blue : C.line}`
        }, children: [
          " ",
          jsx("span", { style: {
            width: 22,
            height: 22,
            borderRadius: 99,
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            background: on ? C.blue : "#fff",
            border: `2px solid ${on ? C.blue : "#c3cedd"}`,
            color: "#fff",
            fontSize: 13,
            fontWeight: 800
          }, children: on ? "\u2713" : "" }),
          " ",
          jsxs("span", { style: {
            flex: 1,
            minWidth: 0
          }, children: [
            " ",
            jsx("span", { className: "osw", style: {
              display: "block",
              fontSize: 16,
              fontWeight: 700,
              color: C.navy
            }, children: k }),
            " ",
            jsx("span", { className: "inr", style: {
              display: "block",
              fontSize: 13,
              color: C.mute,
              marginTop: 2
            }, children: p.note })
          ] }),
          " ",
          jsxs("span", { style: {
            textAlign: "right",
            flexShrink: 0
          }, children: [
            " ",
            jsx("span", { className: "ant", style: {
              display: "block",
              fontSize: 20,
              color: C.navy,
              lineHeight: 1
            }, children: lasts }),
            " ",
            jsx("span", { className: "inr", style: {
              display: "block",
              fontSize: 11.5,
              color: C.mute,
              marginTop: 2
            }, children: "days for you" })
          ] })
        ] }, k);
      }) }),
      " ",
      jsxs("div", { style: {
        marginTop: 15,
        padding: "13px 14px",
        background: C.paper,
        border: `1px solid ${C.line}`,
        borderRadius: 13
      }, children: [
        " ",
        jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          gap: 12
        }, children: [
          " ",
          jsx("span", { className: "inr", style: {
            fontSize: 13.5,
            color: C.mute
          }, children: "Collect from" }),
          " ",
          jsx("span", { className: "osw", style: {
            fontSize: 14,
            fontWeight: 600,
            color: C.navy
          }, children: "Lagao centre" })
        ] }),
        " ",
        jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 8
        }, children: [
          " ",
          jsx("span", { className: "inr", style: {
            fontSize: 13.5,
            color: C.mute
          }, children: "Arranged by" }),
          " ",
          jsx("span", { className: "osw", style: {
            fontSize: 14,
            fontWeight: 600,
            color: C.navy
          }, children: LICA.sponsor })
        ] }),
        PROGRAMS[pick].caps > 100 && jsx("p", { className: "inr", style: {
          fontSize: 12.5,
          color: C.mute,
          margin: "10px 0 0",
          lineHeight: 1.55
        }, children: "Released monthly so nothing sits in a drawer." })
      ] }),
      " ",
      jsx("button", { className: "tap", onClick: () => {
        setBoughtTotal(bought_total + PROGRAMS[pick].caps);
        setOrderStage("placed");
      }, style: {
        width: "100%",
        marginTop: 16,
        minHeight: 54,
        borderRadius: 13,
        background: C.blue,
        color: "#fff",
        fontSize: 16,
        fontWeight: 700
      }, children: "Place this order" }),
      " ",
      jsxs("p", { className: "inr", style: {
        fontSize: 12.5,
        color: C.mute,
        textAlign: "center",
        margin: "10px 0 0",
        lineHeight: 1.5
      }, children: [
        "No payment here. ",
        LICA.sponsor,
        " will confirm the details with you."
      ] })
    ] }) : jsxs("div", { style: {
      textAlign: "center",
      padding: "8px 0 4px"
    }, children: [
      " ",
      jsx("div", { style: {
        width: 54,
        height: 54,
        borderRadius: 99,
        background: C.goodBg,
        border: `2px solid ${C.good}`,
        margin: "0 auto",
        display: "grid",
        placeItems: "center",
        color: C.good,
        fontSize: 26,
        fontWeight: 800
      }, children: "\u2713" }),
      " ",
      jsx("h2", { className: "osw", style: {
        fontSize: 19,
        fontWeight: 700,
        color: C.navy,
        margin: "14px 0 0"
      }, children: "Order placed" }),
      " ",
      jsxs("p", { className: "inr", style: {
        fontSize: 14.5,
        color: C.ink,
        margin: "8px 14px 0",
        lineHeight: 1.65
      }, children: [
        LICA.sponsor,
        " has been told, and will message you on ",
        channel,
        " to arrange it."
      ] }),
      " ",
      jsx("button", { className: "tap", onClick: () => {
        setOrder(false);
        setOrderStage("choose");
      }, style: {
        width: "100%",
        marginTop: 18,
        minHeight: 52,
        borderRadius: 13,
        background: C.navy,
        color: "#fff",
        fontSize: 15.5,
        fontWeight: 700
      }, children: "Done" })
    ] }) }),
    rankKey === "LICA" && doseSet && !settingsOpen && !order && !guide && !cert && jsxs("div", { className: "gg-foot" + (footVisible ? " on" : ""), children: [
      " ",
      jsxs("div", { className: "gg-foot-inner", "aria-hidden": footVisible ? undefined : "true", children: [
        " ",
        jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          gap: 12
        }, children: [
          " ",
          jsxs("div", { style: {
            flex: 1,
            minWidth: 0
          }, children: [
            " ",
            jsx("div", { className: "osw", style: {
              fontSize: 10,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              color: C.mute,
              fontWeight: 600
            }, children: refillStage(daysLeft) ? "Refill needed" : "Your supply" }),
            " ",
            jsxs("div", { className: "osw", style: {
              fontSize: 17,
              fontWeight: 700,
              lineHeight: 1.1,
              color: refillStage(daysLeft) === 1 ? C.clay : refillStage(daysLeft) === 5 ? C.goldD : refillStage(daysLeft) === 10 ? C.blue : C.navy
            }, children: [
              daysLeft,
              " days left"
            ] })
          ] }),
          " ",
          jsxs("button", { className: "tap", onClick: () => setOrder(true), style: {
            background: refillStage(daysLeft) === 1 ? C.clay : refillStage(daysLeft) === 5 ? C.gold : C.blue,
            color: refillStage(daysLeft) === 5 ? C.navy : "#fff",
            borderRadius: 11,
            padding: "13px 22px",
            fontSize: 15.5,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexShrink: 0
          }, children: [
            " ",
            jsx("span", { style: {
              fontSize: 17
            }, children: "\u{1F6D2}" }),
            " Reorder"
          ] })
        ] })
      ] })
    ] }),
    check && jsx(Sheet, { onClose: () => { if (check === "result") { setCheckDone(true); } setCheck(null); }, label: "Your Ginhawa Check", children:
      check === "ask" ? (() => {
        const item = CHECK_ITEMS[qIdx];
        const val = answers[item.k] || 0;
        return jsxs(Fragment, { children: [
          jsxs("div", { className: "inr", style: { fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em",
                        textTransform: "uppercase", color: C.mute }, children: ["Question ", qIdx + 1, " of ", CHECK_ITEMS.length] }),
          jsx("h2", { className: "osw", style: { fontSize: 21, fontWeight: 700, color: C.navy,
                      margin: "10px 0 0", lineHeight: 1.35 }, children: item.q }),
          jsx("p", { className: "inr", style: { fontSize: 14, color: C.mute, margin: "8px 0 0", lineHeight: 1.6 },
                     children: "Compared with an ordinary week. There is no right answer." }),
          jsx("div", { style: { display: "grid", gap: 9, marginTop: 18 },
            children: [1, 2, 3, 4, 5].map(n => {
              const on = val === n;
              const label = n === 1 ? item.lo : n === 5 ? item.hi : n === 3 ? "In between" : n === 2 ? "A little " + item.lo.toLowerCase() : "Mostly " + item.hi.toLowerCase();
              return jsxs("button", { className: "tap",
                onClick: () => {
                  const nx = { ...answers, [item.k]: n };
                  setAnswers(nx);
                  if (qIdx + 1 < CHECK_ITEMS.length) setTimeout(() => setQIdx(qIdx + 1), 180);
                  else setTimeout(() => { setCheck("result"); pop(true); }, 220);
                },
                style: { display: "flex", alignItems: "center", gap: 12, textAlign: "left",
                         padding: "14px 15px", minHeight: 58, borderRadius: 13,
                         background: on ? "#F2F7FD" : "#fff", border: `2px solid ${on ? C.blue : C.line}` },
                children: [
                  jsx("span", { style: { width: 26, height: 26, borderRadius: 99, flexShrink: 0, display: "grid",
                        placeItems: "center", background: on ? C.blue : "#fff",
                        border: `2px solid ${on ? C.blue : "#c3cedd"}`, color: on ? "#fff" : C.mute,
                        fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 800 }, children: n }),
                  jsx("span", { className: "osw", style: { fontSize: 16, fontWeight: 600, color: C.navy }, children: label })
                ] }, n);
            }) }),
          qIdx > 0 && jsx("button", { className: "tap", onClick: () => setQIdx(qIdx - 1),
            style: { background: "none", marginTop: 14, color: C.mute, fontSize: 14, fontWeight: 600,
                     textDecoration: "underline", padding: 0 }, children: "Back" })
        ] });
      })() : jsxs(Fragment, { children: [
        jsx("div", { className: "inr", style: { fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em",
                     textTransform: "uppercase", color: C.mute }, children: "Then and now" }),
        jsx("h2", { className: "osw", style: { fontSize: 22, fontWeight: 700, color: C.navy, margin: "10px 0 0", lineHeight: 1.3 },
            children: flat ? "Here is where you are." : "Something has moved." }),
        jsx("p", { className: "inr", style: { fontSize: 14.5, color: C.ink, margin: "8px 0 0", lineHeight: 1.65 },
            children: flat
              ? "Nothing has shifted much yet, and that is normal at one month. The protocol is slow by design \u2014 this is the record, not the verdict."
              : "You may not feel it yet. This is what you said in May, next to what you said today." }),

        jsx("div", { style: { marginTop: 20 }, children: CHECK_ITEMS.map(i => {
          const b = BASELINE[i.k], n = answers[i.k] || 0, up = n > b;
          return jsxs("div", { style: { paddingBottom: 16 }, children: [
            jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }, children: [
              jsx("span", { className: "osw", style: { fontSize: 15, fontWeight: 600, color: C.navy },
                  children: i.q.replace(/^How (have|is|has) /, "").replace(/\?$/, "").replace(/^your /, "Your ").replace(/^you /, "You ") }),
              jsx("span", { className: "inr", style: { fontSize: 13, fontWeight: 700, color: up ? C.good : C.mute },
                  children: up ? "+" + (n - b) : n < b ? String(n - b) : "same" })
            ] }),
            jsxs("div", { style: { display: "flex", alignItems: "center", gap: 9, marginTop: 8 }, children: [
              jsx("span", { className: "inr", style: { fontSize: 11.5, color: C.mute, width: 30, flexShrink: 0 }, children: "May" }),
              jsx("div", { style: { flex: 1, height: 8, borderRadius: 99, background: "#e8edf4", overflow: "hidden" },
                  children: jsx("div", { style: { width: (b / 5) * 100 + "%", height: "100%", background: "#c3cedd" } }) })
            ] }),
            jsxs("div", { style: { display: "flex", alignItems: "center", gap: 9, marginTop: 5 }, children: [
              jsx("span", { className: "inr", style: { fontSize: 11.5, color: C.navy, width: 30, flexShrink: 0, fontWeight: 700 }, children: "Now" }),
              jsx("div", { style: { flex: 1, height: 8, borderRadius: 99, background: "#e8edf4", overflow: "hidden" },
                  children: jsx("div", { style: { width: (n / 5) * 100 + "%", height: "100%",
                    background: up ? C.good : C.mute, transition: "width .6s cubic-bezier(.4,0,.2,1)" } }) })
            ] })
          ] }, i.k);
        }) }),

        jsxs("div", { style: { background: flat ? C.oliveLt : C.goodBg,
              border: `1.5px solid ${flat ? "#d7dccf" : C.good}`, borderRadius: 14, padding: "15px 15px" }, children: [
          jsx("p", { className: "inr", style: { fontSize: 14.5, color: flat ? C.olive : C.good, margin: 0, lineHeight: 1.65 },
            children: flat
              ? "Keep going, and let " + LICA.sponsor + " know how you are. Some people take two or three months before anything shows."
              : moved.length + " of " + CHECK_ITEMS.length + " have improved since you started. Kept up, month two usually shows more." })
        ] }),

        jsxs("button", { className: "tap", onClick: () => { setCheckDone(true); setCheck(null); openChat(); },
          style: { width: "100%", marginTop: 14, minHeight: 52, borderRadius: 13, background: C.tg, color: "#fff",
                   fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 9 },
          children: [jsx(TgIcon, { size: 18 }), " Tell " + LICA.sponsor] }),
        jsx("button", { className: "tap", onClick: () => { setCheckDone(true); setCheck(null); },
          style: { width: "100%", marginTop: 8, minHeight: 52, borderRadius: 13, background: "#fff",
                   border: `1.5px solid ${C.line}`, color: C.navy, fontSize: 15, fontWeight: 700 }, children: "Close" })
      ] })
    }),

    feedOpen && jsxs(Sheet, { onClose: () => setFeedOpen(false), label: "Notifications", children: [
      jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }, children: [
        jsx("h2", { className: "osw", style: { fontSize: 20, fontWeight: 700, color: C.navy, margin: 0 }, children: "Notifications" }),
        jsx("button", { className: "tap", onClick: () => setFeedOpen(false),
          style: { background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, padding: "0 18px",
                   minHeight: 44, fontSize: 13.5, fontWeight: 600, color: C.mute }, children: "Close" })
      ] }),
      jsx("p", { className: "inr", style: { fontSize: 13.5, color: C.mute, margin: "0 0 16px" },
          children: "From your sponsor and " + TEAM_CHAT.name + "." }),

      jsx("div", { children: feed.map(f => {
        const rec = f.kind === "recognition";
        const spo = f.kind === "sponsor";
        const tone = rec ? C.gold : spo ? C.blue : C.line;
        return jsxs("div", { style: {
          background: rec ? "#FDF8EA" : C.card, border: `1.5px solid ${rec ? C.gold : C.line}`,
          borderLeft: `4px solid ${tone}`, borderRadius: 13, padding: "14px 15px", marginBottom: 10
        }, children: [
          jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }, children: [
            jsx("span", { className: "osw", style: { fontSize: 15, fontWeight: 700, color: C.navy }, children: f.who }),
            jsx("span", { className: "inr", style: { fontSize: 12.5, color: C.mute, flexShrink: 0 }, children: f.when })
          ] }),
          rec && jsx("div", { className: "inr", style: { fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em",
              textTransform: "uppercase", color: C.goldD, marginTop: 4 }, children: "Ten days done" }),
          jsx("p", { className: "inr", style: { fontSize: 14.5, color: C.ink, margin: "6px 0 0", lineHeight: 1.6 },
              children: f.text }),
          spo && jsxs("button", { className: "tap", onClick: () => { setFeedOpen(false); openChat(); },
            style: { marginTop: 11, minHeight: 44, padding: "0 16px", borderRadius: 11, background: C.tg,
                     color: "#fff", fontSize: 14, fontWeight: 700, display: "inline-flex",
                     alignItems: "center", gap: 8 },
            children: [jsx(TgIcon, { size: 16 }), " Reply on " + channel] })
        ] }, f.id);
      }) }),

      jsxs("button", { className: "tap", onClick: () => { setFeedOpen(false); openChat(); },
        style: { width: "100%", marginTop: 6, minHeight: 52, borderRadius: 13, background: C.tg, color: "#fff",
                 fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 9 },
        children: [jsx(TgIcon, { size: 18 }), " Open " + TEAM_CHAT.name] })
    ] }),

    notifOpen && jsxs(Sheet, { onClose: () => setNotifOpen(false), label: "Notifications", children: [
      jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
        jsx("h2", { className: "osw", style: { fontSize: 20, fontWeight: 700, color: C.navy, margin: 0 }, children: "Notifications" }),
        jsx("button", { className: "tap", onClick: () => setNotifOpen(false),
          style: { background: C.card, border: `1px solid ${C.line}`, borderRadius: 20, padding: "0 18px",
                   minHeight: 44, fontSize: 13.5, fontWeight: 600, color: C.mute }, children: "Close" })
      ] }),
      notifs.length === 0
        ? jsx("p", { className: "inr", style: { fontSize: 14.5, color: C.mute, lineHeight: 1.6 },
              children: "Nothing yet. Milestones and messages from your team appear here." })
        : jsx("div", { children: notifs.map(n => {
            const tone = n.kind === "you" ? C.gold : n.kind === "page" ? C.tg : C.good;
            const label = n.kind === "you" ? "Milestone" : n.kind === "page" ? "Community" : "Recognition";
            return jsxs("div", { style: { display: "flex", gap: 12, alignItems: "flex-start",
                  background: C.card, border: `1.5px solid ${C.line}`, borderRadius: 13,
                  padding: "14px 15px", marginBottom: 9 }, children: [
              jsx("span", { style: { width: 10, height: 10, borderRadius: 99, background: tone, flexShrink: 0, marginTop: 6 } }),
              jsxs("div", { style: { flex: 1, minWidth: 0 }, children: [
                jsxs("div", { style: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }, children: [
                  jsx("span", { className: "inr", style: { fontSize: 11.5, fontWeight: 700, letterSpacing: ".08em",
                      textTransform: "uppercase", color: tone }, children: label }),
                  jsx("span", { className: "inr", style: { fontSize: 12, color: C.mute }, children: n.when })
                ] }),
                jsx("div", { className: "osw", style: { fontSize: 15.5, fontWeight: 600, color: C.navy, marginTop: 5 }, children: n.t }),
                jsx("div", { className: "inr", style: { fontSize: 13.5, color: C.ink, marginTop: 3, lineHeight: 1.6 }, children: n.d })
              ] })
            ] }, n.id);
          }) }),
      notifs.some(n => n.kind === "page") && jsxs("button", { className: "tap", onClick: () => { setNotifOpen(false); openChat(); },
        style: { width: "100%", marginTop: 8, minHeight: 52, borderRadius: 13, background: C.tg, color: "#fff",
                 fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 9 },
        children: [jsx(TgIcon, { size: 18 }), " Open the community page"] })
    ] }),

    settingsOpen && jsxs(Sheet, { onClose: () => setSettingsOpen(false), label: "Settings", children: [
      " ",
      jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14
      }, children: [
        " ",
        jsxs("div", { children: [
          " ",
          jsx("div", { className: "osw", style: {
            fontSize: 20,
            fontWeight: 700,
            color: C.navy
          }, children: "Settings" }),
          " ",
          jsx("div", { className: "inr", style: {
            fontSize: 12.5,
            color: C.mute,
            fontWeight: 600
          }, children: "Change your dosing, reminders & alerts" })
        ] }),
        " ",
        jsx("button", { className: "tap", onClick: () => setSettingsOpen(false), style: {
          background: C.card,
          border: `1px solid ${C.line}`,
          borderRadius: 20,
          padding: "0 18px",
          minHeight: 44,
          fontSize: 13.5,
          fontWeight: 600,
          color: C.mute
        }, children: "Close" })
      ] }),
      " ",
      jsx("div", { className: "osw", style: {
        fontSize: 12,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: C.mute,
        fontWeight: 600,
        margin: "4px 0 8px"
      }, children: "Dosing \\u00b7 up to 3\\u00d7 a day" }),
      ALL_SLOTS.map((k) => {
        const on = dose[k] > 0;
        return jsxs("div", { style: {
          background: C.card,
          border: `1px solid ${on ? C.line : "#EEF1F6"}`,
          borderRadius: 12,
          padding: "12px 14px",
          marginBottom: 9
        }, children: [
          " ",
          jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            gap: 12
          }, children: [
            " ",
            jsxs("div", { style: {
              flex: 1,
              minWidth: 0
            }, children: [
              " ",
              jsx("div", { className: "osw", style: {
                fontSize: 15,
                fontWeight: 600,
                color: on ? C.navy : C.mute
              }, children: META[k].label }),
              " ",
              jsx("div", { className: "inr", style: {
                fontSize: 12,
                color: C.mute
              }, children: META[k].note })
            ] }),
            " ",
            jsxs("div", { className: "dose-step", style: {
              display: "flex",
              alignItems: "center",
              gap: 9
            }, children: [
              " ",
              jsx("button", { className: "tap", onClick: () => setCap(k, -1), disabled: dose[k] === 0, "aria-label": "One less at " + META[k].label, style: stepBtn(dose[k] === 0), children: "\u2212" }),
              " ",
              jsx("div", { style: {
                width: 44,
                textAlign: "center"
              }, children: on ? jsxs(Fragment, { children: [
                " ",
                jsx("span", { className: "ant", style: {
                  fontSize: 20,
                  color: C.navy
                }, children: dose[k] }),
                " ",
                jsx("div", { className: "inr", style: {
                  fontSize: 9,
                  color: C.mute,
                  marginTop: -2
                }, children: "caps" })
              ] }) : jsx("span", { className: "inr", style: {
                fontSize: 12.5,
                color: C.mute
              }, children: "off" }) }),
              " ",
              jsx("button", { className: "tap", onClick: () => setCap(k, 1), disabled: dose[k] === 3, "aria-label": "One more at " + META[k].label, style: stepBtn(dose[k] === 3), children: "+" })
            ] })
          ] }),
          on && jsxs("div", { style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 11,
            paddingTop: 11,
            borderTop: `1px solid ${C.line}`
          }, children: [
            " ",
            jsx("span", { className: "inr", style: {
              fontSize: 12.5,
              color: C.mute
            }, children: "Remind at" }),
            " ",
            jsx("input", { type: "time", value: times[k], onChange: (e) => setTimes((t) => ({
              ...t,
              [k]: e.target.value
            })), style: {
              fontSize: 15,
              fontWeight: 600,
              padding: "7px 10px",
              border: `1.5px solid ${C.line}`,
              borderRadius: 9,
              color: C.navy,
              fontFamily: "'Sora',sans-serif",
              background: "#fff"
            } })
          ] })
        ] }, k);
      }),
      " ",
      jsxs("div", { className: "inr", style: {
        fontSize: 12,
        color: perDay < MIN_DAILY ? C.clay : C.mute,
        marginTop: 2
      }, children: [
        "Total: ",
        jsxs("b", { style: {
          color: perDay < MIN_DAILY ? C.clay : C.navy
        }, children: [
          perDay,
          " caps/day"
        ] }),
        ".",
        perDay < MIN_DAILY ? " Below the " + MIN_DAILY + " a day minimum." : " Follow your product label or your doctor's advice."
      ] }),
      " ",
      jsx("div", { className: "osw", style: {
        fontSize: 12,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: C.mute,
        fontWeight: 600,
        margin: "20px 0 8px"
      }, children: "How we reach you" }),
      " ",
      jsx("div", { style: {
        display: "grid",
        gap: 8
      }, children: ["Text", "Messenger", "Viber", "WhatsApp", "Telegram"].map((c) => {
        const on = channel === c;
        return jsxs("button", { className: "tap", onClick: () => {
          setChannel(c);
          setReachOk(true);
          flash("Test sent \xB7 " + c);
        }, style: {
          display: "flex",
          alignItems: "center",
          gap: 11,
          textAlign: "left",
          padding: "12px 14px",
          borderRadius: 12,
          minHeight: 52,
          background: on ? "#F2F7FD" : C.card,
          border: `1.5px solid ${on ? C.blue : C.line}`
        }, children: [
          " ",
          jsx("span", { style: {
            width: 20,
            height: 20,
            borderRadius: 99,
            flexShrink: 0,
            display: "grid",
            placeItems: "center",
            background: on ? C.blue : "#fff",
            border: `2px solid ${on ? C.blue : "#c3cedd"}`,
            color: "#fff",
            fontSize: 12,
            fontWeight: 800
          }, children: on ? "\u2713" : "" }),
          " ",
          jsx("span", { className: "osw", style: {
            fontSize: 15,
            fontWeight: 600,
            color: C.navy
          }, children: c })
        ] }, c);
      }) }),
      " ",
      jsx("div", { className: "inr", style: {
        fontSize: 12,
        color: C.mute,
        marginTop: 8,
        lineHeight: 1.55
      }, children: "Text always stays on as a backup." }),
      " ",
      jsx("button", { className: "tap", onClick: () => setSettingsOpen(false), style: {
        width: "100%",
        marginTop: 20,
        minHeight: 52,
        borderRadius: 13,
        background: C.navy,
        color: "#fff",
        fontSize: 15.5,
        fontWeight: 700
      }, children: "Done" })
    ] }),
    guide && jsxs(Sheet, { onClose: () => setGuide(false), label: "About Gentrep Academy", children: [
      " ",
      jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 12,
        alignItems: "flex-start"
      }, children: [
        " ",
        jsxs("div", { style: {
          minWidth: 0
        }, children: [
          " ",
          jsx("h2", { className: "ant", style: {
            fontSize: 24,
            color: C.navy,
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: ".03em",
            lineHeight: 1.1
          }, children: "About Gentrep Academy" }),
          " ",
          jsx("p", { className: "inr", style: {
            fontSize: 14,
            color: C.mute,
            margin: "5px 0 0"
          }, children: "Read this once. About five minutes." })
        ] }),
        " ",
        jsx("button", { onClick: () => setGuide(false), "aria-label": "Close", style: {
          background: "none",
          color: C.mute,
          fontSize: 26,
          lineHeight: 1,
          padding: "0 4px"
        }, children: "\xD7" })
      ] }),
      " ",
      jsx("p", { className: "inr", style: {
        fontSize: 15,
        color: C.ink,
        lineHeight: 1.7,
        margin: "16px 0 0"
      }, children: ABOUT_INTRO }),
      " ",
      jsx("h3", { className: "sec", style: {
        margin: "24px 0 12px",
        fontSize: 14
      }, children: "The five levels" }),
      ABOUT_LEVELS.map((l, i) => jsxs("div", { style: {
        display: "flex",
        gap: 13,
        paddingBottom: 14
      }, children: [
        " ",
        jsxs("span", { "aria-hidden": "true", style: {
          flexShrink: 0,
          marginTop: 3,
          width: 30,
          display: "inline-flex",
          justifyContent: "center"
        }, children: [
          " ",
          jsx(Insignia, { ...RANK_DEVICE[i], size: i === 0 ? 24 : i === 4 ? 22 : 14, mark: false })
        ] }),
        " ",
        jsxs("div", { style: {
          minWidth: 0
        }, children: [
          " ",
          jsxs("h4", { className: "osw", style: {
            fontSize: 15.5,
            fontWeight: 700,
            color: C.navy,
            margin: 0
          }, children: [
            l.n,
            "  ",
            jsxs("span", { className: "inr", style: {
              fontWeight: 500,
              color: C.mute,
              fontSize: 13.5
            }, children: [
              "\xB7 ",
              l.sub
            ] })
          ] }),
          " ",
          jsx("p", { className: "inr", style: {
            fontSize: 14,
            color: C.ink,
            margin: "3px 0 0",
            lineHeight: 1.65
          }, children: l.d })
        ] })
      ] }, l.n)),
      " ",
      jsx("h3", { className: "sec", style: {
        margin: "20px 0 12px",
        fontSize: 14
      }, children: "How every course works" }),
      " ",
      jsx("ol", { style: {
        listStyle: "none",
        margin: 0,
        padding: 0
      }, children: ABOUT_STEPS.map((g, i) => jsxs("li", { style: {
        display: "flex",
        gap: 13,
        paddingBottom: 15
      }, children: [
        " ",
        jsx("span", { "aria-hidden": "true", style: {
          width: 26,
          height: 26,
          borderRadius: "50%",
          flexShrink: 0,
          marginTop: 2,
          background: C.navy,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          fontFamily: "'Sora',sans-serif",
          fontWeight: 700,
          fontSize: 13
        }, children: i + 1 }),
        " ",
        jsxs("div", { style: {
          minWidth: 0
        }, children: [
          " ",
          jsx("h4", { className: "osw", style: {
            fontSize: 15.5,
            fontWeight: 600,
            color: C.navy,
            margin: 0,
            lineHeight: 1.35
          }, children: g.h }),
          " ",
          jsx("p", { className: "inr", style: {
            fontSize: 14,
            color: C.ink,
            margin: "4px 0 0",
            lineHeight: 1.65
          }, children: g.p })
        ] })
      ] }, i)) }),
      " ",
      jsx("h3", { className: "sec", style: {
        margin: "20px 0 12px",
        fontSize: 14
      }, children: "If something changes" }),
      " ",
      jsx("div", { style: {
        border: `1px solid ${C.line}`,
        borderRadius: 14,
        overflow: "hidden"
      }, children: ABOUT_RULES.map(([q, a], i) => jsxs("div", { style: {
        padding: "13px 14px",
        borderTop: i ? `1px solid ${C.line}` : "none",
        background: i % 2 ? C.paper : C.card
      }, children: [
        " ",
        jsx("div", { className: "osw", style: {
          fontSize: 14.5,
          fontWeight: 600,
          color: C.navy
        }, children: q }),
        " ",
        jsx("div", { className: "inr", style: {
          fontSize: 14,
          color: C.ink,
          marginTop: 3,
          lineHeight: 1.6
        }, children: a })
      ] }, q)) }),
      " ",
      jsx("h3", { className: "sec", style: {
        margin: "20px 0 12px",
        fontSize: 14
      }, children: "Reading the screen" }),
      " ",
      jsx("div", { style: {
        border: `1px solid ${C.line}`,
        borderRadius: 14,
        overflow: "hidden"
      }, children: ABOUT_LEGEND.map(([k, v], i) => jsxs("div", { style: {
        display: "flex",
        gap: 12,
        padding: "11px 14px",
        borderTop: i ? `1px solid ${C.line}` : "none"
      }, children: [
        " ",
        jsx("span", { className: "osw", style: {
          fontSize: 14,
          fontWeight: 700,
          color: C.navy,
          width: 118,
          flexShrink: 0
        }, children: k }),
        " ",
        jsx("span", { className: "inr", style: {
          fontSize: 14,
          color: C.ink,
          lineHeight: 1.5
        }, children: v })
      ] }, k)) }),
      " ",
      jsxs("div", { style: {
        background: C.oliveLt,
        border: "1.5px solid #d7dccf",
        borderRadius: 14,
        padding: "15px 15px",
        marginTop: 20
      }, children: [
        " ",
        jsxs("p", { className: "inr", style: {
          fontSize: 14.5,
          color: C.olive,
          margin: 0,
          lineHeight: 1.7
        }, children: [
          "The app only keeps the record. What you actually learn happens in the room \u2014 from the people, the stories and the questions you ask there. So book the date and go. ",
          jsx("b", { children: "See you Saturday." })
        ] })
      ] }),
      " ",
      jsxs("button", { className: "tap", onClick: () => {
        setGuide(false);
        openChat();
      }, style: {
        width: "100%",
        marginTop: 14,
        borderRadius: 12,
        background: C.tg,
        color: "#fff",
        fontSize: 15,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 9
      }, children: [
        " ",
        jsx(TgIcon, { size: 19 }),
        " Still unsure? Ask your team"
      ] }),
      " ",
      jsx("button", { className: "tap", onClick: () => setGuide(false), style: {
        width: "100%",
        marginTop: 8,
        borderRadius: 12,
        background: "#fff",
        border: `1.5px solid ${C.line}`,
        color: C.navy,
        fontSize: 15,
        fontWeight: 700
      }, children: "Got it" })
    ] }),
    cert && jsxs(Sheet, { onClose: () => setCert(false), label: "Certificate", children: [
      " ",
      jsxs("div", { className: "printroot", children: [
        " ",
        jsxs("div", { className: "certplate", style: {
          background: "linear-gradient(160deg,#FCFAF4,#F3EFE4)",
          color: C.navy,
          borderRadius: 18,
          padding: "26px 20px 22px",
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
          border: "1px solid #E3DCC9",
          outline: `6px solid ${C.navy}`,
          outlineOffset: -13
        }, children: [
          " ",
          jsx(GentrepLogo, { markOnly: true, height: 300, "aria-hidden": "true", style: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            opacity: 0.05,
            zIndex: -1
          } }),
          " ",
          jsxs("div", { style: {
            textAlign: "center"
          }, children: [
            " ",
            jsxs("div", { style: {
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              gap: 7
            }, children: [
              " ",
              jsx(GentrepLogo, { height: 22, color: C.navy }),
              " ",
              jsx("span", { style: {
                fontFamily: "'Playfair Display',Georgia,serif",
                fontStyle: "italic",
                fontSize: 19,
                lineHeight: 0.92
              }, children: "Academy" })
            ] }),
            " ",
            jsx("div", { className: "inr", style: {
              fontSize: 11,
              letterSpacing: ".34em",
              textTransform: "uppercase",
              color: "#8a5a00",
              marginTop: 15,
              fontWeight: 700,
              paddingLeft: ".34em"
            }, children: "Certification" }),
            " ",
            jsxs("div", { style: {
              margin: "16px 0 2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 60
            }, children: [
              " ",
              jsx(Insignia, { ...RANK_DEVICE[rank.pips], size: rank.pips === 0 ? 52 : rank.pips === 4 ? 50 : 42 })
            ] }),
            " ",
            jsxs("div", { style: {
              fontFamily: "'Playfair Display',Georgia,serif",
              fontStyle: "italic",
              fontSize: 28,
              marginTop: 16,
              lineHeight: 1.2
            }, children: [
              rank.abbr ? rank.abbr + " " : "",
              ME.name
            ] }),
            " ",
            jsx("div", { className: "inr", style: {
              fontSize: 13,
              color: C.mute,
              marginTop: 7
            }, children: rank.k === "BASE" ? "Activated Member" : ACAD_TITLE[rank.k] + " \xB7 " + rank.full }),
            " ",
            jsx("div", { style: {
              height: 1,
              background: "rgba(14,34,73,.20)",
              margin: "18px 22px"
            } }),
            " ",
            jsx("p", { className: "inr", style: {
              fontSize: 13.5,
              color: C.ink,
              lineHeight: 1.72,
              margin: "0 10px"
            }, children: rank.cite }),
            " ",
            jsx("div", { style: {
              display: "flex",
              gap: 18,
              justifyContent: "center",
              marginTop: 24
            }, children: ["Academy Commandant", "Chief Operating Officer"].map((t) => jsxs("div", { style: {
              flex: 1,
              maxWidth: 150
            }, children: [
              " ",
              jsx("div", { style: {
                height: 1,
                background: "rgba(14,34,73,.20)"
              } }),
              " ",
              jsx("div", { className: "inr", style: {
                fontSize: 10,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: C.mute,
                marginTop: 6
              }, children: t })
            ] }, t)) }),
            " ",
            jsxs("div", { style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 22
            }, children: [
              " ",
              jsxs("div", { style: {
                padding: 6,
                background: "#fff",
                borderRadius: 8,
                border: "1px solid rgba(14,34,73,.2)"
              }, children: [
                " ",
                jsx(VerifyQR, { seedText: rank.ref, size: 70 })
              ] }),
              " ",
              jsx("div", { className: "inr", style: {
                fontSize: 9.5,
                letterSpacing: ".13em",
                textTransform: "uppercase",
                color: C.mute,
                marginTop: 7
              }, children: "Scan to verify" })
            ] }),
            " ",
            jsxs("div", { style: {
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              marginTop: 16,
              paddingTop: 13,
              borderTop: "1px solid rgba(14,34,73,.20)"
            }, children: [
              " ",
              jsxs("div", { style: {
                textAlign: "left"
              }, children: [
                " ",
                jsx("div", { className: "inr", style: {
                  fontSize: 10,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: C.mute
                }, children: "Dated" }),
                " ",
                jsx("div", { className: "osw", style: {
                  fontSize: 12.5,
                  fontWeight: 600,
                  marginTop: 2
                }, children: "28 July 2026" })
              ] }),
              " ",
              jsxs("div", { style: {
                textAlign: "center"
              }, children: [
                " ",
                jsx("div", { className: "inr", style: {
                  fontSize: 10,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: C.mute
                }, children: "Card" }),
                " ",
                jsx("div", { className: "osw", style: {
                  fontSize: 12.5,
                  fontWeight: 600,
                  marginTop: 2
                }, children: ME.card.slice(-9) })
              ] }),
              " ",
              jsxs("div", { style: {
                textAlign: "right"
              }, children: [
                " ",
                jsx("div", { className: "inr", style: {
                  fontSize: 10,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: C.mute
                }, children: "Reference" }),
                " ",
                jsx("div", { className: "osw", style: {
                  fontSize: 12.5,
                  fontWeight: 600,
                  marginTop: 2
                }, children: rank.ref })
              ] })
            ] }),
            " ",
            jsx("p", { className: "inr", style: {
              fontSize: 10,
              color: C.mute,
              lineHeight: 1.5,
              margin: "13px 8px 0",
              opacity: 0.85
            }, children: "An internal distinction of the Gentrep Academy." })
          ] })
        ] })
      ] }),
      " ",
      jsxs("div", { className: "no-print", children: [
        " ",
        jsx("button", { className: "tap", onClick: () => {
          setLive("Opening the print dialog. Choose Save as PDF.");
          window.print();
        }, style: {
          width: "100%",
          marginTop: 16,
          borderRadius: 12,
          background: C.navy,
          color: "#fff",
          fontSize: 15,
          fontWeight: 700
        }, children: "Download as PDF" }),
        " ",
        jsxs("p", { className: "inr", style: {
          fontSize: 12.5,
          color: C.mute,
          textAlign: "center",
          margin: "8px 0 0",
          lineHeight: 1.5
        }, children: [
          "In the print window choose ",
          jsx("b", { children: "Save as PDF" }),
          " as the destination."
        ] }),
        " ",
        jsxs("button", { className: "tap", onClick: shareCert, style: {
          width: "100%",
          marginTop: 12,
          borderRadius: 12,
          background: C.blue,
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9
        }, children: [
          " ",
          jsx(ShareIcon, { size: 18 }),
          " Share"
        ] }),
        " ",
        jsx("button", { className: "tap", onClick: () => setCert(false), style: {
          width: "100%",
          marginTop: 8,
          borderRadius: 12,
          background: "#fff",
          border: `1.5px solid ${C.line}`,
          color: C.navy,
          fontSize: 15,
          fontWeight: 700
        }, children: "Close" })
      ] })
    ] }),
    " ",
toast && jsxs("div", { className: "fade", role: "status", style: {
      position: "fixed",
      left: 16,
      right: 16,
      bottom: 100,
      zIndex: 70,
      display: "flex",
      justifyContent: "center"
    }, children: [
      " ",
      jsx("div", { className: "inr", style: {
        background: C.navy,
        color: "#fff",
        padding: "12px 18px",
        borderRadius: 12,
        fontSize: 14,
        boxShadow: "0 12px 30px -10px rgba(14,34,73,.6)"
      }, children: toast })
    ] })
  ] });
}
function Stat({
  big,
  label,
  tone
}) {
  return jsxs("div", { style: {
    flex: 1,
    background: C.card,
    border: `1px solid ${C.line}`,
    borderRadius: 12,
    padding: "12px 10px",
    textAlign: "center"
  }, children: [
    " ",
    jsx("div", { className: "ant", style: {
      fontSize: 24,
      color: tone || C.navy,
      lineHeight: 1
    }, children: big }),
    " ",
    jsx("div", { className: "inr", style: {
      fontSize: 11.5,
      color: C.mute,
      marginTop: 4
    }, children: label })
  ] });
}
function SyncChip({
  sync
}) {
  const down = sync.state === "down";
  const busy = sync.state === "syncing";
  const label = down ? "GEMA offline" : busy ? "Syncing\u2026" : "Live";
  const col = down ? C.clay : busy ? C.mute : C.good;
  const bg = down ? C.clayBg : busy ? C.paper : C.goodBg;
  return jsxs("span", { className: "inr", role: "status", title: down ? "Retry " + sync.tries : sync.at ? "Last synced " + sync.at.toLocaleTimeString() : "", style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "6px 11px",
    borderRadius: 999,
    background: bg,
    border: `1px solid ${down ? C.clay : busy ? C.line : "#BFE4CE"}`,
    fontSize: 12,
    fontWeight: 700,
    color: col,
    whiteSpace: "nowrap"
  }, children: [
    " ",
    jsx("span", { className: busy ? "pulse" : "", style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: col
    } }),
    label
  ] });
}
function Sheet({
  children,
  onClose,
  label
}) {
  const box = useRef(null);
  const opener = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  useEffect(() => {
    opener.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () => Array.from(box.current?.querySelectorAll('button:not([disabled]),[href],input,select,textarea,[tabindex]:not([tabindex="-1"])') || []).filter((el) => el.offsetParent !== null);
    const t = setTimeout(() => {
      const el = box.current;
      if (el && el.focus) el.focus({
        preventScroll: true
      });
    }, 40);
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === box.current)) {
        e.preventDefault();
        last.focus({
          preventScroll: true
        });
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus({
          preventScroll: true
        });
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      const o = opener.current;
      if (o && o.focus) o.focus({
        preventScroll: true
      });
    };
  }, []);
  return jsxs("div", { onClick: onClose, role: "dialog", "aria-modal": "true", "aria-label": label, className: "modal", style: {
    position: "fixed",
    inset: 0,
    zIndex: 60,
    background: "rgba(14,34,73,.55)",
    display: "flex",
    justifyContent: "center"
  }, children: [
    " ",
    jsxs("div", { className: "up sheet", ref: box, tabIndex: -1, onClick: (e) => e.stopPropagation(), style: {
      outline: "none",
      overflowY: "auto",
      background: C.card,
      padding: "14px 16px 26px",
      boxShadow: "0 30px 70px -20px rgba(8,21,48,.55)"
    }, children: [
      " ",
      jsx("div", { className: "only-mobile", style: {
        width: 40,
        height: 4,
        borderRadius: 2,
        background: C.line,
        margin: "0 auto 14px"
      } }),
      children
    ] })
  ] });
}
export {
  Academy as default
};
