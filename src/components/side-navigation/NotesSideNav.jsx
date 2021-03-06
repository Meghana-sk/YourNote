import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./notes-sidenav.css";
import { AddTagModal } from "../index";
import { useTag } from "../../context";

const getActiveStyle = ({ isActive }) =>
  isActive
    ? {
        color: "whitesmoke",
        fontWeight: "bold",
      }
    : { color: "whitesmoke" };
const NotesSideNav = () => {
  const [openTagModal, setOpenTagModal] = useState(false);
  const [sideNavOpen, setOpenSideNavOpen] = useState(false);
  const toggleSideBarVisibility = () => {
    setOpenSideNavOpen((prevSideNavState) => !prevSideNavState);
  };
  const {
    tagState: { tags },
  } = useTag();
  return (
    <>
      <i
        className="fas fa-bars hamburger fa-2x"
        onClick={toggleSideBarVisibility}
      ></i>
      <aside
        className={`side-nav ${
          sideNavOpen ? "side-nav-mobile" : "bg-side-nav-dark"
        }`}
      >
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
        <div className="nav-item">
          <span>
            <i className="fas fa-tags"></i>
          </span>
          <span style={{ color: "whitesmoke" }}>Tags</span>
        </div>
        {tags.length
          ? tags.map((tag) => (
              <NavLink to={`/tags/${tag}`} style={getActiveStyle}>
                <div className="nav-item tags">
                  <span>
                    <i className="fas fa-tag"></i>
                  </span>
                  <span>{tag}</span>
                </div>
              </NavLink>
            ))
          : null}
        <div className="add-tag-container">
          <button
            className="btn nav-item"
            onClick={() => setOpenTagModal(true)}
          >
            <i className="fas fa-plus"></i>
            <label className="tag-label">Add tag</label>
          </button>
        </div>
      </aside>
      {openTagModal && <AddTagModal setOpenTagModal={setOpenTagModal} />}
    </>
  );
};

export { NotesSideNav };
