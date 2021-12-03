import React from 'react';
import Illustration from '../images/Illustration.svg';
import { BsSearch } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="search-container">
        <h1><strong>Ready for <br />Trying a new recipe?</strong></h1>
        <input type="text" placeholder="Search healthy recipes" />
        <button><BsSearch /></button>
      </div>
      <div className="hero-img">
        <img src={Illustration} alt="Illustration" />
      </div>
    </div>
  )
}
