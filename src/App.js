import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components";
import {
  LandingPage,
  Login,
  Signup,
  Home,
  Archive,
  Trash,
  Tags,
  Error404,
} from "./pages";
import { RequiresAuth } from "./routes/privateRoute/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        />
        <Route
          path="/trash"
          element={
            <RequiresAuth>
              <Trash />
            </RequiresAuth>
          }
        />
        <Route
          path="/tags/:tagname"
          element={
            <RequiresAuth>
              <Tags />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        closeOnClick
        theme="colored"
      />
    </div>
  );
}

export default App;
