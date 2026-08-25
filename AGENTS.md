# Impeccable Design System & AI Agent Directives

This project adheres strictly to the **Impeccable** design language and frontend engineering framework (inspired by [pbakaus/impeccable](https://github.com/pbakaus/impeccable)).

---

## 1. Core Design Philosophy: Craft Over Noise

1. **Anti-Slop Directives**:
   - **No Gradient Text / AI Glows**: Ban purple-to-blue gradients on text, glowing drop shadows, cyan-on-dark text, and blurry ambient color blobs.
   - **No Artificial Hero Metrics**: Ban the cliché "Big number + tiny label + 3 stats" pattern unless backed by actual data tables.
   - **No Unsolicited SaaS Buzzwords**: Ban empty verbs ("supercharge", "unleash", "elevate", "seamlessly"). Use concrete, technical, and benefit-driven copywriting.
   - **No Nested Ghost Cards**: Never nest rounded bordered cards inside other rounded bordered cards without functional structural purpose.
   - **No Side-Tab Borders**: Never use a 3px colored accent bar only on the left side of a card.

2. **Typographic Hierarchy & Mathematical Scale**:
   - **Scale Step Ratio**: Minimum 1.25 (Major Third / Perfect Fourth for headings, Major Second for dense UI components).
   - **Distinct Font Pairing**: Primary UI body font paired with a distinctive display/heading font.
   - **Baseline Readability**:
     - Body copy: Minimum 15–16px, line-height 1.5–1.7 (`leading-relaxed`).
     - Line length: Strict max-width constraint of 65–75 characters (`max-w-prose` / `max-w-2xl`).
     - Labels & Chips: Strict single-line constraint (`whitespace-nowrap`), never hyphenated or wrapped.

3. **Layout Math & Geometry**:
   - **Nested Border Radius Rule**: `Inner Radius = Outer Radius - Distance Between The Two (Padding)`.
     - *Example*: Container `rounded-2xl` (16px) with `p-4` (16px) inner elements should have `rounded-lg` (8px) or `rounded-md` (6px) inner cards.
   - **Rhythmic Spacing**: Container outer padding MUST always equal or exceed the inner gap between children.
   - **Touch Targets**: Minimum 44px on interactive mobile targets. Button horizontal padding should be ~2x vertical padding (e.g. `px-5 py-2.5`).

4. **Accessible Color & Contrast**:
   - Strictly pass **WCAG AA** standards (4.5:1 for body copy, 3:1 for large text & UI controls).
   - Neutrals: Warm/cool tinted slate neutrals (e.g., `#0A192F`, `#0F172A`, `#334155`, `#F8FAFC`) rather than pure `#000` or `#FFF`.
   - Never place medium gray text (`text-slate-400`) on light backgrounds or low-contrast blue badges.

---

## 2. Impeccable Commands & Workflows

When prompted by the user with any of the following intents or slash-style commands, execute the corresponding workflow:

| Command | Action / Objective |
| :--- | :--- |
| `audit` | Scan all views and components for typography hierarchy, color contrast ratios, spacing consistency, and accessibility defects. |
| `polish` | Clean up visual clutter, tighten margins/padding, calibrate typography scale, and refine micro-interactions. |
| `critique` | Provide an objective, design-oriented critique identifying any AI-slop anti-patterns or structural flaws before refactoring. |
| `bento` | Organize feature cards, metric data, and showcases into an asymmetrical, mathematically proportioned bento grid. |
| `animate` | Implement purposeful, hardware-accelerated motion (springs, enter transitions, hover states) using `motion/react`. |
| `colorize` | Harmonize the palette using a cohesive primary/slate foundation with strict WCAG contrast compliance. |
| `simplify` | Strip away decorative fluff, redundant copy, unanchored badges, and reduce visual cognitive load. |

---

## 3. Component Design Rules

- **Buttons & Action Controls**: Must have clear `:hover`, `:active`, `:focus-visible`, and `disabled` states with accessible focus rings (`focus-visible:ring-2 focus-visible:ring-blue-600`).
- **Interactive Demos & Simulators**: Build real, working interactive sandboxes (e.g., responsive viewport toggles, live pipeline trigger steps, benchmark inspection) rather than static screenshot mockups.
- **Forms & Inputs**: Explicit `<label>` associations, input validation states, clear error messaging, and direct conversion hooks (e.g., WhatsApp pre-filled messages and direct email routing).
- **Navigation & Mobile**: Floating or anchored header with high-contrast active links, backdrop blur (`backdrop-blur-md`), and intuitive drawer transitions.
