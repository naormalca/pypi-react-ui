import React from 'react';
import SearchProjectsForm from './SearchProjectsForm';
import '../styles/css/site.css'
import StasBar from './StatsBar';
import LatestReleases from './LatestReleases';

const Home = () => (
    <div>
        <SearchProjectsForm />
        <StasBar />
        <LatestReleases />
    </div>
);

export default Home;