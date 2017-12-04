/* NOTES********************************* 
*Author: Will Taylor
*Class: Client side web programming
*Date began: 12/3/2017
*Last revision date: 12/3/2017
*
*Much of the code found here is pulled directly from the publically accessible Jquery API documentation
*This documentation and useful tools can be found here: http://api.jquery.com/ and here: http://api.jqueryui.com/
*
*Previous Assignments for this class were also used as reference material. Access to this documentation 
*	can be found here: https://github.com/WillTaylor2352/weeklyStuff
*
*This github is availble to be used as reference for private use only. Any use of code publically without express permission
*	is not allowed. The owner of the account has approved use of code for this assignment. 
*	For liscensing inquires contact: willtaylorofficial@yahoo.com/
*	For this reason, any code found in a file on this github may be used in whatever way 
*	to satisfy the needs of this assingnment
*
*Any and all other code is derived from the author of this page, unless cited otherwise. 
*
*
*
*
 */
$(document).ready(function() {
	$("#testb").click(function(){
		
		if($("#testf").val() === "coolio"){
			$("#testf").val("");
		}
		else{
			$("#testf").val("coolio");
		}
	});
	
	$("#slider").slider({
		
		value: 200,
		min: 10,
		max: 300,
		step: 10,
		//value: select[ 0 ].selectedIndex + 10,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.value );
		}
    
    //$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	/*	slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
		}
	*/
	});
	
	$( "#amount" ).val($( "#slider" ).slider( "value" ) );
});
