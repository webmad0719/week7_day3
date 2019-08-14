import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import { projects as Projects } from './components/Projects'
import ProjectDetails from './components/Project-details'


// Auxiliares
import QueryStringsFunctional from './components/aux/Query-strings-functional'
import QueryStringsClass from './components/aux/Query-strings-class'
import Counter from './components/aux/Counter'
import Vivus from './components/aux/Vivus'


class App extends Component {
  render() {

    const loggedInUser = true      // Cámbialo!

    return (
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/about" render={() => <About year="2019" />} />
          <Route exact path="/profile" render={() =>
            loggedInUser ? <Profile /> : <Redirect to="/" />
          } />
          <Route exact path='/projects' component={Projects} />
          <Route exact path="/projects/:id" component={ProjectDetails} />

          <Route path="/query-strings-functional" component={QueryStringsFunctional} />
          <Route path="/query-strings-class" component={QueryStringsClass} />

          <Route path="/counter" component={Counter} />
          <Route path="/vivus" component={Vivus} />

        </Switch>

      </div>
    );
  }
}

export default App;