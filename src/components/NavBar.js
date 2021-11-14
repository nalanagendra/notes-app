import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Home";
import Login from "./userAuth/Login";
import Register from "./userAuth/Register";
import Account from "./userAuth/Account";
import { userLogout } from "../actions/userActions";
import NotesContainer from "./notes/NotesContainer";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleLogout = () => {
    dispatch(userLogout());
  };

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
              <Link to="/mynotes">My Notes</Link>
            </li>
            <li>
              <Link to="/logout" onClick={handleLogout}>
                Logout
              </Link>
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
        <Route path="/logout" element={<Navigate replace to="/" />} />
        <Route path="/mynotes" element={<NotesContainer />} />
      </Routes>
    </div>
  );
};

export default NavBar;
