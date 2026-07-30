# 🎪 Festiwale w Polsce

Mapa + kalendarz festiwali w Polsce z filtrem zakresu dat (domyślnie cały rok) i oznaczeniem
wydarzeń z wolnym wstępem. Statyczna strona: Leaflet + CARTO dark, vanilla JS, zero zależności poza mapą.

## Funkcje
- Zakres dat od–do, domyślnie cały 2026; presety: cały rok / od dziś / najbliższy miesiąc / ten weekend / lato
- Filtry: kategoria (muzyka, film, folk, historia, teatr, jarmark, jedzenie, literatura, inne), miasto, „tylko darmowe"
- Sortowanie: chronologicznie, najtańsze najpierw, miasto, nazwa
- Mapa pokazuje wyłącznie przefiltrowane wydarzenia; kolor markera = kategoria
- Znaczniki „trwa teraz" / „za N dni"; wydarzenia, które już minęły, są wygaszone

## Dane
`data.js` — 78 festiwali, 40 miejscowości (stan 2026-07-30).

Pola: `start`/`end` (ISO), `category`, `free`, `priceMin`, `pricePass`, `priceNote`, `lat`/`lng`, `verified`, `note`.

- `verified: true` (29 pozycji) — termin potwierdzony w źródle zebranym podczas researchu
- `verified: false` — termin orientacyjny, w UI oznaczony `~termin`; zwykle „zwyczajowy" tydzień roku,
  bo organizator nie ogłosił jeszcze dat. Zawsze potwierdź u organizatora.
- `lat`/`lng` to środek miejscowości, nie dokładny teren festiwalu
- Ceny podane tylko tam, gdzie znalazły się w źródle — reszta ma `null` zamiast zgadywanki.
  `free: true` oznacza wolny wstęp na główną część wydarzenia.

Brak publicznego API z terminami festiwali — dane pochodzą z kalendarzy branżowych
(afterexpo.pl, folkowa.art.pl, eventim.pl) i stron organizatorów.

Gdy brakuje oficjalnej strony, karta pokazuje link „szukaj w sieci" zamiast zgadywanego URL-a.

## Uruchomienie
```
python3 -m http.server 8123   # i otwórz http://localhost:8123
```

PR-y z poprawkami terminów i cen mile widziane.
