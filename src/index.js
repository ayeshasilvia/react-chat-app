import React from "react";
import ReactDOM from "react-dom";

import { UserList } from "./UserList";
import { MessageList } from "./MessageList";
import { MessageForm } from "./MessageForm";
import { ChatDataSource } from "meetup-chat-client-react-component";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ChatDataSource
        serverUrl="https://serene-basin-84996.herokuapp.com"
        userName="Ayesha"
        render={(data, sendText) => {
          if (data.chat.isAuthenticated) {
            return (
              <div>
                <MessageForm onSendText={text => sendText(text)} />
                <div className="chat-content">
                  <UserList users={data.chat.users} />
                  <MessageList messages={data.chat.messages} />
                </div>
              </div>
            );
          }
          // return JSON.stringify(data.chat.users.maps);
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
