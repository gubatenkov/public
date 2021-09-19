import React from 'react';
import { TodoListItem } from '../';

const TodoList = ({ data, onDelete, onToggleImportant, onToggleDone }) => {
  const items = data.map((item) => {
    const { id, ...rest } = item;
    return (
      <li className='list-group-item' key={id}>
        <TodoListItem
          {...rest}
          id={id}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className='todo-list list-group' style={{ width: '100%' }}>
      {items}
    </ul>
  );
};

export default TodoList;
