import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../images/logo.png';
import '../../index.css';

const ClientLogin = () => {
    const [title, setTitle] = useState('');

    const onTitle = (e) => { setTitle(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();

        // update database
        axios.put(`http://localhost:5000/create-event/${title}`)
            // .then(res => event_id = res);
            .then(function(res){ 
                console.log(res.data);
                window.location = `/adminsettings/${res.data}`;
            });
    }

    return (
        <div className='text-center form-box'>
            <img alt="1" width='200px' src={Logo} /> 
            <br/>
            <br/>
            <form onSubmit={onFormSubmit}>
                <label for="title">Hello! Give your event a snazzy name 😉</label>
                <input name="title" type="text" value={title} onChange={onTitle} />
                <br/>
                <button type='submit'>Create Event</button>
            </form>
        </div>
    )
}

export default ClientLogin;