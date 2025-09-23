export default function Experience(props) {
    return(
        <form onSubmit={props.handleSubmit}>
            <label>
                Company Name:
                <input type="text" 
                    disabled={props.isSubmit ? true : false}
                />
            </label>
            <label>
                Position Title:
                <input type="text" 
                    disabled={props.isSubmit ? true : false}
                />
            </label>
            <label>
                Main Responsibilities:
                <input type="text" 
                    disabled={props.isSubmit ? true : false}
                />
            </label>
        </form>
    )
}