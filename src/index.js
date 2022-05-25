import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  AuthProvider,
  NoteProvider,
  TrashProvider,
  ArchiveProvider,
  TagProvider,
  FilterProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NoteProvider>
          <TagProvider>
            <ArchiveProvider>
              <TrashProvider>
                <FilterProvider>
                  <App />
                </FilterProvider>
              </TrashProvider>
            </ArchiveProvider>
          </TagProvider>
        </NoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
