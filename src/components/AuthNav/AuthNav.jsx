import { NavItemStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavItemStyled to="/register">Register</NavItemStyled>
      <NavItemStyled to="/login">Log In</NavItemStyled>
    </div>
  );
};
