import React from 'react'
import { Button } from 'react-bootstrap'

const StartPage = () => {
    const CLIENT_ID = 'dc433a935d2e4e958ad9d3f3caf9aca0'
    const REDIRECT_URI = "http://aleksei-v.github.io/music-assortment/"
    // const REDIRECT_URI = "http://localhost:3000/music-assortment"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    return (
        <div className="container text-center">
            <h1>Welcome!</h1>
            <p className="lead">Login to use Spotify app</p>
            <Button variant="primary">
                <a className='text-uppercase text-white' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                    to Spotify</a>
            </Button>
        </div>
    )
};

export default StartPage;