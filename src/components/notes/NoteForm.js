import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

import InputBox from "../resusableComponents/InputBox"
import TextError from "../resusableComponents/TextError"

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required!"),
})

const NoteForm = (props) => {
  const { formSubmit, title: editTitle, body: editBody } = props
  const initialValues = {
    title: editTitle ? editTitle : "",
    body: editBody ? editBody : "",
  }

  const onSubmit = (values, { resetForm }) => {
    formSubmit(values, resetForm)
  }

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-group mb-1">
          <InputBox>
            <Field className="form-control" name="title" placeholder="Title.." />
            <ErrorMessage name="title" component={TextError} />
          </InputBox>
          <Field className="form-control" name="body" as="textarea" placeholder="Enter description" />
          <br/>
          <button className="btn btn-primary" type="submit">Save</button>
        </Form>
      </Formik>
    </React.Fragment>
  )
}

export default NoteForm
