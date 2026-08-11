# Founder OS: AI Knowledge Base

Toto je zdroj pravdy pre budúci AI development tohto projektu.

Aplikácia samotná (`index.html`, `css/style.css`, `js/script.js`) sa v tejto fáze nemenila. Tieto dokumenty opisujú, čo projekt je, ako funguje a ako ho majú AI agenti bezpečne rozvíjať.

## Ako čítať túto Knowledge Base

| Dokument | Účel | Kedy čítať |
|---|---|---|
| [product.md](./product.md) | Čo stránka je, pre koho, čo rieši, MVP a mimo scope | Každá požiadavka |
| [architecture.md](./architecture.md) | Technológie, súbory, vrstvy, entry pointy, deploy | Pri akejkoľvek zmene kódu alebo štruktúry |
| [business-rules.md](./business-rules.md) | Pravidlá, ktoré sa nesmú porušiť | Pred návrhom aj pred implementáciou |
| [ui-ux.md](./ui-ux.md) | Dizajn systém, komponenty, layout, interaktivita | Pri UI / obsahových zmenách |
| [workflow.md](./workflow.md) | Ľudský workflow: plánovanie → schválenie → implementácia | Pri spustení agentov |
| [agent.md](./agent.md) | Rola Planning a Implementation agenta | Pri `/founderos-plan` a `/founderos-implement` |
| [harness.md](./harness.md) | Ochrana pred nebezpečnými zmenami | Pred rizikovou alebo veľkou zmenou |
| [documentation-audit.md](./documentation-audit.md) | Audit pôvodnej dokumentácie vs kód | Pri konfliktoch dokumentácie |
| [golden-example.md](./golden-example.md) | Overený príklad plánovania na reálnom kóde | Ako vzor výstupu Planning Agenta |

## Hierarchia pravdy

1. **Aktuálny kód** (`index.html`, `css/style.css`, `js/script.js`) je technická pravda.
2. **`.cursor/rules/founderos-context.mdc`** je projektový kontext pre Cursor (alwaysApply).
3. **`docs/ai/`** je Knowledge Base pre AI development workflow.
4. Ak dokumentácia odporuje kódu: kód vyhráva. Konflikt zaznamenaj, dokumentáciu neprepíš potichu.

## Čo tu nie je

- Žiadna databáza, backend, API, autentifikácia ani testovací framework.
- Žiadny `package.json`, bundler ani npm závislosti.
- Žiadne README v koreni repozitára (stav k dátumu vzniku tejto KB).
- Samostatný `data-model.md` nie je: dátový model je triviálny (HTML obsah + `localStorage`) a je v `architecture.md`.

## Vstupný bod pre človeka

1. Napíš požiadavku ľudskou rečou.
2. Spusti `/founderos-plan`.
3. Prečítaj návrh, odpovedz na otázky, schváľ alebo uprav.
4. Spusti `/founderos-implement` so schváleným implementačným promptom.
