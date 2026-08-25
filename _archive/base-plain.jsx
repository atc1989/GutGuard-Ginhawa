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

/* Five things. Plain words. Each one says what happened, or what to do. */
const STEPS = [
  { n: "You came to a talk",        done: "Lagao · 14 June",            todo: "Come to one Ginhawa talk",        cta: "See the next talk" },
  { n: "You started yourself",      done: "Started 28 June · 24 days",  todo: "Start your own protocol",         cta: "Start my protocol" },
  { n: "You sat in on a business talk", done: "Davao · 5 July",         todo: "Sit in on one business talk",     cta: "See the next business talk" },
  { n: "A friend came",             done: "Marites · 12 July",          todo: "Bring one friend to a talk",      cta: "Invite a friend" },
  { n: "A friend started",          done: "Marites started · 19 July",  todo: "Help that friend start",          cta: "Help Marites start" },
];

export default function BasePlain() {
  const [n, setN] = useState(3);
  const open = n === 5;

  return (
    <div style={{ minHeight: "100vh", background: "#080F18", padding: "26px 14px 40px", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 380, margin: "0 auto" }}>

        <div style={{ background: T.panel, border: `1px solid ${T.line}`, borderRadius: 20, overflow: "hidden" }}>

          {/* head */}
          <div style={{ padding: "20px 18px 16px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: T.dim }}>My Team</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: T.cream, marginTop: 7, letterSpacing: "-0.02em" }}>
              {open ? "Your team is open." : "Five things open this."}
            </div>
            <div style={{ fontSize: 13.5, color: T.muted, marginTop: 6, lineHeight: 1.55 }}>
              {open
                ? "You did all five. Nobody had to sign anything."
                : "Nothing to fill in. Each one ticks itself when you do it."}
            </div>
          </div>

          {/* five things */}
          <div style={{ borderTop: `1px solid ${T.line}` }}>
            {STEPS.map((s, i) => {
              const on = i < n;
              return (
                <div key={i} style={{ display: "flex", gap: 13, alignItems: "center", padding: "14px 18px", borderBottom: i < 4 ? `1px solid ${T.line}` : "none" }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: 999, flexShrink: 0, display: "grid", placeItems: "center",
                    background: on ? T.gold : "transparent",
                    border: on ? "none" : `1px solid ${T.lineHi}`,
                    color: on ? T.ink : T.dim, fontSize: 13, fontWeight: 700,
                  }}>{on ? "✓" : i + 1}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: on ? T.cream : "rgba(243,238,229,0.72)", letterSpacing: "-0.01em" }}>
                      {on ? s.n : s.todo}
                    </div>
                    <div style={{ fontSize: 12, color: on ? T.gold : T.muted, marginTop: 3 }}>
                      {on ? s.done : "Not yet"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* one button: the next thing, nothing else */}
          <div style={{ padding: 14, borderTop: `1px solid ${T.line}` }}>
            {open ? (
              <button onClick={() => setN(3)} style={btn(T.gold, T.ink)}>Go to my team</button>
            ) : (
              <button onClick={() => setN(n + 1)} style={btn(T.royal, "#fff")}>{STEPS[n].cta}</button>
            )}
          </div>
        </div>

        {/* the time line — plain, and never a threat */}
        {!open && (
          <div style={{ marginTop: 14, fontSize: 12.5, color: T.muted, textAlign: "center", lineHeight: 1.6 }}>
            You started 14 days ago. Most finish in three weeks. Take the time you need.
          </div>
        )}

        <div style={{ marginTop: 22, fontSize: 11, color: T.dim, textAlign: "center" }}>
          Tap the blue button to walk through it.
        </div>
      </div>
    </div>
  );
}

const btn = (bg, fg) => ({
  width: "100%", padding: "14px 0", borderRadius: 8, border: "none",
  background: bg, color: fg, fontSize: 14.5, fontWeight: 600,
  fontFamily: "inherit", cursor: "pointer",
});
