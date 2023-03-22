import { Button } from 'react-bootstrap';

const Header = ({setToken}) => {
    
    const logout = () => {
    setToken("");
    localStorage.removeItem("token")
  }
  return (
      <div>
          <div className='row'>
            <div className='col-md-11'>
              <h1 className='text-center display-5'>Spotify</h1>
            </div>
            <div className='col-md-1 d-flex justify-content-center align-items-center'>
              <Button onClick={logout}>Logout</Button>
            </div>
          </div>
    </div>
  )
}

export default Header