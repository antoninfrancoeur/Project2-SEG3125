import React from 'react';
import './Nav.css';

const Nav = ({ items }) => {
  return (
    <div className="breadcrumb-container">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <a href="#/" className="breadcrumb-link">{item}</a>
          {index < items.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
        </React.Fragment>
      ))}
    </div>
  );
};

const Nav2 = ({ items }) => {
    return (
      <div className="breadcrumb-container2">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <a href="#/" className="breadcrumb-link">{item}</a>
            {index < items.length - 1 && <span className="breadcrumb-separator"> / </span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

export {Nav, Nav2};