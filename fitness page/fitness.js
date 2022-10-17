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
	$(".link1").mouseout(function(){
		$(".link1").css("color","cyan");
	});
	$(".link2").mouseout(function(){
		$(".link2").css("color","cyan");
	});
	$(".link3").mouseout(function(){
		$(".link3").css("color","cyan");
	});
	$(".link4").mouseout(function(){
		$(".link4").css("color","cyan");
	});
})
$(document).ready(function(){
	$(".buy-now").click(function(){
		$("#myModal1").modal({backdrop: true});
	});
})

$(document).ready(function(){
	$("#send").click(function(){
		alert("Your");
	});
})


function addCart(){
	var count = document.getElementById('totalCount').innerHTML;
	alert("Item has been added to Cart");
	document.getElementById('totalCount').innerHTML= Number(count)+1;
}
function Delivery(){
    alert("Standard Delivery Charges:- INR 40")
}
function payment(){
    alert("You can Pay online as well as COD Avilable...")
}
function Return(){
    alert("No Return Avilable....")
}
