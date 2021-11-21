import React, { useState, useEffect } from 'react';

import View from '../../components/View';

import '../../index.css';

const ClientView = () => {
  
  // delete these test values on demo
  const zoombgg = [
    "https://raw.githubusercontent.com/tbuwadi/HackWestern8/main/wits-bg/img1.b600c14a.png?token=AHYMZK3OEJ6P3PZJ6MQ2OBDBUKDRS",
    "https://raw.githubusercontent.com/tbuwadi/HackWestern8/main/wits-bg/img2.9f130068.png?token=AHYMZK67N5TFAEOEALAAFADBUKDR6",
    "https://raw.githubusercontent.com/tbuwadi/HackWestern8/main/wits-bg/img3.a5180e90.png?token=AHYMZKZJZQ4RSA6CYKHQPJTBUKDSI",
  ];

  const speakerss = [
    {
      "firstName": "John",
      "lastName": "Smith",
      "bio": "swe @ hiremeanywhere"
    },
    {
      "firstName": "Bob",
      "lastName": "Smith",
      "bio": "@John's brother"
    },
    {
      "firstName": "Jim",
      "lastName": "Tim",
      "bio": "@John's cousin"
    }
  ];

  const [title, setTitle] = useState('Loading...');
  const [qa, setQa] = useState('https://app.sli.do/event/1yidejwe'); // TODO: Change default value
  const [zoombg, setZoombg] = useState(zoombgg); // TODO: Change default value
  const [speakers, setSpeakers] = useState(speakerss); // TODO: Change default value
  
  useEffect(() => { 
    console.log('BACKEND INETGRATION HERE')
    // SET THE VARIABLES, CALL API GET METHODS

    
  }, []);

  return (
    <div className='container' style={{ marginTop: '50px' }}>
      <h1>{title}</h1>
      <br></br>
      <View speaker={speakers} qna={qa} zoom={zoombg}/>
    </div>
  );
}

export default ClientView;
