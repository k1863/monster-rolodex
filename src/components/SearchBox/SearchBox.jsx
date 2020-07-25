import React from 'react';
import "./SearchBox.styles.css";

const SearchBox = ({handleChange, placeholder}) => {
    return (
        <div className="search-item"> 
            <input className="search" type="search" placeholder= {placeholder} onChange={handleChange} />
        </div>
    );
};

export default SearchBox;