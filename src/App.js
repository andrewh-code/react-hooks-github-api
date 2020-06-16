import React, { Fragment, useState } from 'react';
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
import GithubState from './context/github/GithubState';

const App = () => {

  // create state by using useState
  const [ users, setUsers ] = useState([]); // default, empty array
  const [ user, setUser ] = useState({});
  const [ repos, setRepos ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ alert, setAlert ] = useState(null);

  // search for github users
  const searchUsers = async text => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  };

  // GET a specific github user
  const getUser = async username => {
    setLoading(true);
    const res = await axios
    .get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // after executing the GET request, set the state variable (user) to the res object
    setUser(res.data);
    setLoading(false);
  };

  // get repos for user
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios
    .get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    // after executing the GET request, set the state variable (user) to the res object
    setRepos(res.data);
    setLoading(false);
  };
  
  // clear users (from the state)
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  
  // set alert for if search is blank
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    // shwo the alert after a given amount of time (5 seconds)
    setTimeout( () => setAlert(null), 5000);
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
  return (
    <GithubState>

    
    {/* // putting multiple components inside a route, use switch */}
    <Router>
        <div className='App'>
      {/* passing in title and icon as variables/parameters to the Navbar class */}
      {/* <Navbar title='Github Finder' icon='fab fa-github'/> */}
      <Navbar />
      <div className='container'>
        <Alert alert = { alert }/>
        <Switch>
          <Route exact path ='/' render = { props => (
            <Fragment>
              <Search searchUsers = { searchUsers } 
                clearUsers = { clearUsers } 
                showClear = { users.length > 0 ? true : false } 
                setAlert = { showAlert }
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
          getUser = { getUser }
          getUserRepos = { getUserRepos }
          user = { user } 
          repos = { repos }
          loading = { loading }/>
        )} />
        </Switch>
      </div>
    </div>
    </Router>
    </GithubState>
  );


    // this is done through JS (no JSX) it's the same as above but doen without jsx
    // return React.createElement(
    //   'div', 
    //   { className: 'App' }, 
    //   React.createElement('h1', null, 'hello from react'))
}

export default App;
