import { useState} from "react";
import Notification from "./notification";

const MessageForm = (props) => {
    const [message, setMessage] = useState('');
    const [userName, setUserName] = useState('');
    const [notification, setNotification] = useState(false);

    const sendMessage = () => {
        props.connectedSocket.emit("new_message", userName, message);
        setMessage('');
    }

    const handleMessageInputChange = (e) => {
        setMessage(e.target.value);

    }

    const handleUserInputChange = (e) => {
        setUserName(e.target.value);
    }

    const showNotification = () => {
        setNotification(!notification);

        setTimeout(() => {
            setNotification(false);
        }, 5000);

    }


    return(
        <div style={{ paddingLeft: 10}}>
            <span>
                <input
                    value={userName}
                    type="text"
                    placeholder={'Enter your name'}
                    onChange={handleUserInputChange}
                />
            </span>
            <span>
                <input
                    value={message}
                    type="text"
                    placeholder={'Enter a message'}
                    onChange={handleMessageInputChange}
                />
            </span>

            <button onClick={function(event){ sendMessage(); showNotification()}} >Send</button>
            <div className={notification? 'notificationVisibility' : 'notificationHidden'}>
                <Notification userName={userName}/>
            </div>
        </div>
    )
}

export default MessageForm;
