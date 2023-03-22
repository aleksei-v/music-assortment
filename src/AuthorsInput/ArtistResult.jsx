import React from 'react'
import { FaSpotify } from "react-icons/fa";
import noImage from '../img/no-image.jpg';
const ArtistResult = ({ artist }) => {
    return (<div key={artist.id} className="d-flex flex-column align-items-center">
          
        {artist.images.length
            ? <img width="200" height="200" src={artist.images[0].url} alt={artist.name} className="my-3"/>
            : <img width="200" height="200" src={noImage} alt="noimage" className="my-3"/>}
        
        <h3 className="mb-3">{artist.name} <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer"><FaSpotify /></a></h3> 
        
    </div>)
};

export default ArtistResult