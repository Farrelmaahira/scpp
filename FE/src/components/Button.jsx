const Button = (props) => {
    const {type, className, children, onClick} = props
    return(
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button