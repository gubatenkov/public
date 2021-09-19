import React from 'react';

export default class ItemStatusFilter extends React.Component {
  buttons = [
    {
      text: 'All',
      type: 'button',
      classNames: 'btn btn-outline-primary',
      dataField: 'all',
    },
    {
      text: 'Active',
      type: 'button',
      classNames: 'btn btn-outline-primary',
      dataField: 'active',
    },
    {
      text: 'Done',
      type: 'button',
      classNames: 'btn btn-outline-primary',
      dataField: 'done',
    },
  ];

  render() {
    const { toggleFilter, filter } = this.props;
    return (
      <div
        className='btn-group ms-3'
        role='group'
        aria-label='Basic outlined example'
      >
        {this.buttons.map((btn, index) => {
          const { text, type, classNames, dataField } = btn;
          const isActive = filter === dataField ? 'active' : '';
          return (
            <button
              className={`${classNames} ${isActive}`}
              type={type}
              key={index}
              data-filter={dataField}
              onClick={(e) => toggleFilter(e.currentTarget.dataset.filter)}
            >
              {text}
            </button>
          );
        })}
      </div>
    );
  }
}
