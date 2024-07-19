import './ShopHeader.css';
import {shopSections, linkToShopAnalytics} from '../data.js';
import React from 'react';

const CategoryDropdown = ({section}) => {
  return (
    <div className="category-dropdown">
      <div className="category-dropdown-wrapper">
        <div className="category-dropdown-btn">
          {section.name} <i className="material-symbols-rounded">keyboard_arrow_down</i>
        </div>
        <div className="category-dropdown-content">
          {section.items.map((item, index) => (
            <React.Fragment key={index}>
              <span className='links-generic'><a href={item[1]}>{item[0]}</a></span><br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

function ShopHeader() {
  return (
    <>
      <div className='shop-header'>
        <div className='shop-header-sections'>
          <div className='shop-header-sections-links'>
            {shopSections.map((section, index) => (
              <React.Fragment key={index}>
                <CategoryDropdown section={section} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="shop-header-hint">
          <p><b>Debugging Only</b></p>
          <p>Reach the analytics page by <a href={linkToShopAnalytics}>clicking here</a>.</p>
        </div>
        <div className="shop-header-hint">
          <p><b>Need help?</b></p>
          <p>Send us a messenger pigeon to the Grand Wizard Business Tower.</p>
        </div>
      </div>
    </>
  );
}

export default ShopHeader;