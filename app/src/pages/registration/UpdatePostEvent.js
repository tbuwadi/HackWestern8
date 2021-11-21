import React, { useState } from 'react';
import axios from 'axios';

import './update.css';

const UpdatePostEvent = () => {
    const urlComponents = (new URL(document.location)).pathname.split('/');
    const id = urlComponents[urlComponents.length - 1];

    const [value, setValue] = useState('');

    // useeffect causes get and post requests to api to not sync up will
    // useEffect(() => {
    //     console.log('whatever is in this block is called whenever value changes')
    //     // CALL API TO RETREIEVE CURRENT MSG VALUE FROM DB;
    //     // newValue = api respnse;
    //     // setValue(newValue);
    // }, []);


    const onChangeValue = (e) => { setValue(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/update-email-content/${id}/${value}`)
            .then(res => console.log(res.data));
        // update new value to db

    }

    
    const onSendEmail =(e) => {
        e.preventDefault();
        axios.get('http://localhost:5000/send-emails')
            .then(setValue(''));
    }

    return (
        <div className='single-update' style={{display: 'grid'}}>
            <form onSubmit={onFormSubmit}>
                <h5 style={{ fontWeight: 'bold' }}>Modify Post Event Email Message</h5>
                <div className='layer1'>
                    <label for="message">Post event email message</label> <br />
                    <textarea rows="5" cols="60" name="message" onChange={onChangeValue}>{value}</textarea>
                </div>
                <div className='layer1'>
                    <button type='submit'>Edit</button>
                </div>
                <div className='layer1'>
                    <button onClick={onSendEmail}>Send Email</button>
                </div>

            </form>
        </div>
    )

}

export default UpdatePostEvent;