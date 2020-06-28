import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    // replace componentDidMount() to use useEffect functional component
    // when you make this change initially, you will notice in chrome that it will continue to execute
    // it will run on ANY update. Everytime getUser() and getUserRepos() are run, it will autoamatically update
    // to prevent it, put it empty square brackets [] to only run once
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // will get an error lik ebelow:
        // React Hook useEffect has missing dependencies: 'getUser', 'getUserRepos', and 'match.params.login'. Either include them or remove the dependency array. If 'getUser' changes too often, find the parent component that defines it and wrap that definition in useCallback  react-hooks/exhaustive-deps
        // whens eomthing chagnes in useEffect, it wants you to put it as a dependency in the square brackets. However in our case
        // we only want them to run ONCE hence the empty brackets. If we put that in, we will get the infinite loop
        // use this comment to disregard comment:
            // eslint-disable-next-line
    }, []);

    

    // componentDidMount() {
    //     this.props.getUser(match.params.login);
    //     this.props.getUserRepos(match.params.login);
    // }

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company
    } = user;
    
    if (loading) {
        return <Spinner/>;
    }

    return (
        <Fragment>
            <Link to = '/' className = 'btn btn-light'>
                Back To Search
            </Link>
            Hireable: { ' ' }
            { hireable ? <i className = "fas fa-check text-success" /> : <i className = "fas fa-times-circle text-danger" /> }
            <div className = "card grid-2">
                <div className = "all-center">
                    <img 
                        src = { avatar_url } 
                        className = "round-img" 
                        alt = "" 
                        style = {{ width: '150px' }} />
                
                    <h1>{ name }</h1>
                    <p>Location: { location } </p>
                </div>
                    <div>
                        { bio && (
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{ bio }</p>
                        </Fragment> 
                        )}
                        <a href = { html_url } className = "btn btn-dark my-1">Visit my GitHub profile</a>
                        <ul>
                            <li>
                                { login && 
                                <Fragment>
                                    <strong>Username: </strong> { login }
                                </Fragment>}
                            </li>
                            <li>
                                { company && 
                                <Fragment>
                                    <strong>company: </strong> { company }
                                </Fragment>}
                            </li>
                            <li>
                                { blog && 
                                <Fragment>
                                    <strong>Website: </strong> { blog }
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                {/* // badges */}
                <div className = "card text-center">
                    <div className = "badge badge-primary">Followers: { followers }</div>
                    <div className = "badge badge-success">Following: { following }</div>
                    <div className = "badge badge-light">Public Repos: { public_repos }</div>
                    <div className = "badge badge-dark">Public Gists: { public_gists }</div>
                </div>

                <Repos repos = { repos } />
        </Fragment>
    );
}

export default User
