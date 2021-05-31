import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import qs from 'qs';

import {
  LOADING_UI,
  LOADING_USER,
  SET_AUTHENTICATED,
  SET_NEWUSER,
  SET_USER,
  GENERATE_OTP,
  VERIFY_OTP,
  USER_EXISTS,
  CREATE_USER
} from '../types';

import { ToastAndroid } from 'react-native'

export const loginUser = (loginData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/login/buyer', qs.stringify(loginData))
    .then((res) => {
      res.data?.status_code === 500 ?
        res.data?.reason === "user does not exist" ?
        dispatch({ type: CREATE_USER })
        : ToastAndroid.show(message="Error in logging in", ToastAndroid.SHORT)
      :
        (
          setAuthorizationHeader(res.data.access_token),
          dispatch({ type: SET_AUTHENTICATED }),
          dispatch(getUserData())
        )
    })
    .catch((err) => {
        console.log(err)
    });
};

export const signupUser = (newUserData) => (dispatch) => {
  axios
    .post('/register/buyer', newUserData)
    .then(() => {
      dispatch({ type: SET_NEWUSER });
    })
    .catch((err) => {
      console.log(err)
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
    })
    .catch((err) => console.log(err));
};

const setAuthorizationHeader = (token) => {
  const AuthToken = `Bearer ${token}`;
  AsyncStorage.setItem('AuthToken', AuthToken);
  axios.defaults.headers.common.Authorization = AuthToken;
};

export const clearErrors = () => (dispatch) => {
};
export const getOTP = (otpReqData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get('/generate_otp', { params: otpReqData })
    .then((res) => {
      res.data?.status_code === 200 ?
        res.data?.type === "success" ?
          dispatch({
            type: GENERATE_OTP,
            payload: res.data,
          })
          :
          dispatch({
            type: USER_EXISTS
          })
          :
          ToastAndroid.show(message="Error in generating OTP, please try again", ToastAndroid.SHORT);
    })
    .catch((err) => console.log(err));
};

export const verifyOTP = (otpVerifyData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get('/verify_otp', { params: otpVerifyData })
    .then((res) => {
      res.data?.status_code === 200 ?
        dispatch({
          type: VERIFY_OTP,
          payload: res.data,
        })
        :
        ToastAndroid.show(message="Invalid OTP", ToastAndroid.SHORT);
    })
    .catch((err) => console.log(err));
};