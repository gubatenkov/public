import React from 'react';

const ChatItemMessage = ({ userName, text, placement }) => {
  const altClassNames = 'me-2';

  return (
    <div className='conversation-text'>
      <div
        className={`ctext-wrap ${
          placement === 'right' ? altClassNames : 'ms-2'
        }`}
      >
        <i className='chat-item-username'>{userName}</i>
        <p className='chat-item-message'>{text}</p>
      </div>
    </div>
  );
};

export default ChatItemMessage;
