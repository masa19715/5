$('#formBuyScript').on('submit', function(event) {
	event.preventDefault();
	
	var data = $(this).serialize();
	
	$.ajax({
		type: "POST",
		url: "../engine/classes/freekassa/actions.php",
		data: data, cache: false, success:function(response) {
			$("#buyResult").html(response);
		}
	});
});

$('#formBuyScript_2').on('submit', function(event) {
	event.preventDefault();
	
	var data = $(this).serialize();
	
	$.ajax({
		type: "POST",
		url: "../engine/classes/freekassa/actions.php",
		data: data, cache: false, success:function(response) {
			$("#buyResult_2").html(response);
		}
	});
});