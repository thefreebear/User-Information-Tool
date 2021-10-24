import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import deleteUserReducer from './deleteUserReducer';

export default combineReducers({
  users: usersReducer,
  deleteUser :deleteUserReducer
});
