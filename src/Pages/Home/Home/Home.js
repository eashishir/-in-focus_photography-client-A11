import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Service from '../Services/Service';

const Home = () => {
    useTitle('Home');
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