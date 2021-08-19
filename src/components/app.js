import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationContainer from './Navigation/navigation-container';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import Blog from './Pages/blog';
import PortfolioDetail from './Portfolio/portfolio-detail';
import NoMatch from './Pages/no-match';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Seth Powell Portfolio</h1>
            <div>{moment().format('MMMM Do YYYY, h:m:ss a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  } 
}
