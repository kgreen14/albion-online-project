import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';

class ItemDisplay extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      name: "",
      description: "",
      image: "",
      abilities: [],
    }
  }

  componentWillMount(){
    const id = this.props.match.params.itemId;
    axios.get(`/api/item/${id}`).then(res => {
      console.log(res.data)
        this.setState({
        id: res.data._id,
        name: res.data.name,
        description: res.data.description,
        image: res.data.image,
        abilities: res.data.abilities,
      });   
    });
  }

  render() {
    return (
      <div>
        <div>
        
        <h2>Item: {this.state.name}</h2>    
        <h2>Description: {this.state.description}</h2>
        <img src={this.state.image} height="70px" width="70px"/>

        </div>
      </div>
    );
  }
}

export default ItemDisplay;
