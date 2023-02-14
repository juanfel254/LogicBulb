const app = document.getElementById("app");

function Switch(props){

  return (
    <li className="indv-switch-container">
      <label htmlFor={`swtich-floor${props.floorNumber}-ligth${props.lightTag}`}>light {props.lightTag}</label>
      <button 
        className={props.switchState == "Off" ? "background-red" : "background-green"}
        id={`swtich-floor${props.floorNumber}-light${props.lightTag}`} 
        onClick={props.swtichSetState}>{props.switchState}
      </button>
    </li>
  )
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
            <Switch 
            floorNumber="3" 
            lightTag="C" 
            switchState={switchC} 
            swtichSetState={handleSwitchC}
            />
        </ul>
      </div>

      <div className="floor-container">
        <h2 className="floor-name">2nd Floor</h2>
        <img src={lightB} alt="Lightbulb" />
        <ul className="switches-container">
            <Switch 
              floorNumber="2" 
              lightTag="B" 
              switchState={switchB} 
              swtichSetState={handleSwitchB}
            />
            <Switch 
              floorNumber="2" 
              lightTag="C" 
              switchState={switchC} 
              swtichSetState={handleSwitchC}
            />
        </ul>
      </div>

      <div className="floor-container">
        <h2 className="floor-name">1st Floor</h2>
        <img src={lightA} alt="Lightbulb" />
        <ul className="switches-container">
          <Switch 
            floorNumber="1" 
            lightTag="A" 
            switchState={switchA} 
            swtichSetState={handleSwitchA}
          />
          <Switch 
            floorNumber="1" 
            lightTag="B" 
            switchState={switchB} 
            swtichSetState={handleSwitchB}
          />
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<House />,app);