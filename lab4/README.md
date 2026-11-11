Filtr GET: ?kategoria=ksiazka pokazuje tylko ksiazki, a niepoprawna wartość wyswietla wszystkie elementy list i stosowny komunikat
Poprawy POST i odświeżenie: W Network widać POST 303 i 200, odswieżanie i zmiana filtu nie usuwa widocznego koszyka
Błędne wartości POST: Żadna ilośc poza liczbami całkowitymi od 1 do 5 nie przeszła, produkt o innym id niż istniejące w tablicy też nie 
Stan magazynowy: Dla produktów których jest mniej niż 5 sztuk serwer odrzuca wybór
Odrębna sesja i tekst HTML: W odrebnej sesji w trybie incognito koszyk jest pusty, a po dopisaniu <b>Test</b> do nazwy jednego produktu wyswietla sie ona jako zwykly tekst na stronie wraz z znacznikami html
Strona po zmianie ścieżek: Wszystko na stronie głownej i pozostałych działa w tym kod js style css i żadanie do status.php 
