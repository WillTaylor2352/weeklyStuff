$(document).ready(function(){			
		$.getJSON("students.json", function(data) {
				//$("#student").html("");
				//alert(data);
				var studentArray = data.students;
				//alert(data.students);

				for(var i=0; i< studentArray.length; i++){
					   var sname = studentArray[i].firstName + " " + studentArray[i].lastName;
					   var sid = studentArray[i].id;
					   var fees = studentArray[i].fees.value;
					   var units = studentArray[i].fees.units;
					   $("#student").append(
						"<h3>" + sname + "</h3>ID:" + 
						sid + "<br>Fees to be paid:" + 
						fees + " " + units + "<br>");
				}

			});
});
