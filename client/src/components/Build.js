import React, { Component } from 'react';

class Build extends Component {
  render() {
    return (
      <div>
        Hello From Build
        {this.props.match.params.buildId}
      </div>
    );
  }
}

export default Build;