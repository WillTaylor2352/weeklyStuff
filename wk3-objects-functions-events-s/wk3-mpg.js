//Using console.log for debugging purposes here
//FUNCTION		
		/*pass the id of the html tag object and 
		it will return the html tag object*/
		var $ = function(id){
			//alert("$ function has started for: " + id);
			//console.log("$ function is called for HTML tag with id:  " + id);
			return document.getElementById(id);
		}		
//FUNCTION				
		var numberFormat = function(number, decimal) {
			//alert("numberFormat function has started");
			//console.log("numberFormat function has started");
			return (number).toFixed(decimal);	
		}
//FUNCTION	
		var calculateMPG = function(){
			//alert("calculateMPG function has started");
			//console.log("calculateMPG function has started");
			var isValid = true;

			/*passing the $ function the id (miles/gallons) of the 
			html tag object (input/textbox) once it returns the html tag 
			object (input/textbox with id miles & input/textbox with 
			id gallons), we use the value property to get the value 
			from the html object (user typed value) */
//USER INPUT
			var miles = parseFloat($("miles").value);

			var gallons = parseFloat($("gallons").value);	
			//alert("miles:" + miles + " gallons:" + gallons);
			//console.log("miles:" + miles + " gallons:" + gallons);
//VALIDATE USER INPUT
			if (isNaN(miles) ||  miles <= 0){
			/*passing the $ function the id (error_miles) of the 
			html tag object (span) once it returns the html tag 
			object (span with id error_miles), we get the firstChild
			of the span tag (text object) and then set the value of the
			text object using the nodeValue property */
				$("error_miles").firstChild.nodeValue = "Please enter a number greater than 0";
				//alert("miles entry is invalid");
				//console.log("miles entry is invalid");
				isValid = false;
			}
			else{		
				$("error_miles").firstChild.nodeValue = "*";
				//alert("miles entry is valid");
				//console.log("miles entry is valid");
			}	
			
			if (isNaN(gallons) || gallons <= 0){
				$("error_gallons").firstChild.nodeValue = "Please enter a number greater than 0";
				//alert("gallons entry is invalid");
				//console.log("gallons entry is invalid");
				isValid = false;
			}
			else{
				$("error_gallons").firstChild.nodeValue = "*";
				//alert("gallons entry is valid");
				//console.log("gallons entry is valid");
			} 
//IF USER INPUTS ARE VALID, DO CALCULATION			
			if (isValid == true){
				//alert("all entries are valid and so the calculations begin.");
				//console.log("all entries are valid and so the calculations begin.");

				var mpg = miles/gallons;
				//alert("mpg: " + mpg);
				//console.log("mpg: " + mpg);
				/*passing the $ function the id (answer) of the 
				html tag object (input/textbox) once it returns the 
				html tag object (input/textbox with id answer), we 
				use the value property to set the value of the 
				textbox to the value of mpg */
				$("answer").value = numberFormat(mpg, 2);
			}
		}
//ONLOAD EVENT HANDLER	
		window.onload = function () {
			//alert("onload function has started");
			//console.log("Onload function has started");
		//ATTACH BUTTONS TO EVENT HANDLERS	
			/*passing the $ function the id (execute) of the 
			html tag object (input/button) once it returns the 
			html tag object (input/button with id execute), we 
			use its event handler and attach it to the calculateMPG
			function so that when the button with id execute is
			clicked the calculateMPG function is called */
			$("execute").onclick = calculateMPG;
		//HIGHLIGHT THE FIRST TEXTBOX
			/*Using the focus method of the input/textbox with id
			miles to place the cursor on it*/
			$("miles").focus();
		}	