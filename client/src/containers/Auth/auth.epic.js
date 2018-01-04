import { map } from 'rxjs';
import { combineEpics } from 'redux-observable';
import authService from './auth.service';
import * as authActions from './auth.actions';
import * as authTypes from './auth.types';

const validateAuthRegister = action$ =>
  action$.ofType(authTypes.AUTH_VALIDATE_REGISTER)
    .mergeMap(resp => {
      return authService.validateRegistration(action$.payload)
        .map(res => {
          return authActions.confirmRegistration(res)
        })
        .catch(err => {
          return authActions.rejectRegistration(err)
          });
      });

  export default combineEpics(
    validateAuthRegister,
  );
