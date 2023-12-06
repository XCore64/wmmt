function alertSystem() {
	alert("Check out function not operational. Please try again at a later time.");
}	

function emergencyAlertSystem() {
	alert("We interrupt this program because of a State emergency. Important information will follow.");
}	

function formSubmit(form) {
	alert("Contact form submitted");
}	

function validationForm(form){
	//name validationForm
	if(form.name.value == ""){
		alert("Please enter your first name.");
		form.name.focus();
		return false;
	}
	//lname validationForm
	if(form.lname.value == ""){
		alert("Please enter your last name.");
		form.lname.focus();
		return false;
	}
	//e-mail validationForm
	if(form.email.value == ""){
		alert("Please enter your e-mail.");
		form.email.focus();
		return false;
		}
	//e-mail char validationForm
	if (form.email.value != "") {
		var at = email.indexOf("@");
		var dot = email.lastIndexOf(".");
		if(at<1 || dot<at+2 || dot+2>=email.length){
			alert("Please enter your e-mail in a valid format.");
			return false;
		}
	}
	//message validationForm
	if(form.message.value ==""){
		alert("Please enter your message/inquiry.");
		form.message.focus();
		return false;
	}	
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

function multiply3() {
	var num = document.getElementById("num3").innerHTML;
	var qty = document.getElementById("qty3").value;
	
	document.getElementById("sub3").innerHTML = num * qty;
}

function multiply4() {
	var num = document.getElementById("num4").innerHTML;
	var qty = document.getElementById("qty4").value;
	
	document.getElementById("sub4").innerHTML = num * qty;
}

function multiply5() {
	var num = document.getElementById("num5").innerHTML;
	var qty = document.getElementById("qty5").value;
	
	document.getElementById("sub5").innerHTML = num * qty;
}

function multiply6() {
	var num = document.getElementById("num6").innerHTML;
	var qty = document.getElementById("qty6").value;
	
	document.getElementById("sub6").innerHTML = num * qty;
}

function multiply7() {
	var num = document.getElementById("num7").innerHTML;
	var qty = document.getElementById("qty7").value;
	
	document.getElementById("sub7").innerHTML = num * qty;
}

function multiply8() {
	var num = document.getElementById("num8").innerHTML;
	var qty = document.getElementById("qty8").value;
	
	document.getElementById("sub8").innerHTML = num * qty;
}

function multiply9() {
	var num = document.getElementById("num9").innerHTML;
	var qty = document.getElementById("qty9").value;
	
	document.getElementById("sub9").innerHTML = num * qty;
}

function multiply0() {
	var num = document.getElementById("num0").innerHTML;
	var qty = document.getElementById("qty0").value;
	
	document.getElementById("sub0").innerHTML = num * qty;
}
