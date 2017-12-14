import {
    USERNAME_CHANGED,
    LASTNAME_CHANGED,
    FIRSTNAME_CHANGED,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    CONFIRM_PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
    REGISTER_USER
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    user: null,
    error: '',
    loading: false,
    success: '',
    isAuthenticated: false
};
  
  export default (state = INITIAL_STATE, action) => {
    // console.log(state);
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload };
        case LASTNAME_CHANGED:
            return { ...state, lastname: action.payload };
        case FIRSTNAME_CHANGED:
            return { ...state, firstname: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case CONFIRM_PASSWORD_CHANGED:
            return { ...state, confirmPassword: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, isAuthenticated: true };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case REGISTER_USER:
            return { ...state, loading: true, error: '' };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE,
                message: 'Felicitation! votre compte a bien été créé. Un email de confirmation vient de vous être envoyé',
                user: action.payload
            };
        case REGISTER_USER_FAILED:
            return { ...state, error: 'L\'inscription a échoué', loading: false };
      default:
            return state;
    }
  };