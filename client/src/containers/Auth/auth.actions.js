import * as authTypes from './auth.types';

export const validateRegistration = (creds) => ({
  type: authTypes.AUTH_VALIDATE_REGISTER,
  payload: creds
});

export const confirmRegistration = user => ({
  type: authTypes.AUTH_CONFIRM_REGISTER,
  payload: user
});

export const rejectRegistration = err => ({
  type: authTypes.AUTH_REJECT_REGISTER,
  payload: err
});
