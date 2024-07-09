import Header from "../components/Header";
import { pageShop, crystalFilters, linkToShop } from "../data";
import { crystalBallsItems } from "../shop_data";
import {ShopAdvert1} from '../page-components/Adverts'
import Footer from "../components/Footer";
import ShopHeader from "../page-components/ShopHeader";
import React, { useState } from 'react';
import crystal_img from'../assets/crystal_ball_icon.jpg'
const title = "The Enchanted \nEmporium"

const ShopItem = ({item}) => {
  return (
    <>
      <div className="shop-item-card">
        <img className="shop-item-card-bg" src={crystal_img} alt=""/>
        <div className="shop-item-card-overlay">
          <p className="shop-item-title">{item.title}</p>
          <p className="shop-item-label">{item.description}</p>
          <div className="flex-space">
            <span className="shop-item-price">{item.price} coins</span>
            <span className="shop-item-btn links-generic"><a href={linkToShop}>Buy now &gt;&gt;</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

const ShopFilter = ({ filter }) => {
  const [checkedItems, setCheckedItems] = useState(
    filter.items.reduce((acc, item) => {
      acc[item[1]] = true;
      return acc;
    }, {})
  );

  const handleCheckAll = () => {
    const newCheckedItems = {};
    filter.items.forEach(item => {
      newCheckedItems[item[1]] = true;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleClearAll = () => {
    const newCheckedItems = {};
    filter.items.forEach(item => {
      newCheckedItems[item[1]] = false;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="shop-filter">
      <span className="shop-option-label">{filter.name}</span>
      {filter.items.map((item, index) => (
        <React.Fragment key={index}>
          <div>
            <input
              type="checkbox"
              id={item[1]}
              checked={checkedItems[item[1]]}
              onChange={() => handleCheckboxChange(item[1])}
            />
            <label htmlFor={item[1]}>{item[0]}</label>
          </div>
        </React.Fragment>
      ))}
      <div className="shop-icon-container">
        <div className="shop-icon" onClick={handleCheckAll}>
          <span className="material-symbols-rounded">done_all</span>
        </div>
        <div className="shop-icon" onClick={handleClearAll}>
          <span className="material-symbols-rounded">close</span>
        </div>
      </div>
    </div>
  );
};

const ShopFilters = ({filters}) => filters.map((filter, index) => (
  <React.Fragment key={index}>
    <ShopFilter filter={filter} />
  </React.Fragment>
));

function Shop() {
  return (
    <>
      <Header nav_items={pageShop} title={title}/>
      <ShopHeader />
      <ShopAdvert1 />
      <div className="shop">
        <form className="shop-siderbar">
          <ShopFilters filters={crystalFilters} />
        </form>
        <div className="shop-container">
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
          <ShopItem item={crystalBallsItems[0]} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
  