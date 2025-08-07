function Input(props) {
    return (
        <label >
            {props.label}
            {''}
            <input
                value={props.text}
            />
        </label>
    )
}

export default Input