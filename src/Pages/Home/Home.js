import React from 'react';
import Advertised from '../Advertised/Advertised';
import Categories from '../Categories/Categories';
import Activities from './Activities/Activities'
import Banner1 from './Banner1';
import Banner from './Banner';
import About from '../About/About';

const Home = () => {
    return (
       <>
            <Banner></Banner>
            <Activities></Activities>
            <Advertised></Advertised>
           <Categories></Categories>
            <About></About>
       </>
    );
};

export default Home;