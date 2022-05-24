import { NotesSideNav, NoteCard } from "../../components";
import { useArchive } from "../../context";
import "./archive.css";

const Archive = () => {
  const { archiveState } = useArchive();
  return (
    <div className="archive-container">
      <NotesSideNav />
      <h1>Notes in Trash</h1>
      <div className="notes-container">
        {archiveState.archives.length ? (
          archiveState.archives.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))
        ) : (
          <p>Nothing in archive</p>
        )}
      </div>
    </div>
  );
};

export { Archive };
