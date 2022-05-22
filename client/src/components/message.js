const Message = (props) => {


    return(
        <div className="messageContainer">
            {
                props.messages.map((message,index) => (
                    <p key={`message-${index}`}>{message}</p>
                ))
            }
        </div>
    );
}

export default Message;
