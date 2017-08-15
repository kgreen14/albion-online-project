import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HomeStyle from '../styles/HomeStyle';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      builds: []
    }
  }

  componentWillMount(){
    axios.get("/api/build").then((res) => {
      this.setState({builds: res.data});
      console.log(res)
    });
  }

  render() {
    return (
      <HomeStyle>
        <h1>BUILDS</h1>
        <form>
          {/* <input type="text"/> */}
          <button>Create Build</button>
        </form>
        {console.log(this.state.builds)}
        <ul>
          {this.state.builds.map((build, i) => {
            return (
              <div key={i}>
                <Link to={`/build/${build._id}`}> {build.user}'s {build.title} Build </Link>
              </div>
            );
          })}
        </ul>
      </HomeStyle>
    );
  }
}
export default Home;