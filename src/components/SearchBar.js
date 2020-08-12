import React from 'react';
import '../styles/css/site.css'

import 'bootstrap/dist/css/bootstrap.min.css';
/*
    This component will navigate to the 'search' router with the search query string
*/
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSearch(this.state.query)
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value })
    }

    render() {
        return (
            <div className="hero">
                <form onSubmit={this.handleSubmit} className="account-form">
                    <div className="hero-inner">
                        <h1>Find, install and publish Python packages with the Python Package Index </h1>
                        <input type="text" value={this.state.query} onChange={this.handleChange}
                            placeholder=" Search projects" className="form-control" />

                    </div>
                </form>
        or <a href="/">browse projects</a>
            </div>
        )
    }
}

export default SearchBar;
