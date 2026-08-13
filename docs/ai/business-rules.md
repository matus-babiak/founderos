# Business rules

Pravidlá overené z kódu a `.cursor/rules/founderos-context.mdc`. AI ich nesmie porušiť bez explicitného súhlasu používateľa.

## Kritické

### B1. Žiadne pomlčky v texte aplikácie

V obsahu `index.html` (a v texte, ktorý sa tam má dostať) sa nepoužívajú pomlčky ako interpunkcia (`—` ani `–`).
Namiesto nich: dvojbodka, čiarka, zátvorka, spojka „a“ / „alebo“, alebo nová veta.
Spojovníky v zložených slovách (napr. e-mail, 12-týždňová) sú v poriadku podľa Cursor rules.

**Konflikt na zaznamenanie:** komentár na začiatku `<body>` formuluje zákaz širšie („spojovník ani dlhú pomlčku“”). Záväzná interpretácia pre AI je Cursor rule: zakázané sú interpunkčné pomlčky, nie spojovníky v zložených slovách. Pozri `documentation-audit.md`.

### B2. Žiadny build toolchain

Nezavádzaj npm, bundler, framework, TypeScript ani build krok, pokiaľ to používateľ výslovne neschváli ako zmenu architektúry.

### B3. Git: vždy priamo na `main`

Hotové zmeny: commit + `git push origin main`.
Žiadne feature branche, žiadne PR, žiadne drafty pre bežný vývoj tejto stránky.
Dôvod: live ide zo `main` na Vercel.

### B4. Nemeň architektúru bez nutnosti

Požiadavku rieš existujúcimi súbormi a patternmi. Refaktor „pre poriadok“ je zakázaný, ak to požiadavka nevyžaduje.

### B5. `localStorage` kľúče sú kontrakt

- Téma: `founderos-theme`
- Checklisty: `strategia-open-questions-v1` + `data-key` na položkách

Premenovanie kľúčov alebo `data-key` bez migrácie / súhlasu môže používateľovi zmazať uložený stav.

### B6. Jazyk a tón obsahu

Celý obsah po slovensky, osobný priamy hlas Matúša.
Žiadne emoji ako značky sekcií (výnimka: favicon 📐).
Stav vyjadruj cez `.status-pill`, nie farebnými emoji kolieskami.

## Dôležité

### B7. Znovupoužiteľné UI patterny

Pred novým vizuálnym jazykom použij existujúce komponenty:
`.criteria-grid` / `.criterion`, `.timeline` / `.tl-item` / `.tl-card`, `.type-compare`, `.quad-grid`, `.open-list` / `.open-item`, `.status-pill`, `.insight-quote`, `.rule-box`, `.boundary-box`, `.dash-grid` / `.dash-card`, `.skill-grid` / `.skill-card`, `.subhead`.

### B8. Flexbox mriežky, nie `auto-fit`

`.criteria-grid` a `.dash-grid` používajú `flex-wrap` + `flex: 1 1 <šírka>`.
Pri nových mriežkach s premenlivým počtom položiek rovnaký vzor.

### B9. Percentá a status pilulky

Aktualizuj percentá / pilulky v rail, dashboarde a hlavičkách sekcií **iba** ak sa reálne zmenil stav piliera. Musia zostať konzistentné na všetkých miestach (rail, drawer, dash-grid, sec-head).

### B10. Checklisty „Čo chýba“

Vyriešené položky nahraď reálnym obsahom v sekcii. Nemaž ich mechanicky len preto, že sú „hotové“ v hlave autora. Checkbox stav je osobný tracking v prehliadači.

### B11. Respektuj `prefers-reduced-motion`

Nové animácie musia rešpektovať reduced motion (existujúci CSS / JS vzor).

### B12. Estetika blueprintu

Strategický dokument, nie startup SaaS.
Žiadne nové gradientové „AI look“ pozadia, žiadne emoji ikony sekcií.
(Existujúci `radial-gradient` bodkovania a `linear-gradient` scroll baru sú súčasť aktuálneho dizajnu. Nemeň ich bez dôvodu. Pozri audit.)

### B13. Layout šírky

`.page` max-width 1920px, rail `--rail-w` 248px (300px na ≥1600px).
Sekcie majú vlastný max-width kvôli čitateľnosti. Neorež vonkajší layout na úzky „blog“ layout.

### B14. Obsahová práca z GPT úryvkov

1. Porovnaj s aktuálnym `index.html`.
2. Zapracuj existujúcimi komponentmi.
3. Neduplikuj.
4. Skontroluj pomlčky.
5. Commit + push na `main`.

### B15. Produktové hranice v obsahu (biznis, nie kód)

Ak meníš obsah o produkte Základ online systému, nesmieš potichu:

- sľubovať garantovaný počet zákazníkov,
- meniť produkt späť na tri izolované úlohy (web / reklama / email),
- vyhlásiť finálnu cenu, kým stránka hovorí, že cena čaká na realitu dodania (iba ak to používateľ výslovne schváli ako nové rozhodnutie).

## Bežné

### B16. Accessibility basics

Zachovaj `aria-label`, `aria-expanded`, `aria-controls` na drawer / theme / to-top.
Checkbox + `label for=` musia sedieť.

### B17. Externý ChatGPT odkaz

Odkaz na zdrojovú konverzáciu je v rail, drawer aj mastheade. Pri zmene URL uprav všetky výskyty.

### B18. Meta

`noindex, nofollow` zostáva, pokiaľ používateľ nerozhodne o verejnom spustení.

### B19. Verzia snapshotu

Masthead meta a Mapa podnikania V1.1 sú súčasť obsahovej pravdy. Pri veľkom obsahovom posune sa opýtaj, či aktualizovať dátum / verziu snapshotu.
