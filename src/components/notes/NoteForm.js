import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";

import { startAddNote } from "../../actions/notesActions";

const initialValues = {
  title: "",
  body: "",
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required!"),
});

const NoteForm = (props) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.notes.message);
  const errorMessage = useSelector((state) => state.notes.errorMessage);

  const onSubmit = (values, { resetForm }) => {
    dispatch(startAddNote(values, resetForm));
  };

  return (
    <React.Fragment>
      {message && <div>{message}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Field name="title" placeholder="Title.." />
          <br />
          <ErrorMessage name="title" />
          <br />
          <Field name="body" as="textarea" placeholder="Enter description" />
          <br />
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </React.Fragment>
  );
};

export default NoteForm;
