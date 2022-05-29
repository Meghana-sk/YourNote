import { ADD_TAG } from "../../shared/variables";

const tagsReducer = (state, action) => {
  switch (action.type) {
    case ADD_TAG:
      return { ...state, tags: [...state.tags, action.payload] };
    default:
      return state;
  }
};

export { tagsReducer };
