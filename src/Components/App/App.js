import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [{ name: 'A', artist: 'B', album: 'aksd', id: 1 },
      { name: 'B', artist: 'BASDAS', album: 'aksd', id: 2 }],
      playlistName: 'Name of NEW',
      playlistTracks: [
        { name: 'Aasdasd', artist: 'B', album: 'aksd', id: 3 },
        { name: 'BE', artist: 'TY', album: 'Lover', id: 4 }]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
  }
  addTrack(track) {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({ playlistTracks: tracks })
  }
  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({ playlistTracks: tracks })
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack}
              searchResults={this.state.searchResults} />
            <Playlist playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>)

  }
}

export default App;
