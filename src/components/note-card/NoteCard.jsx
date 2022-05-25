import { useState } from "react";
import { useLocation } from "react-router-dom";
import HtmlParser from "react-html-parser/lib/HtmlParser";
import { getDate, getTime } from "../../utils/date-functions/date";
import { NotesModal } from "../modals/NoteModal";
import { useTrash, useNote, useAuth, useArchive } from "../../context";
import {
  moveToTrashService,
  restoreFromTrashService,
  deleteFromTrashService,
  addNoteToArchiveService,
  restoreFromArchiveService,
  deleteFromArchiveService,
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
  const { archiveDispatch } = useArchive();

  const trashHandler = () => {
    if (pathname === "/home") {
      moveToTrashService({ token, note, noteDispatch, trashDispatch });
    } else if (pathname === "/trash") {
      deleteFromTrashService({ token, note, trashDispatch });
    } else if (pathname === "/archive") {
      deleteFromArchiveService({ token, note, archiveDispatch });
    }
  };

  const restoreNoteFromTrashHandler = () => {
    restoreFromTrashService({ token, note, noteDispatch, trashDispatch });
  };

  const archiveHandler = () => {
    addNoteToArchiveService({ token, note, noteDispatch, archiveDispatch });
  };

  const restoreFromArchiveHandler = () => {
    restoreFromArchiveService({ token, note, noteDispatch, archiveDispatch });
  };
  return (
    <div className={`note-card ${note.color.toLowerCase()}`}>
      <header className="note-header">
        <h2 className="title fw-600">{note.title}</h2>
        {note.priority ? (
          <p className="priority">{note.priority.toUpperCase()}</p>
        ) : null}
        <button title="pin" className="btn btn-float">
          <i className="fas fa-map-pin" />
        </button>
      </header>
      <div className="note-content">{HtmlParser(note.content)}</div>
      {note.tags !== "" ? (
        <div className="tag-section">
          <div className="tag">{note.tags}</div>
        </div>
      ) : null}
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
          {pathname !== "/trash" && pathname !== "/archive" && (
            <button
              title="Edit"
              className="btn btn-float"
              onClick={() => setShowNoteModal(true)}
            >
              <i className="fas fa-pen"></i>
            </button>
          )}
          {pathname !== "/trash" ? (
            pathname === "/archive" ? (
              <button
                title="unArchive"
                className="btn btn-float"
                onClick={restoreFromArchiveHandler}
              >
                <i className="fas fa-archive" />
              </button>
            ) : (
              <button
                title="Archive"
                className="btn btn-float"
                onClick={archiveHandler}
              >
                <i className="fas fa-archive" />
              </button>
            )
          ) : null}
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
