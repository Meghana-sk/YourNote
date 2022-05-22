import { NotesSideNav, NoteCard } from "../../components/";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <NotesSideNav />
      <div className="divider"></div>
      <div className="add-note-actions">
        <button className="btn btn-primary text-s">
          <i className="fas fa-plus"></i>Add note
        </button>
        <button className="btn btn-secondary text-s">
          <i className="fas fa-filter"></i>Filter by
        </button>
      </div>
      <div className="notes-container">
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
};

export { Home };
