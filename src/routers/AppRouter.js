import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Footer from '../components/Footer';
import '../styles/css/site.css'
import { autoLogin } from '../actions/userActions';

class AppRouter extends React.Component {
  componentDidMount() {
    this.props.autoLogin()
  }
  render() {
    return (
      <BrowserRouter>
        <NavBar />
          <div className="main_content">
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/login" component={Login} exact={true} />
            </Switch>
          </div>
        <Footer />
      </BrowserRouter>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}
export default connect(null, mapDispatchToProps)(AppRouter);
