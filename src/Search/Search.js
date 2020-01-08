import React from 'react';
import "./Search.scss";

const Search=({handleChange,placeholder})=> {
  return (
    <div>
       <input className="input" type="search" onChange={handleChange} placeholder={placeholder}>
          
        </input>
    </div>
  )
}

export default Search;