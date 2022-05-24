import React, { useReducer, createContext, useContext } from "react";
import { archiveReducer } from "../../reducers";

const ArchiveContext = createContext(null);

const ArchiveProvider = ({ children }) => {
  const [archiveState, archiveDispatch] = useReducer(archiveReducer, {
    archives: [],
  });
  return (
    <ArchiveContext.Provider value={{ archiveState, archiveDispatch }}>
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
