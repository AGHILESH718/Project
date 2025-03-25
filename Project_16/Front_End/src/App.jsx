import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Forget from "./Forget/Forget.jsx";
import Register from "./Register/Register.jsx";
import Login from "./Login/Login.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<Forget />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App
