import React, { useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import "antd/dist/antd.css";
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import RequareAuth from './Hoc/RequareAuth';


export const AppContext = React.createContext({});

const item = [
  {
    id: 1,
    title: 'Игра судьбы',
    price: '1000$',
    imgUrl: '/img/1.jfif',
  },
  {
    id: 2,
    title: 'Турист',
    price: '1000$',
    imgUrl: '/img/2.jfif',
  },
  {
    id: 3,
    title: 'Летчик',
    price: '1000$',
    imgUrl: '/img/3.jfif',
  },
  {
    id: 4,
    title: 'Взаперти',
    price: '1000$',
    imgUrl: '/img/4.jfif',
  },
  {
    id: 5,
    title: 'Гарри Поттер',
    price: '1000$',
    imgUrl: '/img/5.jfif',
  },
  {
    id: 6,
    title: 'Декстер',
    price: '1000$',
    imgUrl: '/img/6.jfif',
  },
  {
    id: 7,
    title: 'Лекарь',
    price: '1000$',
    imgUrl: '/img/7.jfif',
  },
  {
    id: 8,
    title: 'Голодные игры',
    price: '1000$',
    imgUrl: '/img/8.jfif',
  },
  {
    id: 9,
    title: 'Шершни',
    price: '1000$',
    imgUrl: '/img/9.jfif',
  },
  {
    id: 10,
    title: 'Пришельцы из прошлого',
    price: '1000$',
    imgUrl: '/img/10.jfif',
  },
  {
    id: 11,
    title: 'Игра престолов',
    price: '1000$',
    imgUrl: '/img/11.jfif',
  },
  {
    id: 12,
    title: 'Мейр из Исттауна',
    price: '1000$',
    imgUrl: '/img/12.jfif',
  },

];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  
  const onAddtoCart = (obj) => {
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.id === id);
  };

  return (
    <AppContext.Provider value={{ cartItems, setCartItems, isItemAdded, searchValue,setSearchValue,onChangeInput,onAddtoCart,item,onRemovetoCart }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<RequareAuth><Layout/></RequareAuth>}/>
          <Route path="/login" element={<Login/>}/>           
          <Route path="*" element={"not found"} />
          <Route/>
        </Routes>   
      </div>
    </AppContext.Provider>
  );
}

export default App;
