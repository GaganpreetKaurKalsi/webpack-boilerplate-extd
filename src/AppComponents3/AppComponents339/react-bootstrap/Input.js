import React from 'react'
import Form from 'react-bootstrap/Form'

function BootstrapInput({ type, value, onChange, placeholder, className }) {
  return (
    <Form.Control
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}

export { BootstrapInput }
