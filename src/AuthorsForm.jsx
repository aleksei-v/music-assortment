import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import noResults from '../src/img/no-results.png'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchArtists } from './services/fetchMusic';
import ArtistResult from 'AuthorsInput/ArtistResult';


const AuthorsForm = () => {
    const token = localStorage.getItem('token');
    const [show, setShow] = useState(false);
    const [artists, setArtists] = useState([])
    const handleClose = () => setShow(false);
    const searchArtists = e => {
        e.preventDefault();
        if (!e.target[0].value) {
            Notify.info("Start to enter artist's name")
            return;
        }
        const searchKey = e.target[0].value
        const getArtists = async () => {
            try {
                const artistInfo = await fetchArtists(token, searchKey);
                setArtists(artistInfo.artists.items)
            } catch (error) {
                console.log(error)
            }
        };
    
        getArtists();
        setShow(true);
    }
    return (
        <div className='d-flex align-items-center justify-content-center'>
            
            <form className='my-4 col-sm-4' onSubmit={searchArtists}>
                <h2 className='display-6 text-center'>Search by name</h2>
                <input className='form-control mb-3' type="text" />
                <div className='d-flex align-items-center justify-content-center'>
                    <Button variant="primary" type='submit'>
                        Search
                    </Button>
                </div>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='display-6'>Results for your request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!artists.length && <img width="465" height="300" src={noResults} alt="noresults" />}
                    {artists && artists.length !== 0 && artists.map(
                        artist => (
                            <ArtistResult artist={artist} />
                        ))
                    }
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="mx-auto" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AuthorsForm;
