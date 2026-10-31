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

function focus2(){

}
$("#button2").on()