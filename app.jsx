const app = document.getElementById("app");
const lightOn = "./img/lightOn.png", lightOff =  "./img/lightOff.png" ; 

function Switch(props){

  function handleSwitch() {
    if (!props.switchState){
      props.lightSetState(lightOn);
      props.switchSetState(true);
    } else {
      props.lightSetState(lightOff);
      props.switchSetState(false);
    }
  }

  return (
    <li className="indv-switch-container">
      <label htmlFor={`swtich-floor${props.floorNumber}-ligth${props.lightTag}`}>light {props.lightTag}</label>
      <button 
        className={!props.switchState ? "background-red" : "background-green"}
        id={`swtich-floor${props.floorNumber}-light${props.lightTag}`} 
        onClick={handleSwitch}>{props.switchState ? "On" : "Off"}
      </button>
    </li>
  )
}

function House(){

  const [lightA, setLightA] = React.useState(lightOff);
  const [lightB, setLightB] = React.useState(lightOff);
  const [lightC, setLightC] = React.useState(lightOff);

  const [switchA, setSwitchA] = React.useState(false);
  const [switchB, setSwitchB] = React.useState(false);
  const [switchC, setSwitchC] = React.useState(false);

  return(
    <div className = "house-container">
      <h1 className = "main-title">💡 LogicBulb</h1>

      <div className = "floor-container">
        <h2 className = "floor-name">3rd Floor - Light C</h2>
        <img src = {lightC} alt = "Lightbulb" />
        <ul className = "switches-container">
            <Switch 
            floorNumber = "3" 
            lightTag = "C" 
            switchState  =  {switchC} 
            lightSetState  =  {setLightC}
            switchSetState = {setSwitchC}
            />
        </ul>
      </div>

      <div className = "floor-container">
        <h2 className = "floor-name">2nd Floor - Light B</h2>
        <img src = {lightB} alt = "Lightbulb" />
        <ul className = "switches-container">
            <Switch 
              floorNumber = "2" 
              lightTag = "B" 
              switchState = {switchB} 
              lightSetState  =  {setLightB}
              switchSetState = {setSwitchB}
            />
            <Switch 
              floorNumber = "2" 
              lightTag = "C" 
              switchState = {switchC} 
              lightSetState  =  {setLightC}
              switchSetState = {setSwitchC}
            />
        </ul>
      </div>

      <div className = "floor-container">
        <h2 className = "floor-name">1st Floor - Light A</h2>
        <img src = {lightA} alt = "Lightbulb" />
        <ul className = "switches-container">
          <Switch 
            floorNumber = "1" 
            lightTag = "A" 
            switchState = {switchA} 
            lightSetState  =  {setLightA}
            switchSetState = {setSwitchA}
          />
          <Switch 
            floorNumber = "1" 
            lightTag = "B" 
            switchState = {switchB} 
            lightSetState  =  {setLightB}
            switchSetState = {setSwitchB}
          />
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<House />,app);