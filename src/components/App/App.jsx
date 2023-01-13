import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getLoading, getError } from 'redux/selectors';
// import { Route, Routes } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
// import { FormPage } from 'pages/FormPage/FormPage';
// import { NotFound } from 'pages/NotFound/NotFound';

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
    //   <Routes>
    //     <Route path="/" element={<FormPage />}></Route>
    //     <Route path="*" element={<NotFound />}></Route>
    //   </Routes>
  );
};
