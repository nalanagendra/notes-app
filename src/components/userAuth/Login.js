import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { startUserLogin } from "../../actions/userActions";
import TextError from "../resusableComponents/TextError";
import InputBox from "../resusableComponents/InputBox";
import MessageBox from "../resusableComponents/MessageBox";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required!").email("Enter valid email"),
  password: Yup.string().required("Required!!"),
});

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.user.message);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const onSubmit = (values) => {
    dispatch(startUserLogin(values, redirectToHome));
  };

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 offset-sm-3">
          <h2 className="h3 mb-4">Login</h2>
          <MessageBox>
            {message && <div>{message}</div>}
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
          </MessageBox>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            <Form>
              <InputBox>
                <Field name="email" placeholder="Enter email" />
                <ErrorMessage name="email" component={TextError} />
              </InputBox>
              <InputBox>
                <Field name="password" type="password" placeholder="Enter password" />
                <ErrorMessage name="password" component={TextError} />
              </InputBox>
              <button className="btn btn-primary" type="submit">Login</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
