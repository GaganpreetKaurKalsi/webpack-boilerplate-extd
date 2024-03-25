import React from 'react'
import Button from 'react-bootstrap/Button'

function BootstrapButton({ onClick, children, className }) {
  return (
    <Button variant="primary" onClick={onClick} className={className}>
      {children}
    </Button>
  )
}

export { BootstrapButton }
