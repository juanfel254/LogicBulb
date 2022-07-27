const lightOn = "/assets/img/lightOn.png", lightOff = "/assets/img/lightOff.png"; 
const red = "#e93d3d", green = "#41d72f";

var switch1 = document.getElementById('switch1').innerHTML;
var switch2 = document.getElementById('switch2').innerHTML;
var switch3 = document.getElementById('switch3').innerHTML;
var switch4 = document.getElementById('switch4').innerHTML;
var switch5 = document.getElementById('switch5').innerHTML;

var light1 = document.getElementById('light1').innerHTML;
var light2 = document.getElementById('light2').innerHTML;
var light3 = document.getElementById('light3').innerHTML;


function getHtml (elementId) {
	return document.getElementById(elementId).innerHTML;
}

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

function switchLightB (buttonId) {
	
	var switch2 = getHtml('switch2'), switch3 = getHtml('switch3');

	if ( switch2 == 'Off' && switch3 == 'Off') {
		switchAction(switch2, buttonId, 'light2');

		/*document.getElementById(buttonId).innerHTML = "On";
		document.getElementById(buttonId).style.backgroundColor = green;
		document.getElementById('light2').src = lightOn;*/
	}
	else if (switch2 == 'On') {
		switchAction(switch2, buttonId, 'light2');
		/*
		document.getElementById(buttonId).innerHTML = "Off";
		document.getElementById(buttonId).style.backgroundColor = red;
		document.getElementById('light2').src = lightOff;
		*/
	}
}

