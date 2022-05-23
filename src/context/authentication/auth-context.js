import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../../reducers";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    user: "",
    token: null,
  });
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
