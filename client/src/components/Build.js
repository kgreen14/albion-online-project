import React, { Component } from 'react';
import axios from 'axios';
import BuildBoard from './BuildBoard';
import { BuildStyle } from '../styles/Build';

class Build extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      title: "",
      user: "",
      points: 0,
      items: [],
      board: [],
      description: ""
    }
  }

  componentWillMount(){
    const id = this.props.match.params.buildId;
    axios.get(`/api/build/${id}`).then(res => {
      this.setState({
        id: res.data._id,
        title: res.data.title,
        user: res.data.user,
        points: res.data.points,
        items: res.data.items,
        board: res.data.board,
        description: res.data.description
      });
    });
    
  }

  render() {
    return (
      <div>
        <BuildStyle>
        
        <h2>Title: {this.state.title}</h2>    
        <h2>Author: {this.state.user}</h2>
        <h2>Votes: {this.state.points}</h2>
        
        <BuildBoard board={this.state.board} items={this.state.items}/>
        <p>{this.state.description}</p>
         
      </BuildStyle>
      </div>
    );
  }
}

export default Build;