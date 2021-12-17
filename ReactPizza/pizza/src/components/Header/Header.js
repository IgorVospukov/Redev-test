import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Header({ onClickCart }) {
  useEffect(() => console.log('cartopened'));
  let url = useLocation();

  return (
    <header className='d-flex'>
      <div className='headerLeft'>
        <img width={40} height={60} src='/img/react.png' alt='' />
        <div className='headerInfo'>
          <h1>REACT GALAXY</h1>
          <p>Welcome to the Universe</p>
        </div>
      </div>
      <ul className='headerRight'>
        <li onClick={onClickCart}>
          <img width={20} height={20} src='/img/cart.png' alt='' />
        </li>
        <li>
          <Link to={`${url.pathname}/Ivanov`}>
            <img width={20} height={20} src='/img/man.png' alt='' />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
