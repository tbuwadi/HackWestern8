import React, { useState } from 'react';
import './View.css';

const View = (props) => {
    const { qna, speakers } = props;
    const [state, setState] = useState('qna');
    console.log(state);

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
                {state === 'qna' ? <iframe src={qna} height="100%" width="100%" frameBorder="0" style={{ minHeight: '560px' }} title="Slido"></iframe> : null}
            </div>

        </div>
    )
}

export default View;