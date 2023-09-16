import React from "react";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route exact path="/profile" Component={Profile} />
      </Routes>
      <React.Fragment>
        <ToastContainer />
      </React.Fragment>
    </Router>
  );
}

export default App;
