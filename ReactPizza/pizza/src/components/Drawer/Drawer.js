import React, { useContext } from 'react';
import { AppContext } from '../Card/Card';

function Drawer({ onClose, items = [], onRemovetoCart }) {
  // const { isAdded, setisAdded } = React.useContext({ AppContext });

  // const onRemoveisAdded = function (obj) {
  //   return obj.id;
  //   setisAdded(isAdded);
  // };

  return (
    <div className='overlay'>
      <div className='drawer'>
        <button onClick={onClose} className='crossButton'>
          gh
        </button>
        <h2>Cart Корзина</h2>
        {items.length > 0 ? (
          <>
            <div className='items'>
              {items.map((obj) => (
                <div key={obj.id} className='cartItem'>
                  <img src={obj.imgUrl} alt='dfghjk'></img>
                  <div className='cartBottom'>
                    <p>
                      Our price <b>{obj.price}</b>
                    </p>
                    <button onClick={() => onRemovetoCart(obj.id)}>f</button>
                  </div>
                </div>
              ))}
            </div>
            <div className='cartTotalBlock'>
              <ul>
                <li className=''>
                  <span>Sum</span>
                  <b>1200$</b>
                </li>
                <li>
                  <span>Tax</span>
                  <b>5%</b>
                </li>
              </ul>
              <button className='greenButton'>Click me</button>
            </div>
          </>
        ) : (
          <h5>Cart is empty</h5>
        )}
      </div>
    </div>
  );
}
export default Drawer;
