import React from "react"
import { useDispatch } from "react-redux"

import NoteForm from "./NoteForm"
import { startEditNote } from "../../actions/notesActions"

const EditNote = (props) => {
  const { _id, handleToggle } = props
  const dispatch = useDispatch()
  const formSubmit = (value) => {
    dispatch(startEditNote(value, _id, handleToggle))
  }

  return (
    <React.Fragment>
      <h3 className="h4">Edit Note</h3>
      <NoteForm {...props} formSubmit={formSubmit} />
    </React.Fragment>
  )
}

export default EditNote
