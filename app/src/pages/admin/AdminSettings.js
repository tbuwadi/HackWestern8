import React, { useState } from 'react';
import './AdminPresent.css';
import { Container, Row, Col } from 'react-grid-system';
import Announcements from '../../components/AdminSlides/Announcements';
const AdminSettings = (props) => {
    //const { slides, speakers, music, zoombackgrounds, postevent } = props;
    const [state, setState] = useState('slides');
    
    const onSlidesClick = (e) => { setState('slides') }
    const onSpeakersClick = (e) => { setState('speakers') }
    const onMusicClick = (e) => { setState('music') }
    const onZoomClick = (e) => { setState('zoombackgrounds') }
    const onPostEventClick = (e) => { setState('postevent') }

    return (
        <Container fluid>
          <Row>
            <Col sm={10}>
                <button className="tabBtn" onClick={onSlidesClick}>Update Slides</button>
                <button className="tabBtn" onClick={onSpeakersClick}>Update Speakers</button>
                <button className="tabBtn" onClick={onMusicClick}>Waiting Music</button>
                <button className="tabBtn" onClick={onZoomClick}>Zoom Backgrounds</button>
                <button className="tabBtn" onClick={onPostEventClick}>Post Event</button>
            </Col>
            <Col sm={2}>
                <button className="tabBtn">Present</button>
            </Col>
          </Row>
          <Row>
          <Col sm={12}>
            <br></br>
            <div>
                { state === 'slides' ? 
                (<h3>Update Slides</h3>)
                : state === 'speakers' ?
                (<h3>Update Speakers</h3>)
                : state === 'music' ?
                (<h3>Waiting Music</h3>)
                : state === 'zoombackgrounds' ?
                (<h3>Zoom Backgrounds</h3>)
                : state === 'postevent' ?
                (<h3>Post Event</h3>)
                : null }
            </div>
          </Col>
          </Row>
        </Container>
    )
}

export default AdminSettings;