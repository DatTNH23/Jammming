import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
    const handleNameChange = (e) => {
        props.onNameChange(e.target.value)
    }
    return (
        <div className="Playlist">
            <input defaultValue="New Playlist" onChange={handleNameChange} />
            <TrackList tracks={props.playlistTracks} isRemoval={true}
                onRemove={props.onRemove} />
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}
export default Playlist