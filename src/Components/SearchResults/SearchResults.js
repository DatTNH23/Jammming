import React from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'


const SearchResult = (props) => {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList onAdd={props.onAdd}
                isRemoval={false} tracks={props.searchResults} />
        </div>
    )
}
export default SearchResult