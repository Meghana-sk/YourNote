import {
  MOVE_TO_TRASH,
  LOAD_NOTES_IN_TRASH,
  RESTORE_FROM_TRASH,
  CLEAR_TRASH,
} from "../../shared/variables";

const trashReducer = (state, action) => {
  switch (action.type) {
    case LOAD_NOTES_IN_TRASH:
    case MOVE_TO_TRASH:
    case RESTORE_FROM_TRASH:
      return { ...state, trash: action.payload.trash };
    case CLEAR_TRASH:
      return { ...state, trash: [] };
    default:
      return state;
  }
};

export { trashReducer };
