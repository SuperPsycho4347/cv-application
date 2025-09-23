import { useState } from "react";

export default function General(props) {
    // State variables
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
            <label>
                Name:
                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={props.isSubmit ? true: false}
                />
            </label>
            <label>
                Email:
                <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={props.isSubmit ? true: false}
                />
            </label>
            <label>
                Phone:
                <input type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={props.isSubmit ? true : false}
                />
            </label>
            <button 
                type="submit"
            >{props.isSubmit ? 'Edit' : 'Submit'}</button>   
            </form>
            <h1>{props.isSubmit && {name}}</h1>
        </div>
    )
}