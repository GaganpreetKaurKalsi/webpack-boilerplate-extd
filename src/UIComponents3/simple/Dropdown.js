import React, { useState } from 'react'

function Dropdown({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null)

  const handleSelect = (option) => {
    setSelectedOption(option)
    onSelect(option)
  }

  return (
    <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export { Dropdown }
