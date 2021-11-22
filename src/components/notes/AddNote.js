import React from "react"
import NoteForm from "./NoteForm"
import { useDispatch } from "react-redux"

import { startAddNote } from "../../actions/notesActions"

const AddNote = (props) => {
  const dispatch = useDispatch()

  const formSubmit = (values, resetForm) => {
    dispatch(startAddNote(values, resetForm))
  }

  return (
    <div>
      <h2 className="h4 mt-3">Add Note</h2>
      <NoteForm formSubmit={formSubmit} />
    </div>
  )
}

export default AddNote
