import React from "react";
import ac1 from "./img/carrossel_1.png";
import ac2 from "./img/carrossel_2.png";
import ac3 from "./img/carrossel_3.png";
import ac4 from "./img/carrossel_1.png";
import "./Section1.css";

const img1 = {
  backgroundImage: `url('${ac1}')`
}
const img2 = {
  backgroundImage: `url('${ac2}')`
}
const img3 = {
  backgroundImage: `url('${ac3}')`
}
const img4 = {
  backgroundImage: `url('${ac4}')`
}

function Section() {
  return (

    <section className="Section1">
      <h3>Conheça alguns dos nossos trabalhos</h3>
      <hr />

      <ul className="grid">
        <li className="small" style={img1}></li>
        <li className="large" style={img2}></li>
        <li className="large" style={img3}></li>
        <li className="small" style={img4}></li>
      </ul>

    </section>

  )
}
export default Section;