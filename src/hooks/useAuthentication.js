import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from '../store/reducers/loginSlice';

function useAuth() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.login);
  if (!authState.isAuth) {
    if (sessionStorage.getItem('access_token') && localStorage.getItem('tukuya_admin')) {
      const user = JSON.parse(localStorage.getItem('tukuya_admin'));
      dispatch(loginSuccess(user.user));
    }
    return false;
  }
  return authState;
}

export default useAuth;
