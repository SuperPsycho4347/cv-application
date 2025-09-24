import { useState } from "react";

export default function General(props) {
    // State variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
            <form className='form' onSubmit={props.handleSubmit}>
            {!props.isSubmit ? <div className="form-card">
            <label>
                Name:
                <input type="text"
                onChange={(e) => setName(e.target.value)}
                disabled={props.isSubmit ? true: false}
                />
            </label>
            <label>
                Email:
                <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                disabled={props.isSubmit ? true: false}
                />
            </label>
            <label>
                Phone:
                <input type="text"
                onChange={(e) => setPhone(e.target.value)}
                disabled={props.isSubmit ? true : false}
                />
            </label>
            </div> : null}
            <h3>{props.isSubmit && 'Name: ' + name}</h3>
            <h3>{props.isSubmit && 'Mail: ' + email}</h3>
            <h3>{props.isSubmit && 'Phone: ' + phone}</h3>
            </form>
    )
}