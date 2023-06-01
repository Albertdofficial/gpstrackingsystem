import "./App.css";
import React from "react";


import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Schedule from "./pages/Schedule.js"
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";



function App() {
  const{user} = useAuthContext()

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={!user && <Signup />}/>
          <Route path="/login" element={!user && <Login />} />
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/dashboard" element={user && <Dashboard/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
