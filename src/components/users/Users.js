import React, { useContext } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

// move the users to the top level component (App) so that other components can work with it (through props)
const Users = () => {
    // now be able to use anything inside githubcontext
    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if (loading){
        return (
            <Spinner />
        )
    } else {
        return (
            // referenceing an actual variable in react that contains css so don't need {{}}
            <div style={userStyle}>
                {/* looop through the list of users */}
                {users.map(user =>(
                    <UserItem key={user.id} user={user}/>
                    ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
