const Label = (props) => {
    const {name, title, className} = props

    return(
        <label htmlFor={name} className={className}>
            {title}
        </label>
    )
}

export default Label