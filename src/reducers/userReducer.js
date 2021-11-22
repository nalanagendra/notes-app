const initialUsersData = {
  isLoading: false,
  errorMessage: "",
  message: "",
  isLoggedIn: false,
  data: {},
}

const userReducer = (state = initialUsersData, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST": {
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        message: "Logging in...",
      }
    }

    case "USER_LOGIN_SUCCESS": {
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        message: "Login Successful",
        isLoggedIn: true,
      }
    }

    //during logout remove token from local storage
    case "USER_LOGOUT": {
      localStorage.removeItem("token")
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        message: "Loggedout successfully",
        isLoggedIn: false,
      }
    }

    case "USER_REGISTER_REQUEST": {
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        message: "Registering...",
        isLoggedIn: false,
      }
    }

    case "USER_REGISTER_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        message: "Registered Successfully.",
        isLoggedIn: false,
      }
    }

    case "FETCH_ACCOUNT_INFO_REQUEST": {
      return {
        ...state,
        isLoading: true,
        message: "",
        errorMessage: "",
      }
    }

    case "FETCH_ACCOUNT_INFO_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        message: "Account information loaded successfully",
        errorMessage: "",
        data: { ...action.payload },
      }
    }

    //grouped all the errors
    case "USER_REGISTER_ERROR":
    case "USER_LOGIN_ERROR":
    case "FETCH_ACCOUNT_INFO_ERROR": {
      return {
        ...state,
        isLoading: false,
        message: "",
        errorMessage: action.payload,
        data: {},
      }
    }

    case "CLEAR_USER_MESSAGE": {
      return {
        ...state,
        message: "",
        errorMessage: ""
      }
    }

    default: {
      if (localStorage.getItem("token")) {
        return {
          ...state,
          isLoggedIn: true,
        }
      }
      return { ...state }
    }
  }
}

export default userReducer
