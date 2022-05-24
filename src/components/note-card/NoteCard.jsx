import { useState } from "react";
import { useLocation } from "react-router-dom";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import { getDate, getTime } from "../../utils/date-functions/date";
import { NotesModal } from "../modals/NoteModal";
import { useTrash, useNote, useAuth } from "../../context";
import {
  moveToTrashService,
  restoreFromTrashService,
  deleteFromTrashService,
} from "../../services";
import "./notecard.css";

const NoteCard = ({ note }) => {
  const { pathname } = useLocation();
  const [showNoteModal, setShowNoteModal] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { noteDispatch } = useNote();
  const { trashDispatch } = useTrash();

  const trashHandler = () => {
    if (pathname === "/home") {
      moveToTrashService({ token, note, noteDispatch, trashDispatch });
    } else if (pathname === "/trash") {
      deleteFromTrashService({ token, note, trashDispatch });
    }
  };

  const restoreNoteFromTrashHandler = () => {
    restoreFromTrashService({ token, note, noteDispatch, trashDispatch });
  };
  return (
    <div className={`note-card ${note.color.toLowerCase()}`}>
      <header className="note-header">
        <h2 className="title fw-600">{note.title}</h2>
        <button title="pin" className="btn btn-float">
          <i className="fas fa-map-pin" />
        </button>
      </header>
      <div className="note-content">{HtmlParser(note.content)}</div>
      <footer className="note-footer">
        <div className="update-date">
          {getDate(note.date)} | {getTime(note.date)}
        </div>
        <div className="db-actions">
          <button
            title="delete"
            className="btn btn-float"
            onClick={trashHandler}
          >
            <i className="fas fa-trash" />
          </button>
          {pathname !== "/trash" && (
            <button
              title="Edit"
              className="btn btn-float"
              onClick={() => setShowNoteModal(true)}
            >
              <i className="fas fa-pen"></i>
            </button>
          )}
          {pathname !== "/trash" && (
            <button title="Archive" className="btn btn-float">
              <i className="fas fa-archive" />
            </button>
          )}
          {pathname === "/trash" && (
            <button
              title="restore note"
              className="btn btn-float"
              onClick={restoreNoteFromTrashHandler}
            >
              <i className="fas fa-trash-restore" />
            </button>
          )}
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
