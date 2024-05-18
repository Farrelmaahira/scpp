const Input = (props) => {
    const {type, name, className, placeholder, onChange, id } = props
    return(
        <input type={type} name={name} className={className} placeholder={placeholder} id={id} onChange={onChange}/>
    )
} 

export default Input