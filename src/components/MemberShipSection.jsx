import React from 'react';
import bloco_final_image from '../images/bloco_final_image.svg';

export default function MemberShipSection() {
  return (
    <div className="membership-container">
      <div className="email-container">
        <h1>
          Join our membership
          to get special offer
        </h1>
        <input type="text" placeholder="Enter your email address" />
        <button>Join</button>
      </div>
      <div>
        <img src={bloco_final_image} alt="bloco_final_image" />
      </div>
    </div>
  )
}
