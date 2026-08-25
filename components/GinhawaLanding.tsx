"use client";

import { useEffect, useState } from "react";
import { TopBar } from "@/components/TopBar";
import { shopEntryUrl } from "@/lib/ecosystem";
import { EVENT, GIFT_PESO, PASS_PTS, TEAM, VIDEO, type Clinician } from "@/lib/event";

type Holder = { name: string; mobile: string; cardNo: string };

function cardNo() {
  let n = "0240";
  for (let i = 0; i < 3; i++) n += " " + String(1000 + Math.floor(Math.random() * 9000));
  return n;
}

function qrCells(seed: string, n: number) {
  let x = 4211;
  for (const ch of String(seed)) x = (x * 31 + ch.charCodeAt(0)) & 0x7fffffff;
  const rnd = () => {
    x = (x * 1103515245 + 12345) & 0x7fffffff;
    return x / 0x7fffffff;
  };
  const grid: boolean[][] = [];
  for (let y = 0; y < n; y++) {
    const row: boolean[] = [];
    for (let cx = 0; cx < n; cx++) row.push(rnd() > 0.55);
    grid.push(row);
  }
  return grid;
}

function IconX() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function QRSvg({ seed, size }: { seed: string; size: number }) {
  const n = 21;
  const cells = qrCells(seed, n);
  const cell = size / n;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
      <rect width={size} height={size} fill="#fff" />
      {cells.flatMap((row, y) =>
        row.map((on, x) =>
          on ? <rect key={`${x}-${y}`} x={x * cell} y={y * cell} width={cell} height={cell} fill="#0e2249" /> : null,
        ),
      )}
    </svg>
  );
}

export function GinhawaLanding() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [claim, setClaim] = useState(false);
  const [who, setWho] = useState<Clinician | null>(null);
  const [holder, setHolder] = useState<Holder | null>(null);
  const [fire, setFire] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const shop = shopEntryUrl();
  const left = EVENT.seats - EVENT.taken;
  const sent = Boolean(holder);
  const valid = name.trim().length > 1 && mobile.replace(/\D/g, "").length >= 10;

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 380 && !sent);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sent]);

  useEffect(() => {
    const open = claim || Boolean(who);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setClaim(false);
      setWho(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [claim, who]);

  const issue = (n: string, m: string) => {
    setHolder({ name: n.trim(), mobile: m.trim(), cardNo: cardNo() });
    setName(n.trim());
    setMobile(m.trim());
    setClaim(false);
    setFire(Date.now());
  };

  const openClaim = () => {
    if (sent) return;
    setClaim(true);
  };

  const downloadQR = () => {
    if (!holder) return;
    const seed = holder.cardNo;
    const N = 21, px = 12, pad = 4, size = (N + pad * 2) * px;
    const cv = document.createElement("canvas");
    cv.width = cv.height = size;
    const g = cv.getContext("2d");
    if (!g) return;
    g.fillStyle = "#fff";
    g.fillRect(0, 0, size, size);
    g.fillStyle = "#0e2249";
    qrCells(seed, N).forEach((row, y) =>
      row.forEach((on, x) => {
        if (on) g.fillRect((x + pad) * px, (y + pad) * px, px, px);
      }),
    );
    const a = document.createElement("a");
    a.href = cv.toDataURL("image/png");
    a.download = "gutguard-card-" + seed.replace(/\s/g, "") + ".png";
    a.click();
  };

  return (
    <div id="top">
      <TopBar onBook={openClaim} booked={sent} />

      <header className="hero" id="event">
        <img src="/watermark.png" alt="" aria-hidden="true" className="hero-g" />
        <div className="hero-in hero-grid">
          <div>
            <h1>Free Medical<br />Check Up</h1>
            <div className="when">
              <b>{EVENT.date}</b>
              <span>{EVENT.time}</span>
            </div>
            <p className="hero-what">Consultation, blood pressure, and a proper talk about your health.</p>
            {sent ? (
              <div className="hero-booked">
                <span className="hb-tick">✓</span>
                <div>
                  <b>Your seat is booked</b>
                  <em>{EVENT.date} · {EVENT.time}</em>
                </div>
              </div>
            ) : (
              <button className="gg-button gg-button--bone" type="button" onClick={openClaim}>
                Book my seat
              </button>
            )}
            <div className="hero-gift">
              <span className="gg-badge gg-badge--gold">{PASS_PTS} E-Points, free</span>
              <em>worth ₱{GIFT_PESO} in product</em>
            </div>
            <p className="hero-note">{sent ? "See you on Saturday." : `Free · ${left} of ${EVENT.seats} seats left`}</p>
          </div>
          <div className="docs">
            {TEAM.map((p) => (
              <button key={p.id} className="doc" type="button" onClick={() => setWho(p)} aria-label={`See credentials for ${p.name}`}>
                <span className="ini">{p.initials}</span>
                <span className="doc-txt">
                  <b>{p.name}, {p.suffix}</b>
                  <em>{p.role}</em>
                </span>
                <span className="doc-more">Credentials</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="wrap">
        <div className="meet-band">
          <section className="meet">
            <div className="video" role="group" aria-label="Video: meet the doctor and nurse">
              {VIDEO.src ? (
                <video controls playsInline preload="metadata" poster={VIDEO.poster ?? undefined} src={VIDEO.src} />
              ) : (
                <div className="video-ph">
                  <span className="play">▶</span>
                  <span className="vlen">{VIDEO.length}</span>
                </div>
              )}
            </div>
            <p className="vcap">{VIDEO.caption}</p>
          </section>
          <div className="ask-gut">
            <section className="ask">
              <h2>When was the last time you saw a doctor?</h2>
              <p>
                Lifestyle diseases are rising — from how we eat, how we sleep, how hard we work.
                But a check up costs money, and that stops many from going.
              </p>
              <p className="ask-hit">So we are giving it free.</p>
            </section>
            <section className="gut">
              <div className="gut-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3>Why the gut?</h3>
              <p>
                Much of what the body does begins there — digestion, and more besides.
                Which is why your lifestyle shows up in how you feel.
              </p>
              <p className="gut-close">That is a conversation to have with a doctor, not a leaflet.</p>
            </section>
          </div>
        </div>

        <section className="steps">
          <h3 className="sec"><span className="sec-num">01</span> What happens on the day</h3>
          <div className="steps-grid">
            {[
              ["You sit down", "The doctor and the nurse will listen. No queue behind you."],
              ["They tell you straight", "Whether it is nothing, or whether it should be checked properly now."],
              ["You go home", `With your Lifestyle Card and ${PASS_PTS} points on it — worth ₱${GIFT_PESO} of Gutguard.`],
            ].map(([t, d], i) => (
              <div className={"step" + (i === 2 ? " last" : "")} key={t}>
                <span className="num">{i + 1}</span>
                <div><b>{t}</b><em>{d}</em></div>
              </div>
            ))}
          </div>
          <div className="promises">
            <span className="gg-badge gg-badge--paid">Around 20 minutes</span>
            <span className="gg-badge gg-badge--paid">No one will hurry you</span>
            <span className="gg-badge gg-badge--paid">No one will sell you anything</span>
          </div>
        </section>

        <section className="gift">
          <div className="gift-layout">
            <div>
              <div className="gift-lead">
                <div className="sec"><span className="sec-num">02</span> A gift for our guests · limited</div>
                <h3>You go home with this.</h3>
              </div>
              <div className="lc">
                <img src="/watermark.png" alt="" aria-hidden="true" className="lc-mark" />
                <div className="lc-body">
                  <span className="lc-chev" aria-hidden="true">▲</span>
                  <div className="lc-brand">
                    <img src="/wordmark.png" alt="Gutguard" />
                    <div className="lc-lifestyle">Lifestyle</div>
                  </div>
                  {holder ? (
                    <>
                      <div className="lc-name">{holder.name}</div>
                      <div className="lc-state on">GUEST · PASS RESERVED</div>
                      <div className="lc-no">{holder.cardNo}</div>
                      <div className="lc-since">Issued today</div>
                    </>
                  ) : (
                    <>
                      <button className="lc-claim" type="button" onClick={openClaim}>
                        Your name
                        <span className="lc-tapme">Tap to claim</span>
                      </button>
                      <div className="lc-state">NOT YET ACTIVE</div>
                      <div className="lc-no">0240 •••• •••• ••••</div>
                      <div className="lc-since">Issued on the day</div>
                    </>
                  )}
                  <div className="lc-row">
                    <span className="lc-pad" aria-hidden="true" />
                    <div className="lc-pts">
                      <div className="lc-num">{holder ? PASS_PTS : "—"}</div>
                      <div className="lc-lbl">E-POINTS</div>
                    </div>
                    <span className="lc-qr"><QRSvg seed={holder?.cardNo ?? "0240"} size={36} /></span>
                  </div>
                </div>
              </div>
              {holder ? (
                <div className="qrcard">
                  <div className="qr-left">
                    <div className="qr-eyebrow">IPAKITA ITO SA PINTUAN</div>
                    <b>Show this at the door</b>
                    <em>{holder.cardNo}</em>
                    <button className="gg-button gg-button--secondary" type="button" onClick={downloadQR}>Download QR</button>
                  </div>
                  <div className="qr-right"><QRSvg seed={holder.cardNo} size={112} /></div>
                </div>
              ) : null}
            </div>
            <div>
              <div className="gift-notes">
                <div className="gn">
                  <span className="dot" />
                  <div>
                    <b>{PASS_PTS} points, worth ₱{GIFT_PESO} in free product</b>
                    <em>Your Ginhawa Pass — reserved for guests of the {EVENT.date} talk.</em>
                  </div>
                </div>
                <div className="gn">
                  <span className="dot" />
                  <div>
                    <b>Yours the moment you check in</b>
                    <em>{holder ? "Your card says PASS RESERVED until the scan at the door." : "The card says NOT YET ACTIVE until you are in the room."}</em>
                  </div>
                </div>
              </div>
              <p className="gift-fine">
                Points are redeemed for product, not cash. For attending — not in exchange for the consultation.
              </p>
              {holder ? (
                <p className="shop-note">
                  After check-in, redeem at the{" "}
                  <a href={shop}>GutGuard shop</a>.
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <div className="close-pair">
          <section className="book" id="book">
            {!sent ? (
              <>
                <div className="seatline">
                  <div className="seatbar"><i style={{ width: `${(EVENT.taken / EVENT.seats) * 100}%` }} /></div>
                  <b>{left} seats left</b>
                </div>
                <h3>Book your seat</h3>
                <label className="gg-field">
                  <span className="gg-field__label">Your name</span>
                  <input className="gg-field__control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan dela Cruz" autoComplete="name" />
                </label>
                <label className="gg-field">
                  <span className="gg-field__label">Mobile number</span>
                  <input className="gg-field__control" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="09XX XXX XXXX" autoComplete="tel" inputMode="numeric" type="tel" />
                </label>
                <button
                  className={"gg-button gg-button--wide " + (valid ? "gg-button--primary" : "gg-button--secondary")}
                  type="button"
                  onClick={() => { if (valid) issue(name, mobile); }}
                >
                  Book my seat
                </button>
                <p className="fine">{valid ? "Free. No payment at any point." : "Enter your name and mobile to book."}</p>
                <p className="fine">We will text you the details. Nobody will ring you to sell you anything.</p>
              </>
            ) : (
              <div className="done">
                <span className="tick">✓</span>
                <h3>Your card is yours</h3>
                <p>{EVENT.date}, {EVENT.time}<br />{EVENT.venue}</p>
                <p className="fine">We will text {mobile} with the details. Show your card at the door, or just give your name.</p>
                <a className="gg-button gg-button--ghost gg-button--wide" href={EVENT.maps} target="_blank" rel="noreferrer">Get directions</a>
              </div>
            )}
          </section>

          <div className="close-side">
            <section className="where">
              <h3 className="sec"><span className="sec-num">03</span> Where</h3>
              <div className="venue">
                <b>{EVENT.venue}</b>
                <em>{EVENT.address}</em>
                <a className="gg-button gg-button--text" href={EVENT.maps} target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </section>
            <section className="bring">
              <h3 className="sec">Bring with you</h3>
              <ul>
                <li>Your medicines — including herbal ones</li>
                <li>Any recent lab results</li>
                <li>Someone with you, if you would rather not come alone</li>
              </ul>
            </section>
          </div>
        </div>

        <section className="why">
          <h3 className="sec"><span className="sec-num">04</span> Why we do this</h3>
          <p>
            We make a gut health product, and we would rather people saw a doctor first.
            Everyone who comes goes home with a <b>Lifestyle Card</b> carrying {PASS_PTS} points,
            worth ₱{GIFT_PESO} of Gutguard. For attending, not in exchange for the consultation.
          </p>
          <p className="why-hit">Nothing is sold here.</p>
        </section>

        <footer className="foot">
          <div className="foot-grid">
            <div>
              <p>For emergencies, please go to the hospital.</p>
              <p className="legal">{TEAM.map((p) => `${p.name}, ${p.suffix} · ${p.licence}`).join(" · ")} · Gutguard Philippines Inc.</p>
            </div>
            <nav className="foot-nav" aria-label="GutGuard">
              <a href="#event">Event</a>
              <a href={shop}>Shop</a>
              <span className="topbar-soon">Lifestyle · soon</span>
              <span className="topbar-soon">Gentrep · soon</span>
            </nav>
          </div>
        </footer>
      </main>

      {claim && !sent ? (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="claim-title" onClick={() => setClaim(false)}>
          <div className="gg-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="gg-dialog-header">
              <div>
                <div className="gg-dialog-kicker">Your Ginhawa Pass</div>
                <h3 id="claim-title">Put your name on it</h3>
              </div>
              <button type="button" className="gg-icon-btn gg-icon-btn--ghost" aria-label="Close" onClick={() => setClaim(false)}>
                <IconX />
              </button>
            </div>
            <div className="gg-dialog-body">
              <p className="fine" style={{ textAlign: "left", marginTop: 0 }}>
                We will hold {PASS_PTS} E-Points on your card until Saturday. Yours the moment you check in.
              </p>
              <label className="gg-field">
                <span className="gg-field__label">Your name</span>
                <input className="gg-field__control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Juan dela Cruz" autoComplete="name" />
              </label>
              <label className="gg-field">
                <span className="gg-field__label">Mobile number</span>
                <input className="gg-field__control" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="09XX XXX XXXX" autoComplete="tel" inputMode="numeric" type="tel" />
              </label>
            </div>
            <div className="gg-dialog-footer">
              <button className="gg-button gg-button--ghost" type="button" onClick={() => setClaim(false)}>Cancel</button>
              <button
                className={"gg-button " + (valid ? "gg-button--primary" : "gg-button--secondary")}
                type="button"
                onClick={() => { if (valid) issue(name, mobile); }}
              >
                Claim my card
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {who ? (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="cred-title" onClick={() => setWho(null)}>
          <div className="gg-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="gg-dialog-header">
              <div className="cred-head">
                <span className="cred-photo">{who.initials}</span>
                <div>
                  <h3 id="cred-title">{who.name}, {who.suffix}</h3>
                  <em>{who.role}</em>
                </div>
              </div>
              <button type="button" className="gg-icon-btn gg-icon-btn--ghost" aria-label="Close" onClick={() => setWho(null)}>
                <IconX />
              </button>
            </div>
            <div className="gg-dialog-body">
              <ul className="creds">{who.creds.map((c) => <li key={c}>{c}</li>)}</ul>
              <div className="licence"><span>Licence</span><b>{who.licence}</b></div>
              <p>{who.line}</p>
            </div>
            <div className="gg-dialog-footer">
              {sent ? (
                <button className="gg-button gg-button--ghost" type="button" onClick={() => setWho(null)}>Close</button>
              ) : (
                <>
                  <button className="gg-button gg-button--ghost" type="button" onClick={() => setWho(null)}>Cancel</button>
                  <button className="gg-button gg-button--primary" type="button" onClick={() => { setWho(null); openClaim(); }}>
                    Book my seat
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {fire ? <Confetti fire={fire} /> : null}

      {!sent ? (
        <div className={"stick" + (showBar ? " on" : "") + (claim || who ? " hide" : "")}>
          <div className="stick-in">
            <div className="grow" style={{ flex: 1, minWidth: 0 }}>
              <b>{EVENT.date.replace("Saturday, ", "Sat ")} · {EVENT.time}</b>
              <div className="stick-bar" role="progressbar" aria-valuenow={EVENT.taken} aria-valuemin={0} aria-valuemax={EVENT.seats} aria-label={`${left} of ${EVENT.seats} seats left`}>
                <i style={{ width: `${(EVENT.taken / EVENT.seats) * 100}%` }} />
              </div>
              <em>{left} of {EVENT.seats} seats left</em>
            </div>
            <button className="gg-button gg-button--primary" type="button" onClick={openClaim}>Book my seat</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Confetti({ fire }: { fire: number }) {
  const [bits, setBits] = useState<{ id: number; tx: string; ty: string; rot: string; color: string; left: string }[]>([]);
  useEffect(() => {
    if (!fire || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#b08d5b", "#0608a9", "#f4f1ea", "#0f0f18"];
    setBits(
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        tx: `${(Math.random() - 0.5) * 240}px`,
        ty: `${180 + Math.random() * 280}px`,
        rot: `${Math.random() * 420}deg`,
        color: colors[i % colors.length],
      })),
    );
    const t = window.setTimeout(() => setBits([]), 1200);
    return () => window.clearTimeout(t);
  }, [fire]);
  if (!bits.length) return null;
  return (
    <div className="cf-wrap" aria-hidden="true">
      {bits.map((b) => (
        <i key={b.id} className="cf" style={{ left: b.left, width: 8, height: 10, background: b.color, ["--tx" as string]: b.tx, ["--ty" as string]: b.ty, ["--rot" as string]: b.rot }} />
      ))}
    </div>
  );
}
