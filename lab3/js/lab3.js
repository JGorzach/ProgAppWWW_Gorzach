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
}
$("#button2").on({mouseenter: focus2, mouseleave: unfocus2, focus: focus2, blur: unfocus2})