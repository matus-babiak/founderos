# AI agenti

## Prehľad

Dva oddelené režimy. Nespájaj ich do jedného behu, ak používateľ výslovne nežiada výnimku.

| Agent | Command | Smie meniť aplikáciu? |
|---|---|---|
| Planning | `/founderos-plan` | Nie |
| Implementation | `/founderos-implement` | Áno, len v schválenom scope |

## Planning Agent: povinný postup

1. **Pochopenie** požiadavky vlastnými slovami (ľudsky).
2. **Produktový kontext** z `docs/ai/product.md` a relevantnej sekcie `index.html`.
3. **Kontrola vízie / pravidiel** z `business-rules.md` a `founderos-context.mdc`.
4. **Analýza kódu:** otvor reálne súbory, necituj z pamäte.
5. **Dotknuté časti:** súbory, sekcie, `data-key`, CSS triedy, JS funkcie.
6. **Business rules:** ktoré pravidlá sú v hre.
7. **Riziká:** čo sa môže pokaziť.
8. **Otázky:** iba ak bez odpovede nemožno navrhnúť správnu najmenšiu zmenu. Max niekoľko jasných otázok.
9. **Návrh** ľudskou rečou: čo spravíme, čo nespravíme.
10. **Spôsob overenia.**
11. **Čakanie na schválenie.**
12. Po schválení: **Implementačný prompt** pre Implementation Agenta.

### Výstupný formát pre človeka

```
## Pochopenie
...

## Čo som skontroloval
- Produkt: ...
- Dokumentácia: ...
- Kód: konkrétne súbory / miesta ...

## Dotknuté časti
...

## Riziká
...

## Otázky (ak sú)
1. ...

## Návrh (ľudsky)
...

## Čo sa nezmení
...

## Ako overíme, že je to správne
...

## Čakám na tvoje schválenie
Napíš „schvaľujem“, uprav scope, alebo odpovedz na otázky.
```

Až po schválení:

```
## Implementačný prompt pre /founderos-implement
(technicky presný blok pripravený na skopírovanie)
```

### Planning nesmie

- Upraviť `index.html` / `css/style.css` / `js/script.js`.
- „Už to rovno spraviť, bude to rýchlejšie.“
- Vymýšľať stav kódu bez overenia.
- Navrhovať nový framework / build, ak to požiadavka nevyžaduje.
- Komunikovať hlavný návrh žargónom.

## Implementation Agent: povinný postup

1. Prečítať schválený implementačný prompt.
2. Overiť, že aktuálny kód stále sedí s predpokladmi promptu.
3. Ak nesedí: zastaviť, vysvetliť konflikt, neimprovizovať veľké odbočky.
4. Implementovať najmenšiu zmenu.
5. Rešpektovať patterns a business rules.
6. Spustiť overenie zo zadania (lokálny server / manuálny checklist / grep na pomlčky).
7. Aktualizovať `docs/ai/` ak sa zmenil systémový fakt.
8. Commit + push na `main` podľa projektových pravidiel.
9. Stručne reportovať: čo sa zmenilo, ako overené, čo ostalo mimo.

### Implementation nesmie

- Rozširovať scope („ešte som upravil aj …“).
- Mazanie funkcionality mimo zadania.
- Premenovať `localStorage` kľúče bez schválenia.
- Zavádzať závislosti.
- Pokračovať pri zásadnej nejasnosti.

## Spoločné pravidlá AI (obe agenty)

- Najprv pochop, potom konaj (Implementation koná až so schválením).
- Netvrď o kóde nič neoverené.
- Pri nejasnostiach sa opýtaj.
- Preferuj existujúci pattern.
- Pri významnej zmene definuj overenie.
- Dokumentáciu pri systémovej zmene aktualizuj, neignoruj.
