import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* passing in title and icon as variables/parameters to the Navbar class */}
        {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    
    );


    // this is done through JS (no JSX) it's the same as above but doen without jsx
    // return React.createElement(
    //   'div', 
    //   { className: 'App' }, 
    //   React.createElement('h1', null, 'hello from react'))
  }
}

export default App;
