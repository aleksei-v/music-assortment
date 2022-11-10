// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { fetchContacts } from "redux/operations";
import ContactForm from 'components/ContactForm';
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Title from "components/Title";
// import Loader from "components/Loader/Loader";
// import { getIsLoading, getError } from "redux/selectors";
import { getIsLoggedIn } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

export const Contacts = () => {
    // const dispatch = useDispatch();
    // const isLoading = useSelector(getIsLoading);
    // const error = useSelector(getError);

    // useEffect(() => {
    //   dispatch(fetchContacts())
    // }, [dispatch])
    const isLoggedIn = useSelector(getIsLoggedIn);

    if (!isLoggedIn) {
        console.log("Вы вышли с аккаунта")
        return <Navigate to="/login" />
    }

    return (
        <>
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        {/* {!error && isLoading && <Loader/>} */}
        <ContactList/>
    </>
   )
}