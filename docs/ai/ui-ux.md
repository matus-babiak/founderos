# UI / UX

Zdroj: `css/style.css`, `index.html`, `js/script.js`, Cursor rules.

## Dizajn smer

Strategický dokument / blueprint. Nie SaaS dashboard marketing.

## Tokeny (`:root`)

**Text:** `--ink`, `--ink-soft`, `--ink-faint`  
**Pozadia:** `--paper`, `--paper-raised`, `--paper-sunk`  
**Okraje:** `--line`, `--line-strong`  
**Akcent:** `--accent`, `--accent-ink`, `--accent-soft` (jantárová)  
**Stavy:** `--sage` (hotovo), `--warn` (nezačaté / stalled)  
**Typografia:** `--font-display` (serif), `--font-body` (systémový sans), `--font-mono`  
**Layout:** `--rail-w`

Témy: `prefers-color-scheme` + manuálne `:root[data-theme="dark"|"light"]`.

## Shell

- Desktop: fixný `.rail` vľavo, `main` vpravo.
- Mobile (≤920px): `.mobile-bar` + `.drawer`.
- Scroll progress bar hore.
- Tlačidlo `.to-top` po scrolle > 600px.

## Status pilulky

| Trieda | Význam |
|---|---|
| `.status-pill.done` | hotovo / silná stránka |
| `.status-pill.wip` | rozpracované / prebieha |
| `.status-pill.stalled` | nezačaté / čaká / slabšie |
| `.status-pill.open` | definované v CSS (warn paleta); v obsahu sa častejšie používa `stalled` |

Rail používa `.rail-round.done|wip|pending` (nie `stalled`).

## Obsahové vzory

Preferuj existujúce bloky pred novými:

- Porovnanie nie / áno: `.type-compare` + `.type-card.no|.yes`
- Kritériá: `.criteria-grid` + `.criterion`
- Časová os / fázy: `.timeline` + `.tl-item` + `.tl-card`
- Štyri kvadranty: `.quad-grid` + `.quad`
- Citát / insight: `.insight-quote`
- Hranice: `.boundary-box`
- Otvorené otázky: `.open-list` + `.open-item` + `data-key` + checkbox
- Zručnosti: `.skill-grid` + `.skill-card`

## Interakcie (očakávané správanie)

1. Prepínač témy mení `data-theme` a ukladá voľbu.
2. Drawer sa zatvára Escape, backdrop, close, klikom na odkaz.
3. Active nav sleduje viditeľnú sekciu (IntersectionObserver).
4. `.reveal` sa po `reveal-ready` zobrazí pri scrolle; bez IO hneď `.revealed`.
5. Dashboard percentá animujú z 0 na cieľ pri prvom videní gridu.
6. Checklist counter na `.subhead` ukazuje `x / y vyriešené` a `.complete` pri všetkých.

## Čo nerobiť vo vizuáli

- Nové kartové UI „len tak“, ak stačí existujúci blok.
- Emoji ako ikony sekcií.
- Úzky pevným max-width na `.page`.
- CSS Grid `auto-fit` pre nepárny počet kariet.
- Porušenie reduced-motion.
