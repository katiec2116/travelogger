import React from "react";
import Travelogger from './logo1.png';
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/"><img className=" " src={Travelogger} alt="logo"  /></Link>
  );
}

export default Logo;
