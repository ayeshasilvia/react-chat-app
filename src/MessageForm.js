import React from "react";

export class MessageForm extends React.Component {
  state = { text: "" };

  render = () => {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={event => this.setState({ text: event.currentTarget.value })}
        />
        <button onClick={() => this.props.onSendText(this.state.text)}>
          Send
        </button>
        ;
      </div>
    );
  };
}
