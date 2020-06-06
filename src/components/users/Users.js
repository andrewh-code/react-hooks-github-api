import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

// move the users to the top level component (App) so that other components can work with it (through props)
const Users = ({ users, loading }) => {
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

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
