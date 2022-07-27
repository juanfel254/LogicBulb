const lightOn = "/assets/img/lightOn.png";
const lightOff = "/assets/img/lightOff.png";

function changeSwitch (buttonId) {
	var switchId = document.getElementById(buttonId).innerHTML;
	if (switchId == "On") {
		document.getElementById(buttonId).innerHTML = "Off";
		document.getElementById("light1").src = lightOn; // Not working cus the light number
	}
	else if (switchId == "Off") {
		document.getElementById(buttonId).innerHTML = "On";
		document.getElementById("light1").src = lightOff;
	}
}

