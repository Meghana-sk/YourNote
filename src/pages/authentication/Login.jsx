import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "./authentication.css";
import { loginService } from "../../services";
import { useAuth } from "../../context";
import { LOGIN } from "../../shared/variables";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { authDispatch } = useAuth();

  const guestUserCredentials = {
    email: "guest@gmail.com",
    password: "guest@123",
  };

  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUserCredentials);
  };

  const userCredentialChangeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      try {
        const loginResponse = await loginService(user);
        if (loginResponse.status === 200) {
          localStorage.setItem("user", loginResponse.data.foundUser);
          localStorage.setItem("token", loginResponse.data.encodedToken);
          authDispatch({
            type: LOGIN,
            payload: {
              user: loginResponse.data.foundUser,
              token: loginResponse.data.encodedToken,
            },
          });
          navigate("/home");
          toast.success("Logged in succeesfully");
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
      }
    }
  };
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
          value={user.email}
          onChange={userCredentialChangeHandler}
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
          onChange={userCredentialChangeHandler}
        />
        <button className="btn btn-primary" onClick={loginHandler}>
          Login
        </button>
        <button className="btn btn-secondary" onClick={guestUserHandler}>
          Add guest login details
        </button>
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
