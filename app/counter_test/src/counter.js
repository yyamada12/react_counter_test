import React from 'react';
import logo from './logo.svg';
import { render } from 'react-testing-library';

export default class Counter extends React.Component {
  state = { count: 0};
  render() {
    return (
      <div>
        <div data-testid="result">
          { this.state.count }
        </div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }  
}
