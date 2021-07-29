import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './EmailInput.css';

const EmailInput: React.FC<{ containerClass?: string; }> = ({ containerClass }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);
  
  const onSubmit = (e: any) => {
    e.preventDefault()
    history.push('/subscribed')
    console.log('yeyeo')
  }
  
  
  return (
    <form onSubmit={onSubmit} className={`action_input ${containerClass}`}>
      <input
        placeholder="Your email"
        value={email}
        onChange={onInputChange}
      />
      <button
        type='submit'
        disabled={!email.trim()}
      >
        Get early access
      </button>
    </form>
  )
}

export default EmailInput
