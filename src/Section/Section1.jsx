import React from "react";
import ac1 from "../../img/ac1.jpg";
import ac2 from "../../img/ac2.jpg";
import ac3 from "../../img/ac3.jpg";
import ac4 from "../../img/ac4.jpg";
import "./Hotel.css";

const img1 = {
  backgroundImage:`url('${ac1}')`
}
const img2 = {
  backgroundImage:`url('${ac2}')`
}
const img3 = {
  backgroundImage:`url('${ac3}')`
}
const img4 = {
  backgroundImage:`url('${ac4}')`
}

function Hotel() {
  return (
 
<section className="hotel">
    <h3>Conheçao o Hotel</h3>
    <p>Feche os olhos e imagine o paraiso da Terra.
        Sobral terra onde cada pessoa possui um Sol individual.</p>
    <hr/>

    <ul className="grid">
        <li className="small" style={img1}></li>
        <li className="large" style={img2}></li>
        <li className="large" style={img3}></li>
        <li className="small" style={img4}></li>
    </ul>

    <ul className="grid">
        <li className="small" style={img1}></li>
        <li className="large" style={img2}></li>
        <li className="large" style={img3}></li>
        <li className="small" style={img4}></li>
    </ul>   


</section>



  )
}
export default Hotel;