import React from 'react'
import './button.css';

interface IButton {
  type?: "button" | "submit";
  disabled?: boolean;
  text: string | JSX.Element;
  classNames?: string;
}

const Button: React.FC<IButton> = ({
  type,
  disabled,
  classNames,
  text
}) => {
  return (
    <button
      className={`next-btn ${classNames}`}
      type={type}
      disabled={disabled}
    >{text}</button>
  )
}

export default Button
