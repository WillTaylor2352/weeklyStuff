"use strict";
var $ = function (id) { 
	return document.getElementById(id); 
}

window.onload = function () {
	//GET THE UL SECTION WITH ID "image_list"
    var imageListNode = $("image_list");    
	//GET THE H2 TAG WITH ID "caption"
    var captionNode = $("caption");
	//GET THE IMG TAG WITH ID "main_image"
    var imageNode = $("main_image");
        
	//GET ALL THE IMG TAGS FROM THE UL SECTION
	//SLIDES IS AN ARRAY OF A TAGS
    var slides = imageListNode.getElementsByTagName("img");
    
    // Start slide show
    var image, imageCounter = 0;
	
	
	var slideTimer = function(){ 
			imageCounter = (imageCounter + 1) % slides.length;
		    image = slides[imageCounter];
		    imageNode.src = image.getAttribute("src");
		    captionNode.firstChild.nodeValue = image.getAttribute("alt");
			}

	/******* ADD CODE HERE FOR THE START AND PAUSE BUTTONS ******/	
	
	
	/* //Alternative coding
    // With the one-time timer embedded as the first parameter
    var timer = setTimeout( 
    	function () {
    		imageCounter	 = (imageCounter + 1) % slides.length;
		    image = slides[imageCounter];
		    imageNode.src = image.src;
		    captionNode.firstChild.nodeValue = image.alt;
    	},
    	2000 );
    */
}
