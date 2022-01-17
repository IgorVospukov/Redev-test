import React, { useEffect,useState,useContext } from 'react';
import styles from './Header.module.scss';
import { ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import {Drawer} from 'antd'
import { AppContext } from '../../App';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
  const { cartItems:items=[],onRemovetoCart } = useContext(AppContext);
  const totalPrice = items.reduce((sum,obj)=>sum + parseInt(obj.price),0)
  
  useEffect(() => console.log('cartopened'));
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const logOut =()=>{
    localStorage.clear();
    navigate('/login');
  }

  return (
    <header id="anchor" className={styles.dFlex}>
      <div className={styles.headerLeft}>
        <img src={'/img/video-camera.png'} width={70} height={70} alt="log" />
      </div>
      <h1 className={styles.headerInfo}>React Movies</h1>
      <ul className={styles.headerRight}>
        <li onClick={showDrawer}>
          <ShoppingCartOutlined 
            style={{ fontSize: '32px', color: '#839BB1' }}
            onClick={showDrawer}
          />
        </li>
        <li>
          <LogoutOutlined onClick={logOut} style={{ fontSize: '32px', color: '#839BB1' }} />
        </li>
      </ul>
      <>
      <Drawer  title="My movies" placement="right" onClose={onClose} visible={visible} width={320} >
      {items.length > 0 ? (
          <>
            <div className={styles.items}>
              {items.map((obj) => (
                <div key={obj.id} className={styles.cartItem}>
                  <img className={styles.cartImg} src={obj.imgUrl} width={245} alt='img'></img>
                  <div className={styles.cartBottom}>
                    <p>
                      Our price <b>{obj.price}</b>
                    </p>    
                     <CloseOutlined style={{fontSize: '18px',color:"red",justifySelf:"flex-end", paddingRight:"7px"}} onClick={() => onRemovetoCart(obj.id)}/>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>          
              <button className={styles.greenButton}><span>Buy now {`${totalPrice}$`}</span></button>
            </div>
          </>
        ) : (<div className={styles.emptyCart}>
          <img src={'/img/delete.png'} width={70} alt="img"></img>
        </div>
        )}

      </Drawer>
      </>
    </header>
  );
}
export default Header;
