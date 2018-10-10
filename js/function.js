function alertSystem() {
	alert("Check out function not operational. Please try again.")
}	

function multiply() {
	var num = document.getElementById("num").innerHTML;
	var qty = document.getElementById("qty").value;
	
	document.getElementById("sub").innerHTML = num * qty;
}

function multiply2() {
	var num = document.getElementById("num2").innerHTML;
	var qty = document.getElementById("qty2").value;
	
	document.getElementById("sub2").innerHTML = num * qty;
}