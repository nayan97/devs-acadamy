import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Featured from './Featured';
import Counter from './Counter';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <Counter></Counter>
           <Faq></Faq>
        </div>
    );
};

export default Home;