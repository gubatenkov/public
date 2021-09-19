import React from 'react';
import { ItemStatusFilter } from '../index';

export default class SearchPanel extends React.Component {
  render() {
    return (
      <div className='d-flex mb-3' style={{ width: '100%' }}>
        <input
          className='form-control'
          type='text'
          placeholder='Поиск'
          value={this.props.query}
          onChange={this.props.changeTerm}
        />

        <ItemStatusFilter
          toggleFilter={this.props.toggleFilter}
          filter={this.props.filter}
        />
      </div>
    );
  }
}
