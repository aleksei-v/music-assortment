import React, {useState, useEffect} from 'react';
import './App.css';
import AuthorsForm from 'AuthorsForm';
import MusicSelector from './MusicSelector/MusicSelector';
import Header from 'Header';
import StartPage from 'StartPage';
function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    const hash = window.location.hash;
    let token = localStorage.getItem('token');
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      localStorage.setItem('token', token);
    };
    setToken(token);
  }, []);

  return (
    <div className='container'>
      {!token
        ? <StartPage />
        : <>
          <Header setToken={setToken} />
          <AuthorsForm />
          <MusicSelector />
        </>
      }
    </div>
  );
};
export default App;