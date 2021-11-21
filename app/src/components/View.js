import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';
import { Row, Col } from 'react-grid-system';
import Announcements from "../components/AdminSlides/Announcements"

import './View.css';
import Person1 from '../images/speaker1.png';
import Person2 from '../images/speaker2.png';
//import Person3 from '../images/speaker3.png';
import Person4 from '../images/speaker4.png';


const View = (props) => {
    const { qna, speaker, zoom } = props;
    const [state, setState] = useState('zoom');
    
    const zoomImage = zoom.map(item => { return <img alt="" src={item} /> });

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
                    <div  style={{ marginTop: '40px'}}>
                        <img alt="" width='400px' style={{ marginBottom: '15px'}} src={Person1}/><br/>
                        <img alt="" width='400px' style={{ marginBottom: '15px'}} src={Person2}/><br/>
                        <img alt="" width='400px' style={{ marginBottom: '50px'}} src={Person4}/><br/>

                        {speaker !== [] ?
                        <div>
                            <h3>Other speakers</h3>
                            <br />
                            {speaker.map(item => {
                                return (
                                    <div style={{ paddingLeft: '40px'}}>
                                        <h5 style={{ fontWeight: 'bold' }}>{item.firstName} {item.lastName}</h5>
                                        <p>{item.bio}</p>
                                    </div>
                                )
                            })}
                        </div>
                        : null}
                    </div>
                : state === 'zoom' ?
                    <div style={{ marginTop: '45px'}}>
                        <Carousel slides={ zoomImage } autoplay={ false }/>
                    </div>
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