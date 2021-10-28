//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Home from './components/Home'
import Systems from './components/Systems'
import Clients from './components/Clients'
import Parts from './components/Parts'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Systems" component={Systems} />
            <Route exact path="/Clients" component={Clients} />
            <Route exact path="/Parts" component={Parts} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
