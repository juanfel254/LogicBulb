import Light from './light/Light.jsx';
import lightOff from  "../img/lightOff.png" ; 
import lightOn from "../img/lightOn.png";  
import "./Floor.css";

export default function Floor({ floorNumber, dual, lightA, switchLightA, lightB, switchLightB }){

  const lightTagA = String.fromCharCode(parseInt(floorNumber)+64);
  
  const checkDual = () => {
    if (dual) {
      const lightTagB = String.fromCharCode(parseInt(floorNumber)+65);
      return (
      <Light 
        floorNumber={floorNumber}
        lightTag = {lightTagB}
        lightState = {lightB}
        lightSwitchState = {switchLightB}
      />)
    }
  }
  
  return (
    <div className = {`floor-container ${lightA ? "day-background": "night-background"}`}>
    <h2 className = {`floor-name ${lightA ? "night" : "day"}`}>Floor {floorNumber} - Light {lightTagA}</h2>
    <img src = {lightA ? lightOn : lightOff} alt = "Lightbulb" />
    <ul className = "switches-container">
        <Light 
        floorNumber = {floorNumber} 
        lightTag = {lightTagA} 
        lightState  =  {lightA} 
        lightSwitchState  =  {switchLightA}
        />
        {checkDual()}
    </ul>
  </div>
  )
}