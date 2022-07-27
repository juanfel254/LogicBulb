const lightOn = "/assets/img/lightOn.png", lightOff = "/assets/img/lightOff.png"; 
const red = "#e93d3d", green = "#41d72f";


function switchAction (switchId, buttonId, lightId) {
	if (switchId == 'On') {
		document.getElementById(buttonId).innerHTML = "Off";
		document.getElementById(buttonId).style.backgroundColor = red;
		document.getElementById(lightId).src = lightOff; 
	}
	else if (switchId == "Off") {
		document.getElementById(buttonId).innerHTML = "On";
		document.getElementById(buttonId).style.backgroundColor = green;
		document.getElementById(lightId).src = lightOn;
	}
}
 
function switchLightA (buttonId, lightId) {
	var switchId = document.getElementById(buttonId).innerHTML;
	switchAction(switchId, buttonId, lightId);
}

