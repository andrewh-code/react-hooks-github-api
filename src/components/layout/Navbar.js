import React, { Component } from 'react'
// type checking
import PropTypes from 'prop-types'


export class Navbar extends Component {
    // default variable values if parameters not passed in 
    static defaultProps = {
        title: 'Default Github Finder Title',
        icon: 'fab fa-github'
    };
    // have to explicity set the type here I'm assuming? Similar to declaring hte variables
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className='navbar bg-primary'>
                <h1>
                    {/* font awesome icon */}
                    <i className={this.props.icon} /> { this.props.title }
                </h1>
            </div>
        )
    }
}

export default Navbar