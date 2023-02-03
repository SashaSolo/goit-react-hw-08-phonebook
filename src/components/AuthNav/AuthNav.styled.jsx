import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItemStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  &:hover,
  &:focus {
    color: #003030;
  }
  margin-right: 20px;
  margin-left: 20px;
`;
