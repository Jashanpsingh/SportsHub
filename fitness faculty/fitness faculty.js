$(document).ready(function(){
	$(".link1").mouseover(function(){
		$(".link1").css("color","white");
	});
	$(".link2").mouseover(function(){
		$(".link2").css("color","white");
	});
	$(".link3").mouseover(function(){
		$(".link3").css("color","white");
	});
	$(".link1").mouseout(function(){
		$(".link1").css("color","cyan");
	});
	$(".link2").mouseout(function(){
		$(".link2").css("color","cyan");
	});
	$(".link3").mouseout(function(){
		$(".link3").css("color","cyan");
	});
})

$(document).ready(function(){
	$(".btn").click(function(){
		$("#myModal1").modal({backdrop: true});
	});
})
$(document).ready(function(){
	$("#send").click(function(){
		window.alert("Your request has been accepted.The details of the appointment will be shared to you through your email");
	});
})