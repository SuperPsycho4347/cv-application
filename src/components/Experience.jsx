import { useState } from "react"

export default function Experience(props) {
    // State variables
    const [compName, setCompName] = useState('')
    const [posTitle, setPosTitle] = useState('')
    const [mainResp, setMainResp] = useState('')
    // const [isSubmit, setIsSubmit] = useState(false)

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setIsSubmit(!isSubmit)
    // }

    return(
        <form onSubmit={props.handleSubmit}>
           {!props.isSubmit ? <div>
            <label>
                Company Name:
                <input type="text" 
                    onChange={(e) => setCompName(e.target.value)}
                    disabled={props.isSubmit ? true : false}
                />
            </label>
            <label>
                Position Title:
                <input type="text" 
                    disabled={props.isSubmit ? true : false}
                    onChange={(e) => setPosTitle(e.target.value)}
                />
            </label>
            <label>
                Main Responsibilities:
                <input type="text" 
                    disabled={props.isSubmit ? true : false}
                    onChange={(e) => setMainResp(e.target.value)}
                />
            </label>
            </div> : null}
            <h3>{props.isSubmit && 'Company Name: ' + compName}</h3>
            <h3>{props.isSubmit && 'Position Title: ' + posTitle}</h3>
            <h3>{props.isSubmit && 'Main Responsibilities: ' + mainResp}</h3>
            <button>{props.isSubmit ? 'Edit' : 'Submit'}</button>
        </form>
    )
}