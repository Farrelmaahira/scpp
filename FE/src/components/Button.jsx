const Button = (props) => {
    const {type, className, children} = props
    return(
        <button type={type} className={className}>
            {children}
        </button>
    )
}

export default Button