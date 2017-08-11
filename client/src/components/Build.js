import React, { Component } from 'react';
import axios from 'axios';
import BuildBoard from './BuildBoard';

class Build extends Component {
  constructor(){
    super();
    this.state = {
      id: "",
      title: "",
      user: "",
      points: 0,
      items: [],
      board: []
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
        board: res.data.board
      });
    });
  }

  render() {
    return (
      <div>
      <div>
        <h1>My Latest Builds!</h1>
        </div>
        <div>
        <h3>Title: {this.state.title}</h3>    
        <h3>Author: {this.state.user}</h3>
        <h3>Votes: {this.state.points}</h3>
        <BuildBoard board={this.state.board} items={this.state.items} /> 
      </div>
      </div>
    );
  }
}

export default Build;