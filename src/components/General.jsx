import { use, useState } from "react";

export default function General(props) {
    // State variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(!isSubmit)
    }

    return (
        <div className="info-container">
            <form className='form' onSubmit={handleSubmit}>
            {!isSubmit ? <div className="form-card">
            <label>
                Name:
                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmit ? true: false}
                />
            </label>
            <label>
                Email:
                <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmit ? true: false}
                />
            </label>
            <label>
                Phone:
                <input type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSubmit ? true : false}
                />
            </label>
            </div> : null}
            <button>{isSubmit ? 'Edit' : 'Submit'}</button>
            </form>
            {isSubmit ? <div className="info-card">
            <h3>{isSubmit && 'Name: ' + name}</h3>
            <h3>{isSubmit && 'Mail: ' + email}</h3>
            <h3>{isSubmit && 'Phone: ' + phone}</h3>
            </div> : null}
        </div>
    )
}