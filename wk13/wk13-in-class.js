$(document).ready(function(){			
		// Handle the search button's click event
			$("#btnSearch").click(function() {
				// Reset the div element in case a second search is made
				$("#youtube").html("");
				
				// Set the search term
				var searchTerm = "";
				
				if (!$("#search").val() == "") {
					searchTerm = $("#search").val();
				
				} else { // If it is empty, alert the user
					alert("You must enter a search term!");
				}
		
				// Build the custom YouTube URL based on the search term and number of videos
				// This returns data for only one video as maxResult is set to 1
				/*** 1. Add your API Key below ***/
				var url = "https://www.googleapis.com/youtube/v3/search?q=" + searchTerm + "&part=snippet&maxResults=1&key=YOUR_API_KEY";
			
				$.getJSON(url, function(data){
					alert(data);
					var id = /***2. What would be the code here to get the videoID? ***/;
					var title = /***3. What would be the code here to get the title? ***/;
					var link = "https://www.youtube.com/watch?v=" + id;
					$("#youtube").append(/***5. Display the data here ***/);			
				});
			
			});
});
