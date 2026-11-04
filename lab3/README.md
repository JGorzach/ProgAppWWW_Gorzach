Szybkie klinięcia A: Zgodnie z oczekiwanym zachowaniem
Kursor i fokus B: Zgodnie z oczekiwanym zachowaniem, po dodaniu do funkcji unfocus2 dodatkowego warunku sprawdzajacego stanu
Limit i reset C: Zgodnie z oczekiwanym zachowaniem
Klawiatura i ruch: Zgodnie z oczekiwanym zachowaniem ale żeby sprawdzić czy ograniczenie ruchu działa musiałem ustawić na sztywno true bo nie potrafiłem wyłączyc tego w przeglaradce ani systemie
Ajax: Plik .php dodany do repozytorium, ale podczas pracy miałem go i cały folder lab3 w katalogiu ./var/www/html/, napotkałem problemy z instalacją XAMPPa więc wykonane zostało to bezpośrednio przy użyciu pakietu httpd php i przy jego pomocy uruchomiłem serer Apache. 
Żeby uruchomić trzeba pullować z githuba, 
upewnić się ze posiada sie httpd i php,
umieśćić w własnym folderze ./var/www/html/,
nastepnie wpisać kolejno komendy:
sudo systemctl start httpd
sudo systemctl enable httpd
