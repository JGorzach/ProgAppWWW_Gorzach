<?php
    session_start();
    require_once __DIR__ . '/includes/produkty.php';
    $komunikat_post = "";
    $komunikat_get = "";
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $id_produktu = $_POST['produkt'] ?? NULL;
        $ilosc_produktu = $_POST['ilosc'] ?? NULL;
        $id_walidowane = filter_var($id_produktu, FILTER_VALIDATE_INT);
        $ilosc_walidowana = filter_var($ilosc_produktu, FILTER_VALIDATE_INT);
        $znaleziony_produkt = null;
        foreach($produkty as $produkt){
            if($produkt['id'] === $id_walidowane){
                $znaleziony_produkt = $produkt;
                break;
            }
        }
        if($id_walidowane === false || $ilosc_walidowana === false){
            $komunikat_post = "Błąd! Zły format danych!";
            http_response_code(400);
        }
        elseif (!$znaleziony_produkt){
            $komunikat_post = "Błąd! Nie ma takiego produktu!";
            http_response_code(400);
        }
        elseif ($ilosc_walidowana < 1 || $ilosc_walidowana > 5 || $ilosc_walidowana > $znaleziony_produkt['stan']){
            $komunikat_post = "Błąd! Niepoprawna ilość produktu";
            http_response_code(400);
        }
        else {
            $_SESSION['ostatni_wybor'] = [
                'id' => $id_walidowane,
                'ilosc' => $ilosc_walidowana
            ];
            header("Location: lab4.php", true, 303);
            exit;
        }
    }
    $wybrana_kategoria = $_GET['kategoria'] ?? 'wszystkie';
    $produkty_wyswietlane = [];
    if ($wybrana_kategoria === 'wszystkie'){
        $produkty_wyswietlane = $produkty;
    }
    elseif ($wybrana_kategoria === 'ksiazka' || $wybrana_kategoria === 'akcesoria'){
        foreach($produkty as $produkt){
            if($produkt['kategoria'] === $wybrana_kategoria){
                $produkty_wyswietlane[] = $produkt;
            }
        }
    }
    else{
        $komunikat_get = "Nieznana kategoria. Bardzo zabawne!";
        $produkty_wyswietlane = $produkty;
    }
?>
<!doctype html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lab4 php</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php
    $ID = 121212;
    include __DIR__.'/includes/naglowek.php';
    echo "<p>Identyfikator ".htmlspecialchars($ID, ENT_QUOTES, 'UTF-8')."</p>";
    echo "<a href=\"index.html\">Strona glowna</a>";
    echo "<h2>Twój koszyk</h2>";
    if(isset($_SESSION['ostatni_wybor'])){
        $id_wyboru = $_SESSION['ostatni_wybor']['id'];
        $ilosc_wyboru = $_SESSION['ostatni_wybor']['ilosc'];
        $nazwa_wyboru = "";
        foreach($produkty as $produkt){
            if($produkt['id'] === $id_wyboru){
                $nazwa_wyboru = $produkt['nazwa'];
                break;
            }
        }
        echo "<p>Produkt: ".htmlspecialchars($nazwa_wyboru, ENT_QUOTES, 'UTF-8')." W ilosci: ".$ilosc_wyboru." sztuk </p>";
    }
    else {
        echo "<p> Nie wybrano jeszcze żadnego produktu.</p>";
    }
    if ($komunikat_post){
        echo htmlspecialchars($komunikat_post, ENT_QUOTES, 'UTF-8');
    }
    echo "<br><h2>Filtr: </h2>";
    if ($komunikat_get){
        echo htmlspecialchars($komunikat_get, ENT_QUOTES, 'UTF-8');
    }
?>
    <form action="lab4.php" method="GET">
        <label> Wybierz kategorie:
            <select name="kategoria">
                <option value="wszystkie">Wszystkie produkty</option>
                <option value="ksiazka">Wszystkie książki</option>
                <option value="akcesoria">Wszystkie akcesoria</option>
            </select>
        </label>
        <button type="submit">Zastosuj filtr</button>
    </form>
    <hr>
<?php
    $licznik = 0;
    while($licznik < count($produkty_wyswietlane)){
        $obecny_produkt = $produkty_wyswietlane[$licznik];
        $ilosc = $obecny_produkt["stan"];
        if($ilosc === 0){
            $komunikat = "Niedostępny";
        }
        elseif($ilosc > 5){
            $komunikat = "Dostępny";
        }
        else{
            $komunikat = "Niski stan";
        }
        switch($obecny_produkt["kategoria"]){
            case "ksiazka":
                $kategoria = "Książka";
                break;
            case "akcesoria":
                $kategoria = "Akcesoria";
                break;
            default:
                $kategoria = "Inne";
                break;
        }
        echo "<br><h3>".htmlspecialchars($obecny_produkt['nazwa'], ENT_QUOTES, 'UTF-8')."</h3>";
        echo "<br><p>Kategoria: ".$kategoria." Stan: ".$komunikat." tz. w ilosci: ".$ilosc."</p>";
        echo '<form action="lab4.php" method="POST">';
        echo '<input type="hidden" name="produkt" value="' . $obecny_produkt['id'] . '">';
        echo '<label>Wybierz ilosc: ';
        echo '<select name="ilosc">';
        for ($i = 1; $i <= 5; $i++){
            echo "<option value='$i'>$i</option>";
        }
        echo '</select>';
        echo '</label>';
        echo '<button type="submit">Do koszyka</button>';
        echo '</form><hr>';
        $licznik++;
    }
?>
</body>
</html>