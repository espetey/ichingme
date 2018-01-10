import React, { Component } from 'react';
import logo from './logo.svg';
import LineComponent from './Components/LineComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: null,
      line2: null,
      line3: null,
      line4: null,
      line5: null,
      line6: null
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          iChingMe
        </header>
        <button className="cast-btn" onClick={() => this.generateCasting()}>Cast</button>
        <div className="Casting">
          <LineComponent className="Line-6" lineNumber="6" value={this.state.line6} />
          <LineComponent className="Line-5" lineNumber="5" value={this.state.line5} />
          <LineComponent className="Line-4" lineNumber="4" value={this.state.line4} />
          <LineComponent className="Line-3" lineNumber="3" value={this.state.line3} />
          <LineComponent className="Line-2" lineNumber="2" value={this.state.line2} />
          <LineComponent className="Line-1" lineNumber="1" value={this.state.line1} />
        </div>
      </div>
    );
  }

  /*
6, 8 are broken
7, 9 solid
  */
  generateCasting() {
    this.setState({
      line1: this.castLine(),
      line2: this.castLine(),
      line3: this.castLine(),
      line4: this.castLine(),
      line5: this.castLine(),
      line6: this.castLine()
    });
  }

  castLine() {
    return (this.throwCoin() + this.throwCoin() + this.throwCoin());
  }

  throwCoin() {
    return Math.floor(Math.random() * (4 - 2)) + 2;
  }
}

export default App;
