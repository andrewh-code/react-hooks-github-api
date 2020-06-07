// import React, { Component } from 'react'
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// class UserItem extends Component {

//     // can use a constructor for state but in front end, not necessary or not advised?
//     // cna put the state in the constructor but not necessary (similar to defining attributes of a class)
//     // state = {
//     //     id: 'id',
//     //     login: 'mojombo',
//     //     avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
//     //     html_url: 'https://github.com/mojombo'
//     // }

//     render() {
//         // by setting this line, we don't have to refer to this.state.login, etc
//         const { login, avatar_url, html_url } = this.props.user;
//         return (
            
//             <div className="card text-center">
//                 {/* can use typical CSS to style the component but remember this is in JSX so it's a bit different */}
//                 <img src = {avatar_url} 
//                         alt="" 
//                         className="round-img" 
//                         style={{ width: '60px'}}/>
//                 <h3>{login}</h3>
//                 <div>
//                     <a href = {html_url} className = "btn btn-dark btn-sm my-1">More</a>
//                 </div>
//             </div>
//         )
//     }
// }


// refactor to functional
// instead of setting variables to the props arguments, can set it in as an argument
// to the function
const UserItem = ({ user: { login, avatar_url, html_url }}) => {
    // since we use function, don't need a render(), just need return
    // const { login, avatar_url, html_url } = props.user;

    return (
        
        <div className="card text-center">
            {/* can use typical CSS to style the component but remember this is in JSX so it's a bit different */}
            <img src = { avatar_url } 
                    alt="" 
                    className="round-img" 
                    style={{ width: '60px'}}/>
            <h3>{ login }</h3>
            <div>
                {/* <a href = { html_url } className = "btn btn-dark btn-sm my-1">
                    More
                </a> */}
                <Link to = { `/user/${login}` } className = 'btn btn-dark btn-sm my-1'>
                    More
                </Link>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};


export default UserItem