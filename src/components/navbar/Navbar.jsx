import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useArchive, useTrash, useNote } from "../../context";
import {
  LOGOUT,
  CLEAR_ARCHIVES,
  CLEAR_NOTES,
  CLEAR_TRASH,
} from "../../shared/variables";
import "./navbar.css";

export const Navbar = () => {
  const { authState, authDispatch } = useAuth();
  const isUser =
    authState.token ||
    localStorage.getItem("token") ||
    (authState.user ? true : false);
  const navigate = useNavigate();
  const { archiveDispatch } = useArchive();
  const { trashDispatch } = useTrash();
  const { noteDispatch } = useNote();

  const logoutHandler = () => {
    if (authState.token) {
      toast.info("Log out successful");
      navigate("/");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      authDispatch({ type: LOGOUT });
      trashDispatch({ type: CLEAR_TRASH });
      archiveDispatch({ type: CLEAR_ARCHIVES });
      noteDispatch({ type: CLEAR_NOTES });
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="nav bg-dark">
      <Link to="/" className="brand-name text-l fw-900">
        Your Note
      </Link>
      <div className="user-section">
        {isUser && (
          <span className="user-name">
            {isUser ? `Hi, ${authState?.user?.firstName}` : null}
          </span>
        )}
        <button
          className="btn btn-primary login-btn"
          onClick={() => logoutHandler()}
        >
          <i className="fas fa-user"></i>
          {isUser ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};
