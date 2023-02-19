import React, { useState } from 'react';
import "./House.css"
import Switch from './switch/Switch.jsx';  
import lightOff from  "./img/lightOff.png";
import lightOn from "./img/lightOn.png"; 

export default function House(){

  const [lightA, setLightA] = useState(lightOff);
  const [lightB, setLightB] = useState(lightOff);
  const [lightC, setLightC] = useState(lightOff);

  const [switchA, setSwitchA] = useState(false);
  const [switchB, setSwitchB] = useState(false);
  const [switchC, setSwitchC] = useState(false);

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