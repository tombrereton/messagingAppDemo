import React, { Component } from 'react';
import Message from '../Message';
import _ from "lodash";

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let messageNodes = this.props.messages.map((message) => {
      return (
        <div className="card">
          <div className="card-content">
            <Message message={message.message} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    )
  }
}

export default MessageList;