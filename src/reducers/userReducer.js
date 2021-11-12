const initialUsersData = {
  isLoading: false,
  errorMessage: "",
  message: "",
  isLoggedIn: false,
};

const userReducer = (state = initialUsersData, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST": {
      return { ...state, errorMessage: "", isLoading: true, message: "" };
    }

    case "USER_LOGIN_REQUEST_SUCCESS": {
      return {
        ...state,
        errorMessage: "",
        isLoading: false,
        message: "Login Successful",
        isLoggedIn: true,
      };
    }

    case "USER_LOGIN_REQUEST_ERROR": {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
        message: "",
      };
    }

    default: {
      if (localStorage.getItem("token")) {
        return {
          ...state,
          isLoggedIn: true,
        };
      }
      return { ...state };
    }
  }
};

export default userReducer;
