import { Box } from 'components/Box';
import { Button } from '../ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import { ContactOrder, ContactLi } from './ContactList.styled';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contacts/slice';
import { showCurrentContacts } from 'components/utils/getFilteredContacts';
import { useEffect } from 'react';

const ContactList = () => {
    const filter = useSelector(selectFilter);
    // const dispatch = useDispatch();
    const { data, error, isLoading, refetch  } = useGetContactsQuery();
    
    const [deleteContact] = useDeleteContactMutation();
    
    useEffect(() => {
        refetch();
    }, [refetch]);
    
const currentContacts = showCurrentContacts(filter, data);

    return (
        <Box pl={6} pr={6}>
            <ContactOrder>
                {!isLoading && currentContacts.map((({ id, name, number }) => {
                    return (
                        <ContactLi key={id}>
                            {name}: {number}
                            <Button onClick={() => {
                                deleteContact(id)
                            }}>
                                Удалить
                            </Button>
                        </ContactLi>
                    )
                }))}
            </ContactOrder>
        </Box>)
};
    
export default ContactList;