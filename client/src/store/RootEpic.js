import { combineEpics } from 'redux-observable';
import authEpic from '../containers/Auth/auth.epic';

export default combineEpics(
  authEpic
);
