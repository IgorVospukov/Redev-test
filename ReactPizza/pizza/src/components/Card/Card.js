import styles from './Card.module.scss';
import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext({});

function Card({ id, title, price, imgUrl, onPlus }) {
  const [isAdded, setisAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ id, title, price, imgUrl });
    setisAdded(!isAdded);
  };
  useEffect(() => console.log('changed'), [isAdded]);
  return (
    <AppContext.Provider value={(isAdded, setisAdded)}>
      <div className={styles.card}>
        <img src={imgUrl} alt='' />
        <div className='cardBottom'>
          <h5>{title}</h5>
          <div className='forPrice'>
            <span>
              Our price is <b>{price}</b>
            </span>
            <button className='button' onClick={onClickPlus}>
              <img
                width={11}
                height={11}
                src={isAdded ? '/img/done.png' : '/img/plus.png'}
                alt=''
              />
            </button>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
export default Card;
