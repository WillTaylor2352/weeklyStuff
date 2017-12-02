/***WK11 In-Class: 
	1. Create a custom theme using the themeroller http://jqueryui.com/themeroller/
	   Use your custom theme for this program. Don't spend too much time on color 
	   selection. The main purpose of this exercise is for you to know how to 
	   add a custom theme.
***/
$(document).ready(function(){
		

		
		//this function converts a RGB value into a HEX
		//returns a string of HEX value
		//do not have to comment
		function hexFromRGB(r, g, b) {
			var hex = [
				r.toString( 16 ),
				g.toString( 16 ),
				b.toString( 16 )
			];
			$.each( hex, function( nr, val ) {
				if ( val.length === 1 ) {
					hex[ nr ] = "0" + val;
				}
			});
			return "#" + hex.join( "" ).toUpperCase();
		}
		//function that is called when slider is moved
		function refreshSwatch() {
			//2. comment this code
			var red = $( "#red" ).slider( "value" );
			var green = $( "#green" ).slider( "value" );
			var blue = $( "#blue" ).slider( "value" );
			
			var hex = hexFromRGB( red, green, blue );
			$( "#swatch" ).css( "background-color", "#" + hex );
			$("#redForm").val($("#red").slider("value"));
			$("#greenForm").val($("#green").slider("value"));
			$("#blueForm").val($("#blue").slider("value"));
		}
		
		//sets up the sliders initially
		$( "#red, #green, #blue" ).slider({
				orientation: "horizontal",
				range: "min",
				max: 255,
				value: 0,
				slide: refreshSwatch,
				change: refreshSwatch,
				/*function(){
					$("#redForm").val($("#red").slider("value"));
					$("#greenForm").val();
					$("#blueForm").val();
				}*/
		});
		
		
		/*** 3. a. Add code here to set and display the initial values of R, G, B. 	 
				Here are the initial values to set - R: 255 G: 130 B: 30
				b. Add code in the refreshSwatch function above to display
				   the R, G and B values and Hex value as the slider is changed
		***/
		
		
		$("#quickView" ).click(function() {
				$("#redPopShow").val($("#red").slider("value"));
				$("#greenPopShow").val($("#green").slider("value"));
				$("#bluePopShow").val($("#blue").slider("value"));			
				$( "#dialogQV" ).dialog({
					modal: true,
					width: 300,
						
					buttons: {
						Cancel: function(){
							$(this).dialog("close");
						},
						Show: function(){
						/***4. a. Add HTML code for a form dialog that has a textArea.   
						          Look at the demoWidgets.html file.  
							   b. Add code here to display the RGB & Hex values in 
							      a textArea when the Show button is clicked	***/  		
							$("#hexVal").val(hexFromRGB(
								$( "#red" ).slider( "value" ),
								$( "#green" ).slider( "value" ),
								$( "#blue" ).slider( "value" )
							));

							
						}//end Show	
					 }//end Button
				});// end dialog
			});	//end click
		
});

