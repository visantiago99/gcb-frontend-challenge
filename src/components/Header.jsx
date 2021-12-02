import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({home, register}) {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h3><strong>Healthy Food</strong></h3>
      </div>
      <div className={home ? "links-container" : "links-container-formulary"}>
        <div>
          <Link to="/recipes">HEALTHY RECIPES</Link>
        </div>
        <div>
          <Link to="/blog">BLOG</Link>
        </div>
        <div>
          <Link to="/login">JOIN</Link>
        </div>
        { register ? null : <div>
          <Link to="/register"><button>REGISTER</button></Link>
        </div> }
      </div>
    </div>
  )
}
