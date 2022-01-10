import React,{useContext} from 'react';
import Card from '../components/Card/Card';
import styles from './Home.module.scss';
import { AppContext } from '../App';
  // searchValue,
  // setSearchValue,
  // onChangeInput,
  // onAddtoCart,
  // item,
function Home() {
  const { searchValue,setSearchValue,onChangeInput,onAddtoCart,item} = useContext(AppContext);

  
  return (
    <section className={styles.main}>
      <div className={styles.searchBlockFlex}>
        <h1 className={styles.nameCard}>{searchValue ? '' : 'Movies'}</h1>
        <div className={styles.searchBlock}>
          <img
            width={18}
            height={18}
            src="/img/cancel.png"
            alt="seek"
            onClick={() => setSearchValue('')}
          />
          <input
            onChange={onChangeInput}
           
            value={searchValue}
            placeholder="search"
          />
        </div>
      </div>
      <section className={styles.content}>
        {item
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              id={item.id}
              onPlus={(obj) => onAddtoCart(obj)}
              {...item}
            />
          ))}
      </section>
    </section>
  );
}

export default Home;
