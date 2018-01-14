import React, { Component } from 'react';
// import logo from './logo.svg';
import LineComponent from './Components/LineComponent';
import CastingComponent from './Components/CastingComponent';
import './App.css';
import hexagrams from './data/h1.json';
import hexagrams3 from './data/hexagrams3.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: null,
      line2: null,
      line3: null,
      line4: null,
      line5: null,
      line6: null,
      reading: null
    }
    // this.thing();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          iChingMe
        </header>
        <button className="cast-btn"
          onClick={() => this.setState({
            casting: this.generateCasting()
          })}>
          Cast
        </button>
        <hr />
        <CastingComponent
          className="Casting"
          casting={this.state.casting}
        />
        <hr />
        <div>
          {JSON.stringify(this.state.batch)}
        </div>
      </div>
    );
  }

  thing() {
    const stuff = hexagrams.map((hexagram, i) => {
      return {
        ...hexagram,
        // judgement: {
        //   oracle: hexagrams3[i].interpretation.oracle,
        //   interpretation: hexagrams3[i].interpretation.judgment
        // }
        // image: {
        //   ...hexagram.image,
        //   oracle: hexagrams3[i].interpretation.image.oracle
        // }
        // lines: hexagram.lines.map((line, z) => {
        //   return {
        //     ...line,
        //     oracle: hexagrams3[i].interpretation.lines[z] ? hexagrams3[i].interpretation.lines[z].poem : ''
        //   }
        // })
      }
    });
    this.state.batch = stuff;
  }

  generateCasting() {
    const lines = [
      this.castLine(),
      this.castLine(),
      this.castLine(),
      this.castLine(),
      this.castLine(),
      this.castLine()
    ];

    const changedLines = lines.map(line => {
      if (line === 7) {
        return 9;
      } else if (line === 8) {
        return 6;
      }
      return line;
    }).join('');

    return {
      ...hexagrams.find(h => h.changingLines === changedLines),
      lineNumbers: lines
    };
  }

  castLine() {
    return (this.throwCoin() + this.throwCoin() + this.throwCoin());
  }

  throwCoin() {
    return Math.floor(Math.random() * (4 - 2)) + 2;
  }
}

export default App;
