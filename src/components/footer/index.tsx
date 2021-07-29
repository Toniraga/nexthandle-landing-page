import React from 'react'
import twitter from '../../assets/twitterIcon.svg';
import instagram from '../../assets/instagramIcon.svg';
import facebook from '../../assets/facebookIcon.svg';
  
import './footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer_icon_row">
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
      </p>
      <div>
        <div className="straight_line" />
        <div className="footer_text">
          <p className="footer_text_top">Made with lots of <span style={{ color: 'red' }}>❤</span> from Lagos on a pre-owned laptop</p>
          <p>Copyright © 2021, NextHandle Technologies , LLC</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
