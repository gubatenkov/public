import React from 'react';

const TaskItem = ({ id, due_date, title }) => {
  return (
    <li className='task-list-item custom-control custom-checkbox d-flex align-items-start'>
      <input
        className='task-list-item-checkbox custom-control-input me-3'
        id={`task-${id}`}
        type='checkbox'
      />
      <div className='task-list-item-body'>
        <label
          className='task-list-item-text custom-control-label'
          htmlFor={`task-${id}`}
        >
          {title}
        </label>
        <p className='task-list-item-date text-muted'>Дедлайн до {due_date}</p>
      </div>
    </li>
  );
};

export default TaskItem;
