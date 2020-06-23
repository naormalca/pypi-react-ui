import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../repository'

const Header = () => (
    <div className="pypi-stats">
        <div className="stat">
            <h2>Statistics</h2></div>
    </div>

)
class StatsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error: '',
            latest_logged: [],
            new_users: [],
        }
    }

    componentDidMount() {
        let latestUsersParams = {
            'order': 'logged_at',
            'limit': 10
        }
        let newUsersParams = {
            'order': 'created_at',
            'limit': 10
        }
        Promise.all([getUsers(latestUsersParams), getUsers(newUsersParams)])
            .then(([res1, res2]) => {
                if (res1.status === 200 && res2.status === 200) {
                    this.setState({
                        loading: false,
                        latest_logged: res1.data,
                        new_users: res2.data
                    })
                }
                else {
                    this.setState({
                        loading: false,
                        error: 'Data not available'
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                this.setState({
                    loading: false,
                    error: 'Data not available'
                })
            });
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container project-list">
                    {
                        this.state.error && <p>{this.state.error}</p>
                    }
                    {
                        this.state.loading ? (<p>Loading data</p>) :
                            <div className="row">
                                <div className="col-md-3">
                                    <h2>New Users</h2>
                                    {
                                        this.state.new_users &&
                                        (this.state.new_users.map((user) => {
                                            return (
                                                <div className="subtitle" key={user.id}>
                                                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                                                </div>
                                            )
                                        })
                                        )
                                    }
                                </div>
                                <div className="col-md-3">
                                    <h2>Latest Users Logged</h2>
                                    {
                                        this.state.latest_logged &&
                                        this.state.latest_logged.map((user) => {
                                            return (
                                                <div className="subtitle" key={user.id}>
                                                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                    }
                </div>
            </React.Fragment>
        )
    };
}
export default StatsPage;