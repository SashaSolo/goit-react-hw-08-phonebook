import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #343333;
  padding: 0;
  margin: 0;
`;

export const Btn = styled.button`
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  background-color: #000000;
  margin-right: 10px;
  padding: 7px 9px;
  border: transparent;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    background-color: #b40000;
    box-shadow: 0 0 0 1px #000000;
    border-radius: 5px;
  }
  &:focus {
    background-color: #b40000;
    box-shadow: 0 0 0 1px #000000;
    border-radius: 5px;
  }
`;
