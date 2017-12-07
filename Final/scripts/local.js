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
 var sound;
 var audio = new Audio();
 
var loadSlider = function(){
	var bxSlider = $("#bxSlider").bxSlider({
		//auto: true,
		pager:true,
		pagerType:'short',
		autoControls: true,
		mode: 'fade',
		captions: true,
		//adaptiveWidth: true,
		adaptiveHeight:true,
		slideWidth:450,
		//height:350,
		touchEnabled:false,
		onSliderLoad: function(currentIndex) {     
			$('#bxSlider').children().eq(currentIndex).addClass('active-slide');
			
		},
		onSlideAfter: function($slideElement){
			$('#bxSlider').children().removeClass('active-slide');
			$slideElement.addClass('active-slide');
			
		},
		onSlideBefore: function($slideElement, oldIndex){
		//The idea for this code found here: https://stackoverflow.com/questions/2988050/html5-audio-player-jquery-toggle-click-play-pause
		//Thank you user: Thash. (.trigger)
			$('#bxSlider').children().eq(oldIndex).find("#audios").trigger("pause");
			
		//The idea for this code found here: 
		//Thank you user: jony89 ([index])
			$('#bxSlider').children().find("#audios")[oldIndex].currentTime = 0;
			
		}
		
	});
}
$(document).ready(function() {
//code for quantity Slider
	$("#quantitySlider").slider({
		
		value: 5,
		min: 5,
		max: 30,
		step: 1,
		//value: select[ 0 ].selectedIndex + 10,
		slide: function( event, ui ) {
			$( "#numberOfSongs" ).val( ui.value );
		}
    
    //$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	/*	slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
		}
	*/
	});
	
	$( "#amount" ).val($( "#quantitySlider" ).slider( "value" ) );
	
	$("#submit").click(function(){	
		var srchUrl = "https://itunes.apple.com/" + $("#countrySel").val() + "/rss/topsongs/limit=" + 
							$("#numberOfSongs").val() + "/xml";
		$(".bx-wrapper").remove();
			$("#bxSlideWrap").append(
				"<ul id='bxSlider'></ul>"
			);
		$.get(srchUrl, function(data) { // supply with src to itunes xml page
			
			var entryArray = $(data).find("entry");// finds entries in the rss feed
	
			
	
			entryArray.each(function() {	
				
				var eTitle = $(this).find("title").text();
				var eArtistName = $(this).find("im\\:artist").text();
				var eAlbumName = $(this).find("im\\:collection im\\:name").text();
				var eArtistImage = $(this).find("im\\:image[height='170']").text();
				var eAudio = $(this).find("link[title='Preview']").attr("href");
				
			/*	$("#etitle").val(eTitle);
				$("#eaname").val(eArtistName);
				$("#ealname").val(eAlbumName);
				$("#eimgsrc").val(eArtistImage);
				$("#eaudio").val(eAudio);
			*/	
				//console.log("---" + sname + "---" + sid + "---" + fees + "---" + units);
				$("#bxSlider").append( 
					"<li>" +
						"<table class='siteData' border='1'>" +
							"<tr id='row1'>" +
								"<th>" +
									"Title" +
								"</th>" +
								"<td>" +
									eTitle +
								"</td>" +
							"</tr>" +
							"<tr id='2row'>" +
								"<th>" +
									"Artist" +
								"</th>" +
								"<td>" +
									eArtistName +
								"</td>" +
							"</tr>" +
							"<tr id='3row'>" +
								"<th>" +
									"Album" +
								"</th>" +
								"<td>" +
									eAlbumName +
								"</td>" +
							"</tr>" +
							"<tr id='4row'>" +
								"<th>" +
									"Album art" +
								"</th>" +
								"<td>" +
									"<img class='activeImg' src='" + eArtistImage + "'>" +
								"</td>" +
							"</tr>" +
							"<tr id='6row'>" +
								"<th>" +
									"Preview" +
								"</th>" +
								"<td>" +
									"<audio id='audios' src='" + eAudio + "' type='audio/mp3' controls></audio>" +
								"</td>" +
							"</tr>" +
							
						"</table>" +
					"</li>"
				);
				
			/*
				$("#bxSlider").append(
					"<br><b>Artist's image: </b><img src='" + eArtistImage + "'>" +
					"<br><b>Audio: </b><audio controls><source src='" + eAudio + "' type='audio/mp3'></audio>" +
					"<br><b>Title: </b>" + eTitle + 
					"<br><b>Artist name: </b>" + eArtistName + 
					"<br><b>Album name: </b>" + eAlbumName +
					"<br>------------------"
				);
			*/	
			
			});
			$("#footer").attr("id", "footer2");
			loadSlider();
		}, "xml");
		
	});
});