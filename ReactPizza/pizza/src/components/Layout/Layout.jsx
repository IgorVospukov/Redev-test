import React from 'react';
// import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../../pages/Home';



 const Layout = () => {
   
  return (
    < >
     <Header/>
     <Home/>
     {/* <Outlet/> */}
    </>
  );
};

export default Layout;