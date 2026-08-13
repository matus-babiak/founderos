# Produkt: Founder OS

Stav overený z `index.html` a `.cursor/rules/founderos-context.mdc`.

## Čo to je

Founder OS je osobný pracovný prehľad Matúša Babiaka. Vizualizuje jeho Business OS: stratégiu, metodiku a osobný rast, priebežne budované z konverzácií s GPT.

**Nie je to** prezentačný web pre klientov, SaaS produkt ani marketingová landing page.
**Je to** Matúšova osobná mapa rozhodnutí.

Live URL: https://founderos-mb.vercel.app  
Meta robots: `noindex, nofollow` (zámerne).

## Pre koho

Primárny používateľ: Matúš Babiak (autor).
Sekundárne: AI agenti, ktorí mu pomáhajú obsah a UX systematicky rozvíjať.

Klientská ponuka opísaná na stránke (digitálny partner, Základ online systému) je **obsah Business OS**, nie používateľská rola tejto webovej aplikácie.

## Aký problém rieši

Drží na jednom mieste mapu podnikania: kto som, čo predávam, kde som dnes a čo je jediný ďalší krok. Aby 18 otvorených bodov nespravilo dojem, že „neviem, čo robím“.

## Hlavný používateľský cieľ

Rýchlo vidieť: kde som dnes, čo je definované, čo ešte chýba, a že ďalší jediný krok je uzavrieť produkt.

## Hlavné obrazovky / sekcie

Jedna stránka, kotvy v bočnom paneli. Mapa podnikania V1.1 (13. 8. 2026):

| Kotva | Sekcia | Stav |
|---|---|---|
| `#sec-prehlad` | Prehľad: 7 krokov, stav mapy, pravidlo projektu | Hub |
| `#sec-kto` | 01 Kto som | definované |
| `#sec-filozofia` | 02 Filozofia | definované |
| `#sec-hodnota` | 03 Hodnota | definované |
| `#sec-komu` | 04 Komu pomáham | definované |
| `#sec-problem` | 05 Problém | definované |
| `#sec-kupuje` | 06 Čo klient kupuje | definované |
| `#sec-produkt` | 07 Produkt (Základ online systému) | smer jasný, rozsah otvorený |
| `#sec-dodavam` | 08 Ako dodávam | základný proces, meranie slabé |
| `#sec-dostane` | 09 Čo klient dostane | definované |
| `#sec-garancie` | 10 Garancie | definované |
| `#sec-dnes` | 11 Kde som dnes (mám / nemám ešte) | checklist 18 bodov |
| `#sec-dalej` | Ďalší krok | jediný otvorený: uzavrieť produkt |

## Hlavné používateľské flows

1. **Čítanie a orientácia:** otvorenie stránky → Prehľad → skok na pilier cez rail / drawer.
2. **Sledovanie otvorených otázok:** checkboxy v „Čo chýba“ → stav sa uloží do `localStorage`.
3. **Prepnutie témy:** light / dark, uložené v `localStorage`.
4. **Mobilná navigácia:** hamburger → drawer → kotva → zatvorenie.
5. **Späť k zdroju:** odkaz na ChatGPT konverzáciu.

## Hlavné funkcie aplikácie (technické)

- Statický obsah Business OS.
- Responzívny layout (rail ≥920px, mobilný bar + drawer pod tým).
- Tema light/dark.
- Scroll progress + tlačidlo späť hore.
- Reveal on scroll.
- Animovaný dashboard percent.
- Perzistentné checklisty otvorených otázok.

## Dôležité produktové rozhodnutia (už urobené)

Z obsahu stránky (nie z dohadov):

- Identita: digitálny partner pre malé firmy, nie dodávateľ úloh.
- Hodnota: systém, orientácia, istota.
- Produkt V1: **Základ online systému** (pracovný názov), nie „web + reklama + email“ ako tri položky.
- Tok produktu: návštevnosť → web → kontakt → email → obchodná príležitosť.
- Cena je zámerne neotvorená. Ďalší jediný krok je uzavrieť produkt, nie cenotvorbu.
- Garantuje sa proces a systém, nie počet zákazníkov ani správanie trhu.
- Poradie práce: Produkt → Delivery → Rozsah → Cena → Mesačná spolupráca → Kvalita → Predaj.
- Pravidlo projektu: každý nový dokument musí vedieť odpovedať Prečo existuje? / Na čom stojí? / Čo z nej vyplýva?

## Čo je podľa súčasného stavu MVP tejto webovej aplikácie

Jednostránkový osobný Business OS prehľad s navigáciou, témou, checklistami a vizualizáciou stavu pilierov.

## Čo je mimo scope (aplikácie aj biznis obsahu)

**Aplikácia (táto repo):**

- Backend, databáza, login, multi-user.
- CMS, editor obsahu v UI.
- Verejná SEO prezentácia (má `noindex`).
- Build pipeline, frameworky, npm balíčky.

**Biznis obsah ešte nedefinovaný (checklisty na stránke):**

- Finálna cena a finálny názov produktu.
- Delivery SOP, 30 až 90 dňový systém, KPI, diagnostický workflow.
- Predajný proces a marketing vlastného podnikania (krok 7, zámerne neskôr).

## Neznáme

- Presný Vercel projekt / nastavenia mimo toho, že deploy ide zo `main` (v repozitári nie je `vercel.json`).
- Či ChatGPT odkaz zostane dlhodobo platný (externý odkaz).
- Kedy sa Snapshot posunie z V1.1 (meta v mastheade: 13. 8. 2026).
