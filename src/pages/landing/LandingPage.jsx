import { useNavigate } from "react-router-dom";
import "./landing.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-content">
        <h1 className="text-large">Tame your work, organize your life.</h1>
        <p>
          Remember everything and tackle any project with your notes, tasks, and
          schedule all in one place.
        </p>
        <div className="cta-actions">
          <button
            className="btn btn-primary text-s"
            onClick={() => navigate("/signup")}
          >
            Signup for free
          </button>
          <p>Already have account ?</p>
          <button
            class="btn btn-secondary-text text-s"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export { LandingPage };
