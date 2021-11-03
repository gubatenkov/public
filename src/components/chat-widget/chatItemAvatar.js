import React from 'react';

const ChatItemAvatar = ({ userAvatar, postedOn }) => {
  return (
    <div className='chat-avatar d-flex flex-column'>
      <img
        src={userAvatar}
        alt={userAvatar}
        style={{
          width: '35px',
          height: '35px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <i className='chat-item-time text-muted'>{postedOn}</i>
    </div>
  );
};

export default ChatItemAvatar;
