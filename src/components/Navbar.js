import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const{logout} = useLogout()
  const{user} = useAuthContext()

  return (
    <div className="navbar">
      <Link to="/">
        <h1>GPS Tracking System</h1>
      </Link>
      <ul className="items">
        <Link to="/">Home</Link>
        <Link to="/schedule">Bus Schedule</Link>
        {user && <Link to="/dashboard">dashboard</Link>}
        {!user && <Link to="/signup">Signup</Link>}
        {!user && <Link to="/login">Login</Link>}
        {user && <Link to="/" onClick={logout} >Logout</Link>}
      </ul>
    </div>
  );
};

export default Navbar;
