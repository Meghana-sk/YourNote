import {
  FETCH_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  CLEAR_NOTES,
} from "../../shared/variables";

const noteReducer = (state, action) => {
  switch (action.type) {
    case FETCH_NOTES:
    case ADD_NOTE:
    case DELETE_NOTE:
    case EDIT_NOTE:
    case CLEAR_NOTES:
      return {
        ...state,
        notes: [],
      };
    default:
      return state;
  }
};

export { noteReducer };
