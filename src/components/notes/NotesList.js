import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import NoteItem from "./NoteItem"
import { startGetNotes } from "../../actions/notesActions"
import Loader from "../resusableComponents/Loader"

const NoteList = (props) => {
  const dispatch = useDispatch()
  const notes = useSelector((state) =>
    state.notes.notes.map((note) => {
      return { ...note }
    })
  )
  const isLoading = useSelector((state) => state.notes.isLoading)
  const errorMessage = useSelector((state) => state.notes.errorMessage)

  useEffect(() => {
    dispatch(startGetNotes())
  }, [])

  return (
    <div>
      {isLoading ? <Loader /> : null}
      {(!errorMessage && !isLoading && notes.length === 0) && (
        <div className="h4">No notes to show. Please add your first note. </div>
      )}
      {(!errorMessage && !isLoading) && (
        notes.map((note) => <NoteItem key={note._id} {...note} />)
      )}
    </div>
  )
}

export default NoteList
