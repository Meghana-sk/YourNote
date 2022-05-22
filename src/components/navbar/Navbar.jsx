import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();
  const isUser = true;

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
            {isUser ? `Hi, ${"Meghana"}` : null}
          </span>
        )}
        <button className="btn btn-primary login-btn">
          <i className="fas fa-user"></i>
          {isUser ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};
