import React from "react"
import { useSelector } from "react-redux"
import MessageBox from "../resusableComponents/MessageBox"

import AddNote from "./AddNote"
import NoteList from "./NotesList"


const NotesContainer = (props) => {
  const message = useSelector(state => state.notes.message)
  const errorMessage = useSelector(state => state.notes.errorMessage)
  const notesCount = useSelector(state => state.notes.notes.length)

  return (
    <div className="container">
      <h2 className="mt-4">Notes</h2>

      <MessageBox>
        {((notesCount!==0) && message) && <div class="alert alert-success" role="alert">
          {message} 
        </div>}
        {errorMessage && <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>}
      </MessageBox>


      <div className="row m-3">
        <div className="col-md-4 order-md-2">
          <AddNote />
        </div>
        <div className="col-md-8 order-md-1">
          <NoteList />
        </div>
      </div>
    </div>
  )
}

export default NotesContainer
