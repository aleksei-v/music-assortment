import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import noImage from '../src/img/no-image.jpg';
import noResults from '../src/img/no-results.png'
const ArtistResult = ({ artist }) => {
    
    return (<div key={artist.id} className="d-flex flex-column align-items-center">
          
        {artist.images.length
            ? <img width="200" height="200" src={artist.images[0].url} alt={artist.name} className="my-3"/>
            : <img width="200" height="200" src={noImage} alt="noimage" className="my-3"/>}
       <h3 className="mb-3">{artist.name}</h3> 
    </div>)
};
const AuthorsForm = ({ searchArtists, artists }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            
            <form className='my-4 col-sm-4' onSubmit={searchArtists}>
                <h2 className='display-3"'>Searching by name</h2>
                <input className='form-control mb-3' type="text" />
                <Button variant="primary" onClick={handleShow} type='submit'>
                    Search
                </Button>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Results for your request</Modal.Title>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AuthorsForm;
