import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./authentication.css";
import { signupService } from "../../services";
import { useAuth } from "../../context";
import { SIGNUP } from "../../shared/variables";
const Signup = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const userFirstNameHandler = (event) => {
    setUser({ ...user, firstName: event.target.value });
  };

  const userLastNameHandler = (event) => {
    setUser({ ...user, lastName: event.target.value });
  };

  const userEmailHandler = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const userPasswordHandler = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const userConfirmPasswordHandler = (event) => {
    setUser({ ...user, confirmPassword: event.target.value });
  };

  const signupHandler = async (event) => {
    event.preventDefault();

    if (
      user.email &&
      user.password === user.confirmPassword &&
      user.firstName &&
      user.lastName
    ) {
      try {
        const signupResponse = await signupService(user);
        if (signupResponse.status === 201) {
          localStorage.setItem("token", signupResponse.data.encodedToken);
          authDispatch({
            type: SIGNUP,
            payload: {
              user: signupResponse.data.createdUser,
              token: signupResponse.data.encodedToken,
            },
          });
          toast.success("Successfully signed up");
          navigate("/home", { replace: true });
        } else {
          toast.error("Something went wrong.Please try again :(");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
      }
    }
  };
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
          value={user.firstName}
          onChange={userFirstNameHandler}
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
          value={user.lastName}
          onChange={userLastNameHandler}
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
          value={user.email}
          onChange={userEmailHandler}
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
          value={user.password}
          onChange={userPasswordHandler}
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
          value={user.confirmPassword}
          onChange={userConfirmPasswordHandler}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={signupHandler}
        >
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
