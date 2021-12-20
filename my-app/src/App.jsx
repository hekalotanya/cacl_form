import './App.css';
import React from 'react';
import { Input } from './Input';
import { Button } from '@mui/material';

export class App extends React.Component {
  state = {
    result: null,
    value_1: null,
    value_2: null,
    select: 'Addition'
  }

  onChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
    console.log(name, value)
  }

  onSubmit = (event) => {
    event.preventDefault();
    const value_1 = Number(this.state.value_1);
    const value_2 = Number(this.state.value_2)
    let result;

    switch(this.state.select) {
      case 'Addition':
        result = Math.round(value_1 + value_2).toString();
        this.setState({result: result});
        console.log('Addition')
        break;

      case 'Subtraction':
        result = Math.round(value_1 - value_2).toString();
        this.setState({result: result});
        console.log('Subtraction')
        break;

      case 'Multiplication':
        result = Math.round(value_1 * value_2).toString();
        this.setState({result: result});
        console.log('Multiplication')
        break;

      case 'Division':
        if (value_2 === 0) {
          result = '0';
        } else {
          result = Math.round(value_1 / value_2).toString();
        }
        this.setState({result: result});
        console.log('Division')
        break;

      default:
        return;
    }
  }

  render() {
    const { result } = this.state;

    return (
      <div className="App">
        <form className="form" onSubmit={this.onSubmit}>
          <Input placeholder="Value 1" name="value_1" onChange={this.onChange}/>
          <Input placeholder="Value 2" name="value_2" onChange={this.onChange} />
          <label htmlFor="select" className="label">
            {'Choose operation'}
            <select
              name="select"
              id="select"
              onChange={this.onChange}
              className="select"
            >
              <option value="Addition">+ Addition</option>
              <option value="Subtraction">- Subtraction</option>
              <option value="Multiplication">* Multiplication</option>
              <option value="Division">/ Division</option>
            </select>
          </label>
          <Button variant="contained" type='submit'>
            Calculate
          </Button>
          {result && (
            <span className="result_text">Result is {result}</span>
          )}
        </form>
      </div>
    );
  }
}

export default App;
