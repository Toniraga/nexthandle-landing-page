import React from 'react';
import './Offer.css';

const Offer: React.FC<{
  reverse?: boolean;
  offerHeadtop: string;
  offerHead: string;
  offerBody: string;
  icon: any;
}> = ({
  reverse = false,
  offerHeadtop,
  offerHead,
  offerBody,
  icon
}) => {
  return (
    <div className={`offer_container ${reverse && 'offer_container_reverse'}`}>
      <div className={`offer_body ${reverse && 'offer_body_reverse'}`}>
        <div className="offer_caption">
          <p className="offer_body_head">{offerHeadtop} <br /> {offerHead}</p>
          <p className="offer_body_text">{offerBody}</p>
        </div>
        <div className={`offer_icon_container ${reverse && 'offer_icon_reverse'}`}>
          <img src={icon} alt="icon" />
        </div>
      </div>
    </div>
  )
}

export default Offer;
