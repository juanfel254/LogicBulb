import "./FloorsControl.css";

export default function FloorsControl({ floors, setFloors }) {
  
  const moreFloors = () => {setFloors( floors += 1);}
  const lessFloors = () => {
    if (floors > 0)
    setFloors (floors -= 1);
  }
  
  return (
    <section className="floors-control-container">
      <button className="floors-control" onClick={lessFloors}> ➖ </button>
      <p>Floors {floors}</p>
      <button className="floors-control" onClick={moreFloors}> ➕ </button>
    </section>
  )
}