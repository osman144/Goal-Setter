import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import EmptyNav from './components/EmptyNav/EmptyNav'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
     <div>
       <EmptyNav/>
       <LoginPage/>
     </div>
    );
  }
}

export default App;
