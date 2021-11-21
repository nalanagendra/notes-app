import axios from "axios"

export const startUserLogin = (loginData, redirectToHome) => {
  return (dispatch) => {
    dispatch(userLoginRequest())
    axios
      .post("https://dct-user-auth.herokuapp.com/users/login", loginData)
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          dispatch(userLoginError(response.data.errors))
        } else {
          dispatch(userLoginSuccess())
          localStorage.setItem("token", response.data.token)
          redirectToHome()
        }
      })
      .catch((error) => {
        dispatch(userLoginError(error.message))
      })
  }
}

const userLoginRequest = () => {
  return {
    type: "USER_LOGIN_REQUEST",
  }
}

const userLoginSuccess = () => {
  return {
    type: "USER_LOGIN_SUCCESS",
  }
}

const userLoginError = (errorMessage) => {
  return {
    type: "USER_LOGIN_ERROR",
    payload: errorMessage,
  }
}

export const userLogout = () => {
  return {
    type: "USER_LOGOUT",
  }
}

export const startUserRegisterRequest = (registerData, redirectToLogin) => {
  return (dispatch) => {
    dispatch(userRegisterRequest())
    axios
      .post("https://dct-user-auth.herokuapp.com/users/register", registerData)
      .then((response) => {
        if (response.data.hasOwnProperty("errors")) {
          dispatch(userRegisterError("Account already exists. Please Login.."))
        } else {
          dispatch(userRegisterSuccess())
          redirectToLogin()
        }
      })
      .catch((error) => {
        dispatch(userRegisterError("NetWork Error"))
      })
  }
}

const userRegisterRequest = () => {
  return {
    type: "USER_REGISTER_REQUEST",
  }
}

const userRegisterSuccess = () => {
  return {
    type: "USER_REGISTER_SUCCESS",
  }
}

const userRegisterError = (errorMessage) => {
  return {
    type: "USER_REGISTER_ERROR",
    payload: errorMessage,
  }
}

export const startFetchAccountInfo = () => {
  return (dispatch) => {
    dispatch(fetchAccountInfoRequest())
    axios
      .get("https://dct-user-auth.herokuapp.com/users/account", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(fetchAccountInfoSuccess(response.data))
      })
      .catch((error) => {
        dispatch(fetchAccountInfoError(error.message))
      })
  }
}

const fetchAccountInfoRequest = () => {
  return {
    type: "FETCH_ACCOUNT_INFO_REQUEST",
  }
}

const fetchAccountInfoSuccess = (accountData) => {
  return {
    type: "FETCH_ACCOUNT_INFO_SUCCESS",
    payload: accountData,
  }
}

const fetchAccountInfoError = (errorMessage) => {
  return {
    type: "FETCH_ACCOUNT_INFO_ERROR",
    payload: errorMessage,
  }
}
