import { Outlet } from 'react-router-dom';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from 'components/App/App.styled';

export const FormPage = () => {
  return (
    <div>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
        <Outlet />
      </Container>
    </div>
  );
};
