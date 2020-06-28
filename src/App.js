import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import User from './components/users/User';
import './App.css';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  
  return (
    <GithubState>
      <AlertState>
        {/* // putting multiple components inside a route, use switch */}
        <Router>
            <div className='App'>
          {/* passing in title and icon as variables/parameters to the Navbar class */}
          {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
          <Navbar />
          <div className='container'>
            <Alert/>
            <Switch>
              <Route exact path ='/' component = { Home } />
              {/* use exact path because it's only one/simple component */}
              <Route exact path='/about' component = { About } />
              <Route exact path='/user/:login' component = { User } />
              <Route component = { NotFound } />
            </Switch>
          </div>
        </div>
        </Router>
      </AlertState>
    </GithubState>
  );


    // this is done through JS (no JSX) it's the same as above but doen without jsx
    // return React.createElement(
    //   'div', 
    //   { className: 'App' }, 
    //   React.createElement('h1', null, 'hello from react'))
}

export default App;
