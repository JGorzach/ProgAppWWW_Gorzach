//Zmiana trybu jasny/ciemny
const button = document.querySelector("input");
const r = document.querySelector(':root');
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
        r.style.setProperty('--primary-color','#181818');
        r.style.setProperty('--secondary-color','#3a79c0');
        r.style.setProperty('--font-color', '#ffffff');
    } else{
        button.value = "Tryb Ciemny";
        r.style.setProperty('--primary-color','#f8f8f8');
        r.style.setProperty('--secondary-color','#0056b3');
        r.style.setProperty('--font-color', '#000000');
    }
}