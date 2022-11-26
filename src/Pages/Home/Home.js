import React from 'react';
import Advertised from '../Advertised/Advertised';
import Categories from '../Categories/Categories';
import Activities from './Activities/Activities'
import Banner from './Banner';

const Home = () => {
    return (
       <>
            <Banner></Banner>
            <Activities></Activities>
           <Categories></Categories>
         
       </>
    );
};

export default Home;