import axios from 'axios';
import { push } from 'react-router-redux';
import {
    USERNAME_CHANGED,
    LASTNAME_CHANGED,
    FIRSTNAME_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    CONFIRM_PASSWORD_CHANGED,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED
} from './types';

export const usernameChanged = (text) => {
    return {
        type: USERNAME_CHANGED,
        payload: text
    };
};

export const lastnameChanged = (text) => {
    return {
        type: LASTNAME_CHANGED,
        payload: text
    };
};

export const firstnameChanged = (text) => {
    return {
        type: FIRSTNAME_CHANGED,
        payload: text
    };
};

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const confirmPasswordChanged = (text) => {
  return {
    type: CONFIRM_PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }, history) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    axios.post('http://localhost:4242/login', { email: email, password: password })
    .then(response => {
      console.log(response.status);
      if (response.status === 200) {
        loginUserSuccess(dispatch, response.data);
        console.log('success');
        localStorage.setItem('authed', true);
        history.push('/Home');
      }
    })
    .catch(error => {
      loginUserFail(dispatch);
      console.log(error);
    });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const registerUser = ({ username, lastname, firstname, email, password, confirmPassword }, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    axios.post('http://localhost:4242/signup', { username: username, mail: email, nom: lastname, prenom: firstname, pass: password, pass2: confirmPassword})
    .then(response => {
      registerUserSuccess(dispatch, response.data);
      console.log('success');
      console.log(response.data);
      history.push('/Signin');
    })
    .catch(error => {
      registerUserFail(dispatch);
      console.log('error');
      console.log(error);
    });
  };
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
};

const registerUserFail = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAILED });
};
