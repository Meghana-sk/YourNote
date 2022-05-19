import "./notecard.css";

const NoteCard = () => {
  return (
    <div className="note-card">
      <header className="note-header">
        <h2 className="title fw-600">My Notes</h2>
        <button title="pin" className="btn btn-float">
          <i className="fas fa-map-pin" />
        </button>
      </header>
      <p className="note-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
        quibusdam molestiae, vitae natus, placeat voluptate quisquam voluptatem
        ullam illum quam tempora officia sapiente perspiciatis.
      </p>
      <footer className="">
        <div className="update-date">02/04/2020</div>
        <div className="db-actions">
          <button title="delete" className="btn btn-float">
            <i className="fas fa-trash" />
          </button>
          <button title="Edit" className="btn btn-float">
            <i className="fas fa-pen-square"></i>
          </button>
          <button title="Archive" className="btn btn-float">
            <i className="fas fa-box" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export { NoteCard };
