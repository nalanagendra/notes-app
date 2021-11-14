const initialNotesState = {
  isLoading: false,
  message: "",
  notes: [],
  errorMessage: "",
};

const notesReducer = (state = initialNotesState, action) => {
  switch (action.type) {
    case "ADD_NOTE_REQUEST": {
      return {
        ...state,
        notes: [],
        message: "Adding note",
        errorMessage: "",
        isLoading: false,
      };
    }

    case "ADD_NOTE_SUCCESS": {
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        message: "Note added Successfully",
        errorMessage: "",
        isLoading: false,
      };
    }

    case "ADD_NOTE_ERROR": {
      return {
        ...state,
        notes: [],
        message: "",
        errorMessage: "Something went wrong..",
        isLoading: false,
      };
    }

    default: {
      return {
        notes: [...state.notes],
      };
    }
  }
};

export default notesReducer;
