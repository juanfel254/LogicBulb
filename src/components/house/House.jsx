import "./House.css"
import Floor from "./floor/Floor.jsx";

export default function House(){

  return(
    <div className = "house-container">
      <h1 className = "main-title">💡 LogicBulb</h1>
      <Floor 
        floorNumber = "3"
      />
      <Floor 
        floorNumber = "2"
      />
      <Floor 
        floorNumber = "1"
      />
    </div>
  );
}