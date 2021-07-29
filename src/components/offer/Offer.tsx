import React from 'react';
import laptop from '../../assets/laptop.svg';
import './Offer.css';

const Offer: React.FC<{
  offerHead?: string;
  offerBody?: string;
  icon?: any;
}> = ({
  offerHead,
  offerBody,
  icon
}) => {
  return (
    <div className="offer_container">
      <div className="offer_body offer_body_switch">
        <div className="offer_caption">
          <p className="offer_body_head">Buy certified <br /> pre-owned devices</p>
          <p className="offer_body_text">New devices are great but pocket and planet-friendly devices are greater.</p>
        </div>
        <div className="offer_icon_container">
          <img src={laptop} alt="lappy" />
        </div>
      </div>
    </div>
  )
}

export default Offer;
