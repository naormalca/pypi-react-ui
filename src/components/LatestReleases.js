import React from 'react';
import { Link } from 'react-router-dom';
import { getLatestReleases } from '../repository'
import '../styles/css/site.css'

const ReleaseItem = ({ version, package: { summary, id: package_id } }) => (
    <div className="project">
        <div className="title">
            <Link to={`/project/${package_id}`}>{package_id} {version}</Link>
            <div className="desc">{summary}</div>
        </div>
    </div>
)

export class LatestReleases extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            error: ''
        }
    }

    componentDidMount() {
        getLatestReleases(5)
            .then((data) => {
                this.setState({
                    loading: false,
                    releases: data
                })
            }).catch(() => {
                this.setState({
                    loading: true,
                    error: 'Data not available'
                })
            });

    }
    render() {
        return (
            <div className="container project-list">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>New releases</h2>
                        <div className="subtitle">
                            Hot off the press: the newest project releases
                    </div>
                        {
                            this.state.loading ? (<p>loading</p>)
                                : (
                                    this.state.releases.map((rls) => {
                                        return <ReleaseItem key={rls.id} {...rls} />
                                    })
                                )

                        }

                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        )
    }

};

export default LatestReleases;
