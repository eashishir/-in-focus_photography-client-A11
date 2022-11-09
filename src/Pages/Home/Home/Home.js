import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Review></Review>
        </div>
    );
};

export default Home;