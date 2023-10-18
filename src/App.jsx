/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/inicio" component={Home} />
        <Route path="/registro" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

