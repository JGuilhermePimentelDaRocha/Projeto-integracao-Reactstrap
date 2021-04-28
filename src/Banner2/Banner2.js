/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { img } from 'reactstrap';
import ac2 from "./img/Banner2.png";
import "./Banner2.css";


const Banner = (props) => {
  return (
    <div>
      <img src={ac2} class="d-block w-95 mx-auto" />
    </div>
  );
};

export default Banner;