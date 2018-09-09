import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import EmptyNav from './components/EmptyNav/EmptyNav';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import HomePage from './pages/HomePage/HomePage';
// import logo from './logo.svg';
// import './App.css';

const App = () => (

  <Router>
    <div>
      <EmptyNav/>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage}/>
        <Route exact path="/home" component={HomePage}/>

      </Switch>

    </div>
  </Router>

)

export default App;
