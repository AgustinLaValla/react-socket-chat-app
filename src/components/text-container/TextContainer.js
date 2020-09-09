import React from 'react';
import './TextContainer.css';
import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users }) =>
    <div className="textContainer">
        <div>
            <h3>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h3>
            <h5>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h5>
        </div>
        {
            users
                ? (
                    <div>
                        <h2>People currently chatting:</h2>
                        <div className="activeContainer">
                            <h3>
                                {users.map(({ name }) => (
                                    <div key={name} className="activeItem">
                                        {name}
                                        <img alt="Online Icon" src={onlineIcon} />
                                    </div>
                                ))}
                            </h3>
                        </div>
                    </div>
                )
                : null
        }
    </div>


export default TextContainer
