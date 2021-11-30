import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h3>Healthy Food</h3>
      </div>
      <div className="links-container">
        <div>
          <Link to="/recipes">HEALTHY RECIPES</Link>
        </div>
        <div>
          <Link to="/blog">BLOG</Link>
        </div>
        <div>
          <Link to="/login">JOIN</Link>
        </div>
        <div>
          <Link to="/register"><button>REGISTER</button></Link>
        </div>
      </div>
    </div>
  )
}
