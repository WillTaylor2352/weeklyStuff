
$(document).ready(function(){
	var slider = $(".slider").bxSlider({
		//auto: true,
		//autoControls: true,
		mode: 'fade',
		captions: true,
		//minSlides: 2,
		//maxSlides:2,
		slideWidth: 800,
		//6slideHeight: 300
		//slideMargin: 10
		//preloadImages:"all",
		adaptiveHeight:true,
		onSliderLoad: function(currentIndex) {     
			$('.slider').children().eq(currentIndex).addClass('active-slide');
		},
		onSlideAfter: function($slideElement){
			$('.slider').children().removeClass('active-slide');
			$slideElement.addClass('active-slide');
		}
	});
	
	$("#pSpan").mouseenter(function(){
		$("#pSpan").animate({
			opacity: 1
		});
		$(this).css('cursor', 'default');
	});
	$(".bx-viewport").mouseenter(function(){
		$(".active-slide img").animate({
			opacity: .8,
			duration: 600
		});
		$(this).css('cursor', 'pointer');
	});
	$(".bx-viewport").mouseout(function(){
		$(".active-slide img").animate({
			opacity: 1,
			duration: 500,
			
		});
	});
	
	
	$(".bx-viewport").click(function() {
		
		$(".bx-prev").addClass('hide');
		$(".bx-next").addClass('hide');
		
		
		$( "#dialogQV" ).dialog({
			modal: true,
			width: 300,
			show:{
				effect: "fade",
				duration: 500
			},
			hide: {
				effect: "fade",
				duration: 500
			},
			buttons: {
				Cancel: function(){
					$(this).dialog("close");
					$("#titlePopShow").val("");
					$("#descPopShow").val("");
					$("#linkPopShow").html("");
					
					$(".bx-prev").removeClass('hide');
					$(".bx-next").removeClass('hide');
					
					
				},
				Show: function(){
					var thisSlideImgID = $(".active-slide img").attr("id");
					$.ajax({
						mimeType: 'text/plain; charset=x-user-defined',
						url:         "links.json",
						type:        "GET",
						dataType:    "json",
						cache:       false,
						success:     function(data){
							//console.log(data)
							$.each(data, function(index, data){
								//console.log()
								if(index === thisSlideImgID){
									//console.log(data)
									//console.log(index, data)
									$("#linkPopShow").html(
										"<a href='" + data + "' target='_blank'>" + data + "</a>"
									);
								}
								
							} )
						}
					});
					
					$("#titlePopShow").val($(".active-slide img").attr("title"));
					$("#descPopShow").val($(".active-slide img").attr("desc"));
				
				}//end Show	
			 }//end Button
		});// end dialog
	});	//end click
});