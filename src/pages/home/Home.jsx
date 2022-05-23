import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNote } from "../../context/note-functions/note-context";
import { useAuth } from "../../context/authentication/auth-context";
import { NotesSideNav, NoteCard } from "../../components/";
import "./home.css";
import { fetchNotesService } from "../../services";
const Home = () => {
  const {
    noteState: { notes },
    noteDispatch,
  } = useNote();
  const {
    authState: { token },
  } = useAuth();
  useEffect(() => {
    fetchNotesService(token, noteDispatch);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="home-container">
      <NotesSideNav />
      <div className="divider"></div>
      <div className="add-note-actions">
        <button
          className="btn btn-primary text-s"
          onClick={() => navigate("/notes")}
        >
          <i className="fas fa-plus"></i>Add note
        </button>
        <button className="btn btn-secondary text-s">
          <i className="fas fa-filter"></i>Filter by
        </button>
      </div>
      <div className="notes-container">
        {notes.length ? (
          notes.map((note) => <NoteCard />)
        ) : (
          <p>Create your first note</p>
        )}
      </div>
    </div>
  );
};

export { Home };
