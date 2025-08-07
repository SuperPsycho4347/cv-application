function General(generalInfo, handleNameChange, handleMailChange, handlePhoneChange) {
    return(
        <div className="general-form">
            <label>
                Name
                {''}
                <input
                    value={generalInfo.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Email
                {''}
                <input
                    value={generalInfo.mail}
                    onChange={handleMailChange}
                />
            </label>
            <label>
                Phone
                {''}
                <input
                    value={generalInfo.phone}
                    onChange={handlePhoneChange}
                />
            </label>
            <button className="submit-btn" type="submit" >
            Submit
            </button>
        </div>
    )
}

export default General