import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/navbar/Navbar";
import {
  LandingPage,
  Login,
  Signup,
  Home,
  Notes,
  Archive,
  Trash,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/trash" element={<Trash />} />
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
