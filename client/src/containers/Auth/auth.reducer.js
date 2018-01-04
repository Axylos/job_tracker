import * as authTypes from './auth.types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case authTypes.AUTH_VALIDATE_REGISTER:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: true,
        user: null
      };
    case authTypes.AUTH_CONFIRM_REGISTER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case authTypes.AUTH_REJECT_REGISTER:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null
      };
    default:
      return initialState
  };
}

export default authReducer;
