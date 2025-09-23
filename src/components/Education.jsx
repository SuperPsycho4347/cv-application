export default function Education(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <label >
                School: 
                <input type="text"
                disabled={props.isSubmit ? true : false}
                />
            </label>
            <label >
                Subject:
                <input type="text"
                disabled={props.isSubmit ? true : false}
                />
            </label>
            <label >
                Graduation:
                <input type="text"
                disabled={props.isSubmit ? true : false}
                />
            </label>
        </form>
    )
}