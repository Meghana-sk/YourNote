import {
  ADD_TO_ARCHIVE,
  FETCH_NOTES_IN_ARCHIVE,
  REMOVE_FROM_ARCHIVE,
  DELETE_FROM_ARCHIVE,
  CLEAR_ARCHIVES,
} from "../../shared/variables";

const archiveReducer = (state, action) => {
  switch (action.type) {
    case FETCH_NOTES_IN_ARCHIVE:
    case ADD_TO_ARCHIVE:
    case REMOVE_FROM_ARCHIVE:
    case DELETE_FROM_ARCHIVE:
      return { ...state, archives: action.payload.archives };
    case CLEAR_ARCHIVES:
      return { ...state, archives: [] };
    default:
      return state;
  }
};

export { archiveReducer };
