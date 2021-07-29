import React from 'react';
import './EmailInput.css';

const EmailInput: React.FC<{containerClass?: string}> = ({ containerClass }) => {
  return (
    <div className={`action_input ${containerClass}`}>
      <input placeholder="Your email" />
      <button> Get early access </button>
    </div>
  )
}

export default EmailInput
