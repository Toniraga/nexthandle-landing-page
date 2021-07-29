import React from 'react';
import iphone from '../../assets/iphonex.png';
import prize from '../../assets/prize.svg';
import shield from '../../assets/shieldIcon.svg';
import escrow from '../../assets/escrow.svg';
import './callToAction.css';
import EmailInput from '../emailInput/EmailInput';

const CallToAcion: React.FC = () => {
  return (
    <div className="action_container">
      <div className="action_head">
        <div className="action_text">
          <p className="action_text_head">The marketplace for pre-owned high-end devices</p>
          <p className="action_body"><span style={{opacity: '0.6'}}>NextHandle offers you the most secure  and pocket-friendly way to buy, sell, or swap high-end pre-owned devices</span> <span style={{opacity: '0.8'}}>only from certified vendors.</span></p>
          <EmailInput />
        </div>
        <div className="action_phone">
          <img src={iphone} alt="phone" />
        </div>
      </div>
      <div className="action_base">
        <div className="action_base_box">
          <img src={prize} alt='prize' className="action_base_icon" />
          <p>Nigeria’s No 1 online market-leader for certified used or pre-owned devices </p>
        </div>
        <div className="action_base_box">
          <img src={shield} alt='prize' className="action_base_icon" />
          <p>All devices purchased have a 3 months minimum warranty period. </p>
        </div>
        <div style={{marginRight: 0}} className="action_base_box">
          <img src={escrow} alt='prize' className="action_base_icon" />
          <p>All payment transactions are fast and securely deposited in an escrow account untill after delivery.</p>
        </div>
      </div>
    </div>
  )
}

export default CallToAcion;
