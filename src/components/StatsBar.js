import React from 'react';
import { getStatistics } from '../repository';
import '../styles/css/site.css';

export class StasBar extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error: ''
        }
    }

    componentDidMount() {
        getStatistics()
            .then((data) => {
                this.setState({
                    loading: false,
                    projects: data.packages,
                    releases: data.releases,
                    users: data.users
                })
            }).catch(() => {
                this.setState({
                    loading: false,
                    error: 'Data not available'
                })
            });

    }
    render() {
        let content = <p>Loading</p>
        if (!this.state.loading) {
            content = (<div>
                <div className="stat">{this.state.projects} projects</div>
                <div className="stat">{this.state.releases} releases</div>
                <div className="stat">{this.state.users} users</div>
            </div>)
        }
        if (this.state.error) {
            content = <div className="stat">{this.state.error}</div>;
        }
        return (
            <div className="pypi-stats">
                {content}
            </div>
        )
    }

};

export default StasBar;
