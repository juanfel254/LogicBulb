const app = document.getElementById("app");

function Switch(props){
  return (
    <li className="indv-switch-container">
      <label htmlFor={`swtich-floor${props.floorNumber}-ligth${props.lightTag}`}>light {props.lightTag}</label>
      <button 
        className={!props.switchState ? "background-red" : "background-green"}
        id={`swtich-floor${props.floorNumber}-light${props.lightTag}`} 
        onClick={props.swtichSetState}>{props.switchState ? "On" : "Off"}
      </button>
    </li>
  )
}

function House(){

  const lightOn = "./img/lightOn.png", lightOff =  "./img/lightOff.png" ; 

  const [lightA, setLightA] = React.useState(lightOff);
  const [lightB, setLightB] = React.useState(lightOff);
  const [lightC, setLightC] = React.useState(lightOff);

  const [switchA, setSwitchA] = React.useState(false);
  const [switchB, setSwitchB] = React.useState(false);
  const [switchC, setSwitchC] = React.useState(false);

  function handleSwitchA(){

    if (!switchA){
     setLightA(lightOn);
     setSwitchA(true);
    }
    else {
     setLightA(lightOff);
     setSwitchA(false);
    }
  };

 function handleSwitchB(){
    if (!switchB){
    setLightB(lightOn);
    setSwitchB(true);
    }
    else {
    setLightB(lightOff);
    setSwitchB(false);
    }
  };

  function handleSwitchC(){
    if (!switchC){
    setLightC(lightOn);
    setSwitchC(true);
    }
    else {
    setLightC(lightOff);
    setSwitchC(false);
    }
  };

  return(
    <div className="house-container">
      <h1 className="main-title">💡 LogicBulb</h1>

      <div className="floor-container">
        <h2 className="floor-name">3rd Floor - Light C</h2>
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
        <h2 className="floor-name">2nd Floor - Light B</h2>
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
        <h2 className="floor-name">1st Floor - Light A</h2>
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