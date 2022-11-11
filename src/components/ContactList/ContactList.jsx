import { Box } from 'components/Box';
import { useSelector } from 'react-redux';
// import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { ContactOrder } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/slice';
import { showCurrentContacts } from 'components/utils/getFilteredContacts';
import { useEffect } from 'react';
import { ContactItem } from '../ContactItem/ContactItem'


const ContactList = () => {
    const filter = useSelector(selectFilter);
    // const dispatch = useDispatch();
    const { data, isLoading, error, refetch  } = useGetContactsQuery();

    
    useEffect(() => {
        refetch();
    }, [refetch]);
    
const currentContacts = showCurrentContacts(filter, data);

    return (
        <Box pl={6} pr={6}>
            <ContactOrder>
                {!isLoading && !error && currentContacts.map(((contact) => {
                    return (
                        <ContactItem key={contact.id} {...contact} />
                    )
                }))}
            </ContactOrder>
        </Box>)
};
    
export default ContactList;