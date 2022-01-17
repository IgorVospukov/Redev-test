import React,{useContext} from 'react';
import Card from '../components/Card/Card';
import styles from './Home.module.scss';
import { UpOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import {Link} from 'react-scroll';
import { AppContext } from '../App';

function Home() {
  const { searchValue,setSearchValue,onChangeInput,onAddtoCart,item} = useContext(AppContext);

  return (
    <section  className={styles.main}>
      <div  className={styles.searchBlockFlex}>
        <h2 className={styles.nameCard}>{searchValue ? '' : 'Movies'}</h2>
        <div className={styles.searchBlock}>
          <img
            width={15}
            height={15}
            src="/img/icons8.png"
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
        <div className={styles.forCarousel}>
          <Carousel autoplay>
            <div>
              <img className={styles.mainPic1} src="img/111.jfif" alt="img"></img>
            </div>
            <div>
              <img className={styles.mainPic2} src="/img/112.jfif" alt="img"></img>
            </div>
            <div>
              <img className={styles.mainPic3} src="/img/113.jfif" alt="img"></img>
            </div>
            <div>
              <img className={styles.mainPic4} src="/img/114.jfif" alt="img"></img>
            </div>
          </Carousel>
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
      <Link to="anchor" activeClass='active' smooth={true} duration={1000} delay={100}>
        <div className={styles.toHome}><UpOutlined style={{ fontSize: '30px'}} /></div>
      </Link>
    </section>
  );
}

export default Home;
