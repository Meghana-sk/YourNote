import { NavLink } from "react-router-dom";
import "./notes-sidenav.css";

const getActiveStyle = ({ isActive }) =>
  isActive
    ? {
        color: "whitesmoke",
        fontWeight: "bold",
      }
    : { color: "whitesmoke" };
const NotesSideNav = () => {
  return (
    <aside className="side-nav bg-side-nav-dark">
      <NavLink to="/notes" style={getActiveStyle}>
        <span className="text-l">Your Note</span>
      </NavLink>
      <div className="divider"></div>
      <NavLink to="/home" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="far fa-lightbulb"></i>
          </span>
          <span>Notes</span>
        </div>
      </NavLink>
      <NavLink to="/archive" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="fas fa-archive"></i>
          </span>
          <span>Archive</span>
        </div>
      </NavLink>
      <NavLink to="/trash" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="fas fa-trash"></i>
          </span>
          <span>Trash</span>
        </div>
      </NavLink>
      <NavLink to="/home" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="fas fa-tags"></i>
          </span>
          <span>Tags</span>
        </div>
      </NavLink>
      <NavLink to="/home" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="fas fa-tag"></i>
          </span>
          <span>Work</span>
        </div>
      </NavLink>
      <NavLink to="/home" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="fas fa-tag"></i>
          </span>
          <span>Personal</span>
        </div>
      </NavLink>
      <div className="add-tag-container">
        <button className="btn btn-float nav-item">
          <i className="fas fa-plus"></i>
        </button>
        <label className="tag-label">Add tag</label>
      </div>
    </aside>
  );
};

export { NotesSideNav };
