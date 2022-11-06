import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/operations";
import { Route, Routes, Navigate } from 'react-router-dom'
import { Box } from "./Box";
import { HomePage } from "pages/HomePage";
import { RegisterForm } from "pages/RegisterForm";
import { Layout } from './Layout/Layout';
import ContactForm from "./ContactForm";
import ContactList from './ContactList';
import Filter from "./Filter";
import Title from "./Title";
import { getIsLoading, getError } from "redux/selectors";
import { useSelector } from "react-redux";
import Loader from "./Loader/Loader";

export const App = () => {
    
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    // useEffect(() => {
    //   dispatch(fetchContacts())
    // }, [dispatch])
        
  return (<Box p={5} color="black" bg="muted">
    <Routes>
      <Route path="/" element={<Layout/>}>
            <Route index element={<Navigate to='home'/>} />
              <Route path="home" element={<HomePage/> } />
            <Route path="/register" element={<RegisterForm></RegisterForm>} />
            <Route path="/login" element={<></>} />
            <Route path="/contacts" element={<></>} />
      </Route>
     </Routes>
        {/* <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        {!error && isLoading && <Loader/>}
        <ContactList/> */}
    </Box>)
}