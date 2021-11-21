import React, { useState } from "react"
import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import Home from "./Home"
import Login from "./userAuth/Login"
import Register from "./userAuth/Register"
import Account from "./userAuth/Account"
import ProtectedRoute from "./userAuth/ProtectedRoute"
import { userLogout } from "../actions/userActions"
import NotesContainer from "./notes/NotesContainer"

const NavBar = (props) => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  const handleLogout = () => {
    dispatch(userLogout())
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Notes App</NavLink>
          <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              {isLoggedIn ? (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/account">Account</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/mynotes">My Notes</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/logout" onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/logout" element={<Navigate replace to="/" />} />
        <Route path="/mynotes" element={<ProtectedRoute><NotesContainer /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default NavBar
