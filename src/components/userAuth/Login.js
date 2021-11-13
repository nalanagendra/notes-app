import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { startUserLogin } from "../../actions/userActions";

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
    <div>
      <h2>Login</h2>
      {message && <div>{message}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="email" placeholder="Enter email" />
          <br />
          <ErrorMessage name="email" />
          <br />
          <Field name="password" type="password" placeholder="Enter password" />
          <br />
          <ErrorMessage name="password" />
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
