import React from 'react';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  console.log(error);
  return (
    <div className='errorholder'>
      <img
        src='/images/error.jpg'
        style={{
          display: 'block',
          margin: '3rem auto',
          width: '100%',
          maxWidth: '700px',
        }}
        alt='error'
      />
      <br />
      <p>Дополнительная ифнормация для отладки ошибки:</p>
      <p>Сообщение: {error.message}</p>
    </div>
  );
};

export default ErrorFallback;
