import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import ContactForm from 'components/ContactForm';
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Title from "components/Title";
import Loader from "components/Loader/Loader";
import { getIsLoading, getError } from "redux/selectors";

export const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch])
    return (
        <>
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        {!error && isLoading && <Loader/>}
        <ContactList/>
    </>
   )
}