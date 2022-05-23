import axios from "axios";

const signupService = (user) => {
  return axios.post("/api/auth/signup", user);
};

export { signupService };
