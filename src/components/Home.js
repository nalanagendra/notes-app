import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import heroImage from '../assets/hero.svg'
import ErrorAlert from "./resusableComponents/ErrorAlert"
import MessageBox from "./resusableComponents/MessageBox"
import SuccessAlert from "./resusableComponents/SuccessAlert"

const Home = (props) => {
  const message = useSelector((state) => state.user.message)
  const errorMessage = useSelector((state) => state.user.errorMessage)

  return (
    <div className="container mt-1">
      <MessageBox>
        {message && <SuccessAlert>{message}</SuccessAlert>}
        {errorMessage && <ErrorAlert>{errorMessage}</ErrorAlert>}
      </MessageBox>
      <div className="row align-items-center"> 
        <div className="col-md">
          <img  src={heroImage} alt="user taking notes" />
        </div>
        <div className="col-md">
          <h1 className="display-4">Notes app</h1>
          <p className="h3">Easy online notebook...</p>
        </div>
      </div>
    </div>
  )
}

export default Home
