var k=0;
var linksectiontimer=setInterval(autototop,1000);
function autototop(){
    if(k==2){
        k=0;
        $(".link-section")[0].style.top=0;
    }else{
        k++;
    }
    $(".link-section").animate({top:-k*48},"slow");
}
