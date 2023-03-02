import "./FloorsControl.css";

export default function FloorsControl({ floors, lessFloors, moreFloors }) {
  
  return (
    <section className="floors-control-container">
      <button className="floors-control" onClick={lessFloors}> ➖ </button>
      <p>Floors {floors}</p>
      <button className="floors-control" onClick={moreFloors}> ➕ </button>
    </section>
  )
}