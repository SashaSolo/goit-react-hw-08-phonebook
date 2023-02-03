import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 40px;
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.36),
    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);
`;

export const Title = styled.h2`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  color: #00000099;
  font-size: 44px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  border: none;
  height: 32px;
  margin-top: 5px;
  background-color: #0000002c;

  &:hover {
    border: 1px solid #000000;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px #000000;
  }
`;

export const Btn = styled.button`
  margin-top: 16px;

  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  background-color: #000000;
  padding: 7px 9px;
  border: transparent;
  cursor: pointer;
  border-radius: 5px;

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

export const Image = styled.img`
  width: 40%;
  margin-left: 40px;
  border-radius: 20px;
`;
