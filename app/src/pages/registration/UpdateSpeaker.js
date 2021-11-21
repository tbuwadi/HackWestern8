import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './update.css';

const UpdateSpeaker = () => {
    const urlComponents = (new URL(document.location)).pathname.split('/');
    const id = urlComponents[urlComponents.length - 1];

    
    const [value, setValue] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [bio, setBio] = useState('');

    // useeffect causes get and post requests to api to not sync up will
    // useEffect(() => {
    //     console.log('whatever is in this block is called whenever value changes')
    //     // CALL API TO RETREIEVE CURRENT MSG VALUE FROM DB;
    //     // newValue = api respnse;
    //     // setValue(newValue);
    // }, []);


    const onChangeFirstName = (e) => { setFirstName(e.target.value) }
    const onChangeLastName = (e) => { setLastName(e.target.value) }
    const onChangeBio = (e) => { setBio(e.target.value) }


    const onFormSubmit = (e) => {
        e.preventDefault();

        // update new value to db
        axios.post(`http://localhost:5000/add-speaker/${id}/${firstName}/${lastName}/${bio}`)
            .then(res => console.log(res.data));

    }

    return (
        <div className='single-update' style={{display: 'grid'}}>
            <form onSubmit={onFormSubmit}>
                <h5 style={{ fontWeight: 'bold' }}>Add A Speaker's Info</h5>
                <div className='layer1'>
                    <label for="firstName">First Name</label> <br /><br/>
                    <input name="firstName" type="text" value={firstName} onChange={onChangeFirstName} />
                </div>
                <div className='layer1'>
                    <label for="lastName">Last Name</label> <br /><br/>
                    <input name="lastName" type="text" value={lastName} onChange={onChangeLastName} />
                </div>
                <div className='layer1'>
                    <label for="bio">Bio</label> <br /><br/>
                    <input name="bio" type="text" value={bio} onChange={onChangeBio} />
                </div>
                <div className='layer1'>
                    <button type='submit'>Add</button>
                </div>
                <br/>
                <br/>
                {
                    value !== [] ?
                    value.map(item => {
                        return (
                            <div>
                                <h5 style={{ fontWeight: 'bold' }}>{item.firstName} {item.lastName}</h5>
                                <p>{item.bio}</p>
                            </div>
                        )
                    })
                    : null
                }
            </form>
        </div>
    )
}

export default UpdateSpeaker;