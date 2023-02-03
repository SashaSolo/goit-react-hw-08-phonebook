import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';
import { Wrapper, Btn, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrapper>
      <Name>{user.name}</Name>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Wrapper>
  );
};
