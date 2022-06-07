import FeedbackGrid from "./FeedbackGrid";
import InputForm from "./InputForm";
import {useEffect, useState} from "react";
import {io} from "socket.io-client";

const AppContainer = () =>{
    const [connectedSocket, setConnectedSocket] = useState();

    useEffect(() => {
        const socket = io();

        socket.on("connected", () => {
            setConnectedSocket(socket);
        });

    }, []);

  return(
    <div className="container">
      <InputForm/>
      <FeedbackGrid/>
    </div>
  )
}

export default AppContainer;
