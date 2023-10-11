import React from 'react'
import { useState } from 'react'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (e) =>{
        setSearchInput(e.target.value)
    }

    const handleSearch = ()=>{
        onSearch(searchInput)
    }
  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
