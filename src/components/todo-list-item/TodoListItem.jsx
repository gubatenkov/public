import React from 'react';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {
  render() {
    const {
      value,
      done,
      important,
      onDelete,
      onToggleImportant,
      onToggleDone,
    } = this.props;

    let classNames = 'todo-list__item-value';

    if (important) {
      classNames += ' important';
    }
    if (done) {
      classNames += ' done';
    }

    return (
      <div className='d-flex justify-content-between align-items-center'>
        <span className={classNames} onClick={onToggleDone}>
          {value}
        </span>

        <div className='btn-grouped'>
          <button
            className='btn btn-outline-success'
            type='button'
            style={{ marginRight: '15px' }}
            onClick={onDelete}
          >
            <i className='fas fa-trash-alt'></i>
          </button>
          <button
            className='btn btn-outline-warning'
            type='button'
            onClick={onToggleImportant}
          >
            <i className='fas fa-exclamation'></i>
          </button>
        </div>
      </div>
    );
  }
}
