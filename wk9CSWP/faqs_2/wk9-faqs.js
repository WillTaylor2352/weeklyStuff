/*---------------------------------------------------------------------
FAQ code in Jquery that is most similar to the FAQ Javascript we learnt 
in class on WK 5
-----------------------------------------------------------------------*/
var toggle = function(){
		//this = the current tag where the mouse is
		var h2 = $(this);
		//the div sibling right next to h2
		var div = h2.next();
		//toggle the class by adding 
		//and removing the class attribute of h2 tags
		h2.toggleClass("minus");		
		//if the h2 attribute is set to minus
		//show the div section 
		if (h2.attr("class") == "minus") {
			div.show();
		}
		//else hide the div section
		else {
			div.hide();
		}
}
//ONLOAD EVENT HANDLER	
$(document).ready(function () {
		//GET ALL THE H2 TAGS
		var h2Elements = $("#faqs h2");			
		//ATTACH EVENT HANDLER TO EACH H2 TAG
		h2Elements.click(toggle);
});

/*--------------------------------------------------------
Shorter FAQ code that does not use variables for any tags
----------------------------------------------------------*/
/*var toggle = function(){
		$(this).toggleClass("minus");	
		if ($(this).attr("class") == "minus") {
			$(this).next().show();
		}
		else {
			$(this).next().hide();
		}
}
//ONLOAD EVENT HANDLER	
$(document).ready(function () {
		$("#faqs h2").click(toggle);
});*/
/*----------------------------------------------------
Shorter FAQ code that does not use variables at all
------------------------------------------------------*/
/*$(document).ready(function() {
	$("#faqs h2").click(function() {   
		$(this).toggleClass("minus");
		if ($(this).attr("class") == "minus") {
			$(this).next().hide();
		}
		else {
			$(this).next().show();
		}
	}); // end click
}); // end ready
*/
/*-----------------------------------------------------
Shortest FAQ code
-------------------------------------------------------*/
/*$(document).ready(function() {
	$("#faqs h2").click(function() {   
		$(this).toggleClass("minus");
		$(this).next().toggleClass("open");
	}); // end click
}); // end ready
*/