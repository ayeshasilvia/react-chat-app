import React from "react";

export const MessageList = props => {
  return (
    <ul className="message-list">
      {props.messages.map(text => (
        <li>{text.text}</li>
      ))}
    </ul>
  );
};
