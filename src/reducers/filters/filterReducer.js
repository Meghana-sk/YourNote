import {
  SORT_BY_DATE,
  SORT_BY_PRIORITY,
  CLEAR_FILTERS,
} from "../../shared/variables";

const filterReducer = (state, action) => {
  switch (action.type) {
    case SORT_BY_DATE:
      return {
        ...state,
        sortByDate: action.payload,
      };
    case SORT_BY_PRIORITY:
      return {
        ...state,
        sortByPriority: action.payload,
      };
    case CLEAR_FILTERS:
      return {
        sortByDate: "",
        sortByPriority: "",
      };
    default:
      return state;
  }
};

export { filterReducer };
