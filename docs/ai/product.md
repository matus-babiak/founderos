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

Drží na jednom mieste rozhodnutia o identite, metodike, produkte, predaji, doručení a osobnom raste, aby nevznikali izolované dokumenty ani 14 nesúvisiacich úloh.

## Hlavný používateľský cieľ

Rýchlo vidieť: kde som dnes, čo je hotové, čo chýba, a v akom poradí stavať Business OS.

## Hlavné obrazovky / sekcie

Jedna stránka, kotvy v bočnom paneli:

| Kotva | Sekcia | Stav (Snapshot V1.0) |
|---|---|---|
| `#sec-prehlad` | Prehľad: roadmap 4 fáz, dashboard, Snapshot V1.0, pravidlo projektu | Aktívny hub |
| `#sec-p1` | Filozofia a identita | 95 %, hotovo |
| `#sec-p2` | Metodika | 85 %, rozpracované |
| `#sec-p3` | Produkt (Základ online systému V1) | 70 %, rozpracované |
| `#sec-p4` | Predaj | 0 %, nezačaté |
| `#sec-p5` | Doručenie | 5 %, náčrt |
| `#sec-mapa` | Mapa rastu a zlepšenia | Prierezová |

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
- Cena je zámerne otvorená. Pracovné pásmo: setup 900 až 1500 €, rozvoj 150 až 300 € / mes. Finál až po realite dodania.
- Garantuje sa proces a systém, nie počet zákazníkov ani správanie trhu.
- Poradie budovania: Metodika → Produkt → Obchodný proces → Systém doručenia.
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

- Predajný proces (discovery, ponuka, námietky, case studies).
- SOP a šablóny doručenia.
- Finálna cena a finálny názov produktu.
- Mapa schopností dodať produkt a časová náročnosť fáz.

## Neznáme

- Presný Vercel projekt / nastavenia mimo toho, že deploy ide zo `main` (v repozitári nie je `vercel.json`).
- Či ChatGPT odkaz zostane dlhodobo platný (externý odkaz).
- Kedy sa Snapshot posunie z V1.0 (meta v mastheade: 1. 8. 2026).
