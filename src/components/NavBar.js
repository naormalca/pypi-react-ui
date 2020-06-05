import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import '../styles/css/nav.css'
import logo from '../assets/img/pypi-logo.svg'

const NavBar = (props) => (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse navbar-expand-md">
        <a className="navbar-brand" href="/"><img src={logo} alt="logo" /></a>

        <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <div className="navbar-toggler-icon">
                <div className="nav-expand-line"></div>
                <div className="nav-expand-line"></div>
                <div className="nav-expand-line"></div>
            </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink to="/stats" className="nav-link">Statistics</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="#" className="nav-link">Help</NavLink>
                </li>
                {
                    props.userReducer.loggedIn ? (
                        <React.Fragment>
                            <li className="nav-item">
                                <NavLink to="/account" className="nav-link">Account</NavLink>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/account/logout" id="last_nav_link">Logout</a></li>
                        </React.Fragment>
                    ) :
                        (<React.Fragment>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" >Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link" id="last_nav_link">Register</NavLink>
                            </li>
                        </React.Fragment>
                        )
                }

            </ul>
        </div>
    </nav>
);
const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
};

export default connect(mapStateToProps)(NavBar);