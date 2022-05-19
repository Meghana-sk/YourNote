import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const isUser = true;

  return (
    <nav className="nav bg-dark">
      <Link to="/" className="brand-name text-l fw-900">
        Your Note
      </Link>
      <div className="search-box">
        <input type="text" placeholder="Search videos" />
        <button className="search-btn">
          <i className="fas fa-search" />
        </button>
      </div>
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
