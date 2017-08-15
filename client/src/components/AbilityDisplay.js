import React, { Component } from 'react';
import Ability from './Ability';
import axios from 'axios';
import { AbilityDisplayStyle } from '../styles/AbilityDisplayStyle';

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
        <AbilityDisplayStyle>
        <img src={this.state.image} height="100px" width="100px"/>
        
        <h2>Ability: {this.state.name}</h2>
        <span>
        <span>Cool-Down: {this.state.cooldown} seconds</span>
        <span>Cast Type: {this.state.casttype}</span>  
        <span>Cast Time: {this.state.casttime} seconds</span>
        <span>Range: {this.state.range}m</span>
        <span>Energy Cost: {this.state.energycost}</span>
        <span>Target: {this.state.target}</span>
        </span>
        
        <p>Description: {this.state.description}</p>
        
        

        </AbilityDisplayStyle>
      </div>
    );
  }
}

export default AbilityDisplay;
