import React from 'react'
import HomepageHead from './HomepageHead';
import HomepageMenuSlide from './HomepageMenuSlide';
import HomepageBanner from './HompageBanner';
import Products from './Products';
import HompageBanner2 from './HompageBanner2';


function Homepage(props) {
    return (
        <div className="container-fluid py-4 container-padding">
            <HomepageHead />
            <HomepageMenuSlide />
            <HomepageBanner />
            <Products enpont='products' />
            <HompageBanner2 />
        </div>

    )
}

export default Homepage

