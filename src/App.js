import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    greeting: ""
  }
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greeting</button>
        <div>{this.state.greeting}</div>

      </div>
    );
  }

  greet = () => {
    this.setState({greeting: 'hello, pet my doggo'});
  }
}

export default App;
