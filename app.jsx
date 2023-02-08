const app = document.getElementById("app");

function Floor(props){
  const lightOn = "./img/lightOn.png"; 
  const lightOff =  "./img/lightOff.png";  
  
  const [light, setLight] = React.useState(lightOff);
  const [floorSwitch, setFloorSwitch] = React.useState("Off");

  function handleClick(){
     if (floorSwitch == "Off"){
      setLight(lightOn);
      setFloorSwitch("On");
     }
     else {
      setLight(lightOff);
      setFloorSwitch("Off");
     }
  }

  return (
    <div className="floor-container">
      <h2 className="floor-name">Floor {props.floorNumber}</h2>
      <img src={light} alt="Lightbulb"/>
      <button id={`switch${props.floorNumber}`} onClick={handleClick}>{floorSwitch}</button>
    </div>
  );
}

function House(){

  const lightOn = "./img/lightOn.png", lightOff =  "./img/lightOff.png" ; 
  const red = "#e93d3d", green = "#41d72f";

  const [lightA, setLightA] = React.useState(lightOff);
  const [lightB, setLightB] = React.useState(lightOff);
  const [lightC, setLightC] = React.useState(lightOff);

  const [switchA, setSwitchA] = React.useState("Off");
  const [switchB, setSwitchB] = React.useState("Off");
  const [switchC, setSwitchC] = React.useState("Off");

  function handleSwitchA(){
    if (switchA == "Off"){
     setLightA(lightOn);
     setSwitchA("On");
    }
    else {
     setLightA(lightOff);
     setSwitchA("Off");
    }
  };

 function handleSwitchB(){
    if (switchB == "Off"){
    setLightB(lightOn);
    setSwitchB("On");
    }
    else {
    setLightB(lightOff);
    setSwitchB("Off");
    }
  };

function handleSwitchC(){
    if (switchC == "Off"){
    setLightC(lightOn);
    setSwitchC("On");
    }
    else {
    setLightC(lightOff);
    setSwitchC("Off");
    }
  };

  return(
    <div className="house-container">
      <h1 className="main-title">💡 LogicBulb</h1>

      <div className="floor-container">
        <h2 className="floor-name">3rd Floor</h2>
        <img src={lightC} alt="Lightbulb" />
        <ul className="switches-container">
          <li className="indv-switch-container">
            <label htmlFor="switch-floor3-lightC">light C</label>
            <button id="switch-floor3-lightC" onClick={handleSwitchC}>{switchC}</button>
          </li>
        </ul>
      </div>

      <div className="floor-container">
        <h2 className="floor-name">2nd Floor</h2>
        <img src={lightB} alt="Lightbulb" />
        <ul className="switches-container">
          <li className="indv-switch-container">
            <label htmlFor="switch-floor2-lightB">light B</label>
            <button id="switch-floor2-lightB" onClick={handleSwitchB}>{switchB}</button>
          </li>
          <li className="indv-switch-container">
            <label htmlFor="switch-floor2-lightC">light C</label>
            <button id="switch-floor2-lightC" onClick={handleSwitchC}>{switchC}</button>
          </li>
        </ul>
      </div>

      <div className="floor-container">
        <h2 className="floor-name">1st Floor</h2>
        <img src={lightA} alt="Lightbulb" />
        <ul className="switches-container">
          <li className="indv-switch-container">
            <label htmlFor="switch-floor1-lightA">light A</label>
            <button id="switch-floor1-lightA" onClick={handleSwitchA}>{switchA}</button>
          </li>
          <li className="indv-switch-container">
            <label htmlFor="switch-floor1-lightB">light B</label>
            <button id="switch-floor1-lightB" onClick={handleSwitchB}>{switchB}</button>
          </li>
        </ul>
      </div>

    </div>
  );
}

ReactDOM.render(<House />,app);