import {useEffect, useState} from "react";
import {io} from "socket.io-client";
import Message from "./message";
import MessageForm from "./messageForm";

const MainChatComponent = () => {
    const [connectedSocket, setConnectedSocket] = useState();
    const socket = io();

    const [messages, setMessages] = useState([]);

    const addUserAndMessage = (user, message) => {
        setMessages((messages) => {
            return [...messages, [`${user}: ${message}`]]
        });
    };



    useEffect(() => {

            socket.on('connect', () => {
                setConnectedSocket(socket);
            });

            socket.on('recieved_message', (userName, message) => {
                    addUserAndMessage(userName,message);
                }
            );

        },[]);

    if (!connectedSocket){
        return <p>Waiting for connections...</p>;
    }

    return (
        <div className="container">
            <h1 style={{textAlign: "center"}}>Homework 4</h1>
            <Message messages={messages}/>
            <MessageForm connectedSocket={connectedSocket}/>
        </div>
    );
}

export default MainChatComponent;
