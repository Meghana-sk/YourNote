import { useState } from "react";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import { getDate, getTime } from "../../utils/date-functions/date";
import { NotesModal } from "../modals/NoteModal";
import "./notecard.css";

const NoteCard = ({ note }) => {
  const [showNoteModal, setShowNoteModal] = useState(false);
  return (
    <div className={`note-card ${note.color.toLowerCase()}`}>
      <header className="note-header">
        <h2 className="title fw-600">{note.title}</h2>
        <button title="pin" className="btn btn-float">
          <i className="fas fa-map-pin" />
        </button>
      </header>
      <p className="note-content">{HtmlParser(note.content)}</p>
      <footer className="note-footer">
        <div className="update-date">
          {getDate(note.date)} | {getTime(note.date)}
        </div>
        <div className="db-actions">
          <button title="delete" className="btn btn-float">
            <i className="fas fa-trash" />
          </button>
          <button
            title="Edit"
            className="btn btn-float"
            onClick={() => setShowNoteModal(true)}
          >
            <i className="fas fa-pen"></i>
          </button>
          <button title="Archive" className="btn btn-float">
            <i className="fas fa-archive" />
          </button>
        </div>
        {showNoteModal ? (
          <NotesModal
            editNote={true}
            noteData={note}
            setOpenModal={setShowNoteModal}
          />
        ) : null}
      </footer>
    </div>
  );
};

export { NoteCard };
