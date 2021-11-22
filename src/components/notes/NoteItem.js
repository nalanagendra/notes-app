import React, { useState } from "react"
import { useDispatch } from "react-redux"

import EditNote from "./EditNote"
import { startDeleteNote } from "../../actions/notesActions"

const NoteItem = (props) => {
  const { title, body, _id } = props
  const [editToggle, setEditToggle] = useState(false)
  const dispatch = useDispatch()

  const handleToogle = () => {
    setEditToggle(!editToggle)
  }

  const handleDeleteNote = () => {
    dispatch(startDeleteNote(_id))
  }

  return (
    <div style={{"min-height": "17rem"}}>
      {editToggle ? (
        <div className="border px-5">
          <EditNote
            _id={_id}
            title={title}
            body={body}
            handleToggle={handleToogle}
          />
          <button className="btn btn-primary align-self-start" onClick={handleToogle}>Cancel</button>
        </div>
      ) : (
        <div className="card">
          <div className="card-body p-5">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{body}</p>
            <button className="btn btn-outline-primary mr-3" onClick={handleToogle}>Edit</button>
            <button className="btn btn-primary" onClick={handleDeleteNote}>Delete</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NoteItem
