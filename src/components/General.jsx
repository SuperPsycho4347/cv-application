import { useState } from "react";

export default function General() {
    // State 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(!isSubmit)

    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button 
                type="submit"
            >Submit</button>
        </form>
    )
}