import React, { Component } from 'react';

class LineComponent extends Component {
  render() {
    if (this.props.value) {
      return <div className={this.props.className}>
        Line {this.props.lineNumber} - {this.props.value}
      </div>;
    }
    return '';
  }
}

export default LineComponent;
