import React, { useState } from 'react';

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

    }

    return (
        <div className='text-center form-box' style={{ backgroundColor: '#BFE5D7'}}>
            <form onSubmit={onFormSubmit}>
                <label for="name">Full Name</label>
                <input name="name" type="text" value={name} onChange={onChangeName} />
                <label for="email">Email</label>
                <input name="email" type="text" value={email} onChange={onChangeEmail} />
                <label for="code">Event Code</label>
                <input name="code" type="text" value={code} onChange={onChangeCode} />
                <br/>
                <button onClick={onFormSubmit}>Enter Event</button>
            </form>
        </div>
    )
}

export default ClientLogin;