import React, { useState } from 'react';
import './AdminPresent.css';
import { Container, Row, Col } from 'react-grid-system';
import Announcements from '../../components/AdminSlides/Announcements';

import Slides from "../../components/AdminSlides/Slides"
import QA from "../../components/AdminSlides/QA"

const AdminPresent = (props) => {
    //const { slides, qna, announcements } = props;
    const [state, setState] = useState('slides');
    
    const onSlidesClick = (e) => { setState('slides') }
    const onQnaClick = (e) => { setState('qna') }
    const onAnnouncementsClick = (e) => { setState('announcements') }

    return (
        <Container fluid>
          <Row>
            <Col sm={8}>
                <button className="tabBtn" onClick={onSlidesClick}>Slides</button>
                <button className="tabBtn" onClick={onQnaClick}>Q&A</button>
                <button className="tabBtn" onClick={onAnnouncementsClick}>Announcements</button>
            </Col>
          <Col xs={4}>
         <iframe className="spotify" src="https://open.spotify.com/embed/album/2wcv0lHk5fUYyNGKugGa7q?utm_source=generator" width="50%" height="80px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
         </Col>
          </Row>
          <Row>
          <Col sm={12}>
            <br></br>
            <div>
                { state === 'slides' ? 
                (<Slides/>)
                : state === 'qna' ?
                (<QA/>)
                : state === 'announcements' ?
                (<Announcements/>)
                : null }
            </div>
          </Col>
          <Col sm={4}>
            
          </Col>
          </Row>
        </Container>
    )
}

export default AdminPresent;