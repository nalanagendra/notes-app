import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"

import { startUserLogin } from "../../actions/userActions"
import TextError from "../resusableComponents/TextError"
import InputBox from "../resusableComponents/InputBox"
import MessageBox from "../resusableComponents/MessageBox"
import SuccessAlert from "../resusableComponents/SuccessAlert"
import ErrorAlert from "../resusableComponents/ErrorAlert"

const initialValues = {
  email: "testuser3@gmail.com",
  password: "secret123",
}

const validationSchema = Yup.object({
  email: Yup.string().required("Required!").email("Enter valid email"),
  password: Yup.string().required("Required!!"),
})

const Login = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const message = useSelector((state) => state.user.message)
  const errorMessage = useSelector((state) => state.user.errorMessage)

  const onSubmit = (values) => {
    dispatch(startUserLogin(values, redirectToHome))
  }

  const redirectToHome = () => {
    navigate("/")
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <h2 className="h3">Login</h2>
          <MessageBox>
            {message &&  <SuccessAlert>{message}</SuccessAlert> }
            {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
          </MessageBox>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            <Form className="form-group">
              <InputBox>
                <Field className="form-control mt-1" name="email" placeholder="Enter email" />
                <ErrorMessage name="email" component={TextError} />
              </InputBox>
              <InputBox>
                <Field className="form-control" name="password" type="password" placeholder="Enter password" />
                <ErrorMessage name="password" component={TextError} />
              </InputBox>
              <button className="btn btn-primary" type="submit">Login</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
