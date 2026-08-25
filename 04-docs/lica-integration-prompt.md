# Build brief — LICA inside the Gutguard Lifestyle member app

Add **Lifestyle Card Activation (LICA)** to the existing member app. Do not create a
separate app. LICA is the state the member is in between buying and being active,
and it lives on the **My Health** tab.

---

## The rule

The card is issued at purchase. It is **asleep** until the member has taken the
protocol on **10 separate days**. Buying does not make someone a member —
consuming does.

**Activation requires all four:**

1. Daily doses set
2. Preferred contact platform chosen
3. Community page joined
4. Ten days completed

When all four are true, the card wakes. This is the only thing that wakes it.

---

## Two states of My Health

### Asleep — before activation

Replace the normal My Health content with the activation view:

**Today's doses** (unchanged from the existing component — same three named slots,
same Done buttons, same green confirmed state).

**Progress, counting up:**
> **3 days done** · Day 4 of the first ten
> [gold bar at 30%]

Never count down. Never say "7 more to go."

**One guidance card for the day**, three kinds, colour-coded by left border:

| Kind | Colour | Label |
|---|---|---|
| tip | gold | Tip |
| caution | amber | Take care |
| research note | blue | Worth knowing |

Content by day — **all wording requires Beehive sign-off before release:**

- **1** · Best on an empty stomach — morning, before food, plain water
- **2** · Same time every day — pin it to something you already do
- **3** · Taking antibiotics? Space them apart *(caution)* + your gut may speak up first
- **4** · What this kind of product is studied for — pre/pro/postbiotics as a research
  area; **no study may be cited unless Beehive supplies the source**
- **5** · Most people feel nothing yet — that is normal, this is a slow protocol
- **6** · Keep drinking water
- **7** · If anything feels off, say so — tell your sponsor, don't stop quietly *(caution)*
- **8** · Missed a day? Don't double up
- **9** · Almost there

**Sponsor touches** on days 2 and 6 — a card showing that the sponsor will ring or
message today, on the member's chosen platform. The app displays that it will happen;
a person sends it.

**"What happens on day ten?"** behind a link: card starts working, full app opens,
name read out at Saturday's session.

**Set-up checklist**, spine style, `0 of 3`:

- *Your daily doses* — steppers, one per slot, up to 3 capsules each, reminder time
  per active slot. **Minimum 2 capsules a day; Save stays disabled below it.**
- *What platform do you prefer to be contacted?* — Text, Messenger, Viber, WhatsApp,
  Telegram. Choosing sends a test. Text always remains the fallback.
- *Join the community page* — opens on the chosen platform.

### Awake — after activation

Normal My Health, plus the day-streak stat. The activation view disappears entirely.

---

## Reorder — differs by what they bought

Ten days of consumption is required of **everyone**. Reordering is not.

| Purchase | Capsules | Activates? | Reorder |
|---|---|---|---|
| Trial | 10 (1 blister) | **No** | Recurring |
| Card minimum | 30 (1 bottle) | Yes | Recurring |
| Start@30 | 40 | Yes | Paid ahead |
| Grow@60 | 120 | Yes | Paid ahead |
| Peak@90 | 400 | Yes | Paid ahead |

**Recurring buyers** — trial, 2 blisters, 1 bottle — hold about a month at most. Their
supply genuinely runs out and reordering is the recurring act. The order button is
always present, quiet when covered and urgent when low, and the sticky footer runs the
full ladder: **10 days · 5 days · last day.**

**Paid-ahead buyers** have nothing to buy. Their row reads *"Left of your Peak@90 · 340
capsules · 85 days"* with **"Already paid for. Nothing to buy yet."** No button, no
sticky footer, no refill warnings. Prompting them to buy what they already own reads as
a company that isn't paying attention.

The prompt appears **before the supply runs out**, not after:

- Recurring: from 10 days remaining
- Paid ahead: from 7 days remaining — the program is genuinely ending, and the
  conversation about what comes next belongs there

Once prompting begins, both behave identically: the button turns blue, the sticky footer
appears on scroll, and the sub-line names the sponsor — *"Ana will reach you before it
runs out"*, becoming *"Ana has been told"* at zero.

**Capsules left is derived from consumption** — purchased minus every capsule confirmed.
Not a counter that orders top up.

The order sheet lists each package with **days for you** computed at the member's own
dose, the collection point, and: *"No payment here. [Sponsor] will confirm the details
with you."*

**Sticky footer:** hidden at the top, appears on scroll down, hides on scroll up, shows
at the bottom, and shows if the content fits the screen. Bind the listener to the app's
own scroll container, not `window` — inside an iframe the window never scrolls.

### The asymmetry worth knowing

A recurring buyer reveals a problem by not reordering. A paid-ahead buyer reveals
nothing — they simply stop taking it, and no one finds out until the program ends. For
them the daily confirmations are the **only** signal anyone has, which is why the ten
days matter more for a Peak@90 member than for a Trial one, not less.

## Calendar

Collapsed by default behind the month name. Opens to the existing My Health month grid:
green full, sand partial, clay missed, blue ring today.

---

## The moment of activation

Confetti. Toast: **"Your card is awake."** A bell appears in the masthead with three
notifications:

- **Your card is active** — ten days done, you are a Lifestyle Member
- **Posted to the community page** — "[First name] finished her first ten days."
  Eleven others did too this week.
- **You'll be read out on Saturday** — at the next session, with the others who made it

The third one matters most: it says she isn't alone in this.

---

## Trial

A Trial buyer sees only: *"You're trying it — one blister, 10 capsules. A month is
2 blisters or 1 bottle, that's when your card switches on."* with **Start a month**.

The @30/@60/@90 names are shorthand, not a promise of days. Always show the member's
own run-out date, computed from her actual dose.

---

## Rules that must hold

- **Nothing counts unless the system observes it.** The daily tap is the one exception
  and it is hers alone — it must never gate anything else.
- **No countdowns, no deadlines, no expiry.** A missed day waits. Ten days of
  consumption, however long that takes.
- **No health claims anywhere.** No promised effects, no timelines for results, no
  study cited without a Beehive source.
- **Every message is sent by a person.** The app shows that a touch is due; it never
  sends one.
- **No blame language.** Running out, going slowly and feeling nothing are all normal
  states and must read that way.

---

## Non-negotiables from the existing app

Reuse, do not redesign: the dose slot component and its steppers, the month calendar,
the card face, the colour tokens, Sora/Anton/Inter/Playfair, the sheet pattern.

Accessibility: 44px minimum on every control, 16px inputs, AA contrast, focus trap and
Escape on sheets, live region for state changes, works from 320px.

---

## Open, for the client to settle

- Beehive to confirm or rewrite every clinical line, and to supply the reading for
  day 4 if any research is to be referenced at all
- Whether the day-ten community post names individuals or only gives a weekly count
- What happens if a member stalls — say, four days in and nothing for three weeks.
  That is a sponsor task, and the sponsor-facing surface does not yet exist.

---

*Reference implementation: `gutguard-lifestyle-card.jsx`*
