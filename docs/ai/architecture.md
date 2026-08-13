# Architektúra

Overené z reálneho stromu súborov a kódu. Žiadny `package.json`, žiadny backend, žiadna DB.

## Technológie

| Vrstva | Voľba |
|---|---|
| Markup | Jedna stránka `index.html` (HTML5, `lang="sk"`) |
| Štýly | `css/style.css` (CSS custom properties, bez preprocesora) |
| Skripty | `js/script.js` (vanilla IIFE, bez frameworku) |
| Package manager | Žiadny |
| Build | Žiadny (statické súbory) |
| Hosting | Vercel, deploy zo `main` → https://founderos-mb.vercel.app |
| Lokálne spustenie | `.claude/launch.json`: `python3 -m http.server 4173` (názov konfigurácie `strategia-static`) |

## Strom projektu (aplikácia)

```
index.html          # celý obsah + štruktúra UI
css/style.css       # tokeny, layout, komponenty
js/script.js        # téma, drawer, nav, reveal, dashboard, checklisty
.cursor/rules/      # Cursor pravidlá
.claude/launch.json # lokálny static server
docs/ai/            # táto Knowledge Base (AI infra, nie runtime)
```

## Vrstvy

```
┌─────────────────────────────────────────┐
│  Prezentácia (HTML štruktúra + CSS)     │
│  index.html + css/style.css             │
├─────────────────────────────────────────┤
│  Interaktivita (vanilla JS)             │
│  js/script.js                           │
├─────────────────────────────────────────┤
│  Perzistencia v prehliadači             │
│  localStorage (téma + checklisty)       │
└─────────────────────────────────────────┘
         │
         ▼
   Statický hosting (Vercel)
```

Business logika tejto aplikácie nie je serverová. „Business rules“ sú obsahové a UX pravidlá (pozri `business-rules.md`), nie výpočty na serveri.

## Entry pointy

1. **Runtime:** otvorenie `index.html` (alebo root na Verceli).
2. **Anti-flash témy:** inline skript v `<head>` číta `founderos-theme` pred CSS.
3. **Interaktivita:** `<script src="js/script.js">` na konci `body`.
4. **AI development:** Cursor commands `/founderos-plan` a `/founderos-implement`.

## Mapa: sekcia → UI → logika → dáta → testy

| Sekcia | UI komponenty | JS logika | Dáta | Testy |
|---|---|---|---|---|
| Shell (rail, drawer, mobile-bar) | `.rail`, `.drawer`, `.mobile-bar`, `.theme-toggle` | téma, drawer open/close, Escape, active nav | `localStorage['founderos-theme']` | Žiadne automatizované |
| Prehľad | `.timeline`, `.dash-grid`, `.quad-grid`, `.rule-box` | animácia percent dashboardu | percentá v HTML `style="width:…"`, text mapy | Žiadne |
| 01 až 10, Ďalší krok | `.criteria-grid`, `.type-compare`, `.timeline`, `.pillars`, … | žiadne checklisty | obsah v HTML | Žiadne |
| 11 Kde som dnes | `.criteria-grid`, `.open-list` | checklisty (iba `.open-list`) | obsah v HTML; checklisty v `localStorage['strategia-open-questions-v1']` | Žiadne |
| Globálne | scroll progress, to-top, `.reveal` | scroll listener, IntersectionObserver | žiadne | Žiadne |

## localStorage kľúče

| Kľúč | Účel | Formát |
|---|---|---|
| `founderos-theme` | `light` alebo `dark` | string |
| `strategia-open-questions-v1` | stav checkboxov podľa `data-key` | JSON objekt `{ [data-key]: boolean }` |

Poznámka: názov `strategia-open-questions-v1` je legacy (starší názov projektu). Premenovanie by zmazalo uložené checkboxy používateľovi. Nemeň bez explicitného súhlasu.

## Checklist `data-key` hodnoty (aktuálne)

Kľúč úložiska ostáva `strategia-open-questions-v1`. Položky mapy (sekcia 11):

`map-rozsah`, `map-v-cene`, `map-varianty`, `map-cenotvorba`, `map-kalkulacia`, `map-onboarding`, `map-komunikacia`, `map-delivery`, `map-30-90`, `map-kpi`, `map-diagnostika`, `map-kvalita-web`, `map-kvalita-ppc`, `map-kvalita-copy`, `map-kvalita-analytika`, `map-case`, `map-predaj`, `map-vlastny-marketing`

Staršie kľúče `p2-*` až `p5-*` v prehliadači môžu ostať; žiadny checkbox ich už nečíta.

## Ako spustiť lokálne

```bash
python3 -m http.server 4173
# otvor http://localhost:4173
```

Alebo otvor `index.html` priamo v prehliadači (väčšina funkcií funguje aj tak; `localStorage` áno).

## Build a deploy

1. Zmena v gite na `main`.
2. `git push origin main`.
3. Vercel nasadí zo `main` (konfigurácia mimo repozitára, overené z projektových pravidiel a live URL).

Žiadny CI test suite v repozitári.

## Čo architektúra zámerne odmieta

- npm, bundler, React/Vue/Svelte, TypeScript toolchain.
- Backend, databáza, autentifikácia.
- CSS Grid `auto-fit` pre mriežky s premenlivým počtom položiek (používa sa flexbox vzor).
