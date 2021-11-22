import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { startUserRegisterRequest } from "../../actions/userActions";
import TextError from "../resusableComponents/TextError";
import InputBox from "../resusableComponents/InputBox";
import MessageBox from "../resusableComponents/MessageBox";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .strict(false)
    .trim("Cannot start and end with blank space")
    .min(5, "Username is Too Short!")
    .max(50, "Username is Too Long!")
    .required("Required!"),
  email: Yup.string().required("Required!").email("Enter valid email"),
  password: Yup.string()
    .required("Required!")
    .min(5, "password is Too Short!")
    .max(16, "password is Too Long!"),
});

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.user.message);
  const errorMessage = useSelector((state) => state.user.errorMessage);

  const onSubmit = (values) => {
    values.username = values.username.trim();
    dispatch(startUserRegisterRequest(values, redirectToLogin));
  };

  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 offset-sm-3">
          <h2 className="h3 mb-4">Register with us</h2>
          <MessageBox>
            {message && <div>{message}</div>}
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
          </MessageBox>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <InputBox>
                <Field name="username" placeholder="Enter username" />
                <ErrorMessage name="username" component={TextError} />
              </InputBox>
              <InputBox>
                <Field name="email" placeholder="Enter email" />
                <ErrorMessage name="email" component={TextError} />
              </InputBox>
              <InputBox>
                <Field name="password" placeholder="Enter password" type="password" />
                <ErrorMessage name="password" component={TextError} />
              </InputBox>
              <button className="btn btn-primary" type="submit">Register</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
