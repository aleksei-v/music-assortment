import ContactForm from 'components/ContactForm';
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Title from "components/Title";
import { Box } from "components/Box";

export const Contacts = () => {
    return (
    <>
        <Box>
            <Title text="Phonebook" />
            <ContactForm />
            <Title text="Contacts" />
            <Filter />
            <ContactList />
        </Box>
    </>
    )
};