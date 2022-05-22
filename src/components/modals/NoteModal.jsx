import { NotesEditor } from "../notes-editor/NotesEditor";
import "./notesmodal.css";

const NotesModal = () => {
  return (
    <div className="notes-editor-wrapper">
      <div className="note-editor">
        <h3>Note</h3>
        <input className="input-text" type="text" placeholder="Note title" />
        <NotesEditor className="rich-editor" />
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
        <button className="btn btn-primary">Add note</button>
      </div>
    </div>
  );
};

export { NotesModal };
