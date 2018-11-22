import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "./types";
import NavigationService from '../NavigationService';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => {
        if(error.code == 'auth/wrong-password'){
          loginUserFail(dispatch,ex.message)
        }
        else{
          firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch((ex) => {loginUserFail(dispatch,ex.message)});
        }
      });
  };
};

const loginUserFail = (dispatch,ex) => {
  dispatch({ 
    type: LOGIN_USER_FAIL, 
    payload: ex
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  NavigationService.navigate("Register");
  //this.props.navigation.navigate("Main");
  //Actions.main();
};
