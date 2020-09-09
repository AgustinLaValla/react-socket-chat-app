import React from 'react';
import './Infobar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import { Link } from 'react-router-dom';

const Infobar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>
            <div className="RightInnerContainer">
                <Link to="/">
                    <img src={closeIcon} alt="close" />
                </Link>
            </div>
        </div>
    )
}


export default Infobar;