import { NotesSideNav, NoteCard } from "../../components";
import { useTrash } from "../../context";
import "./trash.css";

const Trash = () => {
  const { trashState } = useTrash();
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
          <p>Nothing in trash</p>
        )}
      </div>
    </div>
  );
};

export { Trash };
