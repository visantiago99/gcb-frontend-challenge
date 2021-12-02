import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="copyrights">
        <h6>© Copyrights 2019 Stack. All Rights Reserved</h6>
      </div>
      <div className="links-container">
        <Link to="/policy">Privacy Policy</Link>
        <Link to="/terms">Terms and Conditions</Link>
      </div>
    </div>
  )
}
