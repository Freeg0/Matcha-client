mport axios from 'axios';
import { push } from 'react-router-redux';
import {
    
} from './types';

export const getUser = ({ username, lastname, firstname, email, password, confirmPassword }, history) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    axios.get('http://localhost:4242/signup', { username: username, mail: email, nom: lastname, prenom: firstname, pass: password, pass2: confirmPassword})
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

