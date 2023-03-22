import React, {useState, useEffect} from 'react'
import Dropdown from './Dropdown';
import ListBox from './ListBox';
import SongDetail from './SongDetail';
import { fetchCategories, fetchGenres, fetchPlaylist } from '../services/fetchMusic';
const MusicSelector = () => {
    const token = localStorage.getItem('token');
    const [tracks, setTracks] = useState({ selectedTrack: '', listOfTracksFromAPI: [] });
    const [trackDetail, setTrackDetail] = useState(null);
    const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
    const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromAPI: [] });
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
        const getMusicCategories = async () => {
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

    return (
  
        <div className=' w-90'>
            <form onSubmit={buttonClicked}>
        
  
                <h2 className='text-center display-6'>Search by genre</h2>
                <div className='d-flex align-items-center justify-content-around'>
                    <Dropdown label="Genre:" options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
                    <Dropdown label="Playlist:" options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
                </div>
                <div className='row col-sm-12 px-0 form-group'>
                    <button type='submit' className='btn btn-success col-sm-6 my-3 mx-auto w-25'>
                        Search
                    </button>
            
                    <div className='row'>
                        <ListBox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
                        {trackDetail && <SongDetail {...trackDetail} />}
                    </div>
                </div>
            </form>
        </div>)
};

export default MusicSelector