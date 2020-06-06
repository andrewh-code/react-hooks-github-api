// import React, { Component } from 'react'
import React from 'react';
// type checking
import PropTypes from 'prop-types';


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