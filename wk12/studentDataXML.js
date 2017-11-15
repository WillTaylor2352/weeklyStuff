$(document).ready(function(){			
		$.get("students.xml", function(data) {
				//$("#student").html("");
				//alert(data);
				var studentArray = $(data).find("Student");
				
				studentArray.each(function() {	
					var sname = $(this).find("name").text();
					//var last = $(this).find("name").children().eq(1).text();
					var sid = $(this).find("id").text();
					var fees = $(this).find("fees").text();
					var units = $(this).find("fees").attr("units");
					//console.log("---" + sname + "---" + sid + "---" + fees + "---" + units);
					$("#student").append(
						"<h3>" + sname + "</h3>ID:" + 
						sid + "<br>Fees to be paid:" + 
						fees + " " + units + "<br>");
				});
			}, "xml");
});
