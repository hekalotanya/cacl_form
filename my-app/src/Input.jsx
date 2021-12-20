import React from 'react';
import './Input.css';

export class Input extends React.Component {
  state = {
      value: 'name',
  }

  render() {
    const { placeholder, name, onChange } = this.props;
    return (
      <input
        placeholder={placeholder}
        type="text"
        required
        name={name}
        onChange={onChange}
        className="input"
        pattern="^[ 0-9]+$"
      />
    )
  }
};