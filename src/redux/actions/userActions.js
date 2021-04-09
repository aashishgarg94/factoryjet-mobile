import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import qs from 'qs';

import {
  CLEAR_ERRORS,
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_ERRORS,
  SET_USER,
} from '../types';

export const loginUser = (loginData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/login/buyer', qs.stringify(loginData))
    .then((res) => {
        console.log(res)
      setAuthorizationHeader(res.data.access_token);
      dispatch({ type: SET_AUTHENTICATED });
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
        console.log(err)
      dispatch({ type: CLEAR_ERRORS });
    });
};

export const signupUser = (newUserData) => (dispatch) => {
  axios
    .post('/register/buyer', newUserData)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_NEWUSER, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: {
          statusCode: err.response.status,
          message: err.response.data.detail,
        },
      });
    });
};

export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get('/user/bio')
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userId, userDetails) => (dispatch) => {
  axios
    .post('/user/bio/update', userDetails)
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
      dispatch(getUserSocialData(userId));
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const AuthToken = `Bearer ${token}`;
  AsyncStorage.setItem('AuthToken', AuthToken);
  axios.defaults.headers.common.Authorization = AuthToken;
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};