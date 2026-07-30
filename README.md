# 🎪 Festiwale w Polsce

**Live:** https://sajgonara.github.io/festiwale/

Mapa + kalendarz festiwali w Polsce z filtrem zakresu dat (domyślnie 365 dni od dziś) i oznaczeniem
wydarzeń z wolnym wstępem. Statyczna strona: Leaflet + CARTO dark, vanilla JS, zero zależności poza mapą.

## Funkcje
- Zakres dat od–do, **domyślnie 365 dni od dziś** (okno przesuwne, nie rok kalendarzowy);
  presety: najbliższy rok / pół roku / najbliższy miesiąc / ten weekend / najbliższe lato / wszystko
- Filtry: kategoria (muzyka, film, folk, historia, teatr, jarmark, jedzenie, literatura, inne), miasto, „tylko darmowe"
- Sortowanie: chronologicznie, najtańsze najpierw, miasto, nazwa
- Mapa pokazuje wyłącznie przefiltrowane wydarzenia; kolor markera = kategoria
- Znaczniki „trwa teraz" / „za N dni"; wydarzenia, które już minęły, są wygaszone

## Dane
`data.js` — 121 pozycji, 40 miejscowości (stan 2026-07-30): 78 edycji 2026 + 43 oszacowane edycje 2027.

Okno „365 dni od dziś" sięga poza koniec 2026, więc dla festiwali z pierwszej połowy roku
dopisane są edycje przyszłoroczne: data przesunięta o **+364 dni** (ten sam dzień tygodnia).
Mają `estimated: true` i w UI badge `≈ szacunek` — po ogłoszeniu prawdziwych terminów należy je podmienić.

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
