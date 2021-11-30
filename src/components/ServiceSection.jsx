import React from 'react';
import bloco_services from '../images/bloco_services.svg';

export default function ServiceSection() {
  return (
    <div className="service-container">
      <div>
        <img src={bloco_services} alt="bloco_services" />
      </div>
      <div className="service-info">
        <h3>
          The best services ready
          To serve you
        </h3>
        <h4>
          Far far away, behind the word mountains, far from
          the countries Vokalia and Consonantia, there live the
          blind texts.
        </h4>
        <h4>
          Separated they live in Bookmarksgrove right at the
          coast of the Semantics, a large language ocean.
        </h4>
        <h4>
          A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </h4>
        <button>Know More</button>
      </div>
    </div>
  )
}
