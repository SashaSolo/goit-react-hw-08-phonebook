import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px;
  margin: 0 auto;
  text-transform: uppercase;
  color: #fff;
  background-color: #f74002;
  padding: 7px 10px;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;

  &:focus,
  &:active,
  &:hover {
    box-shadow: 0px 0px 2px #bababa, inset 0px 0px 7px #2b1717;
  }
`;
