import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header({home, register}) {
  const [showLinks, setShowLinks] = useState(true)

  const watchScreen = () => {
    const screenSize = window.innerWidth;
    if (screenSize < 880) {
      setShowLinks(!showLinks)
    }
      else {
        setShowLinks(showLinks)
    } 
  };

  useEffect(() => {
    watchScreen()
    window.addEventListener('resize', watchScreen);
    return () => window.removeEventListener('resize', watchScreen)
  }, [setShowLinks])

  return (
    <div className="header-container">
      <div className="logo-container">
        <Link to="/"><h3><strong>Healthy Food</strong></h3></Link>
      </div>
      <div className={home ? "links-container" : "links-container-formulary"}>
        {showLinks ? (<>
          <div>
          <Link to="/recipes">HEALTHY RECIPES</Link>
        </div>
        <div>
          <Link to="/blog">BLOG</Link>
        </div>
        <div>
          <Link to="/login">JOIN</Link>
        </div>
        </>) : (null)}
        { register ? null : <div>
          <Link to="/register"><button>REGISTER</button></Link>
        </div> }
      </div>
    </div>
  )
}
