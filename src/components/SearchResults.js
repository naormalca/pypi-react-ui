import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/site.css';


const SearchResults = (props) => {
    const hasResults = props.results.data.packages ? true : false;
    return (
        <div className="container project-list">
            <div className="row">
                {
                    hasResults &&
                    JSON.parse(props.results.data.packages).map((pack) => {
                        return <SearchResult key={pack.id} package={pack} />
                    })

                }
                {
                    !hasResults &&
                    <React.Fragment>
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="project">
                                <div className="title">
                                    Packages not found!
                        </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div>
    );
}

const SearchResult = (props) => (
    <React.Fragment>
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <div className="project">
                <div className="title">
                    <Link to={`/project/${props.package.id}`}>{props.package.id}</Link>
                    <div className="desc">{props.package.summary}</div>
                </div>
            </div>
        </div>
        <div className="col-md-3"></div>
    </React.Fragment>
)

export default SearchResults;