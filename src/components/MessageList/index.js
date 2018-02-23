import React, { Component } from 'react';
import Message from '../Message';
import _ from "lodash";

const MessageList = (props) => {
  let messageNodes = props.messages.map((message) => {
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
    </div >
  )
}

export default MessageList;