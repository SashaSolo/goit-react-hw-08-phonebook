import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import PropTypes from 'prop-types';
import { Wrapper, Title, Form, Label, Input, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Wrapper>
      <div>
        <Title>Registration</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            Name
            <Input type="text" name="name" autoComplete="off"></Input>
          </Label>
          <Label>
            Email
            <Input type="email" name="email" autoComplete="off"></Input>
          </Label>
          <Label>
            Password
            <Input type="password" name="password" autoComplete="off"></Input>
          </Label>
          <Btn type="submit">Register</Btn>
        </Form>
      </div>
    </Wrapper>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
};
