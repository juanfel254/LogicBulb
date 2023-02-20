import "./Light.css"

export default function Light({ floorNumber, lightTag, lightState, lightSetState }){
  
  const handleSwitch = () => {
    lightState ? lightSetState(false) : lightSetState(true);
  }

  return (
    <li className="indv-switch-container">
      <label htmlFor={`swtich-floor${floorNumber}-ligth${lightTag}`}>light {lightTag}</label>
      <button 
        className={lightState ? "background-green" : "background-red"}
        id={`swtich-floor${floorNumber}-light${lightTag}`} 
        onClick={handleSwitch}>{lightState ? "On" : "Off"}
      </button>
    </li>
  )
}