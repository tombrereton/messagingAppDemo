import React from 'react';
import Message from '../Message';

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