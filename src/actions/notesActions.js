import axios from "axios";

export const startAddNote = (noteData, resetForm) => {
  return (dispatch) => {
    dispatch(addNoteRequest());
    axios
      .post("https://dct-user-auth.herokuapp.com/api/notes", noteData, {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(addNoteSuccess(response.data));
        resetForm();
      })
      .catch((error) => {
        dispatch(addnoteError());
      });
  };
};

const addNoteRequest = () => {
  return {
    type: "ADD_NOTE_REQUEST",
  };
};

const addNoteSuccess = (noteData) => {
  return {
    type: "ADD_NOTE_SUCCESS",
    payload: noteData,
  };
};

const addnoteError = () => {
  return {
    type: "ADD_NOTE_ERROR",
  };
};

export const startGetNotes = () => {
  return (dispatch) => {
    dispatch(getNotesRequest());
    axios
      .get("https://dct-user-auth.herokuapp.com/api/notes", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch(getNotesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getNotesError());
      });
  };
};

const getNotesRequest = () => {
  return {
    type: "GET_NOTES_REQUEST",
  };
};

const getNotesSuccess = (notes) => {
  return {
    type: "GET_NOTES_SUCCESS",
    payload: notes,
  };
};

const getNotesError = () => {
  return {
    type: "GET_NOTES_ERROR",
  };
};
