import { use, useState } from "react"

export default function Education(props) {
    // State variables
    const [schoolName, setSchoolName] = useState('')
    const [subject, setSubject] = useState('')
    const [gradYear, setGradYear] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(!isSubmit);
    }

    return (
        <div className="info-container">
        <form className='form' onSubmit={handleSubmit}>
            {!isSubmit ? 
            <div className="form-card">
            <label >
                School Name: 
                <input type="text"
                value={schoolName}
                disabled={isSubmit ? true : false}
                onChange={(e) => setSchoolName(e.target.value)}
                />
            </label>
            <label >
                Subject:
                <input type="text"
                value={subject}
                disabled={isSubmit ? true : false}
                onChange={(e) => setSubject(e.target.value)}
                />
            </label>
            <label >
                Graduation:
                <input type="text"
                disabled={isSubmit ? true : false}
                value={gradYear}
                onChange={(e) => setGradYear(e.target.value)}
                />
            </label>
            </div> : null} 
            <button>{isSubmit ? 'Edit' : 'Submit'}</button>
        </form>
            {isSubmit ? <div className="info-card">
            <h3>{isSubmit && 'School Name: ' + schoolName}</h3>
            <h3>{isSubmit && 'Subject: ' + subject}</h3>
            <h3>{isSubmit && 'Year of Graduation: ' + gradYear}</h3>
            </div> : null}
        </div>
    )
}