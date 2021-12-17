import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
const Main = () => {
  let url = useLocation();
  return (
    <div>
      <h1>
        <Link to={`${url.pathname}/Ivanov`}>Ivanov</Link>
      </h1>
    </div>
  );
};

export default Main;
