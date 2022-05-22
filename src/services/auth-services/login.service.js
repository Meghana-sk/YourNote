import axios from "axios";

const loginService = (user) => {
  return axios.post("/api/auth/login", user);
};

export { loginService };
