import React, { useState } from 'react'
import './SearchBar.css'
export default function SearchBar(props) {
    const [term, setTerm] = useState('')
    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }
    const search = () => {
        props.onSearch(term)
    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter the song's name" value={term} onChange={handleTermChange} />
            <button className="SearchButton">SEARCH</button>
        </div>
    )

}
