import React, { useState, useEffect } from 'react';
import './update.css';

const UpdateZoom = () => {
    const [value, setValue] = useState([]);
    const [url, setUrl] = useState('');

    // useeffect causes get and post requests to api to not sync up will
    // useEffect(() => {
    //     console.log('whatever is in this block is called whenever value changes')
    //     // CALL API TO RETREIEVE CURRENT MSG VALUE FROM DB;
    //     // newValue = api respnse;
    //     // setValue(newValue);
    // }, []);


    const onChangeUrl = (e) => { setUrl(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();

        // update new value to db

    }

    return (
        <div className='single-update' style={{display: 'grid'}}>
            <form onSubmit={onFormSubmit}>
                <h5 style={{ fontWeight: 'bold' }}>Add A Virtual Background</h5>
                <div className='layer1'>
                    <label for="url">Image URL</label> <br /><br/>
                    <input name="url" type="text" value={url} onChange={onChangeUrl} />
                </div>
                <div className='layer1'>
                    <button type='submit'>Add</button>
                </div>
                <br/>
                <br/>
            </form>
        </div>
    )
}

export default UpdateZoom;