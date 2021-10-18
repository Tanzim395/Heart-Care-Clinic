import React from 'react';
import Banner from '../Banner/Banner';
import Ticker from '../Ticker/Ticker';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Ticker></Ticker>
            <Services></Services>
        </div>
    );
};

export default Home;