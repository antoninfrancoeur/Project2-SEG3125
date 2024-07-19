import Header from "../components/Header";
import { pageShop, linkToShop } from "../data";
import { crystalBallsItems, crystalFilters } from "../shop_data";
import { ShopAdvert1 } from '../page-components/Adverts';
import Footer from "../components/Footer";
import ShopHeader from "../page-components/ShopHeader";
import React, { useState, useMemo } from 'react';
import crystal_img from '../assets/crystal_ball_icon.jpg';
const title = "The Enchanted \nEmporium";

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item-card">
      <img
        className="shop-item-card-bg"
        src={crystal_img}
        alt=""
        style={{ filter: `hue-rotate(${item.color}turn)` }}
      />
      <div className="shop-item-card-overlay">
        <div>
          <p className="shop-item-title">{item.title}</p>
          <p className="shop-item-label">{item.description}</p>
        </div>
        <div className="flex-space">
          <span className="shop-item-price">{item.price} coins</span>
          <span className="shop-item-btn links-generic"><a href={linkToShop}>Buy now &gt;&gt;</a></span>
        </div>
      </div>
    </div>
  );
};

const ShopFilter = ({ filter, checkedItems, handleCheckboxChange, handleCheckAll, handleClearAll, impactMap }) => (
  <div className="shop-filter">
    <span className="shop-option-label">{filter.name}</span>
    {filter.items.map((item, index) => (
      <React.Fragment key={index}>
        <br />
        <input
          type="checkbox"
          id={item[1]}
          checked={checkedItems[item[1]]}
          onChange={() => handleCheckboxChange(item[1])}
        />
        <label
          htmlFor={item[1]}
          style={{ color: impactMap[item[1]] ? 'inherit' : '#ababab' }}
        >
          {item[0]}
        </label>
      </React.Fragment>
    ))}
    <div className="shop-icon-container">
      <div className="shop-icon" onClick={() => handleCheckAll(filter.items)}>
        <span className="material-symbols-rounded">done_all</span>
      </div>
      <div className="shop-icon" onClick={() => handleClearAll(filter.items)}>
        <span className="material-symbols-rounded">close</span>
      </div>
    </div>
  </div>
);

const ShopFilters = ({ filters, checkedItems, handleCheckboxChange, handleCheckAll, handleClearAll, impactMap }) => (
  filters.map((filter, index) => (
    <React.Fragment key={index}>
      <ShopFilter
        filter={filter}
        checkedItems={checkedItems}
        handleCheckboxChange={handleCheckboxChange}
        handleCheckAll={handleCheckAll}
        handleClearAll={handleClearAll}
        impactMap={impactMap}
      />
    </React.Fragment>
  ))
);

function Shop() {
  const [checkedItems, setCheckedItems] = useState(
    crystalFilters.reduce((acc, filter) => {
      filter.items.forEach(item => acc[item[1]] = true);
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const handleCheckAll = (items) => {
    setCheckedItems(prevState => {
      const newCheckedItems = { ...prevState };
      items.forEach(item => {
        newCheckedItems[item[1]] = true;
      });
      return newCheckedItems;
    });
  };

  const handleClearAll = (items) => {
    setCheckedItems(prevState => {
      const newCheckedItems = { ...prevState };
      items.forEach(item => {
        newCheckedItems[item[1]] = false;
      });
      return newCheckedItems;
    });
  };

  const filteredItems = useMemo(() => {
    return crystalBallsItems.filter(item =>
      item.tags.every(tag => checkedItems[tag])
    );
  }, [checkedItems]);

  const impactMap = useMemo(() => {
    const map = {};
    crystalFilters.forEach(filter => {
      filter.items.forEach(item => {
        const testCheckedItems = { ...checkedItems, [item[1]]: !checkedItems[item[1]] };
        const filteredTestItems = crystalBallsItems.filter(testItem =>
          testItem.tags.every(tag => testCheckedItems[tag])
        );
        map[item[1]] = filteredTestItems.length !== filteredItems.length;
      });
    });
    return map;
  }, [checkedItems, filteredItems]);

  return (
    <>
      <Header nav_items={pageShop} title={title} />
      <ShopHeader />
      <ShopAdvert1 />
      <div className="shop">
        <form className="shop-siderbar">
          <ShopFilters
            filters={crystalFilters}
            checkedItems={checkedItems}
            handleCheckboxChange={handleCheckboxChange}
            handleCheckAll={handleCheckAll}
            handleClearAll={handleClearAll}
            impactMap={impactMap}
          />
        </form>
        <div className="shop-container">
          {filteredItems.map((item, index) => (
            <ShopItem key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
