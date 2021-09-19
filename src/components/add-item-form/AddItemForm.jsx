import React, { Component } from 'react';

export default class AddItemForm extends Component {
  state = {
    value: '',
  };

  onInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.value) this.props.onAdd(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form
        className='item-add-form d-flex align-items-center justify-content-between'
        style={{ width: '100%', marginTop: '1rem' }}
        onSubmit={this.onFormSubmit}
      >
        <input
          className='form-control'
          type='text'
          placeholder='что дальше ?'
          value={this.state.value}
          onChange={this.onInputChange}
        />
        <button
          className='btn btn-outline-secondary'
          style={{ marginLeft: '1rem' }}
        >
          Добавить
        </button>
      </form>
    );
  }
}
