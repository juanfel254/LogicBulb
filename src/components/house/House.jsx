import { useState } from "react";
import FloorsControl from "./buttons/FloorsControl.jsx";
import Floor from "./floor/Floor.jsx";
import "./House.css"

export default function House(){

  const [lights, setLights] = useState([false, false, false]);

  const switchLight = (floor) => () => {
        lights[floor] = !lights[floor];
        setLights([...lights]);
      }

  return(
    <div className = "house-container">
      <h1 className = "main-title">💡 LogicBulb</h1>
      <FloorsControl
        floors={lights.length}
        lessFloors={() => {
          if (lights.length === 1) return;
          setLights(lights.slice(1));
        }}
        moreFloors={() => {setLights([...lights, false])}}
      />
      {lights.map((value, index) => {
        return (
          <Floor         
            floorNumber = {index+1}
            dual = {index !== lights.length-1}
            lightA = {value}
            switchLightA = {switchLight(index)}
            lightB = {index === lights.length-1 ? undefined : lights[index+1]}
            switchLightB = {index === lights.length-1 ? undefined : switchLight(index+1)}/>
            )
      }).reverse()}
    </div>
  );
}