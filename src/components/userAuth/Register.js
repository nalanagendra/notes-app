import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  const onSubmit = (values) => {
    values.username = values.username.trim();
    console.log(values);
  };

  return (
    <div>
      <h2>Register with us</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field name="username" placeholder="Enter username" />
          <br />
          <ErrorMessage name="username" />
          <br />
          <Field name="email" placeholder="Enter email" />
          <br />
          <ErrorMessage name="email" />
          <br />
          <Field name="password" placeholder="Enter password" type="password" />
          <br />
          <ErrorMessage name="password" />
          <br />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
