import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import EmptyNav from './components/EmptyNav/EmptyNav'
// import logo from './logo.svg';
// import './App.css';

const App = () => (

  <Router>
    <div>
      <EmptyNav/>
      <Switch>
        <Route exact path="/home" component={LoginPage} />
      </Switch>

    </div>
  </Router>

)

export default App;
