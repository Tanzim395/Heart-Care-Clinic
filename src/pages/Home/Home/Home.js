import React from 'react';
import Banner from '../Banner/Banner';
import Ticker from '../Ticker/Ticker';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Ticker></Ticker>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;