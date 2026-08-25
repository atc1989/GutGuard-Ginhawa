import React, { useState } from "react";

const T = {
  ink: "#0C1826", panel: "#15273A", sunk: "#101F30", line: "rgba(255,255,255,0.09)",
  lineHi: "rgba(255,255,255,0.16)", cream: "#F3EEE5", muted: "#8FA3B8",
  gold: "#D9AB3C", goldSoft: "rgba(217,171,60,0.3)", royal: "#3465E8", dim: "rgba(243,238,229,0.35)",
};

const TABS = ["BASE", "My Team", "Sales", "GG-VERSE"];

/* Three lines from the Creed he already signed. */
const DUTY = [
  "You bring people in only the way you'd want to be brought in.",
  "You tell the truth about the product, the money, and the work.",
  "You don't leave someone you signed up to figure it out alone.",
];

export default function MyTeamLocked() {
  const [attended, setAttended] = useState(2);
  const [note, setNote] = useState("");
  const open = attended === 5;

  return (
    <div style={{ minHeight: "100vh", background: "#080F18", padding: "26px 14px 40px", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 390, margin: "0 auto", background: T.panel, border: "1px solid " + T.line, borderRadius: 20, overflow: "hidden" }}>

        {/* tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid " + T.line }}>
          {TABS.map((t, i) => (
            <div key={t} style={{ flex: 1, textAlign: "center", padding: "13px 0 11px", fontSize: 11.5, fontWeight: 600,
              color: i === 1 ? T.cream : "rgba(243,238,229,0.5)",
              borderBottom: i === 1 ? "2px solid " + T.gold : "2px solid transparent" }}>
              {t}{i === 1 && !open ? " 🔒" : ""}
            </div>
          ))}
        </div>

        {/* ---- the link. already his. ---- */}
        <div style={{ padding: "20px 18px 0" }}>
          <div style={{ borderRadius: 14, border: "1px solid " + (open ? T.goldSoft : T.line),
                        background: T.sunk, padding: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", filter: open ? "none" : "blur(2.5px)", opacity: open ? 1 : 0.5 }}>
              <div style={{ width: 72, height: 72, borderRadius: 10, background: T.cream, flexShrink: 0,
                            display: "grid", placeItems: "center", color: T.ink, fontSize: 10, fontWeight: 700 }}>QR</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11.5, color: T.muted }}>Your card number</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: T.cream, letterSpacing: "0.04em", marginTop: 2 }}>GG-12-0847</div>
                <div style={{ fontSize: 11.5, color: T.dim, marginTop: 5 }}>ggverse.ph/j/0847</div>
              </div>
            </div>

            {!open && (
              <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18 }}>🔒</div>
                  <div style={{ fontSize: 13, color: T.cream, fontWeight: 600, marginTop: 6 }}>Your invite link is already yours.</div>
                  <div style={{ fontSize: 11.5, color: T.muted, marginTop: 3 }}>It starts working at 5/5.</div>
                </div>
              </div>
            )}
          </div>

          <div style={{ marginTop: 13 }}>
            <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
              <div style={{ width: (attended / 5) * 100 + "%", height: "100%", background: T.gold, transition: "width .4s ease" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
              <span style={{ fontSize: 12.5, color: open ? T.gold : T.muted }}>
                {open ? "Open. Go bring someone." : (5 - attended) + " events to go"}
              </span>
              <span style={{ fontSize: 11.5, color: T.dim }}>{attended}/5</span>
            </div>
          </div>
        </div>

        {/* ---- what it will mean ---- */}
        <div style={{ background: T.sunk, padding: "10px 18px", margin: "20px 0 0",
                      borderTop: "1px solid " + T.line, borderBottom: "1px solid " + T.line }}>
          <span style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: T.cream, opacity: 0.85 }}>
            What this link makes you
          </span>
        </div>
        <div style={{ padding: "14px 18px 4px" }}>
          {DUTY.map((d, i) => (
            <div key={i} style={{ display: "flex", gap: 11, padding: "8px 0", alignItems: "flex-start" }}>
              <span style={{ fontSize: 12, color: T.gold, marginTop: 1, flexShrink: 0 }}>—</span>
              <span style={{ fontSize: 13, color: "rgba(243,238,229,0.82)", lineHeight: 1.55 }}>{d}</span>
            </div>
          ))}
          <div style={{ fontSize: 11.5, color: T.dim, marginTop: 8, marginBottom: 6 }}>From the Creed you signed.</div>
        </div>

        {/* ---- the one thing he can do now ---- */}
        <div style={{ background: T.sunk, padding: "10px 18px",
                      borderTop: "1px solid " + T.line, borderBottom: "1px solid " + T.line }}>
          <span style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: T.cream, opacity: 0.85 }}>
            Get ready
          </span>
        </div>
        <div style={{ padding: "16px 18px 22px" }}>
          <div style={{ fontSize: 13, color: "rgba(243,238,229,0.82)", lineHeight: 1.6 }}>
            Who's the first person you'd want to bring? Write the name down now — you'll have it when the link opens.
          </div>
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="A name, and why them"
            style={{ width: "100%", boxSizing: "border-box", marginTop: 12, padding: "13px 14px",
                     borderRadius: 10, background: T.sunk, border: "1px solid " + T.lineHi,
                     color: T.cream, fontSize: 13.5, fontFamily: "inherit", outline: "none" }}
          />
          {note.trim() && (
            <div style={{ fontSize: 11.5, color: T.gold, marginTop: 9 }}>
              {open ? "Saved. Send them your link." : "Saved. " + (5 - attended) + " events and you can invite them."}
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 390, margin: "16px auto 0", display: "flex", alignItems: "center", gap: 11 }}>
        <span style={{ fontSize: 11, color: T.dim, width: 78 }}>Events {attended}/5</span>
        <input type="range" min="0" max="5" value={attended} onChange={(e) => setAttended(+e.target.value)}
               style={{ flex: 1, accentColor: T.gold }} />
      </div>
    </div>
  );
}
