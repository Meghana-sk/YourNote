import { createContext, useContext, useReducer } from "react";
import { tagsReducer } from "../../reducers";

const TagContext = createContext(null);

const TagProvider = ({ children }) => {
  const [tagState, tagDispatch] = useReducer(tagsReducer, {
    tags: [],
  });
  return (
    <TagContext.Provider value={{ tagState, tagDispatch }}>
      {children}
    </TagContext.Provider>
  );
};

const useTag = () => useContext(TagContext);

export { useTag, TagProvider };
