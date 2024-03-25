import React, { useState } from 'react'

function HeavyTableComponent({ data }) {
  const [filteredData, setFilteredData] = useState(data)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  const handleSort = (key) => {
    let sortedData = [...filteredData]
    if (sortBy === key && sortOrder === 'asc') {
      sortedData.sort((a, b) => (a[key] > b[key] ? 1 : -1))
      setSortOrder('desc')
    } else {
      sortedData.sort((a, b) => (a[key] > b[key] ? -1 : 1))
      setSortOrder('asc')
    }
    setSortBy(key)
    setFilteredData(sortedData)
  }

  const handleFilter = (key, value) => {
    const filtered = data.filter((item) => item[key].includes(value))
    setFilteredData(filtered)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by Name"
        onChange={(e) => handleFilter('name', e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th onClick={() => handleSort('salary')}>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { HeavyTableComponent as Table }
