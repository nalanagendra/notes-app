const initialNotesState = {
  isLoading: false,
  message: "",
  notes: [],
  errorMessage: "",
}

const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case "ADD_NOTE_REQUEST": {
      return {
        ...state,
        message: "Adding note",
        errorMessage: "",
        isLoading: false,
      }
    }

    case "ADD_NOTE_SUCCESS": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
        message: "Note added Successfully",
        errorMessage: "",
        isLoading: false,
      }
    }

    case "ADD_NOTE_ERROR": {
      return {
        ...state,
        notes: [],
        message: "",
        errorMessage: "Something went wrong..",
        isLoading: false,
      }
    }

    case "GET_NOTES_REQUEST": {
      return {
        ...state,
        notes: [],
        message: "",
        errorMessage: "",
        isLoading: true,
      }
    }

    case "GET_NOTES_SUCCESS": {
      return {
        ...state,
        notes: [...action.payload],
        errorMessage: "",
        message: "Notes loaded successfully",
        isLoading: false,
      }
    }

    case "GET_NOTES_ERROR": {
      return {
        ...state,
        notes: [],
        errorMessage: "Something went wrong",
        message: "",
        isLoading: false,
      }
    }

    case "DELETE_NOTE_SUCCESS": {
      const filteredNotes = state.notes.filter(
        (note) => note._id !== action.payload._id
      )
      return {
        ...state,
        notes: [...filteredNotes],
        errorMessage: "",
        message: "",
        isLoading: false,
      }
    }

    case "EDIT_NOTE_SUCCESS": {
      const updatedNotes = state.notes.map((note) => {
        if (note._id === action.payload._id) {
          return { ...action.payload }
        }
        return { ...note }
      })
      return {
        ...state,
        notes: [...updatedNotes],
        errorMessage: "",
      }
    }

    default: {
      return {
        notes: [...state.notes],
      }
    }
  }
}

export default notesReducer
