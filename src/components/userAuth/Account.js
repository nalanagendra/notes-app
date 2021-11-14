import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startFetchAccountInfo } from "../../actions/userActions";

const Account = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const message = useSelector((state) => state.user.message);
  const accountData = useSelector((state) => {
    return { ...state.user.data };
  });
  const errorMessage = useSelector((state) => state.user.errorMessage);

  useEffect(() => {
    dispatch(startFetchAccountInfo());
  }, []);

  return (
    <div>
      <h2>Account Information</h2>
      {message && <div>{message}</div>}
      {isLoading && <div>Loading..</div>}
      {!isLoading && !errorMessage ? (
        <div>
          <p>Id: {accountData._id}</p>
          <h3>User Name: {accountData.username}</h3>
          <p>Email: {accountData.email}</p>
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </div>
  );
};

export default Account;
