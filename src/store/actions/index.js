import { getUserStart, getUserFailed } from '../reducers/userSlice';
// import { getUserStart, getUserSuccess, getUserFailed } from '../reducers/userSlice';

export const getUser = () => (dispatch) => {
  try {
    dispatch(getUserStart());
    // call api
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};
