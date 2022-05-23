import { useEffect, useState } from "react";
import { useAuth, useNote } from "../../context";
import { NotesSideNav, NoteCard } from "../../components/";
import { fetchNotesService } from "../../services";
import { NotesModal } from "../../components";
import "./home.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const { noteState, noteDispatch } = useNote();
  const {
    authState: { token },
  } = useAuth();
  useEffect(() => {
    fetchNotesService(token, noteDispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      <NotesSideNav />
      {openModal ? <NotesModal setOpenModal={setOpenModal} /> : null}
      <div className="divider"></div>
      <div className="add-note-actions">
        <button
          className="btn btn-primary text-s"
          onClick={() => setOpenModal(true)}
        >
          <i className="fas fa-plus"></i>Add note
        </button>
        <button className="btn btn-secondary text-s">
          <i className="fas fa-filter"></i>Filter by
        </button>
      </div>
      <div className="notes-container">
        {noteState.notes.length ? (
          noteState.notes.map((note) => <NoteCard key={note._id} note={note} />)
        ) : (
          <p>Create your first note</p>
        )}
      </div>
    </div>
  );
};

export { Home };
