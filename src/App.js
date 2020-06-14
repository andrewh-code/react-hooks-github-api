import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import User from './components/users/User';
import './App.css';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

class App extends Component {
  
  state = {
    users: [],
    user: {},
    loading: false, 
    alert: null,
    repos: []
  }
  // another lifecycle method
  // async componentDidMount(){

  //   this.setState({ loading: true });

  //   // runs after the component output has been rednered to the DOM (good place to set up a timer)
  //   // axios uses promises so we can use then()
  //   // axios
  //   //   .get('https://api.github.com/users')
  //   //   .then(res => console.log(res.data));

  //   // instead of using promises, can use async like below (comonentDidMount has to be set as async though)
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({ users: res.data, loading: false });
  // }

  // search for github users
  searchUsers = async text => {
    this.setState( { loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({ users: res.data.items, loading: false });
  };

  // GET a specific github user
  getUser = async username => {
    this.setState( { loading: true } );
    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // after executing the GET request, set the state variable (user) to the res object
    this.setState({ user: res.data, loading: false });
  };

  // get repos for user
  getUserRepos = async username => {
    this.setState({ loading: true })

    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // after executing the GET request, set the state variable (user) to the res object
    this.setState({ repos: res.data, loading: false });
  }
  
  // clear users (from the state)
  clearUsers = () => {
    this.setState({
      users: [], 
      loading: false
    })
  };
  
  // set alert for if search is blank
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    // shwo the alert after a given amount of time (5 seconds)
    setTimeout( () => this.setState( { alert: null }), 3000)
  };

  // design before adding in routing
  // render() {
  //   const { users, loading } = this.state;
  //   return (
  //     // putting multiple components inside a route, use switch
  //     <Router>
  //         <div className='App'>
  //       {/* passing in title and icon as variables/parameters to the Navbar class */}
  //       {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
  //       <Navbar />
  //       <div className='container'>
  //         <Alert alert = { this.state.alert }/>
  //         <Switch>
  //           <Route exact path ='/' render = { props => (
  //             <Fragment>
  //               <Search searchUsers = { this.searchUsers } 
  //                 clearUsers = { this.clearUsers } 
  //                 showClear = { users.length > 0 ? true : false } 
  //                 setAlert = { this.setAlert }
  //                 />
  //         <Users loading = { loading } users = { users }/>
  //             </Fragment>
  //           )} />
  //         </Switch>
  //       </div>
  //     </div>
  //     </Router>
  //   );

  render() {
    const { users, user, repos, loading } = this.state;
    return (
      // putting multiple components inside a route, use switch
      <Router>
          <div className='App'>
        {/* passing in title and icon as variables/parameters to the Navbar class */}
        {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
        <Navbar />
        <div className='container'>
          <Alert alert = { this.state.alert }/>
          <Switch>
            <Route exact path ='/' render = { props => (
              <Fragment>
                <Search searchUsers = { this.searchUsers } 
                  clearUsers = { this.clearUsers } 
                  showClear = { users.length > 0 ? true : false } 
                  setAlert = { this.setAlert }
                  />
                <Users loading = { loading } users = { users }/>
              </Fragment>
            )} 
          />
          {/* use exact path because it's only one/simple component */}
          <Route exact path='/about' component = { About } />
          <Route exact path='/user/:login' render = { props => (
            <User 
            { ...props } 
            getUser = { this.getUser }
            getUserRepos = { this.getUserRepos }
            user = { user } 
            repos = { repos }
            loading = { loading }/>
          )} />
          </Switch>
        </div>
      </div>
      </Router>
    );


    // this is done through JS (no JSX) it's the same as above but doen without jsx
    // return React.createElement(
    //   'div', 
    //   { className: 'App' }, 
    //   React.createElement('h1', null, 'hello from react'))
  }
}

export default App;
