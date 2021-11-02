//dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

//components
import Sidebar from './components/Sidebar'
import FloatingButton from './components/FloatingButton'
import Home from './components/Home'
import Systems from './components/Systems'
import Clients from './components/Clients'
import Parts from './components/Parts'
import Tickets from './components/Tickets'

//testing
import Test from './components/MUIGrid'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawer: false,
      path: window.location.pathname
    };
    this.handleDrawer = this.handleDrawer.bind(this)
  }

  handleDrawer() {
    this.setState({ drawer: !this.state.drawer })
  }

  handlePath() {
    this.setState({ path: window.location.pathname })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Sidebar
            title={window.location.pathname}
            state={this.state.drawer}
            fnState={() => { this.handleDrawer() }}
            fnPath={() => { this.handlePath() }}
            content={
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Systems" component={Systems} />
                <Route exact path="/Clients" component={Clients} />
                <Route exact path="/Parts" component={Parts} />
                <Route exact path="/Tickets" component={Tickets} />
                <Route exact path="/Test" component={Test} />
              </Switch>
            } />
          <FloatingButton />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
