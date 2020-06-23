import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/css/site.css'
import { autoLogin } from '../actions/loginActions';
import {history} from '../helpers/history'
import RegisterPage from '../components/RegisterPage';
import PackagePage from '../components/PackagePage';
import LoginPage from '../components/LoginPage';
import StatsPage from '../components/StatsPage';

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
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={RegisterPage} />
            <Route path="/project/:packageId" component={PackagePage} />
            <Route path="/stats" component={StatsPage} />
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
