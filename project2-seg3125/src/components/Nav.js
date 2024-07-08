import React from 'react';
import './Nav.css';

const Nav = ({ items }) => {
  return (
    <div className="breadcrumb-container">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a href={item[1]} className="breadcrumb-link">{item[0]}</a>
          {index < items.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

const NavStyle = ({ items, type }) => {
  return (
    <div className={"breadcrumb-container-" + type}>
    {items.map((item, index) => (
        <React.Fragment key={index}>
        <a href={item[1]} className="breadcrumb-link">{item[0]}</a>
        {index < items.length - 1 && <span className="breadcrumb-separator"> / </span>}
        </React.Fragment>
    ))}
    </div>
  );
};

const NavUnder = ({ items }) => {
  return (
    <div className="breadcrumb-container breadcrumb-under">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a href={item[1]}  className="breadcrumb-link">{item[0]} </a>
          {index < items.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

export {Nav, NavStyle, NavUnder};