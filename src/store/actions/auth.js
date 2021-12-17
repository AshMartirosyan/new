import authApi from "../../api/auth";
import { errorAction } from ".";

export const SET_USER_DATA = "SET_USER_DATA";
export const USER_LOGGED = "USER_LOGGED";
export const SIGNED_UP = "SIGNED_UP";

/*----------------- Middlewere -------------*/

export const userSignUp = (data, loginData, callback) => {
  return async function (dispatch) {
    return await authApi
      .signUp(data)
      .then((response) => {
        dispatch(userLogin(loginData, callback));
      })
      .catch((err) => console.log("Error ", err));
  };
};

export const userLogin = (data, callback) => {
  return async function (dispatch) {
    return await authApi
      .login(data)
      .then((response) => {
        if (response.data.hasOwnProperty("token")) {
          sessionStorage.setItem("token", response.data.token);
          callback();
        }
        dispatch(setUserData(response.data.user));
      })
      .catch((err) => {
        dispatch(errorAction(err.response.data));
      });
  };
};

export const getMe = (callback) => {
  return async function (dispatch) {
    return await authApi
      .getMe()
      .then((response) => {
        dispatch(setUserData(response.data));
        callback();
      })
      .catch((err) => {
        console.log("GETME Error ", err);
      });
  };
};

/*----------------- End Middlewere -------------*/

export const userLogged = (isLogged) => ({
  type: USER_LOGGED,
  isLogged: isLogged,
});

export const userSignedUp = (isSignedUp) => ({
  type: SIGNED_UP,
  isSignedUp: isSignedUp,
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  data: data,
});
