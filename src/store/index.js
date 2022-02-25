import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginSlice';
import userReducer from './reducers/userSlice';
import addAdminReducer from './reducers/addAdminSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    addAdmin: addAdminReducer
  }
});