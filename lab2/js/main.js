const button = document.querySelector("input");
button.addEventListener("click",updateButton);
var r = document.querySelector(':root');
function updateButton(){
    if (button.value === "Tryb Ciemny"){
        button.value = "Tryb Jasny";
        r.style.setProperty('--primary-color','#181818')
        r.style.setProperty('--secondary-color','#3a79c0')
        r.style.setProperty('--font-color', '#ffffff')
    } else{
        button.value = "Tryb Ciemny";
        r.style.setProperty('--primary-color','#f8f8f8')
        r.style.setProperty('--secondary-color','#0056b3')
        r.style.setProperty('--font-color', '#000000')
    }
}