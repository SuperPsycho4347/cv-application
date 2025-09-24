import { useState } from "react"

export default function Experience(props) {
    // State variables
    const [compName, setCompName] = useState('')
    const [posTitle, setPosTitle] = useState('')
    const [mainResp, setMainResp] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(!isSubmit)
    }

    return(
        <div className="info-container">
        <form className='form' onSubmit={handleSubmit}>
           {!isSubmit ? <div className="form-card">
            <label>
                Company Name:
                <input type="text"
                    value={compName} 
                    onChange={(e) => setCompName(e.target.value)}
                    disabled={isSubmit ? true : false}
                />
            </label>
            <label>
                Position Title:
                <input type="text" 
                    value={posTitle}
                    disabled={isSubmit ? true : false}
                    onChange={(e) => setPosTitle(e.target.value)}
                />
            </label>
            <label>
                Main Responsibilities:
                <input type="text" 
                    value={mainResp}
                    disabled={isSubmit ? true : false}
                    onChange={(e) => setMainResp(e.target.value)}
                />
            </label>
            </div> : null}
            <button>{isSubmit ? 'Edit' : 'Submit'}</button> 
        </form>
            {isSubmit ? <div className="info-card">
            <h3>{isSubmit && 'Company Name: ' + compName}</h3>
            <h3>{isSubmit && 'Position Title: ' + posTitle}</h3>
            <h3>{isSubmit && 'Main Responsibilities: ' + mainResp}</h3>
            </div> : null}
            </div>
    )
}