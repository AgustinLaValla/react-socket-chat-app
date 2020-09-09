import React, { useState, useEffect } from 'react';
import clientSocket from 'socket.io-client';
import { url, parseLocation } from '../../utils/utils';
import './Chat.css';
import Inforbar from '../infobar/Infobar';
import Input from '../input/Input';
import Messages from '../messages/Messages';
import TextContainer from '../text-container/TextContainer';

let socket;

const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);


    const sendMessage = (event) => {
        event.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    };

    useEffect(() => {

        const { room, name } = parseLocation(location);

        socket = clientSocket(url);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => { });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };


    }, [location.search]);


    useEffect(() => {
        socket.on('message', sendedMessage => {
            setMessages(messages => [...messages, sendedMessage]);
            const messagesContainer = document.querySelector('.messages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });

        socket.on('roomData', ({users}) => setUsers(users));

        return () => { };
    }, [])

    return (
        <div className="outerContainer">
            <div className="container">
                <Inforbar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>

            <TextContainer users={users}/>
        </div>
    )
}


export default Chat;