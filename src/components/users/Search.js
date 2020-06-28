import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

// deconstruct the props variable by passing them in as arguments to the functional component
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    // replace the this.state() with this
    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    };

    // convert to a function within a function (use the const keyword)
    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        } else {
            githubContext.searchUsers(text);
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
            { githubContext.users.length > 0 && (
                <button 
                    className = "btn btn-light btn-block" 
                    onClick = { githubContext.clearUsers }
                >
                    Clear
                </button>
            )}
        </div>
    );

}


export default Search;