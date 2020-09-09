import React, { useState } from 'react';
import './Join.css';
import { Link } from 'react-router-dom';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handlePreventDefault = (ev) => (!name || !room) ? ev.preventDefault() : null

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div>
                    <input
                        className="joinInput"
                        type="text"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <input
                        className="joinInput mt-20"
                        type="text"
                        value={room}
                        onChange={(ev) => setRoom(ev.target.value)}
                        placeholder="Enter the room name"
                    />
                </div>
                <Link onClick={handlePreventDefault} to={`chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Sign In</button>
                </Link>
            </div>


        </div>
    )
}

export default Join;