import React from 'react';

const TaskList = ({ children }) => {
  return <ul className='task-list'>{children}</ul>;
};

export default TaskList;
