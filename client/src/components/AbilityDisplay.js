import React, { Component } from 'react';
import Ability from './Ability';
import axios from 'axios';

class AbilityDisplay extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      name: "",
      description: "",
      image: "",
      cooldown: 0,
      casttime: 0,
      casttype: 0,
      range: 0,
      energycost: 0,
      target: "",
    }
  }

  componentWillMount(){
    const id = this.props.match.params.abilityId;
    axios.get(`/api/ability/${id}`).then(res => {
      console.log(res.data)
        this.setState({
        id: res.data._id,
        name: res.data.name,
        description: res.data.description,
        image: res.data.image,
        cooldown: res.data.cooldown,
        casttime: res.data.casttime,
        casttype: res.data.casttype,
        range: res.data.range,
        energycost: res.data.energycost,
        target: res.data.target
        });   
    });
  }

  render() {
    return (
      <div>
        <div>
        <img src={this.state.image} height="70px" width="70px"/>
        <h2>Ability: {this.state.name}</h2>
        <li>Cool-Down: {this.state.cooldown} seconds</li>
        <li>Cast Type: {this.state.casttype}</li>  
        <li>Cast Time: {this.state.casttime} seconds</li>
        <li>Range: {this.state.range}m</li>
        <li>Energy Cost: {this.state.energycost}</li>
        <li>Target: {this.state.target}</li>
        
        <p>Description: {this.state.description}</p>
        
        

        </div>
      </div>
    );
  }
}

export default AbilityDisplay;
