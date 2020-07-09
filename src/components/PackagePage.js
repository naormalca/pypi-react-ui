import React from 'react';
import { getPackageDetails } from '../repository'
import '../styles/css/package.css'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const { package: pkg, latest_release } = props.packageDetails;
    const dateFormat = (date) => {
        return date.split('T')[0];
    }
    return (
        <div className="hero">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-8">
                    <h1>
                        {pkg.id} {latest_release.version}
                    </h1>

                    <div className="install sub-hero">
                        pip install {pkg.id}
                    </div>
                </div>

                <div className="col-sm-2 active-release">
                    <div className="go-latest-button">
                        Latest version
                </div>
                    <div className="go-older-button">
                        <Link to={`/project/${pkg.id}`}>
                            Newer version available
                        </Link>
                    </div>
                    <div className="latest-release-date">
                        Last release: 
                        <span> 
                        {
                            dateFormat(pkg.created_date)
                        }
                        </span>
                            
                            </div>
                </div>
            </div>

        </div>
    )
}

const SummaryBar = (props) => (
    <div className="row pypi-stats">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
            {props.summary}
        </div>
    </div>
)

const NavigationBar = (props) => (
    <div className="col-sm-3 nav-sidebar-section">
        <h3>Navigation</h3>
        <Link to={`/project/${props.package.id}`}>
            <i className="fa fa-align-left" aria-hidden="true"></i>
            Project description
        </Link>
        <Link to="#">
            <i className="fa fa-history" aria-hidden="true"></i>
                Release history
        </Link>
        <Link to="#">
                <i className="fa fa-download" aria-hidden="true"></i>
            Download files
        </Link>
        <hr></hr>


        <h3>Project links</h3>
        <a href={props.package.home_page}>
            <i className="fa fa-home" aria-hidden="true"></i>
        Homepage
    </a>
        <hr></hr>


        <h3>Statistics</h3>

        <p>View statistics for this project via  
        <a className="link-inline" href={`https://libraries.io/pypi/${props.package.id}`}>Libraries.io</a>,
        or by using
        <a className="link-inline"
                href="https://packaging.python.org/guides/analyzing-pypi-package-downloads/">Google
            BigQuery</a></p>
        <hr></hr>


        <h3>Meta</h3>
        {
            props.package.license &&
            <div className="meta-topic">
                <span>License</span>: {props.package.license}
            </div>
        }
        {
            props.package.author_name &&
            <div className="meta-topic">
                <span>Author</span>:{props.package.author_name}
            </div>
        }
        <hr></hr>


        <h3>Maintainers</h3>
        {
            //     {% for m in maintainers %}
            //     <div className="maintainer">
            //         <img src="{{ m.profile_image_url }}" alt="">
            //         <a href="#">{{ m.name }}</a>
            //     </div>
            // {% endfor %}
        }
        <hr></hr>
        <h3>License</h3>
        <div className="license">
            {props.package.license}
        </div>

    </div>
)

const Description = (props) => (
    <React.Fragment>
        <div className="col-sm-7">
            <h2>Project description</h2>
            <pre>{props.package.description}</pre>

        </div>
        <div className="col-sm-1"></div>
    </React.Fragment>
)
class PackagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            packageId: this.props.match.params.packageId,
            loading: true,
            packageDetails: {}
        }
    }
    componentDidMount() {
        getPackageDetails(this.state.packageId)
            .then((res) => {
                if (res.status === 200) {
                    this.setState({
                        loading: false,
                        packageDetails: res.data
                    })
                } else {
                    this.setState({
                        loading: false,
                        error: res.data.error
                    })
                }
            })

    }
    render() {
        return (
            <div className="content details">
            <div className="container">
                <h1>{this.state.error}</h1>    
            </div>    
                {
                    !this.state.loading && !this.state.error &&
                    <React.Fragment>
                        <Header packageDetails={this.state.packageDetails} />
                        <SummaryBar summary={this.state.packageDetails.package.summary} />
                        <div className="project-list container"> 
                            <div className="row">
                                <NavigationBar package={this.state.packageDetails.package} />
                                <Description package={this.state.packageDetails.package} />
                            </div>
                        </div>
                    </React.Fragment>
                }

            </div>
        )
    }

}

export default PackagePage;