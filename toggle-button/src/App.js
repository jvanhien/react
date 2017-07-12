import React, { Component } from 'react';
import ToggleButton from './ToggleButton';

/**
 * Application component 
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div>
          <h2>Welcome to React</h2>
          <ToggleButton />
      </div>
    );
  }
}

export default App;
