import styles from './Card.module.scss';
import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../App';

function Card({ id, title, price, imgUrl, onPlus }) {
  const { isItemAdded } = useContext(AppContext);
  const onClickPlus = () => {
    onPlus({ id, title, price, imgUrl });
  };

  useEffect(() => console.log('changed'));
  
  return (
    <div className={styles.card}>
      <img className={styles.cartImg} src={imgUrl} alt='img' />
      <div className={styles.cartBottom}>
        <h5>{title}</h5>
        <div className={styles.forPrice}>
          <span>
            Our price is <b>{price}</b>
          </span>
          <button onClick={onClickPlus}>
            <img
              width={22}
              height={22}
              src={isItemAdded(id) ? '/img/done.png' : '/img/plus.png'}
              alt='img'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
