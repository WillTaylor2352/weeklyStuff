"use strict";
var $ = function (id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function () {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } 
};

window.onload = function () {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
   
	/**** One-time timer ****/   
	//function hides the message and stops the timer
    var hideMessage = function() {
	   	$("startup_message").setAttribute("class", "hidden"); //this uses the correct CSS to hide the message
	   	clearTimeout(timer1); 
	}
	
	var timer1 = setTimeout(hideMessage, 5000); //create timer and call hideMessage function after 5s
    
	
	//function that cancels the timer when cancelButton is clicked
	/*var cancelTimer = function(){
		clearTimeout(timer1);
	}*/
	
	//$("cancelButton").onclick = cancelTimer;
	
	
	/**** Interval timer ****/
	/* var timer2;
	var counter = 0;
	//function that updates the counter
	var updateCounter = function() {
	    counter++; //update the counter
	    document.getElementById("counter").firstChild.nodeValue = counter; //update the correct span tag
	}

	timer2 = setInterval( updateCounter, 1000 );    // create timer and call updateCounter function	every 1s
	 */
	
	/* Alternative coding 
    // With the one-time timer embedded as the first parameter
    var timer = setTimeout( 
    	function () {
    		$("startup_message").setAttribute("class", "hidden");
    		clearTimeout(timer);
    	},
    	5000 );
    */
};
