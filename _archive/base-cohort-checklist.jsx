import React, { useState } from "react";

const T = {
  ink: "#0C1826",
  panel: "#15273A",
  line: "rgba(255,255,255,0.09)",
  lineHi: "rgba(255,255,255,0.16)",
  cream: "#F3EEE5",
  muted: "#8FA3B8",
  gold: "#D9AB3C",
  royal: "#3465E8",
  dim: "rgba(243,238,229,0.35)",
};

/* Five dated sessions — GEMA invites, member registers, scan ticks it. */
const SESSIONS = [
  { n: "Welcome night",           when: "Sat 2 Aug · Lagao",   done: "You were there · 2 Aug" },
  { n: "Why the gut matters",     when: "Sat 9 Aug · Lagao",   done: "You were there · 9 Aug" },
  { n: "The business, plainly",   when: "Sat 16 Aug · Lagao",  done: "You were there · 16 Aug" },
  { n: "Inviting without selling", when: "Sat 23 Aug · Lagao", done: "You were there · 23 Aug" },
  { n: "Your first team",         when: "Sat 30 Aug · Davao",  done: "You were there · 30 Aug" },
];

/* Two results — not your action, so never a red mark. */
const RESULTS = [
  { n: "A friend comes to a talk", wait: "Marites is registered for 16 Aug", done: "Marites came · 16 Aug" },
  { n: "A friend starts",          wait: "Nobody yet — invite one more",     done: "Marites started · 23 Aug" },
];

export default function BaseSplit() {
  const [s, setS] = useState(2);   // sessions attended
  const [r, setR] = useState(0);   // results in
  const open = s === 5 && r === 2;

  const cta = s < 5
    ? (s === 2 ? "Register for 16 Aug" : "Register for the next session")
    : r === 0 ? "Invite a friend" : "Help Marites start";
  const go = () => (s < 5 ? setS(s + 1) : setR(r + 1));

  return (
    <div style={{ minHeight: "100vh", background: "#080F18", padding: "26px 14px 40px", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 390, margin: "0 auto" }}>
        <div style={{ background: T.panel, border: `1px solid ${T.line}`, borderRadius: 20, overflow: "hidden" }}>

          <div style={{ padding: "20px 18px 14px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: T.dim }}>
              August cohort · General Santos
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: T.cream, marginTop: 7, letterSpacing: "-0.02em" }}>
              {open ? "Your team is open." : "Five Saturdays, then your team."}
            </div>
            <div style={{ fontSize: 13.5, color: T.muted, marginTop: 6, lineHeight: 1.55 }}>
              {open ? "You came to all five, and two friends moved because of you."
                    : "Ana sends each invite. Coming ticks it — nothing to fill in."}
            </div>
          </div>

          {/* ---- the course ---- */}
          <Head label="Your sessions" note={`${s} of 5`} />
          {SESSIONS.map((x, i) => {
            const on = i < s, next = i === s;
            return (
              <Row key={i} last={i === 4}
                mark={on ? "✓" : i + 1} gold={on}
                title={x.n}
                sub={on ? x.done : x.when}
                subGold={on}
                tag={next ? "Next" : null} />
            );
          })}

          {/* ---- the graduation ---- */}
          <Head label="When your friends move" note={`${r} of 2`} top />
          {RESULTS.map((x, i) => {
            const on = i < r;
            return (
              <Row key={i} last={i === 1}
                mark={on ? "✓" : "·"} gold={on}
                title={x.n}
                sub={on ? x.done : x.wait}
                subGold={on}
                tag={on ? null : "Waiting"} />
            );
          })}

          <div style={{ padding: 14, borderTop: `1px solid ${T.line}` }}>
            <button onClick={open ? () => { setS(2); setR(0); } : go}
              style={{
                width: "100%", padding: "14px 0", borderRadius: 8, border: "none",
                background: open ? T.gold : T.royal, color: open ? T.ink : "#fff",
                fontSize: 14.5, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
              }}>
              {open ? "Go to my team" : cta}
            </button>
          </div>
        </div>

        {!open && (
          <div style={{ marginTop: 14, fontSize: 12.5, color: T.muted, textAlign: "center", lineHeight: 1.6 }}>
            Most finish the five Saturdays in a month. Miss one and you join the next cohort for it.
          </div>
        )}
        <div style={{ marginTop: 20, fontSize: 11, color: T.dim, textAlign: "center" }}>Tap the button to walk through it.</div>
      </div>
    </div>
  );
}

function Head({ label, note, top }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "baseline",
      padding: "13px 18px 9px", background: "rgba(255,255,255,0.02)",
      borderTop: `1px solid ${top ? "rgba(255,255,255,0.16)" : T.line}`,
      borderBottom: `1px solid ${T.line}`,
    }}>
      <span style={{ fontSize: 10.5, letterSpacing: "0.13em", textTransform: "uppercase", color: T.muted, fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: 11, color: T.dim }}>{note}</span>
    </div>
  );
}

function Row({ mark, gold, title, sub, subGold, tag, last }) {
  return (
    <div style={{ display: "flex", gap: 13, alignItems: "center", padding: "13px 18px", borderBottom: last ? "none" : `1px solid ${T.line}` }}>
      <div style={{
        width: 25, height: 25, borderRadius: 999, flexShrink: 0, display: "grid", placeItems: "center",
        background: gold ? T.gold : "transparent",
        border: gold ? "none" : `1px solid ${T.lineHi}`,
        color: gold ? T.ink : T.dim, fontSize: 12.5, fontWeight: 700,
      }}>{mark}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 600, color: gold ? T.cream : "rgba(243,238,229,0.75)", letterSpacing: "-0.01em" }}>{title}</div>
        <div style={{ fontSize: 12, color: subGold ? T.gold : T.muted, marginTop: 3 }}>{sub}</div>
      </div>
      {tag && (
        <span style={{ fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: T.dim, border: `1px solid ${T.lineHi}`, borderRadius: 999, padding: "3px 8px" }}>{tag}</span>
      )}
    </div>
  );
}
