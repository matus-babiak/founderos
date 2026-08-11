# Workflow: plánovanie oddelené od implementácie

## Cieľ

Človek píše ľudskou rečou. AI najprv plánuje a čaká na schválenie. Až potom druhý agent implementuje.

```
Ľudská veta
    ↓
/founderos-plan   (Planning Agent: číta, analyzuje, navrhuje, NEIMPLEMENTUJE)
    ↓
Otázky (ak treba) → odpovede človeka
    ↓
Návrh ľudskou rečou + spôsob overenia
    ↓
Schválenie človekom
    ↓
Implementačný prompt (technicky presný)
    ↓
/founderos-implement   (Implementation Agent: overí, zmení, skontroluje)
    ↓
Commit + push na main (podľa pravidiel projektu)
```

## Rola človeka

- Formuluje zámer bežnou rečou.
- Odpovedá na nejasnosti.
- Schvaľuje alebo zamieta návrh.
- Môže upraviť scope pred implementáciou.

## Rola Planning Agenta

Pozri `agent.md` a command `.cursor/commands/founderos-plan.md`.

Nesmie meniť `index.html`, `css/style.css`, `js/script.js` počas plánovania.
Môže čítať kód a dokumentáciu.
Komunikuje ľudskou rečou (pozri sekciu nižšie).

## Rola Implementation Agenta

Pozri `agent.md` a command `.cursor/commands/founderos-implement.md`.

Dostane schválený implementačný prompt.
Implementuje len schválený scope.
Pri konflikte zastaví a pýta sa.

## Ľudská komunikácia (povinné pre Planning)

Planning Agent **nesmie** predvolene hovoriť programátorským žargónom.

Zlé:
> Modifikujeme state management v komponentovej vrstve a refaktorujeme selector.

Dobré:
> Momentálne si stránka zapamätá zaškrtnuté otázky v prehliadači. Navrhujem upraviť iba text tejto jednej otázky. Ostatné sekcie a uložené zaškrtnutia ostanú ako sú.

Technické detaily patria do samostatnej časti **Implementačný prompt**, nie do hlavného vysvetlenia pre človeka.

## Minimálna zmena

Vždy preferuj najmenšiu správnu zmenu, ktorá splní zámer.
Ak stačí upraviť jednu sekciu v `index.html`, nerob „všeobecný redesign“.

## Overenie (testovateľnosť)

Keďže projekt nemá automatické testy, Planning musí pri relevantných úlohách definovať:

1. Čo sa má zmeniť (správanie alebo obsah).
2. Čo sa nesmie zmeniť.
3. Ako overiť v prehliadači (konkrétny scenár).
4. Či spustiť lokálny static server.
5. Kontrola pomlčiek v novom texte.
6. Po nasadení: rýchly check live URL, ak ide o obsah/UX na `main`.

## Aktualizácia dokumentácie

Ak sa zmení dôležitý systémový fakt (nový localStorage kľúč, nová sekcia, zmena percent, zmena deploy pravidla), Implementation Agent aktualizuje aj príslušný súbor v `docs/ai/` v tom istom commite, alebo to explicitne navrhne v reportingu.

## Čo je zámerne mimo tohto workflow

- Samostatný ticket systém / issue tracker.
- Automatické spúšťanie implementácie bez schválenia.
- CI gate s unit testami (v projekte zatiaľ nie sú).
- Feature branch / PR flow (zakázané projektovým pravidlom).
