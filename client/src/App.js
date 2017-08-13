import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Build from "./components/Build";
import NavBar from './styles/NavBar'
import BodyDiv from './styles/BodyDiv.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <span>AO Builds</span>
            <Link to="/">Home</Link>
            
            
          </NavBar>
          <BodyDiv>
            <Route exact path="/" component={Home} />
            <Route path="/build/:buildId" component={Build} />
            
          </BodyDiv>
        </div>
      </Router>
    );
  }
}

export default App;