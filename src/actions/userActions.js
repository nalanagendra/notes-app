import axios from "axios";

export const startUserLogin = (loginData, redirectToHome) => {
  return (dispatch) => {
    dispatch(userLoginRequest());
    axios
      .post("https://dct-user-auth.herokuapp.com/users/login", loginData)
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          dispatch(userLoginRequestError(response.data.errors));
        } else {
          dispatch(userLoginRequestSuccess());
          localStorage.setItem("token", response.data.token);
          redirectToHome();
        }
      })
      .catch((error) => {
        dispatch(userLoginRequestError(error.message));
      });
  };
};

const userLoginRequest = () => {
  return {
    type: "USER_LOGIN_REQUEST",
  };
};

const userLoginRequestSuccess = () => {
  return {
    type: "USER_LOGIN_REQUEST_SUCCESS",
  };
};

const userLoginRequestError = (errorMessage) => {
  return {
    type: "USER_LOGIN_REQUEST_ERROR",
    payload: errorMessage,
  };
};
