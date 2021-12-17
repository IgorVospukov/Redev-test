import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import axios from 'axios';
// import ReactDOM from 'react';
// import Card from '../components/Card/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import Main from './components/Main/Main';
import Home from './pages/Home';
// import Section from './components/Section';

const item = [
  {
    id: 1,
    title: 'planet Earth',
    price: '1000$',
    imgUrl: '/img/space/earth360.jpg',
  },
  {
    id: 2,
    title: 'planet Jupiter',
    price: '1000$',
    imgUrl: '/img/space/neven360.jpg',
  },
];

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://cors-anywhere.herokuapp.com/https://61a6473e8395690017be91e7.mockapi.io'
  //     )
  //     .then((res) => console.log(res.data));
  // }, []);

  const onAddtoCart = (obj) => {
    // axios.post(
    //   'https://cors-anywhere.herokuapp.com/https://61a6473e8395690017be91e7.mockapi.io'/cards,
    //   obj
    // );
    // setCartItems((prev) => [...prev, obj]);

    if (cartItems.some((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemovetoCart = (id) => {
    setCartItems((prev) => prev.filter((obj) => obj.id !== id));
  };
  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='App'>
      {cartOpened && (
        <Drawer
          items={cartItems}
          onRemovetoCart={onRemovetoCart}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path='/test' exact element={<Main />} />
        <Route
          path='/'
          exact
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeInput={onChangeInput}
              onAddtoCart={onAddtoCart}
              item={[...item]}
            />
          }
        />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default App;
