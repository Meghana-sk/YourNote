import { useNavigate } from "react-router-dom";
import "./authentication.css";
const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <form className="auth-container">
        <h2 className="white-font">Login</h2>
        <label htmlFor="email" className="text-left white-font">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="meghana@yahoo.com"
          className="input-text"
          required
        />
        <label htmlFor="password" className="text-left white-font">
          Password
        </label>
        <input
          name="password"
          id="password"
          type="password"
          className="input-text"
          placeholder="********"
          required
        />
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-secondary">Login as guest</button>
        <p className="white-font">Don't have an account?</p>
        <button
          className="btn btn-secondary-text text-s white-font signup-btn"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export { Login };
