import React, { useState } from "react";

const T = {
  ink: "#0C1826", panel: "#15273A", sunk: "#101F30", line: "rgba(255,255,255,0.09)",
  lineHi: "rgba(255,255,255,0.16)", cream: "#F3EEE5", muted: "#8FA3B8",
  gold: "#D9AB3C", goldSoft: "rgba(217,171,60,0.32)", royal: "#3465E8", dim: "rgba(243,238,229,0.35)",
};

/* ---- 1. Before you book: watch, then read and agree ---- */
const PREP = [
  { k: "orient", n: "Gutguard Dashboard", mins: "4 min", doc: null,
    blurb: "Where everything lives — content, sales, your team." },
  { k: "da", n: "Distributor's Agreement", mins: "6 min", doc: "Distributor's Agreement v3.1",
    blurb: "What you're agreeing to, in plain terms.",
    body: "This Agreement is between Gutguard Philippines Inc. and you as an independent distributor. You are not an employee. You earn from product sold, never from recruitment alone. You may not make medical claims about any product. You may not require anyone below you to purchase stock. Either party may end this Agreement in writing at any time. Your card number and downline records remain the property of the company." },
  { k: "ethics", n: "Code of Ethics", mins: "5 min", doc: "Code of Ethics v2.0",
    blurb: "How we speak about the product, and about each other.",
    body: "Speak only to what the product is: food, taken daily. Never promise a cure, never diagnose, never discourage anyone from seeing a doctor. Show real testimonies with the person's consent and never edit them into a claim. Do not poach another distributor's prospect. Do not sell below the posted price. Do not present income as guaranteed, and never show earnings without showing the work behind them." },
  { k: "creed", n: "Gentrep Creed", mins: "2 min", doc: "The Gentrep Creed",
    blurb: "What we hold ourselves to.",
    body: "I earn, I do not extract. I bring people in only when I would want to be brought in the same way. I tell the truth about the product, the money, and the work. I do not leave someone I signed up to figure it out alone. What I build should still stand if I stop building it." },
];

/* ---- 2. Then attend: five event types ---- */
const SLOTS = [
  { t: "Ginhawa talk",         note: "Where it starts" },
  { t: "Product presentation", note: "What it is, how to use it" },
  { t: "Testimonial session",  note: "Real members, real results" },
  { t: "Business orientation", note: "How earning actually works" },
  { t: "Leaders' training",    note: "Running your own table" },
];

const EVENTS = [
  { id: 1,  type: "Testimonial session",  date: "Sat 2 Aug",  time: "2:00 PM", place: "Robinsons, Davao", host: "Jesh M.", seats: 4 },
  { id: 2,  type: "Product presentation", date: "Sat 2 Aug",  time: "4:00 PM", place: "Lagao Hall",       host: "Ana R.",  seats: 15 },
  { id: 3,  type: "Business orientation", date: "Sun 3 Aug",  time: "3:00 PM", place: "Koronadal",        host: "Rey T.",  seats: 22 },
  { id: 4,  type: "Testimonial session",  date: "Sat 9 Aug",  time: "2:00 PM", place: "Lagao Hall",       host: "Ana R.",  seats: 12 },
  { id: 5,  type: "Ginhawa talk",         date: "Sat 9 Aug",  time: "9:00 AM", place: "Polomolok",        host: "Ana R.",  seats: 30 },
  { id: 6,  type: "Business orientation", date: "Sat 16 Aug", time: "4:00 PM", place: "Lagao Hall",       host: "Ana R.",  seats: 9 },
  { id: 7,  type: "Leaders' training",    date: "Sat 16 Aug", time: "1:00 PM", place: "Robinsons, Davao", host: "Rey T.",  seats: 8 },
  { id: 8,  type: "Testimonial session",  date: "Sat 23 Aug", time: "2:00 PM", place: "Koronadal",        host: "Jesh M.", seats: 20 },
  { id: 9,  type: "Product presentation", date: "Sun 24 Aug", time: "3:00 PM", place: "Robinsons, Davao", host: "Jesh M.", seats: 18 },
  { id: 10, type: "Leaders' training",    date: "Sat 30 Aug", time: "1:00 PM", place: "Lagao Hall",       host: "Ana R.",  seats: 10 },
];

const TABS = ["BASE", "My Team", "Sales", "GG-VERSE"];

export default function GemaBase() {
  const [prep, setPrep] = useState({ orient: "done", da: "todo", ethics: "todo", creed: "todo" });
  const [open, setOpen] = useState(null);       // PREP item open
  const [prepOpen, setPrepOpen] = useState(true);
  const [watched, setWatched] = useState({});
  const [rows, setRows] = useState([
    { s: "attended", when: "Sat 19 Jul", place: "Lagao Hall" },
    { s: "attended", when: "Sat 26 Jul", place: "Lagao Hall" },
    { s: "open" }, { s: "open" }, { s: "open" },
  ]);
  const [filter, setFilter] = useState("All");
  const [confirm, setConfirm] = useState(null);

  const nPrep = PREP.filter(p => prep[p.k] === "done").length;
  const ready = nPrep === PREP.length;
  const nAtt = rows.filter(r => r.s === "attended").length;
  const nBk = rows.filter(r => r.s === "booked").length;
  const done = nAtt === 5 && ready;

  const slotOf = (t) => SLOTS.findIndex(s => s.t === t);
  const stateOf = (ev) => {
    const i = slotOf(ev.type);
    if (rows[i].s === "attended") return "attendedType";
    if (rows[i].s === "booked") return rows[i].ev === ev.id ? "booked" : "otherBooked";
    return "open";
  };
  const reserve = (ev) => {
    const i = slotOf(ev.type);
    setRows(rows.map((r, j) => j === i ? { s: "booked", when: ev.date, place: ev.place, ev: ev.id } : r));
    setConfirm(null);
  };
  const cancel = (ev) => {
    const i = slotOf(ev.type);
    setRows(rows.map((r, j) => j === i ? { s: "open" } : r));
    setConfirm(null);
  };

  const list = EVENTS.filter(e => filter === "All" || e.type === filter);
  const item = PREP.find(p => p.k === open);

  return (
    <div style={{ minHeight: "100vh", background: "#080F18", padding: "26px 14px 40px", fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: 390, margin: "0 auto", background: T.panel, border: "1px solid " + T.line, borderRadius: 20, overflow: "hidden", position: "relative" }}>

        {/* tabs — only My Team is locked */}
        <div style={{ display: "flex", borderBottom: "1px solid " + T.line }}>
          {TABS.map((t, i) => (
            <div key={t} style={{ flex: 1, textAlign: "center", padding: "13px 0 11px", fontSize: 11.5, fontWeight: 600,
              color: i === 0 ? T.cream : i === 1 && !done ? T.dim : "rgba(243,238,229,0.62)",
              borderBottom: i === 0 ? "2px solid " + T.gold : "2px solid transparent" }}>
              {t}{i === 1 && !done ? " 🔒" : ""}
            </div>
          ))}
        </div>

        {/* ---- BEFORE YOU BOOK ---- */}
        <div onClick={() => ready && setPrepOpen(!prepOpen)}
             style={{ background: T.sunk, padding: "10px 18px", borderTop: "1px solid " + T.line, borderBottom: "1px solid " + T.line,
                      display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
                      cursor: ready ? "pointer" : "default" }}>
          <span style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: T.cream, opacity: 0.85 }}>
            Before you book
          </span>
          <span style={{ fontSize: 11, color: ready ? T.gold : T.dim, display: "flex", alignItems: "center", gap: 7 }}>
            {ready ? "All " + PREP.length + " done · 28 Jul" : nPrep + "/" + PREP.length + " done"}
            {ready && <span style={{ fontSize: 9, color: T.dim }}>{prepOpen ? "▲" : "▼"}</span>}
          </span>
        </div>

        {(!ready || prepOpen) && PREP.map((p) => {
          const st = prep[p.k];
          return (
            <div key={p.k} onClick={() => st !== "done" && setOpen(p.k)}
              style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 18px",
                       borderBottom: "1px solid " + T.line, cursor: st === "done" ? "default" : "pointer" }}>
              <Box on={st === "done"} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: st === "done" ? T.cream : "rgba(243,238,229,0.8)" }}>{p.n}</div>
                <div style={{ fontSize: 11.5, color: st === "done" ? T.gold : T.muted, marginTop: 2 }}>
                  {st === "done"
                    ? (p.doc ? "Watched and agreed · 28 Jul" : "Watched · 28 Jul")
                    : "Video " + p.mins + (p.doc ? " · then read and agree" : "")}
                </div>
              </div>
              {st !== "done" && (
                <button onClick={(e) => { e.stopPropagation(); setOpen(p.k); }} style={mini(T.royal, "#fff")}>Watch</button>
              )}
            </div>
          );
        })}

        {/* ---- FIVE EVENTS: sealed until the prep is done ---- */}
        {!ready ? (
          <>
            <Head n="Your five events" sub="Locked" />
            <div style={{ padding: "20px 18px 22px", textAlign: "center" }}>
              <div style={{ width: 42, height: 42, borderRadius: 999, margin: "0 auto", background: "rgba(255,255,255,0.06)",
                            border: "1px solid " + T.line, display: "grid", placeItems: "center", fontSize: 17 }}>🔒</div>
              <div style={{ fontSize: 13.5, color: T.cream, marginTop: 12, fontWeight: 600 }}>
                Booking opens when the {PREP.length - nPrep} above {PREP.length - nPrep === 1 ? "is" : "are"} done.
              </div>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 6, lineHeight: 1.6 }}>
                Watch, read, agree — then you can pick your dates.
              </div>
              <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                {SLOTS.map((s) => (
                  <span key={s.t} style={{ fontSize: 11, color: T.dim, border: "1px solid " + T.line,
                                           borderRadius: 999, padding: "5px 11px" }}>{s.t}</span>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
        {/* ---- YOUR FIVE EVENTS ---- */}
        <Head n="Your five events" sub={nAtt + "/5 attended"} />
        <div style={{ padding: "14px 18px 0" }}>
          <div style={{ height: 8, borderRadius: 999, background: "rgba(255,255,255,0.07)", overflow: "hidden", display: "flex" }}>
            <div style={{ width: (nAtt / 5) * 100 + "%", background: T.gold, transition: "width .4s ease" }} />
            <div style={{ width: (nBk / 5) * 100 + "%", background: T.goldSoft, transition: "width .4s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 7 }}>
            <span style={{ fontSize: 12.5, color: T.muted }}>
              {done ? "Your team is open." : (5 - nAtt) + " to go" + (nBk ? " · " + nBk + " booked" : "")}
            </span>
            <span style={{ fontSize: 11.5, color: T.dim }}>{Math.round((nAtt / 5) * 100)}%</span>
          </div>
        </div>

        <div style={{ padding: "14px 0 6px" }}>
          {SLOTS.map((s, i) => {
            const r = rows[i], att = r.s === "attended", bk = r.s === "booked";
            const count = EVENTS.filter(e => e.type === s.t).length;
            return (
              <div key={i} onClick={() => setFilter(filter === s.t ? "All" : s.t)}
                style={{ display: "flex", gap: 12, alignItems: "center", padding: "11px 18px", cursor: "pointer",
                         background: filter === s.t ? T.sunk : "transparent" }}>
                <Box on={att} half={bk} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: att ? T.cream : "rgba(243,238,229,0.78)" }}>{s.t}</div>
                  <div style={{ fontSize: 11.5, marginTop: 2, color: att ? T.gold : bk ? "rgba(217,171,60,0.8)" : T.muted }}>
                    {att ? "Attended · " + r.when
                      : bk ? "Booked · " + r.when + " · " + r.place
                      : count ? count + " dates posted" : "No dates posted yet"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---- EVENTS LIST ---- */}
        <Head n="Events posted" sub={list.length + (filter === "All" ? " upcoming" : " of this type")} />

        <div style={{ display: "flex", gap: 7, overflowX: "auto", padding: "12px 18px 4px" }}>
          {["All", ...SLOTS.map(s => s.t)].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ flexShrink: 0, padding: "7px 13px", borderRadius: 999, fontSize: 11.5, fontWeight: 600, fontFamily: "inherit", cursor: "pointer",
                       border: "1px solid " + (filter === f ? "transparent" : T.lineHi),
                       background: filter === f ? T.cream : "transparent", color: filter === f ? T.ink : T.muted }}>{f}</button>
          ))}
        </div>

        <div style={{ padding: "8px 0 14px" }}>
          {list.map(e => {
            const st = stateOf(e);
            return (
              <div key={e.id} style={{ display: "flex", gap: 12, alignItems: "center", padding: "13px 18px", borderBottom: "1px solid " + T.line }}>
                <div style={{ width: 52, flexShrink: 0, textAlign: "center", padding: "7px 0", borderRadius: 10, background: "rgba(255,255,255,0.05)" }}>
                  <div style={{ fontSize: 10, color: T.dim, textTransform: "uppercase", letterSpacing: "0.06em" }}>{e.date.split(" ")[0]}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: T.cream, lineHeight: 1.2 }}>{e.date.split(" ")[1]}</div>
                  <div style={{ fontSize: 10, color: T.dim }}>{e.date.split(" ")[2]}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.07em", textTransform: "uppercase", color: T.gold, opacity: 0.85 }}>{e.type}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: T.cream, marginTop: 3 }}>{e.place}</div>
                  <div style={{ fontSize: 11.5, color: T.muted, marginTop: 2 }}>{e.time} · with {e.host} · {e.seats} seats left</div>
                </div>

                {!ready ? <Tag text="🔒" c={T.dim} />
                  : st === "open" ? <button onClick={() => reserve(e)} style={mini(T.royal, "#fff")}>Reserve</button>
                  : st === "booked" ? (
                    confirm === e.id ? (
                      <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                        <button onClick={() => cancel(e)} style={mini("transparent", T.cream, T.lineHi)}>Give it up</button>
                        <button onClick={() => setConfirm(null)} style={mini(T.cream, T.ink)}>Keep</button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5, flexShrink: 0 }}>
                        <Tag text="Booked" c={T.gold} />
                        <button onClick={() => setConfirm(e.id)}
                          style={{ background: "none", border: "none", padding: 0, fontFamily: "inherit", fontSize: 11.5,
                                   color: T.muted, textDecoration: "underline", cursor: "pointer" }}>Cancel</button>
                      </div>
                    )
                  )
                  : st === "otherBooked" ? <Tag text="Switch" c={T.muted} click={() => reserve(e)} />
                  : <Tag text="Done" c={T.dim} />}
              </div>
            );
          })}
        </div>

          </>
        )}

        {/* ---- watch, then read and agree ---- */}
        {item && (
          <div style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(4,9,16,0.78)",
                        display: "flex", alignItems: "flex-end", justifyContent: "center" }}
               onClick={() => setOpen(null)}>
            <div onClick={(ev) => ev.stopPropagation()}
                 style={{ width: "100%", maxWidth: 390, maxHeight: "86vh", overflowY: "auto", background: T.panel,
                          borderTop: "1px solid " + T.lineHi, borderRadius: "20px 20px 0 0" }}>
              <div style={{ padding: "16px 18px 12px", borderBottom: "1px solid " + T.line,
                            display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: T.cream, letterSpacing: "-0.02em" }}>{item.n}</div>
                  <div style={{ fontSize: 12.5, color: T.muted, marginTop: 3 }}>{item.blurb}</div>
                </div>
                <button onClick={() => setOpen(null)}
                        style={{ background: "none", border: "none", color: T.muted, fontSize: 20, lineHeight: 1,
                                 padding: "2px 4px", cursor: "pointer", fontFamily: "inherit" }}>×</button>
              </div>

              {/* video */}
              <div style={{ padding: 18 }}>
                <div onClick={() => setWatched({ ...watched, [item.k]: true })}
                     style={{ aspectRatio: "16/9", borderRadius: 12, background: T.sunk, border: "1px solid " + T.line,
                              display: "grid", placeItems: "center", cursor: "pointer" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ width: 46, height: 46, borderRadius: 999, margin: "0 auto",
                                  background: watched[item.k] ? T.gold : T.royal, display: "grid", placeItems: "center",
                                  color: watched[item.k] ? T.ink : "#fff", fontSize: 16 }}>
                      {watched[item.k] ? "✓" : "▶"}
                    </div>
                    <div style={{ fontSize: 11.5, color: T.muted, marginTop: 9 }}>
                      {watched[item.k] ? "Watched" : "Play · " + item.mins}
                    </div>
                  </div>
                </div>
              </div>

              {/* document */}
              {item.doc && (
                <div style={{ padding: "0 18px 18px" }}>
                  <div style={{ fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: T.dim, marginBottom: 8 }}>
                    {item.doc}
                  </div>
                  <div style={{ maxHeight: 190, overflowY: "auto", padding: 14, borderRadius: 10,
                                background: T.sunk, border: "1px solid " + T.line,
                                fontSize: 12.5, color: "rgba(243,238,229,0.82)", lineHeight: 1.75,
                                opacity: watched[item.k] ? 1 : 0.4 }}>
                    {item.body}
                  </div>
                  {!watched[item.k] && (
                    <div style={{ fontSize: 11.5, color: T.dim, marginTop: 8 }}>Watch the video first.</div>
                  )}
                </div>
              )}

              <div style={{ padding: "0 18px 22px" }}>
                <button
                  disabled={!watched[item.k]}
                  onClick={() => {
                    const next = { ...prep, [item.k]: "done" };
                    setPrep(next);
                    setOpen(null);
                    if (PREP.every((x) => next[x.k] === "done")) setPrepOpen(false);
                  }}
                  style={{ width: "100%", padding: "14px 0", borderRadius: 8, border: "none", fontFamily: "inherit",
                           fontSize: 14, fontWeight: 600, cursor: watched[item.k] ? "pointer" : "not-allowed",
                           background: watched[item.k] ? T.royal : "rgba(255,255,255,0.07)",
                           color: watched[item.k] ? "#fff" : T.dim }}>
                  {item.doc ? "I have read this and I agree" : "Done — I've watched it"}
                </button>
                {item.doc && (
                  <div style={{ fontSize: 11, color: T.dim, marginTop: 9, textAlign: "center", lineHeight: 1.5 }}>
                    Your name, the date, and the version are kept on file.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const Head = ({ n, sub }) => (
  <div style={{ background: T.sunk, padding: "10px 18px", borderTop: "1px solid " + T.line, borderBottom: "1px solid " + T.line,
                display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
    <span style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: T.cream, opacity: 0.85 }}>{n}</span>
    <span style={{ fontSize: 11, color: T.dim }}>{sub}</span>
  </div>
);

const Box = ({ on, half }) => (
  <div style={{ width: 21, height: 21, borderRadius: 6, flexShrink: 0, display: "grid", placeItems: "center",
                background: on ? T.gold : "transparent",
                border: on ? "none" : "1px solid " + (half ? T.goldSoft : T.lineHi),
                color: T.ink, fontSize: 12.5, fontWeight: 800 }}>{on ? "✓" : ""}</div>
);

const mini = (bg, fg, brd) => ({
  padding: "8px 14px", borderRadius: 999, border: brd ? "1px solid " + brd : "none", background: bg, color: fg,
  fontSize: 11.5, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", flexShrink: 0,
});

const Tag = ({ text, c, click }) => (
  <span onClick={click}
    style={{ fontSize: 10.5, letterSpacing: "0.07em", textTransform: "uppercase", color: c,
             border: "1px solid " + (click ? T.lineHi : "transparent"), borderRadius: 999,
             padding: click ? "6px 11px" : "0", flexShrink: 0, cursor: click ? "pointer" : "default" }}>{text}</span>
);
