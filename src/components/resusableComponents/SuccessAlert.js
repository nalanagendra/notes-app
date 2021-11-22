import React from 'react'

const SuccessAlert = (props) => {
    return (
        <div className="text-left alert alert-success" role="alert">
          {props.children} 
        </div>
    )
}

export default SuccessAlert