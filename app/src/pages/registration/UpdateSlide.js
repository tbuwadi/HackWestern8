import React, { useState } from 'react';
import axios from 'axios';
import './update.css';

const UpdateSlide = () => {
    const urlComponents = (new URL(document.location)).pathname.split('/');
    const id = urlComponents[urlComponents.length - 1];

    const [value, setValue] = useState('');

    // useeffect causes get and post requests to api to not sync up will
    // useEffect(() => { 
    //     axios.get(`http://localhost:5000/get-slides/${id}`)
    //         .then(res => setValue(res.data.url));
    // }, []);


    const onChangeValue = (e) => { setValue(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();
        
        // update database
        axios.post(`http://localhost:5000/update-slides/${id}/${value}`)
            .then(setValue(''));
    }

    return (
        <div className='single-update' style={{display: 'grid'}}>
            <form onSubmit={onFormSubmit}>
                <h5 style={{ fontWeight: 'bold' }}>Modify Slide Link</h5>
                <div className='layer1'>
                    <label for="message">Slide Link</label> <br /><br/>
                    <input name="message" type="text" value={value} onChange={onChangeValue} />
                </div>
                <div className='layer1'>
                    <button type='submit'>Edit</button>
                </div>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default UpdateSlide;