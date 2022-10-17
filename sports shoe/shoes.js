function myFunction(){
  alert("You Are Going To Add In Cart");
}
function myFunction2(){window.prompt("Enter the Quantity: "," ");
  window.prompt("Enter address:"," ");
  window.prompt("Enter payment method (available methods are:Cash on Delivery,Net Banking,UPI)");
  window.alert("Your Order has been placed");;
}

function Homepage(){
    alert("You Are Going To Leave This Page")
}

function Badminton(){
    alert("You Are Going To Enter Badminton equipments Page")
}
function Boxing(){
    alert("You Are Going To Enter Boxing equipments Page")
}
function Hockey(){
    alert("You Are Going To Enter Hockey equipments Page")
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

$(document).ready(function(){
  $(".d1").hover(function(){
    $(this).css("color", "red");
    }, function(){
    $(this).css("color", "");
  });
});

$(document).ready(function (){
 $(".d2"). hover (function (){
  $(this).css("transform","scale(1.1)");
},function(){
    $(this).css("transform","scale(1)");
  });
});

function addCart(){
  var count = document.getElementById('totalCount').innerHTML;

  alert("Your item has been added to Cart");
  document.getElementById('totalCount').innerHTML = Number(count)+1;
}

function openForm() {
  document.getElementById("myForm").style.display="block";
}

function closeForm() {
  document.getElementById("myForm").style.display="none";
}