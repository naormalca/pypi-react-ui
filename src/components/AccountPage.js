import React from 'react';
import { getUsers } from '../repository'
import '../styles/css/site.css'

export class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.match.params.userId,
            userData: '',
            loading: true,
            error: '',
        }
    }

    componentDidMount() {
        this._getData(this.state.userId);
    }
    static getDerivedStateFromProps(props, state) {
        // Store prevId in state so we can compare when props change.
        // Clear out previously-loaded data (so we don't render stale stuff).
        console.log(props.match.params.userId, state.userId)
        if (props.match.params.userId !== state.userId) {
          return {
            userData: null,
            loading: true,
            userId: props.match.params.userId,
          };
        }
        // No state update necessary
        return null;
      }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.userData === null) {
          this._getData(this.state.userId);
        }
    }
    _getData(userId) {
        let userParams = {
            'id': userId,
        }
        getUsers(userParams)
            .then((res) => {
                this.setState({
                    loading: false,
                    userData: res.data
                })
            }).catch(() => {
                this.setState({
                    loading: false,
                    error: 'Data not available'
                })
            });
    }

    dateFormat = (dateISO8610) => {
        return new Date(dateISO8610).toLocaleString();
    }
    render() {
        return (
            <React.Fragment>
                {
                    !this.state.loading &&
                    <div className="container">
                        <h1>{this.state.userData.name}</h1>
                        <h3><b>Email:</b> {this.state.userData.email}</h3>

                        <h3><b>Last Seen: </b>{this.dateFormat(this.state.userData.last_login)}</h3>

                    </div>
                }
            </React.Fragment>
        )
    }

};

export default AccountPage;
