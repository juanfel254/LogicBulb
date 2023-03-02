import "./Light.css"

export default function Light({ floorNumber, lightTag, lightState, lightSwitchState }){
  
  return (
    <li className={`indv-switch-container ${lightState ? "night" : "day"}`}>
      <label htmlFor={`swtich-floor${floorNumber}-ligth${lightTag}`}>light {lightTag}</label>
      <button 
        className={lightState ? "background-green" : "background-red"}
        id={`swtich-floor${floorNumber}-light${lightTag}`} 
        onClick={lightSwitchState}>
        {lightState ? "On" : "Off"}
      </button>
    </li>
  )
}