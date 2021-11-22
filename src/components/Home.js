import React from "react"

import heroImage from '../assets/hero.svg'

const Home = (props) => {
  return (
    <div className="container">
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
