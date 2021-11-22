import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startFetchAccountInfo } from "../../actions/userActions";
import Loader from "../resusableComponents/Loader";
import SuccessAlert from "../resusableComponents/SuccessAlert";
import ErrorAlert from "../resusableComponents/ErrorAlert";

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
          {isLoading && <Loader />} 

          {message && <SuccessAlert>{message}</SuccessAlert> }

          {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert> }

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
