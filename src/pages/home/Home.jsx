import { useEffect, useState } from "react";
import { useAuth, useNote, useFilter } from "../../context";
import {
  NotesSideNav,
  NoteCard,
  NotesModal,
  FilterPopup,
} from "../../components/";
import { fetchNotesService } from "../../services";
import { sortNotesByPriority } from "../../utils/helpers/sortByPriority";
import { sortNotesByDate } from "../../utils/helpers/sortByDate";
import "./home.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const {
    noteState: { notes },
    noteDispatch,
  } = useNote();
  const {
    authState: { token },
  } = useAuth();
  const {
    filterState: { sortByDate, sortByPriority },
  } = useFilter();

  let filteredNotes = sortNotesByPriority(notes, sortByPriority);
  filteredNotes = sortNotesByDate(filteredNotes, sortByDate);
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
        <button
          className="btn btn-secondary text-s"
          onClick={() => setOpenFilter(true)}
        >
          <i className="fas fa-filter"></i>Filter by
        </button>
      </div>
      <div className="notes-container">
        {filteredNotes.length ? (
          filteredNotes.map((note) => <NoteCard key={note._id} note={note} />)
        ) : (
          <p>Create your first note</p>
        )}
      </div>
      {openFilter && <FilterPopup setOpenFilter={setOpenFilter} />}
    </div>
  );
};

export { Home };
