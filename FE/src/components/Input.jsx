const Input = (props) => {
    const {type, name, className, placeholder, onChange, id, readOnly } = props

    return(
        <input type={type} name={name} className={className} placeholder={placeholder} id={id} onChange={onChange} readOnly={readOnly ? true : false} required  />
    )
} 

export default Input