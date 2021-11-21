import React from "react" 
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    const {children} = props 
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        isLoggedIn ? children : <Navigate replace to="/login" /> //redirect to login 
    )
}

export default ProtectedRoute