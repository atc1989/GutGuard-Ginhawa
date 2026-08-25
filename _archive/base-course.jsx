import React, { useState } from "react";

const T = {
  ink: "#0C1826",
  panel: "#15273A",
  sunk: "#101F30",
  line: "rgba(255,255,255,0.09)",
  lineHi: "rgba(255,255,255,0.16)",
  cream: "#F3EEE5",
  muted: "#8FA3B8",
  gold: "#D9AB3C",
  royal: "#3465E8",
  dim: "rgba(243,238,229,0.35)",
};

/* THE COURSE — three dated invitations. Attendance is scanned. */
const SESSIONS = [
  { n: "Welcome session",   when: "Sat 19 Jul · 2:00 PM", where: "Lagao Hall",       done: "You were there" },
  { n: "How the day works", when: "Sat 26 Jul · 2:00 PM", where: "Lagao Hall",       done: "You were there" },
  { n: "Bringing a friend", when: "Sat 2 Aug · 2:00 PM",  where: "Robinsons, Davao", done: "You were there" },
];

/* THE GRADUATION — not your action. Someone else's. */
const RESULTS = [
  { n: "A friend came to a talk", done: "Marites came · 12 Jul", wait: "Waiting for your first guest" },
  { n: "A friend started",        done: "Marites started · 19 Jul", wait: "Waiting on Marites" },
];

export default function BaseCourse() {
  const [step, setStep] = useState(2);          // 0–5
  const seen = Math.min(step, 3);
  const got = Math.max(0, step - 3);
  const open = step === 5;

  return (
    <div style={{ minHeight: "100vh", background: "#080F18", padding: "26px 14px 40px", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 380, margin: "0 auto" }}>
        <div style={{ background: T.panel, border: `1px solid ${T.line}`, borderRadius: 20, overflow: "hidden" }}>

          {/* head */}
          <div style={{ padding: "20px 18px 14px" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: T.dim }}>My Team</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: T.cream, marginTop: 7, letterSpacing: "-0.02em" }}>
              {open ? "Your team is open." : "Five things open this."}
            </div>
            <div style={{ fontSize: 13.5, color: T.muted, marginTop: 6, lineHeight: 1.55 }}>
              {open ? "Three sessions, two friends. Nothing was signed."
                    : "Come to three sessions. Bring one friend along the way."}
            </div>
            <div style={{ fontSize: 11.5, color: T.dim, marginTop: 10 }}>Batch 12 · started 14 July</div>
          </div>

          {/* ---- THE SESSIONS ---- */}
          <Head n="Your sessions" sub={`${seen} of 3 attended`} />
          {SESSIONS.map((s, i) => {
            const on = i < seen, next = i === seen;
            return (
              <Row key={i} on={on}
                mark={on ? "✓" : i + 1}
                title={s.n}
                line={on ? s.done : `${s.when} · ${s.where}`}
                right={on ? null : next ? "Invited" : "Later"}
              />
            );
          })}

          {/* ---- THE RESULTS ---- */}
          <Head n="Then two friends" sub={got === 2 ? "Both in" : "This part is theirs, not yours"} />
          {RESULTS.map((r, i) => {
            const on = i < got;
            return (
              <Row key={i} on={on} last={i === 1}
                mark={on ? "✓" : "·"}
                title={r.n}
                line={on ? r.done : r.wait}
                right={on ? null : "Waiting"}
              />
            );
          })}

          {/* one action */}
          <div style={{ padding: 14, borderTop: `1px solid ${T.line}` }}>
            <button
              onClick={() => setStep(open ? 2 : step + 1)}
              style={{ width: "100%", padding: "14px 0", borderRadius: 8, border: "none",
                       background: open ? T.gold : T.royal, color: open ? T.ink : "#fff",
                       fontSize: 14.5, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}>
              {open ? "Go to my team"
                : seen < 3 ? `I'll be there · ${SESSIONS[seen].when.split(" · ")[0]}`
                : got === 0 ? "Invite a friend"
                : "Help Marites start"}
            </button>
          </div>
        </div>

        {!open && (
          <div style={{ marginTop: 14, fontSize: 12.5, color: T.muted, textAlign: "center", lineHeight: 1.6 }}>
            Most batches finish in three weeks. Take the time you need.
          </div>
        )}
        <div style={{ marginTop: 20, fontSize: 11, color: T.dim, textAlign: "center" }}>Tap the button to walk through it.</div>
      </div>
    </div>
  );
}

const Head = ({ n, sub }) => (
  <div style={{ background: T.sunk, padding: "9px 18px", borderTop: `1px solid ${T.line}`, borderBottom: `1px solid ${T.line}`,
                display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
    <span style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: T.cream, opacity: 0.8 }}>{n}</span>
    <span style={{ fontSize: 11, color: T.dim }}>{sub}</span>
  </div>
);

const Row = ({ on, mark, title, line, right, last }) => (
  <div style={{ display: "flex", gap: 13, alignItems: "center", padding: "13px 18px",
                borderBottom: last ? "none" : `1px solid ${T.line}` }}>
    <div style={{ width: 25, height: 25, borderRadius: 999, flexShrink: 0, display: "grid", placeItems: "center",
                  background: on ? T.gold : "transparent", border: on ? "none" : `1px solid ${T.lineHi}`,
                  color: on ? T.ink : T.dim, fontSize: 12.5, fontWeight: 700 }}>{mark}</div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 14.5, fontWeight: 600, color: on ? T.cream : "rgba(243,238,229,0.75)", letterSpacing: "-0.01em" }}>{title}</div>
      <div style={{ fontSize: 12, color: on ? T.gold : T.muted, marginTop: 3 }}>{line}</div>
    </div>
    {right && <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: T.dim }}>{right}</span>}
  </div>
);
