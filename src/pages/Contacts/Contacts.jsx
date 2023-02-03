import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/contOperations';
import { selectLoading, selectError } from 'redux/contacts/selectors';
import { Wrapper } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts);
  }, [dispatch]);

  return (
    <Wrapper>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactForm />
      <ContactList />
      <Filter />
    </Wrapper>
  );
}
