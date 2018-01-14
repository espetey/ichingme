import React, { Component } from 'react';
import './CastingComponent.css';
import LineComponent from './LineComponent';

class CastingComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const casting = this.props.casting;
    console.log('casting?????????');
    console.log(casting);
    if (!casting) {
      return (
        <div>no casting</div>
      )
    }
    return (
      <div className="Casting">
        <LineComponent className="Line-6" lineNumber="6" value={casting.lineNumbers[5]} />
        <LineComponent className="Line-5" lineNumber="5" value={casting.lineNumbers[4]} />
        <LineComponent className="Line-4" lineNumber="4" value={casting.lineNumbers[3]} />
        <LineComponent className="Line-3" lineNumber="3" value={casting.lineNumbers[2]} />
        <LineComponent className="Line-2" lineNumber="2" value={casting.lineNumbers[1]} />
        <LineComponent className="Line-1" lineNumber="1" value={casting.lineNumbers[0]} />
        <br />
        <br />
        {casting.title}
        <br />
        <br />
        {casting.introduction}
        <br />
        <br />
        <pre>
          {casting.judgement.oracle}
        </pre>
        <br />
        <br />
        {casting.judgement.interpretation}
        <br />
        <br />
        <pre>
          {casting.image.oracle}
        </pre>
        <br />
        <br />
        {casting.image.interpretation}
        <br />
        <br />
        {casting.lines.map((line, i) => {
          return (
            <div key={i}>
              <pre>{line.oracle}</pre>
              <div>{line.interpretation}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default CastingComponent;
