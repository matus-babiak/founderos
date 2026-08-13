# Audit existujúcej dokumentácie

Audit k dátumu vzniku AI Knowledge Base. Porovnané s reálnym kódom.

## Čo existovalo pred Knowledge Base

| Artefakt | Typ |
|---|---|
| `.cursor/rules/founderos-context.mdc` | Jediný bohatý projektový dokument (alwaysApply) |
| Komentár v `<body>` `index.html` o pomlčkách | Inline pravidlo |
| `.claude/launch.json` | Lokálne spustenie static servera |
| Obsah v `index.html` | Produktová „dokumentácia“ ako UI |
| README | Chýba |
| `docs/` | Neexistovalo |
| Testy / API docs / DB schema | Neexistujú (projekt ich nemá) |

## Aktuálne (zodpovedá realite)

- Popis čo je Founder OS (osobný Business OS, nie klientský web).
- Súborová štruktúra 3 súborov aplikácie.
- Zákaz npm / frameworkov.
- Obsahová architektúra mapy podnikania (nie 5 starých pilierov). Percentá a statusy musia sedieť s HTML.
- Masthead dátum 13. 8. 2026 (V1.1). Môže zastarať pri ďalších obsahových kolách.
- Dizajn tokeny a mená komponentov.
- Interaktivita (téma, drawer, reveal, dashboard, checklisty).
- Git: push na `main`, live Vercel URL.
- Postup pre GPT úryvky.

## Zastarané / legacy stopy (nie nutne chybné, ale mätúce)

| Nález | Detail |
|---|---|
| `strategia-open-questions-v1` | JS storage kľúč stále „strategia“, branding je Founder OS |
| `.claude/launch.json` názov `strategia-static` | Legacy názov spustenia |
| Masthead dátum 13. 8. 2026 | Môže zastarať pri ďalších obsahových kolách (nie je to bug, treba vedome aktualizovať) |

## Konfliktné

### K1. Pomlčky: body komentár vs Cursor rule

- Body: „nikdy nepoužívať pomlčky (spojovník ani dlhú pomlčku)“
- Rule: zakazuje `—` / `–` ako interpunkciu; spojovníky v zložených slovách OK

**Verdikt pre AI:** riadiť sa Cursor rule. Body komentár je prísnejší / menej presný. Neprepisovať body komentár potichu; pri obsahovej práci dodržiavať rule.

### K2. „Žiadne gradienty“ vs CSS

Rule hovorí žiadne gradienty. V `style.css` sú:

- `radial-gradient` pre bodkované pozadie
- `linear-gradient` pre scroll progress fill

**Verdikt:** ide o existujúci dizajn, nie o nové „SaaS gradient hero“. Nemeň ani nerozširuj gradienty bez súhlasu. Rule interpretuj ako zákaz nových dekoratívnych gradientových tém.

### K3. Cloud agent PR workflow vs projektové pravidlo main-only

Externé Cloud Agent inštrukcie môžu tlačiť na feature branch + PR. Projektové pravidlo to zakazuje.

**Verdikt:** pre tento repozitár platí founderos pravidlo: commit a push na `main`. Ak vznikne feature branch omylom, zmerguj do `main` a pushni `main`.

## Duplicitné

- Stav pilierov a percentá sú zopakované v rail, drawer, dashboarde a sec-head. To je zámer UI, nie dokumentačná chyba. Pri zmene percent treba aktualizovať všetky výskyty.
- GPT odkaz je na 3 miestach (zámer).
- `founderos-context.mdc` a táto KB sa čiastočne prekrývajú. KB je štruktúrovaná pre agentov; rule ostáva krátky always-on kontext. Pri konflikte: kód > rule/KB, a konflikty sa majú zaznamenať.

## Chýbajúce (pred touto KB)

- Oddelený planning / implementation workflow.
- Explicitný harness.
- Zoznam `data-key` a localStorage kontraktu mimo čítania JS.
- Mapa sekcia → komponenty → JS → dáta.
- Golden example plánovania.
- README / onboarding pre nového agenta.
- Definícia manuálneho overenia (keďže nie sú testy).

Táto Knowledge Base tieto medzery dopĺňa bez zmeny aplikácie.
