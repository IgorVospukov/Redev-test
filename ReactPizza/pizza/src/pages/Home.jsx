import React from 'react';
import Card from '../components/Card/Card';

function Home({
  searchValue,
  setSearchValue,
  onChangeInput,
  onAddtoCart,
  item,
}) {
  return (
    <>
      <div className='searchBlockFlex'>
        <h1>{searchValue ? 'Searching' : 'All foto'}</h1>
        <div className='searchBlock'>
          <img
            width={12}
            height={12}
            src='/img/search.png'
            alt='seek'
            onClick={() => setSearchValue('')}
          />
          <input
            onChange={onChangeInput}
            value={searchValue}
            placeholder='search'
          />
        </div>
      </div>
      <section className='content'>
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
            />
          ))}
      </section>
    </>
  );
}

export default Home;
