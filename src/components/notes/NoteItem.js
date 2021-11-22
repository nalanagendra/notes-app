import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Swal from 'sweetalert2'

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      console.log(result.isConfirmed)
      if (result.isConfirmed){
        dispatch(startDeleteNote(_id))
      }
    })
  }

  return (
    <div style={{minHeight: "17rem"}}>
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
