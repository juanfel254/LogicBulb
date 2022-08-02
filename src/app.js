const lightOn = "/assets/img/lightOn.png", lightOff = "/assets/img/lightOff.png"; 
const red = "#e93d3d", green = "#41d72f";

const house =
{
	floor1: {
		switch1: document.getElementById('switch1'),
		switch2: document.getElementById('switch2'),
		light: document.getElementById('light1')
	},
	floor2: {
		switch1: document.getElementById('switch3'),
		switch1: document.getElementById('switch3'),
		light: document.getElementById('light2')
	},
	floor3: {
		switch1: document.getElementById('switch5'),
		light: document.getElementById('lgiht3')
	}
};

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

