import React, {useState, useEffect} from 'react';
import './App.css';
import Dropdown from './Dropdown';
import ListBox from './ListBox';
import SongDetail from './SongDetail';
import { fetchCategories, fetchGenres, fetchPlaylist } from 'services/fetchGenres';
function App() {
    // const CLIENT_ID = ''
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
  
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const hash = window.location.hash;

    let token = localStorage.getItem('token');

   if (!token && hash) {
     token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

     window.location.hash = "";
     localStorage.setItem('token', token);
     setToken(token);
   }
  }, [])
  
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
    const getMusicGenres = async () => {
      try {
        const genreResponse = await fetchGenres(token);
            setGenres({
              selectedGenre: genres.selectedGenre,
              listOfGenresFromAPI: genreResponse.categories.items,
          });
      
      } catch (error) {
        console.log(error)
      }
    }
    getMusicGenres()
  }, [genres.selectedGenre, token])
  const genreChanged = val => {
    setGenres({
      selectedGenre: val,
      listOfGenresFromAPI: genres.listOfGenresFromAPI
    })
    const getMusicCategories = async() => {
      try {
        const categoriesResponse = await fetchCategories(token, val);
        setPlaylist({
          selectedPlaylist: playlist.selectedPlaylist,
          listOfPlaylistFromAPI: categoriesResponse.playlists.items
        });
      } catch (error) {
        console.log(error)
      }
    }
    getMusicCategories()
  };

  const playlistChanged = val => {
    setPlaylist({
      selectedPlaylist: val,
      listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
    })
  };

  const buttonClicked = e => {
    e.preventDefault();
    const getMusicPlaylist = async () => {
      try {
        const playlistResponse = await fetchPlaylist(token, playlist.selectedPlaylist);
        setTracks({
          selectedTrack: tracks.selectedTrack,
          listOfTracksFromAPI: playlistResponse.items
        });
      } catch (error) {
        console.log(error)
      };
    };
    getMusicPlaylist()
  };
  const listboxClicked = val => {
    const currentTracks = [...tracks.listOfTracksFromAPI];
    const trackInfo = currentTracks.filter(el => el.track.id === val);
    setTrackDetail(trackInfo[0].track);
  }
  const logout = () => {
    setToken("");
    localStorage.removeItem("token")
  }
  return (
    <div className='container'>
      {!token
        ? <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
        to Spotify</a>
        : <><button onClick={logout}>Logout</button>
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
      </form></>
      }
      
      

    </div>
  );
}

export default App;
