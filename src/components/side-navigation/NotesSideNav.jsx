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
        <div className="nav-item">
          <span>
            <i className="far fa-compass"></i>
          </span>
          <span>Notes</span>
        </div>
      </NavLink>
      <NavLink to="/archive" style={getActiveStyle}>
        <div className="nav-item">
          <span>
            <i className="fas fa-list-ul"></i>
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
    </aside>
  );
};

export { NotesSideNav };
