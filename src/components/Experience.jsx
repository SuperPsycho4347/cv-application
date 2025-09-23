import { useState } from "react"

export default function Experience(props) {
    const [compName, setCompName] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(!isSubmit)
    }

    return(
        <form onSubmit={handleSubmit}>
           {!isSubmit ? <div>
            <label>
                Company Name:
                <input type="text" 
                    onChange={(e) => setCompName(e.target.value)}
                    disabled={isSubmit ? true : false}
                />
            </label>
            <label>
                Position Title:
                <input type="text" 
                    disabled={isSubmit ? true : false}
                />
            </label>
            <label>
                Main Responsibilities:
                <input type="text" 
                    disabled={isSubmit ? true : false}
                />
            </label>
            </div> : null}
            <h1>{isSubmit && compName}</h1>
            <button>{isSubmit ? 'Edit' : 'Submit'}</button>
        </form>
    )
}