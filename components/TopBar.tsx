"use client";

import { useEffect, useState } from "react";
import { shopEntryUrl } from "@/lib/ecosystem";

export function TopBar({ onBook, booked }: { onBook: () => void; booked?: boolean }) {
  const [open, setOpen] = useState(false);
  const shop = shopEntryUrl();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="topbar-brand" href="#top">
          <img src="/wordmark.png" alt="Gutguard" width={120} height={21} />
          <em>Ginhawa</em>
        </a>
        <nav className="topbar-links" aria-label="Primary">
          <a href="#event">Event</a>
          <a href={shop}>Shop</a>
          <span className="topbar-soon">Lifestyle · soon</span>
          <span className="topbar-soon">Gentrep · soon</span>
        </nav>
        <div className="topbar-actions">
          {booked ? null : (
            <button className="gg-button gg-button--primary topbar-book" type="button" onClick={onBook}>
              Book my seat
            </button>
          )}
          <button
            className="topbar-menu"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            <span className="topbar-burger" aria-hidden="true" />
          </button>
        </div>
      </div>
      {open ? (
        <div className="sheet-nav" role="dialog" aria-modal="true" aria-label="Menu" onClick={() => setOpen(false)}>
          <div className="sheet-nav-panel" id="site-menu" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="gg-button gg-button--ghost" onClick={() => setOpen(false)}>
              Close
            </button>
            {booked ? null : (
              <button
                className="gg-button gg-button--primary gg-button--wide"
                type="button"
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
              >
                Book my seat
              </button>
            )}
            <a href="#event" onClick={() => setOpen(false)}>Event</a>
            <a href={shop}>Shop</a>
            <span className="topbar-soon">Lifestyle · soon</span>
            <span className="topbar-soon">Gentrep · soon</span>
          </div>
        </div>
      ) : null}
    </header>
  );
}
