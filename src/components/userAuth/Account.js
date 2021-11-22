import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startFetchAccountInfo } from "../../actions/userActions";
import MessageBox from "../resusableComponents/MessageBox";

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
    <div className="container mt-5">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6 col-lg-4">
          {isLoading && (
            <div className="text-center"> 
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <div><strong>Loading...</strong></div>
            </div>
          )} 

          {message && <div className="text-center alert alert-success" role="alert">{message}</div> }

          {errorMessage &&<div className="text-center alert alert-danger" role="alert" role="alert">{errorMessage}</div> }

          {(!isLoading && !errorMessage) && (
            <div className="card text-center">
              <h2 className="card-header">Account Information</h2>
              <div className="card-body p-sm-5">
                <h4 className="card-title">User Name: {accountData.username}</h4>
                <p className="card-text">Id: {accountData._id}</p>
                <p className="card-text">Email: {accountData.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
