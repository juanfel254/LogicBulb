import "./Switch.css"
import lightOff from  "../img/lightOff.png" ; 
import lightOn from "../img/lightOn.png";  

export default function Switch(props){
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