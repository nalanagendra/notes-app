const initialUsersData = { isLoading: true, data: {}, errorMessage: "" };

const userReducer = (state = initialUsersData, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
