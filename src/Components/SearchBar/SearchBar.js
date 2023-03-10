import { useState } from 'react'
import './SearchBar.css'
import React from 'react'
export default function SearchBar() {
    const [term, setTerm] = useState('')
    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }
    const search = () => {
        this.props.onSearch(term)
    }
    return (
        <div className="SearchBar">
            <input placeholder="Enter the song's name" value={term} onChange={handleTermChange} />
            <button className="SearchButton">SEARCH</button>
        </div>
    )

}
