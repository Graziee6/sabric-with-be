import React from "react";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile";
import Users from "./pages/users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route exact path="/profile" Component={Profile} />
        <Route exact path="/seeUsers" Component={Users} />
      </Routes>
      <React.Fragment>
        <ToastContainer />
      </React.Fragment>
    </Router>
  );
}

export default App;
