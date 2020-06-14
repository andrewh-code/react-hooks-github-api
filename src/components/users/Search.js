import React, { useState } from 'react';
import PropTypes from 'prop-types';

// deconstruct the props variable by passing them in as arguments to the functional component
const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

    // replace the this.state() with this
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    };

    // convert to a function within a function (use the const keyword)
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter something', 'light');
        } else {
            searchUsers(text);
            setText('');
        }
    };

    // render() does not exist in function componentes, only in classes
    
    // for functional component we do not need this anymopre
    // const { showClear, clearUsers } = this.props;
    return (
        <div>
            <form onSubmit = { onSubmit } className="form">
                <input 
                    type="text" 
                    name="text" 
                    placeholder="search..." 
                    value = { text }
                    onChange= { onChange }/>

                <input type="submit" 
                        value="search" className = "btn btn-dark btn-block"/>
            </form>
            { showClear && (
                <button 
                    className = "btn btn-light btn-block" 
                    onClick = { clearUsers }
                >
                    Clear
                </button>
            )}
        </div>
    );

}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;