//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Systems from './components/Systems'
import Clients from './components/Clients'
import Parts from './components/Parts'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: false
    };
    this.handleDrawer = this.handleDrawer.bind(this)
  }

  handleDrawer() {
    this.setState({ drawer: !this.state.drawer })
    console.log('works')
    console.log(this.state.drawer)
  }

  render() {
    return (
      <Router>
        <Sidebar state={this.state.drawer} fn={() => { this.handleDrawer() }} content={
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Systems" component={Systems} />
            <Route exact path="/Clients" component={Clients} />
            <Route exact path="/Parts" component={Parts} />
          </Switch>
        } />
      </Router>
    );
  }
}

export default App;
