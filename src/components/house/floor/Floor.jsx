import React, { useState } from 'react';
import Light from './light/Light.jsx';
import lightOff from  "../img/lightOff.png" ; 
import lightOn from "../img/lightOn.png";  

export default function Floor({ floorNumber, dual, lightA, setLightA, lightB, setLightB }){

  const lightTagA = String.fromCharCode(parseInt(floorNumber)+64);
  
  function checkDual() {
    if (dual) {
      const lightTagB = String.fromCharCode(parseInt(floorNumber)+65);
      return (
      <Light 
        floorNumber={floorNumber}
        lightTag = {lightTagB}
        lightState = {lightB}
        lightSetState = {setLightB}
      />)
    }
  }
  return (
    <div className = "floor-container">
    <h2 className = "floor-name">Floor {floorNumber} - Light {lightTagA}</h2>
    <img src = {lightA ? lightOn : lightOff} alt = "Lightbulb" />
    <ul className = "switches-container">
        <Light 
        floorNumber = {floorNumber} 
        lightTag = {lightTagA} 
        lightState  =  {lightA} 
        lightSetState  =  {setLightA}
        />
        {checkDual()}
    </ul>
  </div>
  )
}