import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Build from "./components/Build";
import NavBar from './styles/NavBar'
import BodyDiv from './styles/BodyDiv.js'
import ItemDisplay from "./components/ItemDisplay";
import AbilityDisplay from "./components/AbilityDisplay";




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            
            <Link to="/"><span>AO Builds</span></Link>
            
            
          </NavBar>
          <BodyDiv>
            <Route exact path="/" component={Home} />
            <Route path="/build/:buildId" component={Build} />
            <Route path="/item/:itemId" component={ItemDisplay} />
            <Route path="/ability/:abilityId" component={AbilityDisplay} />

          
            
          </BodyDiv>
        <NavBar>
            <span>Made By: Kris Green</span>
        </NavBar>  
        </div>
        
      </Router>
    );
  }
}

export default App;