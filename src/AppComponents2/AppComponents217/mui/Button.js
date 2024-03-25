import React from 'react'
import Button from '@mui/material/Button'

function MaterialUIButton({ onClick, children, className }) {
  return (
    <Button variant="contained" onClick={onClick} className={className}>
      {children}
    </Button>
  )
}

export { MaterialUIButton }
