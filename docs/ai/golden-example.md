# Golden example: Planning Agent na reálnom kóde

Tento príklad je založený na aktuálnom `index.html` / `js/script.js` (sekcia Prehľad, Snapshot V1.0). Nie je hypotetický.

## Používateľská požiadavka

> Chcem, aby sa hneď na začiatku Prehľadu jasnejšie videlo, čo je teraz najväčšia vec, na ktorej mám robiť. Teraz to mám schované až v jednom z kvadrantov Snapshotu.

## Pochopenie (ľudsky)

Chceš, aby hneď pri otvorení Prehľadu bolo viditeľnejšie, čo je tvoja aktuálna priorita. Dnes je tá informácia v kvadrante „Najväčšia vec teraz“ vo vnútri Snapshot V1.0, nie ako samostatný silný signál hneď na začiatku sekcie.

## Kontrola produktového kontextu

Z `docs/ai/product.md` a obsahu:

- Stránka je osobná mapa rozhodnutí, nie marketing.
- Snapshot V1.0 už obsahuje text: realita dodania a ekonomika ako ďalší krok produktu.
- Poradie budovania ostáva Metodika → Produkt → Predaj → Doručenie.

## Kontrola kódu (overené)

V `index.html`, sekcia `#sec-prehlad`:

1. Najprv timeline 4 fáz budovania.
2. Potom `.dash-grid` so stavom P1 až P5.
3. Potom Snapshot V1.0 (insight-quote + `.quad-grid` so 4 kvadrantmi).
4. Kvadrant s labelom „Najväčšia vec teraz“ obsahuje: *Krok 2 produktu: realita dodania a ekonomika…*

Žiadny samostatný „priority callout“ nad dashboardom dnes neexistuje.
Existujúce patterny vhodné na zvýraznenie: `.insight-quote`, `.rule-box`, `.identity`.

## Dotknuté časti

- Primárne: `index.html` v `#sec-prehlad` (malý obsahový blok).
- Pravdepodobne žiadna zmena `js/script.js` (žiadna nová interakcia).
- CSS len ak by nestačil existujúci komponent (default: bez nového CSS).
- Dokumentácia: prípadne `product.md` len ak sa mení formulácia priority ako systémový fakt (tu skôr nie).

## Business rules v hre

- Najmenšia zmena, existujúci pattern (B4, B7).
- Žiadne pomlčky v novom texte (B1).
- Percentá nemeniť (B9), lebo stav pilierov sa nemení.
- Push na `main` až po schválení a implementácii (B3).

## Riziká

- Duplikácia: rovnaká myšlienka by bola 2× (callout + kvadrant). Treba rozhodnúť, či kvadrant skrátiť alebo nechať.
- Príliš „dashboardový“ dojem, ak pridáme ďalšiu kartu namiesto jemného insight bloku.

## Otázky pre používateľa

1. Má nový blok **nahradiť** kvadrant „Najväčšia vec teraz“, alebo ho len **zopakovať vyššie** a kvadrant nechať?
2. Má text ostať presne ako dnes (*Krok 2 produktu: realita dodania a ekonomika…*), alebo ho chceš preformulovať?

## Návrh (po predpokladaných odpovediach: zopakovať vyššie, text nechať)

Pridám pod nadpis Prehľadu (za úvodný popis, pred timeline) jeden `.insight-quote` s tagom napr. „Teraz riešim“ a rovnakou myšlienkou ako kvadrant. Timeline, dashboard aj štyri kvadranty ostanú. Žiadna zmena JS ani percent.

## Čo sa nezmení

- Navigácia, téma, checklisty, ostatné piliere.
- Dashboard percentá.
- Obsah kvadrantov (v tomto variante).

## Spôsob overenia

1. Lokálne otvoriť Prehľad: nový insight je viditeľný pred timeline.
2. Skontrolovať, že text nemá `—` ani `–`.
3. Desktop aj mobil: blok sedí v existujúcom layout sekcie.
4. Rail / drawer / checklisty fungujú ako predtým.

## Rozhodnutie používateľa (príklad)

> Schvaľujem. Nechaj kvadrant. Text nechaj. Použi insight-quote.

## Implementačný prompt pre `/founderos-implement`

```
ÚLOHA (schválené)
V sekcii #sec-prehlad v index.html pridaj jeden blok .insight-quote hneď za .sec-head (za <p class="desc">...), pred timeline „Poradie budovania“.

OBSAH
- span.tag: Teraz riešim
- q: Krok 2 produktu: realita dodania a ekonomika. Až keď viem, čo dodám s istotou a koľko to stojí času, bude jasné, prečo to stojí konkrétnu sumu.

CONSTRAINTS
- Iba index.html. Nemeň css/style.css ani js/script.js.
- Nepoužívaj interpunkčné pomlčky (dlhú ani strednú).
- Nemeň dashboard percentá, rail, drawer, kvadranty Snapshotu.
- Použi existujúcu triedu insight-quote + reveal (ako inde na stránke).
- Neduplikuj sec-head ani timeline.

OVERENIE
1. rg -n '[—–]' index.html (žiadne nové zásahy)
2. Vizuálne: blok je v Prehľade pred timeline.
3. Kvadrant „Najväčšia vec teraz“ ostáva.
4. Commit + push origin main.

MIMO SCOPE
Akékoľvek iné obsahové úpravy, refaktory, zmeny Snapshot verzie.
```

Poznámka: tento golden example **nebol** v tejto fáze implementovaný do aplikácie. Slúži ako vzor správania Planning Agenta.
