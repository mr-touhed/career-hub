import React from 'react';
import Header from '../Header';
import TopBanner from '../TopBanner/TopBanner';
import JobCatagorys from '../JobCatagorys';
import JobFeatured from '../JobFeatured';

const Home = () => {
    return (
        <div className='container'>
            <Header/>
    <TopBanner/>
    <JobCatagorys/>
     <JobFeatured/>
        </div>
    );
};

export default Home;