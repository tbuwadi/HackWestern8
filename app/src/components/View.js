import React from 'react';
import './View.css';

const View = (props) => {
    const { qna, panelists } = props;

    return (
        <div className='view-component'>
            <div>
                <button>Q & A</button>
                <button>Panelists</button>
                <button>Zoom backgrounds</button>
            </div>
            <br></br>
            <div>
                <iframe src={qna} height="100%" width="100%" frameBorder="0" style={{minHeight: '560px'}} title="Slido"></iframe>
            </div>
        </div>
    )
}

export default View;