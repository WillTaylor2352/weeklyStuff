$(document).ready(function() {
	//$("#email").focus();
	// put today's date in the start_date text box
	var today = new Date();
	var month = today.getMonth() + 1; // Add 1 since months start at 0
	var day = today.getDate();
	var year = today.getFullYear();
	var dateText = ((month < 10) ? "0" + month : month) + "/"; // Pad month
	dateText += ((day < 10) ? "0" + day: day) + "/"; // Pad date
	dateText += year;
	$("#start_date").val(dateText);
		
	$("#member_form").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 6
			},
			verify: {
				required: true,
				equalTo: "#password"
			},
			first_name: {
				required: true
			},
			last_name: {
				required: true
			},
			state: {
				required: true,
				rangelength: [2, 2]
			},
			zip: {
				required: true,
				rangelength: [5, 10]
			},
			phone: {
				required: true,
				phoneUS: true
			},
			start_date: {
				required: true,
				date: true
			},
			card_number: {
				required: true//,
				//creditcard: true
			},
			expiry_date: {
				required: true
			}
			
		}
	}); // end validate
	$(":text, :password").after("<span>*</span>");
	
	$(":text, :password").focusin(function(){	
		$(this).css({"background-color":"yellow"});	
	});
	
	$(":text, :password").focusout(function(){	
		$(this).css({"background-color":"white"});	
	});
	
	$("#submit").click(function(){
			var ccType = $("#cc_type:checked").val();
			console.log(ccType);
		
			var selectOption = $("#expiry_year :selected").val(); 
			console.log(selectOption);
		
			var checkOptions = [];
			$("#interest:checked").each(function(){
				checkOptions.push($(this).val());
			});
			console.log(checkOptions);
	});
}); // end ready
