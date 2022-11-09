import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Box } from "./Box";
import { HomePage } from "pages/HomePage";
import { RegisterForm } from "pages/RegisterForm";
import { Layout } from './Layout/Layout';
import { LoginForm } from "pages/LoginForm";
import { Contacts } from 'pages/Contacts';
import { refreshCurrentUser } from 'redux/auth/auth-operations';


 

export const App = () => {
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch]);
        
  return (<Box p={5} color="black" bg="muted">
    <Routes>
      <Route path="/" element={<Layout/>}>
            <Route index element={<Navigate to='home'/>} />
              <Route path="home" element={<HomePage/> } />
            <Route path="/register" element={<RegisterForm></RegisterForm>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/contacts" element={<Contacts/>} />
      </Route>
     </Routes>
 
    </Box>)
}