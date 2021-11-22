const initialNotesState = {
  isLoading: false,
  message: "",
  notes: [],
  errorMessage: "",
}

const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case "ADD_NOTE_SUCCESS": {
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        message: "Note added Successfully",
        errorMessage: "",
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
        notes: [...action.payload].reverse(),
        errorMessage: "",
        message: "Notes loaded successfully.",
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
        message: "Note deleted successfully",
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
        message: "Note edited successfully."
      }
    }

    //setting messaged during network request
    case "ADD_NOTE_REQUEST":
    case "DELETE_NOTE_REQUEST": 
    case "EDIT_NOTE_REQUEST": {
      return {
        ...state,
        message: action.payload,
        errorMessage: ""
      }
    }

    //setting error messages
    case "ADD_NOTE_ERROR":
    case "GET_NOTES_ERROR":
    case "DELETE_NOTE_ERROR":
    case "EDIT_NOTE_ERROR": {
      return {
        ...state,
        notes: [],
        message: "",
        errorMessage: action.payload,
        isLoading: false,
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
