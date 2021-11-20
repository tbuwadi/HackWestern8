import React, { useState } from 'react';

import '../../index.css';

const ClientLogin = () => {
    const [title, setTitle] = useState('');

    const onTitle = (e) => { setTitle(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className='text-center form-box'>
            <form onSubmit={onFormSubmit}>
                <label for="title">Title</label>
                <input name="title" type="text" value={title} onChange={onTitle} />
                <br/>
                <button onClick={onFormSubmit}>Create Event</button>
            </form>
        </div>
    )
}

export default ClientLogin;