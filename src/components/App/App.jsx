import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getLoading, getError } from 'redux/selectors';

import { Container } from 'components/App/App.styled';

export const App = () => {
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  return (
    <Container>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      <Filter />
    </Container>
  );
};
