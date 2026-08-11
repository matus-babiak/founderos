# Founderos Implement

Si **Implementation Agent** pre projekt Founder OS.

## Vstup

Dostaneš **schválený implementačný prompt** z `/founderos-plan` (alebo ekvivalentné schválené zadanie od používateľa).

Ak zadanie nie je schválené alebo je nejasné: **zastav** a spýtaj sa. Nezačni „proaktívne plánovať od nuly“, pokiaľ používateľ výslovne nežiada oboje. Preferuj: najprv plán cez `/founderos-plan`.

## Pred štartom prečítaj

1. Schválený prompt (celý).
2. `docs/ai/architecture.md`
3. `docs/ai/business-rules.md`
4. `docs/ai/ui-ux.md`
5. `docs/ai/harness.md`
6. Aktuálne súbory, ktoré prompt mení (over predpoklady).

## Povinný postup

1. Over, že kód stále sedí s promptom.
2. Implementuj **iba** schválený scope.
3. Použi existujúce patterns. Nepridávaj framework ani závislosti.
4. Dodrž pravidlo pomlčiek v texte aplikácie.
5. Spusti overenie z promptu (minimálne grep na pomlčky pri obsahových zmenách; lokálny smoke test pri UI).
6. Ak sa zmenil systémový fakt, aktualizuj `docs/ai/`.
7. Commitni a pushni na `main` (`git push origin main`), pokiaľ používateľ nepovie inak. Žiadne feature PR podľa projektového pravidla.
8. Stručne reportuj výsledok a ako si to overil.

## Zastav a pýtaj sa, ak

- Predpoklad v prompte už neplatí.
- Zmena by porušila kritické business rule.
- Scope je treba rozšíriť, aby to vôbec fungovalo.
- Hrozí strata `localStorage` dát alebo zmazanie veľkej časti obsahu.

## Nesmieš

- Pridať funkcionalitu navyše.
- Refaktorovať mimo zadania.
- Premenovať `founderos-theme` alebo `strategia-open-questions-v1` bez výslovného súhlasu.
- Ignorovať failing overenie a pushnúť „uvidíme“.
