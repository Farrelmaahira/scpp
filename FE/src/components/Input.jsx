const Input = (props) => {
    const {type, name, className} = props
    return(
        <input type={type} name={name} className={className} />
    )
} 

export default Input