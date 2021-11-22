import React from 'react' 

const MessageBox = (props) => {
    return(
        <div style={{height: "50px"}}>
            {props.children}
        </div>
    )
}

export default MessageBox