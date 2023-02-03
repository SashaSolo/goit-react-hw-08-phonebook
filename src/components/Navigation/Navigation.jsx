import { NavItemStyled, Image, Nav, Title } from './Navigation.styled';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Nav>
      <NavItemStyled to="/">
        <Image src={require('images/icon.jpg')} alt="" />
        <Title>PhoneBook</Title>
      </NavItemStyled>

      {isLoggedIn && <NavItemStyled to="/contacts">Contacts</NavItemStyled>}
    </Nav>
  );
};
