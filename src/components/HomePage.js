import React from 'react';
import '../styles/css/site.css'
import StasBar from './StatsBar';
import LatestReleases from './LatestReleases';
import SearchPage from './SearchPage';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTriggered: false,
        }
    }
    handleSearch = () => {
        this.setState({
            searchTriggered: true,
        });
    }

    render() {
        return (
            <div>
                <SearchPage searchTriggered={this.handleSearch} />
                {
                    !this.state.searchTriggered &&
                    (
                        <React.Fragment>
                            <StasBar />
                            <LatestReleases />
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}
export default HomePage;