import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./Home";
import Login from "./userAuth/Login";
import Register from "./userAuth/Register";
import Account from "./userAuth/Account";
import Logout from "./userAuth/Logout";

const NavBar = (props) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn ? (
          <React.Fragment>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </React.Fragment>
        )}
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default NavBar;
