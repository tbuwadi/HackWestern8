import React, { useState } from 'react';
import { Carousel } from '3d-react-carousal';
import './View.css';
import UpdateZoom from '../pages/registration/UpdateZoom';

const View = (props) => {
    const { qna, speaker, zoom } = props;
    const [state, setState] = useState('qna');
    
    const zoomImage = zoom.map(item => { return <img  src={item} /> });

    const onQnAClick = (e) => { setState('qna') }
    const onSpeakerClick = (e) => { setState('speaker') }
    const onZoomClick = (e) => { setState('zoom') }

    return (
        <div className='view-component'>
            <div>
                <button onClick={onQnAClick}>Q & A</button>
                <button onClick={onSpeakerClick}>Speakers</button>
                <button onClick={onZoomClick}>Zoom backgrounds</button>
            </div>
            <br></br>
            <div>
                <UpdateZoom />
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
            </div>

        </div>
    )
}

export default View;