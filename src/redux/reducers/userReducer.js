import {
    LOADING_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    SET_USER,
    GENERATE_OTP,
    VERIFY_OTP,
    USER_EXISTS,
    CREATE_USER,
    SET_NEWUSER
  } from '../types';
  
  const initialState = {
    authenticated: false,
    loading: false,
    info: {},
    isOtpGenerated: false,
    isOtpVerified: false,
    user_exists: false,
    create_user: false,
    user_created: false
  };
  
  export function userReducer(state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true,
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          ...state,
          authenticated: true,
          loading: false,
          info: { ...action.payload },
        };
      case SET_NEWUSER:
        return {
          ...state,
          user_created: true
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true,
        };
      case GENERATE_OTP:
        return {
          ...state,
          isOtpGenerated: true,
          otp_generate: {
            ...action.payload,
          },
        };
      case USER_EXISTS:
        return {
          ...state,
          user_exists: true
        };
      case VERIFY_OTP:
        return {
          ...state,
          isOtpVerified: true,
          otp_verify: {
            ...action.payload,
          },
        };
      case CREATE_USER:
        return {
          ...state,
          create_user: true
        };
      default:
        return state;
    }
  }