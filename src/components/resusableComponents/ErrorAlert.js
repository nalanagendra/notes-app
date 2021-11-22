import React from 'react' 

const ErrorAlert = (props) => {
    return(
      //display red color for the form element 
      <div className="text-center alert alert-danger" role="alert">
        {props.children}
      </div>
    )
}

export default ErrorAlert