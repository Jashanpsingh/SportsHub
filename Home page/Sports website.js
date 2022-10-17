$(document).ready(function(){
	$("#sports1").click(function(){
 		$("#sportsOp").slideToggle();
	})
})
$(document).ready(function(){
	$("#shoes1").click(function(){
	 	$("#shoesOp").slideToggle();
	})
})
$(document).ready(function(){
	$("#fitness1").click(function(){
		$("#fitnessOp").slideToggle();
	})
}) 
$(document).ready(function(){
	$("#acc1").click(function(){
		$("#accessoriesOp").slideToggle();
	})
}) 



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
	$(".link4").mouseover(function(){
		$(".link4").css("color","white");
	});
	$(".link5").mouseover(function(){
		$(".link5").css("color","white");
	});
	$(".link1").mouseout(function(){
		$(".link1").css("color","violet");
	});
	$(".link2").mouseout(function(){
		$(".link2").css("color","violet");
	});
	$(".link3").mouseout(function(){
		$(".link3").css("color","violet");
	});
	$(".link4").mouseout(function(){
		$(".link4").css("color","violet");
	});
	$(".link5").mouseout(function(){
		$(".link5").css("color","violet");
	});
})

$(document).ready(function(){
	$("#deliveryCharges").click(function(){
		alert("Standard Delivery Charges:- INR 40");
	})
})

$(document).ready(function(){
	$("#paymentOptions").click(function(){
		alert("You can Pay online as well as COD Avilable...");
	})
})
$(document).ready(function(){
	$("#return").click(function(){
		alert("Returns are different for different products");
	})
})