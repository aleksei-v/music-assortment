import React from 'react'
import { FaSpotify  } from "react-icons/fa";
const SongDetail = ({ album, artists, name, external_urls}) => {

    return (
        <div className="col-sm-6 text-center">
            <div className='row col-sm-4 px-0 mx-auto'>
                <img
                    src={album.images[0].url}
                    alt={name}
                />
            </div>
            <div className='row col-sm-12 px-0'>
                <label htmlFor={name} className="form-label col-sm-12">
                    {name} <a href={external_urls.spotify} target="_blank" rel="noreferrer"><FaSpotify /></a>
                </label>
            </div>
            <div className='row col-sm-12 px-0'>
                <label htmlFor={artists[0].name} className="form-label col-sm-12">
                    {artists[0].name}
                </label>
            </div>
          
        </div>
    );
}

export default SongDetail