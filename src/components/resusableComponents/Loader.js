import React from 'react' 

const Loader = (props) => {
    return(
        <div className="text-center"> 
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <div><strong>Loading...</strong></div>
        </div>
    )
}

export default Loader