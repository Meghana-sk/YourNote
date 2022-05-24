import React, { createContext, useContext, useReducer } from "react";
import { trashReducer } from "../../reducers";

const TrashContext = createContext(null);

const TrashProvider = ({ children }) => {
  const [trashState, trashDispatch] = useReducer(trashReducer, {
    trash: [],
  });
  return (
    <TrashContext.Provider value={{ trashState, trashDispatch }}>
      {children}
    </TrashContext.Provider>
  );
};

const useTrash = () => useContext(TrashContext);

export { useTrash, TrashProvider };
