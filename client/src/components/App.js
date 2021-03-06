import React, { Component } from 'react';
import Contact from './components/Contact';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/mailer" component={Mailer} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default App;