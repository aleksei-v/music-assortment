import React, {useState, useEffect} from 'react';
import './App.css';
import Dropdown from './Dropdown';
import axios from 'axios';
import { Credentials } from './Credentials';
import ListBox from './ListBox';
import SongDetail from './SongDetail';

function App() {
  const {ClientId, ClientSecret} = Credentials();
  const data = [
        { value: 1, name: 'A' },
        { value: 2, name: 'B' },
        { value: 3, name: 'C' },
  ];
  
  const [token, setToken] = useState('');
  const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
  const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromAPI: [] });
  const [tracks, setTracks] = useState({ selectedTrack: '', listOfTracksFromAPI: [] });
  const [trackDetail, setTrackDetail] = useState(null);
useEffect(() => {
  if (playlist.listOfPlaylistFromAPI.length > 0) {
    setPlaylist({
      selectedPlaylist: playlist.listOfPlaylistFromAPI[0].id,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    });
  }
}, [playlist.listOfPlaylistFromAPI]);
  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(ClientId + ':' + ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        setToken(tokenResponse.data.access_token)

        axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
        })
          .then(genreResponse => {
            setGenres({
              selectedGenre: genres.selectedGenre,
              listOfGenresFromAPI: genreResponse.data.categories.items,
            })
          });
      })
  }, [genres.selectedGenre, ClientId, ClientSecret])
  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    })

    axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(playlistResponse => {
        setPlaylist({
          selectedPlaylist: playlist.selectedPlaylist,
          listOfPlaylistFromAPI: playlistResponse.data.playlists.items
        });
      }
      
      )
  };

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    })
  };

  const buttonClicked = e => {
    e.preventDefault();

    axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
      .then(tracksResponse => {
        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: tracksResponse.data.items
        })
      }
      )
  };
  const listboxClicked = val => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const trackInfo = currentTracks.filter(el => el.track.id === val);
    setTrackDetail(trackInfo[0].track);
  }
  
  return (
    <div className='container'>
      <form onSubmit={buttonClicked}>
        
        <div className='container'>
          <Dropdown label="Genre:" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
          <Dropdown label="Playlist:" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
          <div className='row col-sm-12 px-0 form-group'>
            <button type='submit' className='btn btn-success col-sm-6 my-3'>
              Search
            </button>
            <div className='row'>
              <ListBox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
              {trackDetail && <SongDetail {...trackDetail} />}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
