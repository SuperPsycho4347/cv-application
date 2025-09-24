import { use, useState } from "react"

export default function Education(props) {
    // State variables
    const [schoolName, setSchoolName] = useState('')
    const [subject, setSubject] = useState('')
    const [gradYear, setGradYear] = useState('');

    return (
        <form className='form' onSubmit={props.handleSubmit}>
            {!props.isSubmit ? <div className="form-card">
            <label >
                School Name: 
                <input type="text"
                disabled={props.isSubmit ? true : false}
                onChange={(e) => setSchoolName(e.target.value)}
                />
            </label>
            <label >
                Subject:
                <input type="text"
                disabled={props.isSubmit ? true : false}
                onChange={(e) => setSubject(e.target.value)}
                />
            </label>
            <label >
                Graduation:
                <input type="text"
                disabled={props.isSubmit ? true : false}
                onChange={(e) => setGradYear(e.target.value)}
                />
            </label>
            </div> : null}
            <h3>{props.isSubmit && 'School Name: ' + schoolName}</h3>
            <h3>{props.isSubmit && 'Subject: ' + subject}</h3>
            <h3>{props.isSubmit && 'Year of Graduation: ' + gradYear}</h3>
        </form>
    )
}