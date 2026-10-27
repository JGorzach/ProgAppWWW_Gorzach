//Zmiana trybu jasny/ciemny
const button = document.getElementById('DarkMode');
const r = document.documentElement;
let currenMode = localStorage.getItem("Mode")||"Tryb Jasny";
applyTheme(currenMode);
button.addEventListener("click",() => {
    if(currenMode === "Tryb Jasny"){
        currenMode = "Tryb Ciemny";
    }
    else{
        currenMode = "Tryb Jasny";
    }
    localStorage.setItem("Mode",currenMode);
    applyTheme(currenMode);
});
function applyTheme(mode){
    if (mode === "Tryb Ciemny"){
        button.value = "Tryb Jasny";
        r.setAttribute("data-theme","dark");
    } else{
        button.value = "Tryb Ciemny";
        r.setAttribute("data-theme","light");
    }
}

//zegar
let zegar = null;
const start = document.getElementById('start');
const stop = document.getElementById('stop');
let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}
function piszCzas(){
    let d = new Date();
    let d1 = new Intl.DateTimeFormat("pl-PL", options).format(d);
    document.getElementById("zegar").innerHTML= d1;
}
function startZegar(){
    if(zegar === null){
        piszCzas();
        zegar = setInterval(piszCzas,1000);
    }
}
function stopZegar(){
    clearInterval(zegar);
    zegar = null;
}
start.addEventListener('click',startZegar);
stop.addEventListener('click', stopZegar);
piszCzas();

//Filtrowanie produktów bez przeładowania
const wyszukiwanie = document.querySelector('input[type="search"]');
const karty = document.querySelectorAll('.card');
const iloscWyszukan = document.getElementById('wyszukiwarkaZnalezione');
if(wyszukiwanie){
wyszukiwanie.addEventListener('input', (event) =>{
    const szukanyElement = event.target.value.trim().toLowerCase();
    let widocznych = 0;
    karty.forEach(card => {
        const nazwaProduktu = card.querySelector('h3').textContent.toLowerCase();
    
    if (nazwaProduktu.includes(szukanyElement)){
        card.hidden = false;
        widocznych++;
    }
    else{
        card.hidden = true;
    }
    });
    if (widocznych === 0){
        iloscWyszukan.textContent = "Brak wyników.";
    }
    else{
        iloscWyszukan.textContent=`Znaleziono: ${widocznych}`
    }
});
}
//Oblicz wartosc i pokaz podsumowanie
const tablicaProduktów = [
    {
        id: "The_Car",
        nazwa: "The Car",
        cenaGrosze: 5999
    },
    {
        id: "Hotel",
        nazwa: "Tranquility Base Hotel and Casino",
        cenaGrosze: 3999
    },
    {
        id: "Demons_Days",
        nazwa: "Demons Day",
        cenaGrosze: 3299
    }
];

const produkt = document.getElementById('produkt');
const ilosc = document.getElementById('number');
const cena = document.getElementById('cena');

function wartoscGrosz(cenaGrosze, ilosc){
    return cenaGrosze * ilosc;
}

function wartoscZloty(cenaGrosze){
    const cenaZloty = cenaGrosze / 100;
    const option = {
        style: 'currency',
        currency: 'PLN'
    };
    return new Intl.NumberFormat('pl-PL', option).format(cenaZloty);
}

function podglad(){
    const wybraneID = produkt.value;
    const wybranaIlosc = ilosc.value;
    if(wybraneID === ""){
        cena.textContent = "Wybierz produkt";
        return;
    }
    const znalezionyProdukt = tablicaProduktów.find(prod => prod.id === wybraneID);
    const walidacjaIlosci = Number(wybranaIlosc);
    if(wybranaIlosc === "" || !Number.isInteger(walidacjaIlosci) || walidacjaIlosci < 1 || walidacjaIlosci > 5){
        cena.textContent = "Wybierz liczbę od 1 do 5 (połówek nie sprzedajemy)";
        return;
    }
    const wynikWGroszach = wartoscGrosz(znalezionyProdukt.cenaGrosze, walidacjaIlosci);
    cena.textContent = "Wartość zamówienia: " + wartoscZloty(wynikWGroszach);
}

if(produkt){
    produkt.addEventListener('change', podglad);
    ilosc.addEventListener('input', podglad);
}