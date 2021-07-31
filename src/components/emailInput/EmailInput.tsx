import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../uiComponents/button';
import Input from '../uiComponents/input';
import './EmailInput.css';

const EmailInput: React.FC<{ containerClass?: string; }> = ({ containerClass }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setEmail(e.target.value);
  
  const onSubmit = (e: any) => {
    e.preventDefault()
    history.push('/subscribed')
  }
  
  
  return (
    <form onSubmit={onSubmit} className={`action_input ${containerClass}`}>
      <p className="action_input_container">
        <Input
          placeholder="Your email"
          value={email}
          onChange={onInputChange}
        />
      </p>
      <p className="action_button_container">
        <Button
        type='submit'
        disabled={!email.trim()}
        text="Get early access"
      />
      </p>
    </form>
  )
}

export default EmailInput
