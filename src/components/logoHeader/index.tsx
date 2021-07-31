import React from 'react';
import logo from '../../assets/logo.svg';
import './index.css';

const LogoHeader: React.FC = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  )
}

export default LogoHeader
