import React, { Fragment } from 'react'
import Search from '../users/Search';
import Users from '../users/Users';

export const Home = () => (
    // don't need return if we are just using these as fragments
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    );

export default Home;
