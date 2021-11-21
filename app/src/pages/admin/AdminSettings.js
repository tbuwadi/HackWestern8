import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import UpdateSlide from '../registration/UpdateSlide';
import UpdateSpeaker from '../registration/UpdateSpeaker';
import UpdateZoom from '../registration/UpdateZoom';
import UpdateQna from '../registration/UpdateQna';
import UpdateSpotify from '../registration/UpdateSpotify';
import UpdatePostEvent from '../registration/UpdatePostEvent';
import './AdminPresent.css';
import '../registration/update.css';

const AdminSettings = (props) => {
    const urlComponents = (new URL(document.location)).pathname.split('/');
    const id = urlComponents[urlComponents.length - 1];
    //const { slides, speakers, music, zoombackgrounds, postevent } = props;
    const [state, setState] = useState('slides');
    
    const onSlidesClick = (e) => { setState('slides') }
    const onSpeakersClick = (e) => { setState('speakers') }
    const onMusicClick = (e) => { setState('music') }
    const onZoomClick = (e) => { setState('zoombackgrounds') }
    const onPostEventClick = (e) => { setState('postevent') }
    const onQnAClick = (e) => { setState('qna') }

    return (
        <Container fluid>
          <Row>
            <Col sm={10}>
                <button className="tabBtn" onClick={onSlidesClick}>Update Slides</button>
                <button className="tabBtn" onClick={onSpeakersClick}>Update Speakers</button>
                <button className="tabBtn" onClick={onMusicClick}>Waiting Music</button>
                <button className="tabBtn" onClick={onZoomClick}>Virtual Backgrounds</button>
                <button className="tabBtn" onClick={onPostEventClick}>Post Event</button>
                <button className="tabBtn" onClick={onQnAClick}>Q&A</button>
            </Col>
            <Col sm={2}>
                <Link to={`/AdminPresent/${id}`}><button className="tabBtn">Present</button></Link>
            </Col>
          </Row>
          <Row>
          <Col sm={12}>
            <br></br>
            <div>
                { state === 'slides' ? 
                <UpdateSlide />
                : state === 'speakers' ?
                <UpdateSpeaker />
                : state === 'music' ?
                <UpdateSpotify />
                : state === 'zoombackgrounds' ?
                <UpdateZoom />
                : state === 'postevent' ?
                <UpdatePostEvent />
                : state === 'qna' ?
                <UpdateQna />
                : null }
            </div>
          </Col>
          </Row>
        </Container>
    )
}

export default AdminSettings;