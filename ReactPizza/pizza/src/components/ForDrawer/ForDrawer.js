// import React, {useContext} from 'react';
// import styles from './ForDrawer.module.scss';
// import { AppContext } from '../../App';
// import {CloseSquareOutlined} from '@ant-design/icons';

// function ForDrawer() {

//   const { cartItems:items,onRemovetoCart} = useContext(AppContext);

//   return (
//     <div className={styles.overlay}>
//       <div className={styles.drawer}>
//         {/* <Link to="/">
//           <CloseCircleOutlined  className={styles.crossButton} style={{fontSize: '32px', color: '#839BB1'}} />
//         </Link> */}
       
//         {/* <h2>Cart Корзина</h2> */}
//         {items.length > 0 ? (
//           <>
//             <div className={styles.items}>
//               {items.map((obj) => (
//                 <div key={obj.id} className={styles.cartItem}>
//                   <img clasName={styles.cartImg} src={obj.imgUrl} alt='img'></img>
//                   <div className={styles.cartBottom}>
//                     <p>
//                       Our price <b>{obj.price}</b>
//                     </p>    
//                      <CloseSquareOutlined style={{fontSize: '16px',color:"red",justifySelf:"flex-end"} width={200}}onClick={() => onRemovetoCart(obj.id)}/>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className={styles.cartTotalBlock}>
//               <ul>
//                 <li className=''>
//                   <span>Sum</span>
//                   <b>1200$</b>
//                 </li>
//                 <li>
//                   <span>Tax</span>
//                   <b>5%</b>
//                 </li>
//               </ul>
  
//               <button className={styles.greenButton} >Click me</button>

//             </div>
//           </>
//         ) : (
//           <h5>Cart is empty</h5>
//         )}
//       </div>
//     </div>
//   );
// }
// export default ForDrawer;
