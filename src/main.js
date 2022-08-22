const floor1 = {
		switch1: document.getElementById('switch1'),
		switch2: document.getElementById('switch2'),
		light: document.getElementById('light1')
	};
const floor2 = {
		switch1: document.getElementById('switch3'),
		switch2: document.getElementById('switch2'),
		light: document.getElementById('light2')
	};
const floor3 = {
		switch1: document.getElementById('switch5'),
		light: document.getElementById('light3')
	};

const address = "http://127.0.0.1:5500";
const lightOn = address + "/assets/img/lightOn.png" 
const lightOff = address +  "/assets/img/lightOff.png";  
const red = "#e93d3d", green = "#41d72f";

//Since this gets an array of elements, an special addEventListener is needed. 
let lightSwitches = document.getElementsByClassName('the-lightSwitch');

// 4. Turn On/Off an specific light
function changeLight(floorNum) {
	if (floorNum.light.src == lightOn) {
		floorNum.light.src = lightOff; 
	}
	else if (floor1.light.src == lightOff) {
		floorNum.light.src = lightOn;
	}
};

// 3. Change the switch style 
function changeSwitch(switchBtn) {
	if (switchBtn.innerText == 'Off') {
		switchBtn.innerText = 'On';
		switchBtn.style.backgroundColor = green;
	}
	else if (switchBtn.innerText == 'On') {
		switchBtn.innerText = 'Off';
		switchBtn.style.backgroundColor = red;
	}
}

// 2. Call function to change switch and check which light to turn
function checkLight() {
	changeSwitch(this);
	// Two different ways to compare id's, directly from object or use strings
	if (this.id == floor1.switch1.getAttribute('id')) {
		changeLight(floor1);
	}
	else if (this.id == 'switch2' || this.id == 'switch3') {
		changeLight(floor2);
	}
	else if (this.id == 'switch4' || this.id == 'switch5') {
		changeLight(floor3);
	}
}

// 1. special addEventListener for 'lightSwitches'
Array.from(lightSwitches).forEach(function(lightSwitches) {
	lightSwitches.addEventListener('click', checkLight);
  });