//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Home from './components/Home'
import Test from './components/Test'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
