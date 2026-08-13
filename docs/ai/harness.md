# Harness: ochrana pred nebezpečnými zmenami

Harness je primeraný tomuto projektu: statická jedna stránka bez DB a bez backendu. Nemá zmysel kopírovať enterprise DB locky. Má zmysel chrániť obsah, UX kontrakty a deploy na `main`.

## Červené línie (zastav a pýtaj sa)

1. Zavedenie npm / bundleru / frameworku.
2. Zmazanie celej sekcie piliera alebo väčšiny obsahu bez explicitného zadania.
3. Premenovanie `localStorage` kľúčov alebo hromadné premenovanie `data-key`.
4. Zmena git workflow z „push na main“ na feature-branch/PR model (odporuje projektovému pravidlu).
5. Odstránenie `noindex` / zverejnenie ako marketing web bez súhlasu.
6. Pridanie analytics / trackingu tretích strán bez súhlasu.
7. Veľký vizuálny redesign mimo požiadavky.
8. Zmena identity produktu v obsahu (späť na „tri úlohy“, finálna cena, garancia výsledkov) bez odsúhlaseného rozhodnutia.

## Žlté línie (povoľ len so zdôvodnením v pláne)

1. Zmena percent / statusov viacerých pilierov naraz.
2. Nový CSS komponent namiesto existujúceho patternu.
3. Zásah do anti-flash skriptu v `<head>`.
4. Zmena breakpointu 920px alebo `--rail-w`.
5. Úprava animácií dashboardu / reveal.
6. Zmena textov naraz vo viacerých pilieroch (riziko pomlčiek a nekonzistencie).

## Automatické kontroly pred commitom (Implementation)

Spusti aspoň tieto kontroly, ak zasahuješ do obsahu alebo JS:

```bash
# Interpunkčné pomlčky v aplikačných súboroch (nesmú pribudnúť)
rg -n '[—–]' index.html css/style.css js/script.js && echo 'FAIL: pomlčka nájdená' || echo 'OK: bez pomlčiek'

# localStorage kľúče stále existujú
rg -n "founderos-theme|strategia-open-questions-v1" index.html js/script.js

# Základná štruktúra sekcií
rg -n 'id="sec-prehlad"|id="sec-kto"|id="sec-filozofia"|id="sec-hodnota"|id="sec-komu"|id="sec-problem"|id="sec-kupuje"|id="sec-produkt"|id="sec-dodavam"|id="sec-dostane"|id="sec-garancie"|id="sec-dnes"|id="sec-dalej"' index.html
```

Ak požiadavka mení UI správanie: otvor lokálne `python3 -m http.server 4173` a prejdi scenár z implementačného promptu.

## Čo harness zámerne neblokuje

- Bežné obsahové doplnenie sekcie existujúcimi komponentmi.
- UX drobnosti v CSS tokenoch / spacingu v rámci dizajn systému.
- Aktualizáciu `docs/ai/`.
- Opravy preklepov a pomlčiek.

## Mapovanie rizík zo zadania úlohy na tento projekt

| Typické riziko | Relevantné tu? | Ochrana |
|---|---|---|
| Zmazanie databázy | Nie (žiadna DB) | Neaplikuje sa |
| Nebezpečné migrácie | Nie | Neaplikuje sa |
| Produkčná konfigurácia | Čiastočne (Vercel mimo repo + push na main = hneď live) | Plánuj obsahové zmeny ako live; over pred pushom |
| Odstránenie funkcionality | Áno | Scope lock + checklist overenia |
| Security | Nízke (static, noindex); riziko XSS len ak by sa pridával neriadený HTML/JS | Nemeň skripty mimo scope; žiadne nové third-party scripty bez súhlasu |
| Veľké refaktory | Áno | Planning musí zdôvodniť nutnosť; default je najmenšia zmena |
| Zmeny mimo scope | Áno | Implementation stop rule |
