// Animacja A
let jestMale = true;
function grow1(){
    $("#button1").attr('aria-pressed',jestMale.toString())
    if(jestMale){
        jestMale = false;
        $("#button1").stop(true, false).animate({
            width: '240px',
            height: '130px'
        }, 300);
    }
    else{
        jestMale = true;
        $("#button1").stop(true, false).animate({
            width: '160px',
            height: '90px'
        }, 300);
    }
};
$("#button1").on("click", grow1);

//Animacja B
function focus2(){
    $("#button2").stop(true, false).animate({
        width: '220px',
        height: '120px'
    },300);
};
function unfocus2(){
    $("#button2").stop(true, false).animate({
        width: '160px',
        height: '90px'
    },300);
};
$("#button2").on({mouseenter: focus2, mouseleave: unfocus2, focus: focus2, blur: unfocus2});

//Animacja C
let iloscButton3 = 0;
const baseWidth = 160;
const baseHeight = 90;
const button3Amount = document.getElementById('button3Amount');
function grow3(){
    if($("#button3").is(":animated")){
        return;
    }
    if(iloscButton3 < 5){
        iloscButton3 += 1;
        const modWidth = baseWidth + (iloscButton3 * 20);
        const modHeight = baseHeight + (iloscButton3 * 10);
        $("#button3").animate({
            width: modWidth,
            height: modHeight
        },300);
        button3Amount.textContent = `${iloscButton3}`;
    }
};
$("#button3").on("click", grow3);

//Reset i ograniczenie ruchu
function reset13(){
    jestMale = false;
    grow1();
    iloscButton3 = -1;
    grow3();
}
$("#buttonReset").on("click", reset13);