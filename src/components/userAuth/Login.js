import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Required!").email("Enter valid email"),
  password: Yup.string().required("Required!!"),
});

const onSubmit = (values) => {
  console.log(values);
};

const Login = (props) => {
  return (
    <div>
      <h2>Login component</h2>
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
