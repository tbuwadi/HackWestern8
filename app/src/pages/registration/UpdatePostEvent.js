import React, { useState, useEffect } from 'react';
import './update.css';

const UpdatePostEvent = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        console.log('whatever is in this block is called whenever value changes')
        // CALL API TO RETREIEVE CURRENT MSG VALUE FROM DB;
        // newValue = api respnse;
        // setValue(newValue);
    }, []);


    const onChangeValue = (e) => { setValue(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();

        // update new value to db

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

            </form>
        </div>
    )

}

export default UpdatePostEvent;