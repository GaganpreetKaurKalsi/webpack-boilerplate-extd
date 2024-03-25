import React from 'react'
import TextField from '@mui/material/TextField'

function MaterialUITextField({ type, value, onChange, placeholder, className }) {
  return (
    <TextField
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}

export { MaterialUITextField }
