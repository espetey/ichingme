import React, { Component } from 'react';

class LineComponent extends Component {
  render() {
    if (this.props.value) {
      let line = '';
      switch(this.props.value) {
        case 6:
          line = '- -'
        break;
        case 7:
          line = '---'
        break;
        case 8:
          line = '- -'
        break;
        default: // or 9
          line = '---'
      }
      return (
        <div className={this.props.className}>
          Line {this.props.lineNumber} - {this.props.value} // {line}
        </div>
      )
    }
    return '';
  }
}

export default LineComponent;
