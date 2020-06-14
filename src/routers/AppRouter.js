import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Footer from '../components/Footer';
import '../styles/css/site.css'
import { autoLogin } from '../actions/loginActions';
import {history} from '../helpers/history'
import Register from '../components/Register';

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.autoLogin()
  }
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <div className="main_content">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />
          </Switch>
        </div>
        <Footer />
      </Router>

    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}
export default connect(null, mapDispatchToProps)(AppRouter);
