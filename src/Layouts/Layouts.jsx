import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import Spiner from '../components/Spiner';

const Layouts = () => {
      const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      <div className="bg-base-200">
       <div className="w-full md:w-3xl lg:w-7xl mx-auto p-8 pt-0">
           {navigation.state === 'loading' && <Spiner></Spiner>}
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
