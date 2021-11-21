import React, { useState, useEffect } from 'react';
import axios from 'axios';

import View from '../../components/View';

import '../../index.css';
import { Container, Row, Col } from 'react-grid-system';

const ClientView = () => {
  const urlComponents = (new URL(document.location)).pathname.split('/');
  const id = urlComponents[urlComponents.length - 1];
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
  const [qna, setQna] = useState('https://app.sli.do/event/1yidejwe'); // TODO: Change default value
  const [zoombg, setZoombg] = useState(zoombgg); // TODO: Change default value
  const [speakers, setSpeakers] = useState(speakerss); // TODO: Change default value
  
  useEffect(() => { 
    console.log('BACKEND INETGRATION HERE')
    // SET THE VARIABLES, CALL API GET METHODS

    // setQna(result);
    axios.get(`http://localhost:5000/get-speakers/${id}`)
      .then(function(res){
        console.log(res.data);
        setSpeakers(res.data);
      }); 
    
      // mongo not synced up
    // axios.get(`http://localhost:5000/get-title/${id}`)
    //   .then(function(res){
    //     console.log(res.data);
    //     setTitle(res.data);
    //   }); 

    
  }, []);

  return (
    <Container>
     <h1>{title}</h1>
      <br></br>
      <View speaker={speakers} qna={qna} zoom={zoombg}/>
    </Container>
  );
}

export default ClientView;
