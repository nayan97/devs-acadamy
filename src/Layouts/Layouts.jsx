import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';


const Layouts = () => {
    return (
        <div>
            <Header></Header>
                <div className="bg-base-200">
                    <div className="w-xl md:w-3xl lg:w-7xl mx-auto p-8 pt-0">
                        <Outlet></Outlet>
                    </div>
                </div>
            <Footer></Footer>

        </div>
    );
};

export default Layouts;