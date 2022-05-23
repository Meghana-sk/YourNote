import { useState } from "react";
import { NotesEditor } from "../notes-editor/NotesEditor";
import "./notesmodal.css";
import { addNewNoteService } from "../../services";
import { formatDate } from "../../backend/utils/authUtils";
import { useNote } from "../../context/note-functions/note-context";
import { useAuth } from "../../context/authentication/auth-context";

const NotesModal = () => {
  const currentDate = new Date();

  const defaultNoteData = {
    title: "",
    content: "",
    color: "Blue",
    // tags: [],
    priority: "low",
    date: formatDate(),
  };
  const { noteDispatch } = useNote();
  const {
    authState: { token },
  } = useAuth();
  const [inputData, setInputData] = useState(defaultNoteData);
  const addNewNoteHandler = () => {
    addNewNoteService({ inputData, token, noteDispatch });
  };
  return (
    <div className="notes-editor-wrapper">
      <div className="note-editor">
        <h3>Note</h3>
        <input
          className="input-text"
          type="text"
          placeholder="Note title"
          onChange={(e) =>
            setInputData((data) => ({ ...data, title: e.target.value }))
          }
        />
        <NotesEditor
          className="rich-editor"
          value={inputData.content || ""}
          setValue={(content) => setInputData((data) => ({ ...data, content }))}
        />
        <div className="editor-styles">
          <div className="options">
            <label>Tags</label>
            <select>
              <option>Work</option>
              <option>Personal</option>
            </select>
          </div>
          <div className="options">
            <label>Priority</label>
            <select>
              <option>Low</option>
              <option>High</option>
            </select>
          </div>
          <div className="options">
            <label>Color</label>
            <select>
              <option>Red</option>
              <option>Blue</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={addNewNoteHandler}>
          Add note
        </button>
      </div>
    </div>
  );
};

export { NotesModal };
