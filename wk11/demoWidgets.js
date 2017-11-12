$(document).ready(function() 
	{
		/***DatePicker***/
		/****************/
		$( "#datepickerfrom" ).datepicker({
			//choose the options you want
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			numberOfMonths: 2,
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			minDate: "-20D", //20 days before today's date
			maxDate: "+1M +10D", //1 month and 10 days after today's date
			showWeek: true,
			firstDay: 1
		});
		/* Other dateformats
		(default) mm/dd/yy
		yy-mm-dd, 
		d MM, y, 
		DD, d MM, yy, 
		'day' d 'of' MM 'in the year' yy
		*/
		//$( "#datepickerfrom" ).datepicker( "option", "dateFormat", "d M, y");
	
		$( "#datepickerto" ).datepicker({
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			numberOfMonths: 2
		});
		//$( "#datepickerto" ).datepicker( "option", "dateFormat", "d M, y");

		/***Slider***/
		/************/		
 /*		function updateText(){
			//reads/gets the current value from the slider as a string value
			//have to convert to Float/Int to use it as a number
			var v = $("#slider").slider("value");
			//displays the current value on the slider in a span tag
			$("#sliderVal").text(v);
		}

		$("#slider").slider({
			orientation: "horizontal", //vertical or horizontal
			max: 100,
			value: 0, //start value
			slide: updateText, //function to call when slide is moved
			change: updateText //function to call when slide is changed
		});	 
*/
		/***Button/Dialog***/
		/*******************/		
		//dialog form that opens on a button click
/*	 	$("#quickView" ).click(function() {
				$( "#dialog" ).dialog({
					modal: true,
					width: 300,
					buttons: {
						Cancel: function(){
							$("#dialog").dialog("close");
						},
						Submit: function(){
								//whatever you want to do here		
						}//end Submit	
					 }//end Button
				});// end dialog
			});	//end click 
*/		
		/***Tabbed Content***/
		/********************/
		/*$("#tabs").tabs({
			event: "mouseover"
		});*/
	});