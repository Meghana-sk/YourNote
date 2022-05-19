import { useNavigate } from "react-router-dom";
import "./authentication.css";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <form className="auth-container">
        <h2 className="white-font">Signup</h2>
        <label htmlFor="first-name" className="text-left white-font">
          First name
        </label>
        <input
          name="first-name"
          id="first-name"
          type="text"
          placeholder="Michael"
          className="input-text"
          required
        />
        <label htmlFor="last-name" className="text-left white-font">
          Last name
        </label>
        <input
          name="last-name"
          id="last-name"
          type="text"
          placeholder="Jackson"
          className="input-text"
          required
        />
        <label htmlFor="email" className="text-left white-font">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="text"
          placeholder="mj@yahoo.com"
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
        <label htmlFor="confirm-password" className="text-left white-font">
          Confirm Password
        </label>
        <input
          name="password"
          id="confirm-password"
          type="password"
          className="input-text"
          placeholder="********"
          required
        />
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
        <p className="white-font">Already have an account?</p>
        <button
          className="btn btn-secondary-text text-s white-font signup-btn"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export { Signup };
