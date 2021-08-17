import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PortfolioContainer from './Portfolio/portfolio-container';
import NavigationContainer from './Navigation/navigation-container';
import Home from './Pages/home';
import About from './Pages/about';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
            </Switch>

          </div>
        </Router>

        <h1>Seth W. Powell</h1>
        <div>{moment().format('MMMM Do YYYY, h:m:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  } 
}
