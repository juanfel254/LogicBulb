import React, { useState } from 'react';
import Light from './light/Light.jsx';
import lightOff from  "../img/lightOff.png" ; 
import lightOn from "../img/lightOn.png";  

export default function Floor({ floorNumber }){

  const [light, setLight] = useState(false);
  const lightTag = String.fromCharCode(parseInt(floorNumber)+64);

  return (
    <div className = "floor-container">
    <h2 className = "floor-name">Floor {floorNumber} - Light {lightTag}</h2>
    <img src = {light ? lightOn : lightOff} alt = "Lightbulb" />
    <ul className = "switches-container">
        <Light 
        floorNumber = {floorNumber} 
        lightTag = {lightTag} 
        lightState  =  {light} 
        lightSetState  =  {setLight}
        />
    </ul>
  </div>
  )
}