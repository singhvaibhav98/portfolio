/**
 * 
 */
function myFunction(x) {
    x.classList.toggle("change");
}

function myFunctionHam(x) {
    myFunction(x);
    $(".tab").toggle("showHam");
    if($(".row").css("position")=="relative"){
    	$(".row").css("position","absolute");
    	$(".hamWrap").css("display","block");
    	$(".hamWrap").css("height",$(".row").height()+20);
    }
    else{
    	$(".row").css("position","relative");
    	$(".hamWrap").css("display","none");
    }
}

$(".tablinks").click(function(){
	$(".row").css("position","relative");
	$(".hamWrap").css("display","none");
});