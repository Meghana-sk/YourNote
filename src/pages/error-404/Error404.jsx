import { useNavigate } from "react-router-dom";
import dataNotFound from "../../assets/error404.svg";
import "./error404.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="empty-container">
      <h2>Page not found</h2>
      <img
        src={dataNotFound}
        alt="not found"
        loading="lazy"
        className="empty-image"
      />
      <button className="btn btn-primary" onClick={() => navigate("/home")}>
        Go to home
      </button>
    </div>
  );
};

export { Error404 };
