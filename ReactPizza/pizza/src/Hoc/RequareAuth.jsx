import React from 'react';
import { Navigate } from "react-router-dom";
import Layout from '../components/Layout/Layout';

const RequareAuth = ({children}) => {
  const auth=localStorage.getItem("eMail");
  console.log(auth);
   if(!auth){
    return <Navigate to="/login"/>
  }
    return (
      <Layout/>
    );
  
};

export default RequareAuth;