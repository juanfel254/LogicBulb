const app = document.getElementById("app");

function Floor(props){
  const lightOn = "./img/lightOn.png"; 
  const lightOff =  "./img/lightOff.png";  
  
  const [light, setLight] = React.useState(lightOff);
  const [floorSwitch, setFloorSwitch] = React.useState("Off");

  function handleClick(){
     if (floorSwitch == "Off"){
      setLight(lightOn);
      setFloorSwitch("On");
     }
     else {
      setLight(lightOff);
      setFloorSwitch("Off");
     }
  }

  return (
    <div className="floor-container">
      <h2 className="floor-name">Floor {props.floorNumber}</h2>
      <img src={light} alt="Lightbulb"/>
      <button id={`switch${props.floorNumber}`} onClick={handleClick}>{floorSwitch}</button>
    </div>
  );
}

function Home(){
  return(
    <div className="home-container">
      <h1>💡 LogicBulb</h1>
      <Floor floorNumber="3"/>
      <Floor floorNumber="2"/>
      <Floor floorNumber="1"/>
    </div>
  );
}

ReactDOM.render(<Home />,app);