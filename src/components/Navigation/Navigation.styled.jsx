import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItemStyled = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  &:hover,
  &:focus {
    color: #003030;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Image = styled.img`
  display: block;
  height: 30px;
  padding: 0px;
  &:hover,
  &:focus {
    color: #003030;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-right: 15px;
`;
