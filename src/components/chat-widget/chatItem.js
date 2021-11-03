import React from 'react';
import ChatItemAvatar from './chatItemAvatar';
import ChatItemMessage from './chatItemMessage';

const ChatItem = ({ userName, text, userPic, postedOn, placement }) => {
  const altClassNames = 'flex-row-reverse text-end';

  return (
    <li
      className={`chat-item d-flex ${
        placement === 'right' ? altClassNames : ''
      }`}
    >
      <ChatItemAvatar userAvatar={userPic} postedOn={postedOn} />
      <ChatItemMessage userName={userName} text={text} placement={placement} />
    </li>
  );
};

export default ChatItem;
