const TextError = props => {
    return(
        <div className="text-danger">
            {/* used for displaying error message */}
            {props.children}
        </div>
    )
}

export default TextError