Adres domyślny i menu: index.php i index.php?idp= pokazują stronę główną, a odnośniki otwierają właściwą treść
Nieznany lub tablicowy klucz: ?idp=nieznany i ?idp[]=filmy dają HTTP i poprawny komunikat z odnośnikiem do strony głownej
Próba podania ścieżki: ?idp=..%2Fstatus.php daje HTTP 404, status.php nie jest wyświetlony
Brak pliku widoku: Po zmianie nazwy na filmyq.html zwraca HTTP 500 bez ujawnienia ścieżki systemowej, i ze stosownym komunikatem
Strona główna i AJAX: Na stronie głownie działają style, grafiki i animacje, a w panelu sieci widać HTTP 200 po wysłaniu żadania do status.php
Katalog i sesja po migracji: Po włączeniu katalogu lab4.php, poprawny wybór wysyła POST 303, i GET 200, po zmianie strony i powrocie dalej zapisane wybory są widoczne
Filmy i układ mobilny: Trzy filmy można uruchomić (nawet jednoczescnie), odnosniki działaja a przy szerkości 360 px strona nie przewija sie w poziomie