<?php
    $mapa = [
        'glowna' => [
            'tytul' => 'Strona Główna',
            'lokalizacja' => 'html/glowna.html'
            ],
        'kontakt' => [
            'tytul' => 'Kontakt',
            'lokalizacja' => 'html/kontakt.html'
        ],
        'produkt' => [
            'tytul' => 'Produkty',
            'lokalizacja' => 'html/produkty.html'
        ],
        'filmy' => [
            'tytul' => 'Filmy',
            'lokalizacja' => 'html/filmy.html'
        ]
    ];

    $idp = $_GET['idp'] ?? 'glowna';
    if ($idp === ''){
        $idp = 'glowna';
    }

    $tytul = '';
    $plik = '';
    $komunikat = '';
    if (is_array($idp) || !array_key_exists($idp, $mapa)){
        http_response_code(404);
        $tytul = 'Błąd 404';
        $komunikat = 'Nie ma takiej podstrony. <a href="index.php">Wróc na strone głowną</a>';
    }
    else {
        $tytul = $mapa[$idp]['tytul'];
        $sciezka = __DIR__.'/'.$mapa[$idp]['lokalizacja'];
        if(!is_file($sciezka) || !is_readable($sciezka)){
            http_response_code(500);
            $tytul = 'Błąd 500';
            $komunikat = 'Błąd serwera, nie można wyświetlić strony.';
        }
        else{
            $plik = $sciezka;
        }
    }
?>
<!doctype html>
<html lang="pl">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>
            <?php
                echo htmlspecialchars($tytul, ENT_QUOTES, 'UTF-8'); 
            ?>
        </title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/lab3.css">
        <script src="js/main.js" defer></script>
        <script src="js/jquery-4.0.0.min.js" defer></script>
        <script src="js/lab3.js" defer></script>
    </head>

    <body>
        <header>
            <h1>Sklep z albumami muzycznymi</h1>
        </header>

        <nav>
            <?php
                foreach ($mapa as $podstrona => $dane){
                    if ($podstrona === $idp){
                        $aktywna = 'aria-current="page"';
                    }
                    else{
                        $aktywna = 'aria-current=""';
                    }
                    echo '<a href="index.php?idp='.$podstrona.'"'.$aktywna.'>'.$dane['tytul'].'</a>';
                }
            ?>
            <a href="lab4.php">Katalog PHP</a>
        </nav>

        <main class="container">
         <?php 
            if($plik !== ''){
                include $plik;
            }
            else{
                echo '<p>'.$komunikat.'</p>';
            }
         ?>
        </main>

        <footer>
            <small>A to jest stopka&copy;</small>
            <input type="button" id="DarkMode" value="Tryb Ciemny"></input>
            <small id="zegar"></small>
            <button id="start">Start Zegaru</button>
            <button id="stop">Stop Zegaru</button>
            <?php
                echo "Skelp internetowy cd.pl";
            ?>
        </footer>
    </body>
</html>
