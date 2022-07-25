function changeSwitch (buttonId) {
	var switchId = document.getElementById(buttonId).innerHTML;
	if (switchId == "On") {
		document.getElementById(buttonId).innerHTML = "Off";
		document.getElementById("light1").src = "./assets/img/lightOn.png";
	}
	else if (switchId == "Off") {
		document.getElementById(buttonId).innerHTML = "On";
		document.getElementById("light1").src = "./assets/img/lightOff.png";
	}
}

