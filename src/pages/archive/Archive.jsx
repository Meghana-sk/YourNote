import { useNavigate } from "react-router-dom";
import { NotesSideNav, NoteCard } from "../../components";
import { useArchive } from "../../context";
import "./archive.css";
import dataNotFound from "../../assets/error404.svg";

const Archive = () => {
  const { archiveState } = useArchive();
  const navigate = useNavigate();
  return (
    <div className="archive-container">
      <NotesSideNav />
      <h1>Notes in Archive</h1>
      <div className="notes-container">
        {archiveState.archives.length ? (
          archiveState.archives.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))
        ) : (
          <div className="empty-container">
            <p>Nothing in archive</p>
            <img
              src={dataNotFound}
              alt="not found"
              loading="lazy"
              className="empty-image"
            />
            <button
              className="btn btn-primary"
              onClick={() => navigate("/home")}
            >
              Go to home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Archive };
