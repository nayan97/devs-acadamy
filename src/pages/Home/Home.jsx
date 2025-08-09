import React from 'react';
import Banner from './Banner';
import Faq from './Faq';
import Featured from './Featured';
import Counter from './Counter';
import Mentors from './Mentors';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Featured></Featured>
           <Mentors></Mentors>
           <Counter></Counter>
           <Faq></Faq>
        </div>
    );
};

export default Home;