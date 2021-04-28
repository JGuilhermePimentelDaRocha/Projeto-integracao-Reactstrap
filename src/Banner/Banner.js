/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { img } from 'reactstrap';
import ac1 from "./img/Banner.png";
import "./Banner.css";


const Banner = (props) => {
  return (
    <div>
      <img src={ac1} class="d-block w-100 mx-auto" />
    </div>
  );
};

export default Banner;