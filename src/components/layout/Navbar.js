// import React, { Component } from 'react'
import React from 'react';
// type checking
import PropTypes from 'prop-types';
// use curly braces because this is not the default export
import { Link } from 'react-router-dom';


// export class Navbar extends Component {
//     // default variable values if parameters not passed in 
//     static defaultProps = {
//         title: 'Default Github Finder Title',
//         icon: 'fab fa-github'
//     };
//     // have to explicity set the type here I'm assuming? Similar to declaring hte variables
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired
//     };

//     render() {
//         return (
//             <div className='navbar bg-primary'>
//                 <h1>
//                     {/* font awesome icon */}
//                     <i className={this.props.icon} /> { this.props.title }
//                 </h1>
//             </div>
//         )
//     }
// }

// refeactor to use function and hooks
const Navbar = ({ icon, title }) => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                {/* font awesome icon */}
                <i className={icon} /> { title }
            </h1>
            <ul>
                {/* want to use Link to instead of the anchor tag because by using the anchor tag, you refresh the page
                when you go back home and the search results are wiped from the App.js's state which you don't want
                in this situation */}
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

 // default variable values if parameters not passed in 
Navbar.defaultProps = {
    title: 'Default Github Finder Title',
    icon: 'fab fa-github'
};
// have to explicity set the type here I'm assuming? Similar to declaring hte variables
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar