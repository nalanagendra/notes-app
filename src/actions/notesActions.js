import axios from "axios"

export const startAddNote = (noteData, resetForm) => {
  return (dispatch) => {
    dispatch(addNoteRequest())
    axios
      .post("https://dct-user-auth.herokuapp.com/api/notes", noteData, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(addNoteSuccess(response.data))
        resetForm()
      })
      .catch((error) => {
        dispatch(addnoteError())
      })
  }
}

const addNoteRequest = () => {
  return {
    type: "ADD_NOTE_REQUEST",
    payload: "Adding note."
  }
}

const addNoteSuccess = (noteData) => {
  return {
    type: "ADD_NOTE_SUCCESS",
    payload: noteData,
  }
}

const addnoteError = () => {
  return {
    type: "ADD_NOTE_ERROR",
    payload: "Unable to add note."
  }
}

export const startGetNotes = () => {
  return (dispatch) => {
    dispatch(getNotesRequest())
    axios
      .get("https://dct-user-auth.herokuapp.com/api/notes", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(getNotesSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getNotesError())
      })
  }
}

const getNotesRequest = () => {
  return {
    type: "GET_NOTES_REQUEST",
  }
}

const getNotesSuccess = (notes) => {
  return {
    type: "GET_NOTES_SUCCESS",
    payload: notes,
  }
}

const getNotesError = () => {
  return {
    type: "GET_NOTES_ERROR",
    payload: "Unanable to load notes."
  }
}

export const startDeleteNote = (_id) => {
  return (dispatch) => {
    dispatch(deleteNoteRequest())
    axios
      .delete(`https://dct-user-auth.herokuapp.com/api/notes/${_id}`, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(deleteNoteSuccess(response.data))
      })
      .catch((error) => {
        dispatch(deleteNoteError())
      })
  }
}

const deleteNoteRequest = () => {
  return {
    type: "DELETE_NOTE_REQUEST"
  }
}

const deleteNoteSuccess = (note) => {
  return {
    type: "DELETE_NOTE_SUCCESS",
    payload: note,
  }
}

const deleteNoteError = () => {
  return {
    type: "DELETE_NOTE_ERROR",
    payload: "Unable to delete note."
  }
}

export const startEditNote = (editedNote, _id, handleToggle) => {
  return (dispatch) => {
    dispatch(editNoteRequest())
    axios
      .put(`https://dct-user-auth.herokuapp.com/api/notes/${_id}`, editedNote, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(editNoteSuccess(response.data))
        handleToggle()
      })
      .catch((error) => {
        editNoteError()
      })
  }
}

const editNoteRequest = () => {
  return {
    type: "EDIT_NOTE_REQUEST",
    payload: "Editing note."
  }
}

const editNoteSuccess = (editedNote) => {
  return {
    type: "EDIT_NOTE_SUCCESS",
    payload: editedNote,
  }
}

const editNoteError = () => {
  return {
    type: "EDIT_NOTE_ERROR",
    payload: "Unable to edit note."
  }
}
