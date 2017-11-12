var toggle = function(){
	/***3. Add code to animate the fontSize of h2 text when the content in div is displayed
		   Animate it back to it's original size when the content of div is hidden
	***/
	var h2 = $(this);
	h2.toggleClass("minus");			

	if (h2.attr("class") == "minus") {
		h2.next().show();
		h2.animate({fontSize: "22"}, 400);
	}
	else {
		$("#image").attr("src", null);
		h2.next().hide();
		h2.animate({fontSize: "17"}, 400);
	}
}

var changePic = function(evt){
	/***1. add code to display/change picture as the links are clicked***/

	var thisImage = $(this).attr("href");
	$("#image").attr("src", thisImage);
	
	//PREVENTS DEFAULT ACTION ON CLICK
	evt.preventDefault();
}

$(document).ready(function(){
		/*** 4. The image on the side continues to be displayed after you hide the book list. 
		Figure out where to add what code to make it disappear after you hide the book list. ***/
		//H2 TAG PROCESSING
		var h2Elements = $("#categories h2");
		h2Elements.mouseover(function(){
			$(this).css("color", "blue");
		});
		h2Elements.mouseout(function(){
			$(this).css("color", "black");
		});
		h2Elements.click(toggle);
		
		/***2. Add code to change all h2 text color when the mouse enters/out of the h2 tags ***/	
		
		//A TAG PROCESSING
		var imageLinks = $("a");
		//PRE-LOAD IMAGES FROM THE A TAGS
		imageLinks.each(function() {
				var image = new Image();
				image.src = $(this).attr("href");
		});//end for each
			
		imageLinks.click(changePic);

});//end ready
	

