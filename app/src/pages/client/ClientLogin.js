import React, { useState } from 'react';
import axios from 'axios';


import '../../index.css';
import './ClientLogin.css';

const ClientLogin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const onChangeName = (e) => { setName(e.target.value) }
    const onChangeEmail = (e) => { setEmail(e.target.value) }
    const onChangeCode = (e) => { setCode(e.target.value) }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newAttendee = {
            name: name,
            email: email,
            event_code: code
        };
        console.log(newAttendee);

        let headers={
            'Content-Type': 'application/json',
        };
        axios.post('http://localhost:5000/enter-event', newAttendee, headers)
            .then(res => console.log(res.data));
        
    }

    return (
        <div className='text-center form-box'>
            <form onSubmit={onFormSubmit}>
                <label for="name">Full Name</label>
                <input name="name" type="text" value={name} onChange={onChangeName} />
                <label for="email">Email</label>
                <input name="email" type="text" value={email} onChange={onChangeEmail} />
                <label for="code">Event Code</label>
                <input name="code" type="text" value={code} onChange={onChangeCode} />
                <br/>
                <button type='submit'>Enter Event</button>
            </form>
        </div>
    )
}

export default ClientLogin;