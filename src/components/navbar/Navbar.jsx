import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authentication/auth-context";
import { LOGOUT } from "../../shared/variables";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const { authState, authDispatch } = useAuth();
  const isUser = authState.token || authState.user ? true : false;
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (authState.token) {
      toast.info("Log out successful");
      navigate("/");
      localStorage.removeItem("token");
      authDispatch({ type: LOGOUT });
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="nav bg-dark">
      {location.pathname !== "/home" && (
        <Link to="/" className="brand-name text-l fw-900">
          Your Note
        </Link>
      )}
      {location.pathname !== "/" &&
        location.pathname !== "/login" &&
        location.pathname !== "/signup" && (
          <div className="search-box">
            <input type="text" placeholder="Search notes..." />
            <button className="search-btn">
              <i className="fas fa-search" />
            </button>
          </div>
        )}
      <div className="user-section">
        {isUser && (
          <span className="user-name">
            {authState.token ? `Hi, ${authState?.user?.firstName}` : null}
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
