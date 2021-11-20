import React from "react";
import { IoMdNotifications } from 'react-icons/io';

import './Notification.css';

const Notification = (props) => {
    const { text } = props;
    return(
        <div className="notif row">
            <IoMdNotifications className="col-2 icon"/>
            <p className="col" style={{display: 'inline-block' }}>{text}</p>
        </div>
    )
}

export default Notification;