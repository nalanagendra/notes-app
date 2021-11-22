import React from 'react' 

const InputBox = (props) => {
    return(
        <div style={{height: "60px"}}> 
        {/* used for preventing the height variation during error display in forms */}
            {props.children}
        </div>
    )
}

export default InputBox