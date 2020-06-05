import React from 'react';
import '../styles/css/site.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const SearchProjectsForm = () => (
    <div className="hero">
        <form action="search" method="GET" className="account-form">
            <div className="hero-inner">
                <h1>Find, install and publish Python packages with the Python Package Index </h1>
                <input type="text" placeholder=" Search projects" className="form-control" id="query" name="query" />
                <input type="submit" style={{ width: '0px', height: '0px', opacity: '0' }} />
            </div>
        </form>
        or <a href="#">browse projects</a>
    </div>
);

export default SearchProjectsForm;