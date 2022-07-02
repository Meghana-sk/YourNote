import { useNavigate } from "react-router-dom";
import { NotesSideNav, NoteCard } from "../../components";
import { useTrash } from "../../context";
import "./trash.css";
import dataNotFound from "../../assets/error404.svg";

const Trash = () => {
  const { trashState } = useTrash();
  const navigate = useNavigate();
  return (
    <div className="trash-container">
      <NotesSideNav />
      <h1>Notes in Trash</h1>
      <div className="notes-container">
        {trashState.trash.length ? (
          trashState.trash.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))
        ) : (
          <div className="empty-container">
            <p>Nothing in trash</p>
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

export { Trash };
