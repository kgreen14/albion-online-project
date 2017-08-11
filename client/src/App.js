import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Build from "./components/Build";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            
          </div>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/build/:buildId" component={Build} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;