import "./House.css"
import Floor from "./floor/Floor.jsx";
import { useState } from "react";

export default function House(){


  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [light3, setLight3] = useState(false)

  return(
    <div className = "house-container">
      <h1 className = "main-title">💡 LogicBulb</h1>
      <Floor 
        floorNumber = "3"
        dual = {false}
        lightA = {light3}
        setLightA = {setLight3}
      />
      <Floor 
        floorNumber = "2"
        dual = {true}
        lightA = {light2}
        setLightA = {setLight2}
        lightB = {light3}
        setLightB = {setLight3}
      />
      <Floor 
        floorNumber = "1"
        dual = {true}
        lightA = {light1}
        setLightA = {setLight1}
        lightB = {light2}
        setLightB = {setLight2}
      />
    </div>
  );
}