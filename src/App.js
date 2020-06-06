import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    users: [],
    loading: false
  }
  // another lifecycle method
  async componentDidMount(){

    this.setState({ loading: true });

    // runs after the component output has been rednered to the DOM (good place to set up a timer)
    // axios uses promises so we can use then()
    // axios
    //   .get('https://api.github.com/users')
    //   .then(res => console.log(res.data));

    // instead of using promises, can use async like below (comonentDidMount has to be set as async though)
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        {/* passing in title and icon as variables/parameters to the Navbar class */}
        {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
        <Navbar />
        <div className='container'>
          <Users loading = { this.state.loading } users = { this.state.users }/>
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
