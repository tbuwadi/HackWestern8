import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';
import { Container, Row, Col } from 'react-grid-system';
import Announcements from "../components/AdminSlides/Announcements"

import './View.css';

const View = (props) => {
    const { qna, speaker, zoom } = props;
    const [state, setState] = useState('zoom');
    
    const zoomImage = zoom.map(item => { return <img  src={item} /> });

    const onQnAClick = (e) => { setState('qna') }
    const onSpeakerClick = (e) => { setState('speaker') }
    const onZoomClick = (e) => { setState('zoom') }

    return (
        <div className="view-component">
            <Row>
                <Col>
                <div>
                <button onClick={onZoomClick}>Virtual backgrounds</button>
                <button onClick={onSpeakerClick}>Speakers</button>
                <button onClick={onQnAClick}>Q & A</button>
            </div>
                </Col>

            </Row>

            <Row>
                <Col sm={8}>
                { state === 'qna' ? 
                    <iframe src={qna} height="100%" width="100%" frameBorder="0" style={{ minHeight: '560px', borderRadius: '15px'}} title="Slido"></iframe>
                : state === 'speaker' ?
                    speaker !== [] ?
                        speaker.map(item => {
                            return (
                                <div>
                                    <h5 style={{ fontWeight: 'bold' }}>{item.firstName} {item.lastName}</h5>
                                    <p>{item.bio}</p>
                                </div>
                            )
                        })
                    : null
                : state === 'zoom' ?
                    <Carousel slides={ zoomImage } autoplay={ false }/>
                : null }
                </Col>
                <Col sm={4}>
                 <Announcements userType="client"/>
                </Col>
            </Row>

      
        </div>
    )
}

export default View;