import { useParams } from "react-router-dom";
import { NotesSideNav, NoteCard } from "../../components";
import { useNote } from "../../context";
import "./tags.css";

const Tags = () => {
  const { tagname } = useParams();
  const {
    noteState: { notes },
  } = useNote();
  return (
    <div className="tags-container">
      <NotesSideNav />
      <h1>Notes with {tagname} tag</h1>
      <div className="notes-container">
        {notes.length ? (
          notes
            .filter((note) => note.tags === tagname)
            .map((filteredNote) => (
              <NoteCard key={filteredNote._id} note={filteredNote} />
            ))
        ) : (
          <p>Add notes with this tag</p>
        )}
      </div>
    </div>
  );
};

export { Tags };
