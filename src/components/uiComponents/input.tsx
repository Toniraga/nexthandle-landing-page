import React from 'react'
import './input.css'

interface IInput {
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
}


const Input: React.FC<IInput> = ({
  value,
  placeholder,
  onChange
}) => {
  return (
    <input
      className="next-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
