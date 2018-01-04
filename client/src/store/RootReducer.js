import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from '../containers/Auth/auth.reducer';

export default combineReducers({
  routerReducer,
  authReducer,
});
