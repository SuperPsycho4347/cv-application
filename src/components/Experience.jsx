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
        <div>
        <form className='form' onSubmit={props.handleSubmit}>
           {!props.isSubmit ? <div className="form-card">
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
            <button>{props.isSubmit ? 'Edit' : 'Submit'}</button>
        </form>
            {props.isSubmit ? <div className="info-card">
            <h3>{props.isSubmit && 'Company Name: ' + compName}</h3>
            <h3>{props.isSubmit && 'Position Title: ' + posTitle}</h3>
            <h3>{props.isSubmit && 'Main Responsibilities: ' + mainResp}</h3>
            </div> : null}
            </div>
    )
}