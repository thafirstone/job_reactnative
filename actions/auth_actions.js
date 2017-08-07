import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
} from './types';

const APP_ID = '185179978688838';
const PERMISSION = ['public_profile'];

export const facebookLogin = () => async (dispatch) => {
  const token = await AsyncStorage.getItem('fb_token');
  if (token) {
    return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    // dispatch action fb login is done
  }
  // do the login
  doFacebookLogin(dispatch);
};

const doFacebookLogin = async (dispatch) => {
  const data = await Facebook.logInWithReadPermissionsAsync(APP_ID, {
    permissions: PERMISSION,
  });
  console.log(data);
  const { type, token } = data;
  // something went wrong
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  // save the token
  await AsyncStorage.setItem('fb_token', token);
  return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
