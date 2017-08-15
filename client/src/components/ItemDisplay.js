import React, { Component } from 'react';
import Item from './Item';
import axios from 'axios';
import { ItemDisplayStyle } from '../styles/ItemDisplayStyle';

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
        <ItemDisplayStyle>
          
        <img src={this.state.image} height="100px" width="100px"/>
        <h2>Item: {this.state.name}</h2>    
        <p>Description: {this.state.description}</p>
        

        </ItemDisplayStyle>
      </div>
    );
  }
}

export default ItemDisplay;
