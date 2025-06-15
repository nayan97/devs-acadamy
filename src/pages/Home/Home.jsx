import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Featured from './Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <Faq></Faq>
        </div>
    );
};

export default Home;