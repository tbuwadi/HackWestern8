import React, { useState } from 'react';
import axios from 'axios';
import './update.css';

const UpdateSpotify = () => {
    const urlComponents = (new URL(document.location)).pathname.split('/');
    const id = urlComponents[urlComponents.length - 1];

    const [value, setValue] = useState('');

    // useeffect causes get and post requests to api to not sync up will
    // useEffect(() => {
    //     console.log('whatever is in this block is called whenever value changes')
    //     axios.get(`http://localhost:5000/get-playlist/${id}`)
    //         .then(res => setValue(res.data.url));
    // }, []);


    const onChangeValue = (e) => { setValue(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/update-playlist/${id}/${value}`)
            .then(setValue(''));
    }

    return (
        <div className='single-update' style={{display: 'grid'}}>
            <form onSubmit={onFormSubmit}>
                <h5 style={{ fontWeight: 'bold' }}>Modify Spotify Link</h5>

                <div className='layer1'>
                    <label for="message">Spotify Link</label> <br /><br/>
                    <input name="message" type="text" value={value} onChange={onChangeValue} />
                </div>
                <div className='layer1'>
                    <button type='submit'>Edit</button>
                </div>


            </form>
        </div>
    )
}

export default UpdateSpotify;