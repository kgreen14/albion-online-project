import React, { Component } from 'react';


class Ability extends Component {
  render() {
    return (
      <div>
        {this.props.ability.name}
      </div>
    );
  }
}

export default Ability;