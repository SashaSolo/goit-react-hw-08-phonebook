import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormStyle = styled(Form)`
  margin: 0 auto;
  padding: 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #a3a3a3;
`;

export const Label = styled.label`
  padding: 5px;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
`;

export const Input = styled(Field)`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 30px;
`;

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
  &:active {
    box-shadow: 0px 0px 2px #bababa, inset 0px 0px 7px #2b1717;
  }
`;
