import React, { useState } from "react";

/* ---------- tokens ---------- */
const T = {
  ink: "#0C1826",
  panel: "#15273A",
  panel2: "#1C3145",
  line: "rgba(255,255,255,0.09)",
  lineHi: "rgba(255,255,255,0.16)",
  cream: "#F3EEE5",
  muted: "#8FA3B8",
  gold: "#D9AB3C",
  royal: "#3465E8",
  amber: "#C8802E",
  dim: "rgba(243,238,229,0.35)",
};
const R = { s: 8, m: 14, l: 20, pill: 999 };

/* ---------- the five stars, each tied to a record ---------- */
const STARS = [
  { n: "Orientation", src: "Check-in scan · Ginhawa talk", got: "Scanned in · 14 Jun, Lagao" },
  { n: "Belief", src: "Own pay-in + 21-day streak", got: "Paid in 28 Jun · streak 24 days" },
  { n: "Business Exposure", src: "Check-in scan · opportunity session", got: "Scanned in · 5 Jul, Davao" },
  { n: "First Share", src: "Your link opened and reserved", got: "Marites R. reserved · 12 Jul" },
  { n: "First Start", src: "That person's own pay-in", got: "Marites R. paid in · 19 Jul" },
];

const Star = ({ i, s, on }) => (
  <div
    style={{
      display: "flex", gap: 12, alignItems: "flex-start",
      padding: "13px 14px",
      borderBottom: i < 4 ? `1px solid ${T.line}` : "none",
      opacity: on ? 1 : 0.72,
    }}
  >
    <div
      style={{
        width: 26, height: 26, borderRadius: R.pill, flexShrink: 0,
        display: "grid", placeItems: "center",
        background: on ? T.gold : "transparent",
        border: on ? "none" : `1px solid ${T.lineHi}`,
        color: on ? T.ink : T.dim,
        fontSize: 12, fontWeight: 700,
      }}
    >
      {on ? "★" : i + 1}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: T.cream, letterSpacing: "-0.01em" }}>{s.n}</div>
      <div style={{ fontSize: 11.5, color: on ? T.gold : T.muted, marginTop: 3, lineHeight: 1.45 }}>
        {on ? s.got : s.src}
      </div>
    </div>
    {!on && (
      <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: T.dim, paddingTop: 4 }}>
        waiting
      </div>
    )}
  </div>
);

export default function Base21() {
  const [mode, setMode] = useState("pace");   // "pace" | "hard"
  const [day, setDay] = useState(14);
  const [lit, setLit] = useState(3);

  const expired = mode === "hard" && day > 21 && lit < 5;
  const shown = expired ? 0 : lit;
  const done = shown === 5;

  /* the status line — the whole decision lives here */
  let bar = { bg: T.panel2, brd: T.line, fg: T.muted, k: "Day " + day + " of 21", v: 21 - day + " days left" };
  if (done) bar = { bg: "rgba(217,171,60,0.14)", brd: "rgba(217,171,60,0.4)", fg: T.gold, k: "All five lit", v: "GEMA is open" };
  else if (mode === "pace" && day > 21 && day <= 35)
    bar = { bg: "rgba(200,128,46,0.13)", brd: "rgba(200,128,46,0.4)", fg: T.amber, k: "Day " + day, v: "Slower than most — Ana was nudged" };
  else if (mode === "pace" && day > 35)
    bar = { bg: "rgba(200,128,46,0.13)", brd: "rgba(200,128,46,0.4)", fg: T.amber, k: "Day " + day, v: "Stalled — still yours to finish" };
  else if (expired)
    bar = { bg: "rgba(200,128,46,0.13)", brd: "rgba(200,128,46,0.4)", fg: T.amber, k: "Cycle expired on day 21", v: "Progress cleared" };

  const Tog = ({ id, label }) => (
    <button
      onClick={() => setMode(id)}
      style={{
        flex: 1, padding: "9px 0", borderRadius: R.s, border: "none", cursor: "pointer",
        background: mode === id ? T.royal : "transparent",
        color: mode === id ? "#fff" : T.muted,
        fontSize: 12.5, fontWeight: 600, fontFamily: "inherit",
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#080F18", padding: "22px 14px 40px", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>

        {/* control strip */}
        <div style={{ background: T.panel, border: `1px solid ${T.line}`, borderRadius: R.m, padding: 12, marginBottom: 18 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: T.dim, marginBottom: 8 }}>
            Twenty-one days is —
          </div>
          <div style={{ display: "flex", gap: 4, background: T.ink, borderRadius: R.s, padding: 3 }}>
            <Tog id="pace" label="A pace marker" />
            <Tog id="hard" label="A hard cutoff" />
          </div>
          <div style={{ marginTop: 13, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, color: T.muted, width: 44 }}>Day {day}</span>
            <input type="range" min="1" max="45" value={day} onChange={(e) => setDay(+e.target.value)}
              style={{ flex: 1, accentColor: T.royal }} />
          </div>
          <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 11, color: T.muted, width: 44 }}>Stars {lit}</span>
            <input type="range" min="0" max="5" value={lit} onChange={(e) => setLit(+e.target.value)}
              style={{ flex: 1, accentColor: T.gold }} />
          </div>
        </div>

        {/* the screen itself */}
        <div style={{ background: T.panel, border: `1px solid ${T.line}`, borderRadius: R.l, overflow: "hidden" }}>
          <div style={{ padding: "18px 16px 14px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: T.dim }}>
              My Team
            </div>
            <div style={{ fontSize: 21, fontWeight: 700, color: T.cream, marginTop: 6, letterSpacing: "-0.02em" }}>
              {done ? "Your team is open." : "Five things open this."}
            </div>
            <div style={{ fontSize: 13, color: T.muted, marginTop: 5, lineHeight: 1.5 }}>
              {done
                ? "You crossed from member to builder — earned, not marked."
                : "Nothing to tick. Each one lights when the record lands."}
            </div>
          </div>

          {/* status bar */}
          <div style={{ margin: "0 12px 12px", background: bar.bg, border: `1px solid ${bar.brd}`, borderRadius: R.s, padding: "9px 12px", display: "flex", justifyContent: "space-between", gap: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: bar.fg }}>{bar.k}</span>
            <span style={{ fontSize: 12, color: bar.fg, opacity: 0.85, textAlign: "right" }}>{bar.v}</span>
          </div>

          {/* stars */}
          <div style={{ borderTop: `1px solid ${T.line}` }}>
            {STARS.map((s, i) => <Star key={i} i={i} s={s} on={i < shown} />)}
          </div>

          {/* next action */}
          {!done && (
            <div style={{ padding: 12, borderTop: `1px solid ${T.line}` }}>
              <button style={{ width: "100%", padding: "13px 0", borderRadius: R.s, border: "none", background: T.royal, color: "#fff", fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
                {shown === 0 ? "Find a talk near you" :
                 shown < 3 ? "See the next opportunity session" :
                 shown === 3 ? "Invite one friend" : "Help Marites start her protocol"}
              </button>
            </div>
          )}
        </div>

        {/* the cost, only when it bites */}
        {expired && (
          <div style={{ marginTop: 14, background: "rgba(200,128,46,0.10)", border: `1px solid rgba(200,128,46,0.35)`, borderRadius: R.m, padding: 14 }}>
            <div style={{ fontSize: 12.5, color: T.cream, lineHeight: 1.6 }}>
              <b style={{ color: T.amber }}>What just got deleted:</b> {lit} verified records — a scan at a real talk,
              a real pay-in, a friend who really did reserve. The events still happened. The cutoff makes the app
              pretend they didn't.
            </div>
          </div>
        )}

        <div style={{ marginTop: 16, fontSize: 11.5, color: T.dim, lineHeight: 1.6, textAlign: "center" }}>
          Scrub past day 21 in each mode.
        </div>
      </div>
    </div>
  );
}
