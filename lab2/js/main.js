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