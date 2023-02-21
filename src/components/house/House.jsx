import "./House.css"
import Floor from "./floor/Floor.jsx";
import { useState } from "react";

export default function House(){

/*   const floorsNumber = 3, floorsStates = [];
  for (let i = 0; i < floorsNumber; i++) {
    floorsStates.push([]);
    [floorsStates[i][0], floorsStates[i][1]] = useState(false);
  }
  console.log(floorsStates);

  const generateFloors = () => {
    for (let i = floorsNumber; i > floorsNumber; i--){
      return (
        <Floor 
        floorNumber = {`${i}`}
        dual = {true}
        lightA = {floorsStates[i][0]}
        setLightA = {floorsStates[i][1]}
        lightB = {floorsStates[i+1][0]}
        setLightB = {floorsStates[i+1][1]}
        />
      )
    }
  } */

  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [light3, setLight3] = useState(false);

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