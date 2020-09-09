import React from 'react';
import './Messages.css';
import ScollToBottom from 'react-scroll-to-bottom';
import Message from '../message/Message';

const Messages = ({ messages, name }) => {
    return (
        <div className="messages">
            {
                messages.map((message, i) =>
                    <div key={i}>
                        <Message message={message} name={name} />
                    </div>
                )
            }
        </div>
    )
}

export default Messages;