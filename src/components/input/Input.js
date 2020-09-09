import React, { useEffect } from 'react';
import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <form className="form" onSubmit={sendMessage}>
            <input
                type="text"
                className="input"
                placeholder="Type a message..."
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                onKeyPress={ev => ev.key === 'Enter' ? sendMessage(ev) : null}
            />
            <button type="submit" className="sendButton">Send</button>
        </form>
    )
}

export default Input;