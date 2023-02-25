import axios from 'axios';

axios.defaults.baseURL = 'https://api.spotify.com';

export async function fetchGenres(token) {
    console.log(token)
    try {
        const { data } = await axios.get('/v1/browse/categories?locale=sv_US', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return data
    } catch (error) {
        console.error('Something wrong! Can not get token' + error);
         throw error;
    };
};

export async function fetchCategories(token, val) {
    try {
        const { data } = await axios.get(`/v1/browse/categories/${val}/playlists?limit=10`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        console.error('Something wrong! Can not get token' + error);
         throw error;
    };
};



export async function fetchPlaylist(token, playlist) {
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/playlists/${playlist}/tracks?limit=10`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        console.error('Something wrong! Can not get token' + error);
         throw error;
    };
};



export async function fetchArtists(token, searchKey) {
    try {
        const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
               Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        });
        return data;
    } catch (error) {
        console.error('Something wrong! Can not get token' + error);
         throw error;
    };
};