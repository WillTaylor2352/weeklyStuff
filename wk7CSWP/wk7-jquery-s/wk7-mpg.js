var calculateMPG = function(){
	var isValid = true;
	var miles = $("#miles").val();
	var gallons = $("#gallons").val();
	
	if(isNaN(miles) || parseFloat(miles) < 0){	
		$("#error_miles").text("enter a positive number");
		isValid = false;
	}
	else{
		$("#error_miles").text("*");
	}
	
	if(isNaN(gallons) || parseFloat(gallons) < 0){
		$("#error_gallons").text("enter a positive number");
		isValid = false;
	}
	else{
		$("#error_gallons").text("*");
	}
	
	if(isValid == true){
		miles = parseFloat(miles);
		gallons = parseFloat(gallons);
		var mpg = miles/gallons;
		$("#answer").val(mpg.toFixed(2));
	}
}
var clear = function(){
	
	$("#miles").val("");
	$("#gallons").val("");
	
	$("#error_miles").text("*");
	$("#error_gallons").text("*");
}

$(document).ready(function(){
	$("#execute").click(calculateMPG);
	$("#clear").click(clear);
	$("#miles").focus();
});