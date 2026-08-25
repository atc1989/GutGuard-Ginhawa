# Gutguard — build handover

Three finished screens, each in two forms: a **.html** you can open in any browser
with no build step, and a **.jsx** for Jesh to work from.

---

## 01 · Ginhawa landing page

`ginhawa-landing.html` · `ginhawa-landing.jsx`

The public page for the Free Medical Check Up. One action: claim the card, which
books the seat.

- Tap **Book my seat** (or the name on the card) → name and mobile
- Card issues with the guest's name and 750 E-Points, with confetti
- QR appears below the card, with **Download QR**
- Every booking prompt disappears once the seat is taken
- Sticky bar carries the date, a seat gauge and the CTA

**Before this goes live:**

| | |
|---|---|
| `TEAM[].creds`, `licence` | Dr. Aca and Ms. Marentes to confirm in writing. Nine `______` blanks. |
| `VIDEO.src`, `VIDEO.poster` | The real film and its still frame |
| `TEAM[].photo` | Photographs. Falls back to initials until then. |
| `EVENT.taken` | **Wire to real bookings.** It is currently a fixed 28 of 40. |
| The form | Saves to React state only. Nothing persists. Needs an endpoint. |
| `EVENT.maps` | Check the pin against the real address |

---

## 02 · Lifestyle Card activation (LICA)

`gutguard-lifestyle-card.html` · `gutguard-lifestyle-card.jsx`

The member's screen for the first ten days. Four things only:

1. **Set up** — daily doses, contact platform, community page
2. **Ten days** of taking it, with one guidance card per day
3. **Reorder** — differs by purchase type (see below)
4. **Calendar**, collapsed by default

Complete the checklist and the ten days, the card activates.

**Reorder posture.** Ten days of consumption is required of everyone. Reordering
is not:

- **Trial, card minimum** — recurring. Full ladder at 10 / 5 / 1 days.
- **Start@30, Grow@60, Peak@90** — paid ahead. Silent until 7 days out.

**Requires clinical sign-off:** every line in `DAY_NOTES` is placeholder wording
written by a designer. Beehive must confirm or replace it. The day-4 card names
no study by design — any research claim must come from Beehive with its source.

---

## 03 · Gentrep Academy

`gentrep-academy-dashboard.html` · `gentrep-academy-dashboard.jsx` · `gentrep-certificates.jsx`

The Gentrep's training ladder: BASE → TL → SL → PL → CC. Each rung unlocks when
the one below completes.

Four kinds of proof, and none of them are self-declared:

| Type | Proven by |
|---|---|
| Watch and agree | Agreed in the app, with the language on record |
| Attend | The scan at the door |
| Show it | An upline watches and signs off |
| Earned by your trainee | Their certificate, not your word |

Certificates issue on completion with the rank insignia, the Corps of Officers
citation, a verification QR and Download as PDF. Use the demo panel at the bottom
to walk any rank through to its certificate.

**Outstanding:** Philippine lawyer review of the insignia and rank wording under
RA 493 before anything is printed.

---

## 04 · Docs

- `lica-integration-prompt.md` — brief for folding LICA into the member app
- `gentrep-academy-guide.md` — the Academy in plain English

---

## _archive

Earlier iterations, kept for reference. `gentrep-academy.jsx` was recovered from a
compiled build, so its markup is `jsx()` calls rather than JSX tags — it works, but
`03-gentrep-academy/gentrep-academy-dashboard.jsx` is the clean rewrite and the one
to build on.

---

## Notes for Jesh

**Fonts** load from Google Fonts, so the pages need a connection to look right.
Offline they fall back to system fonts and still work. If you need them fully
offline, the fonts must be base64-inlined (~200KB per file).

**The Gutguard wordmark and the "g" watermark** are embedded as base64 PNGs, taken
from `GutguardLifestyle.html` so the card matches the member app exactly. They work
offline as they are.

**Tested at** 320, 360, 375, 390, 412, 430, 768 and landscape. No horizontal
scroll, no tap target under 44px, full booking journey verified at every size.

**No browser storage** is used anywhere — nothing persists across a refresh. That
is deliberate for a prototype and is the main thing to replace.
