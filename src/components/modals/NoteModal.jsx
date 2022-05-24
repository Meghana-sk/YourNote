import { useState } from "react";
import { NotesEditor } from "../notes-editor/NotesEditor";
import "./notesmodal.css";
import { addNewNoteService } from "../../services";
import { formatDate } from "../../backend/utils/authUtils";
import { useNote } from "../../context/note-functions/note-context";
import { useAuth } from "../../context/authentication/auth-context";
import { editNoteService } from "../../services/note-services/editNote.service";
import { toast } from "react-toastify";

const NotesModal = ({ setOpenModal, editNote = false, noteData }) => {
  const defaultNoteData = editNote
    ? noteData
    : {
        title: "",
        content: "",
        color: "yellow",
        tags: [],
        priority: "low",
        date: formatDate(),
      };
  const { noteDispatch } = useNote();
  const {
    authState: { token },
  } = useAuth();
  const [inputData, setInputData] = useState(defaultNoteData);
  const addNewNoteHandler = () => {
    if (inputData.title && inputData.content) {
      editNote
        ? editNoteService({ inputData, token, noteDispatch })
        : addNewNoteService({ inputData, token, noteDispatch });
      setOpenModal(false);
    } else if (inputData.title === "") {
      toast.error("Note title can not be empty");
    } else if (inputData.content === "") {
      toast.error("Note can not be empty");
    }
  };
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="notes-editor-wrapper">
      <div className="note-editor">
        <div className="close-icon">
          <button className="btn btn-float" onClick={() => setOpenModal(false)}>
            <i className="fas fa-times "></i>
          </button>
        </div>
        <h3>Note</h3>
        <input
          className="input-text"
          type="text"
          placeholder="Note title"
          value={inputData.title}
          onChange={(e) =>
            setInputData((data) => ({ ...data, title: e.target.value }))
          }
        />
        <NotesEditor
          className="rich-editor"
          value={inputData.content}
          setValue={(content) => setInputData((data) => ({ ...data, content }))}
        />
        <div className="editor-styles">
          <div className="options">
            <label htmlFor="tags">Tags</label>
            <select
              id="tags"
              name="tags"
              value={inputData.tags}
              onChange={inputHandler}
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
            </select>
          </div>
          <div className="options">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={inputData.priority}
              onChange={inputHandler}
            >
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="options">
            <label htmlFor="color">Color</label>
            <select
              id="color"
              name="color"
              value={inputData.color}
              onChange={inputHandler}
            >
              <option value="yellow">Yellow</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
        <button className="btn btn-primary" onClick={addNewNoteHandler}>
          {editNote ? "Save note" : "Add note"}
        </button>
      </div>
    </div>
  );
};

export { NotesModal };
