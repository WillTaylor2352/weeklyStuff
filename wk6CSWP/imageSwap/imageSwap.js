//FUNCTIONS
var $ = function (id) { 
	return document.getElementById(id); 
}
var swap = function(evt) {
//GET CLICKED LINK
	var link = this;
//GET CAPTION	
	var captionNode = $("caption");
//GET ENLARGED IMAGE
	var imageNode = $("main_image");
//CHANGE ENLARGED IMAGE SRC TO CLICKED LINK’S IMAGE
	//imageNode.src = link.getAttribute("href");
	imageNode.setAttribute("src", link.getAttribute("href"));

	//CHANGE CAPTION TO CLICKED LINK’S TITLE	
	captionNode.firstChild.nodeValue = link.getAttribute("title");
/*
	//CANCEL DEFAULT ACTION OF EVENT	
	if (!evt) { evt = window.event; }
	if ( evt.preventDefault ) {
	    evt.preventDefault();
	}
	else {
	    evt.returnValue = false;
	}	

*/	
}
//ONLOAD EVENT HANDLER
window.onload = function () {
    //GET LINKS
    var listNode = $("image_list");
    var imageLinks = listNode.getElementsByTagName("a");
    
    //PROCESS EACH IMAGE LINK
    var i, linkNode, image;
    for ( i = 0; i < imageLinks.length; i++ ) {

        // GET LINK AND ATTACH EVENT HANDLER TO EACH IMAGE LINK
        linkNode = imageLinks[i];
        linkNode.onclick = swap;

        // PRELOAD IMAGE
        image = new Image();
        //image.src = linkNode.getAttribute("href");
		image.setAttribute("src", linkNode.getAttribute("href"));
	    }
    //HIGHLIGHT THE FIRST LINK
    imageLinks[0].focus(); }
