import Footer from "../components/Footer";
import Header from "../components/Header";
import {goblinSightingsNav, linkToHome} from '../data';
import {GoblinReport} from '../page-components/GoblinReport';
import React, { useState } from 'react';
import './Pages.css';

const title = "Wise Wizard Police \nDepartment";
const minPage = 0;
const maxPage = 4;

function GoblinSightings() {
  const [index, setIndex] = useState(minPage);

  const nextPage = () => {
    setIndex(prevIndex => Math.min(maxPage, prevIndex + 1));
  };

  const lastPage = () => {
    setIndex(prevIndex => Math.max(minPage, prevIndex - 1));
  };

  const submit = () => {
    setIndex(prevIndex => maxPage + 1);
  };
 
  const lastButtonRow = () => {
    if(index > 0 && index <= maxPage) {
      return (
        <button className="report-button links-generic" tabindex='0' onClick={lastPage}>
          Previous
        </button>
      );
    }
    else {
      return (<></>);
    }
  }

  const nextButtonRow = () => {
    if(index < maxPage) {
      return (
        <button className="report-button links-generic" tabindex='0' onClick={nextPage}>
          Next
        </button>
      );
    }
    else if(index === maxPage) {
      return (
        <button className="report-button links-generic" onClick={submit}>
          Submit
        </button>
      );
    }
    else if(index > maxPage) {
      return (
        <div className="report-button links-generic">
          <a href={linkToHome}>Return to home page.</a>
        </div>
      );
    }
  }

  return (
    <>
      <Header nav_items={goblinSightingsNav} title={title}/>
      <div className="GoblinSightings">
        <div className="center-page">
          <GoblinReport index={index} />
          <div className="report-bottom-container">
            {lastButtonRow()}
            <div className="report-bottom-container-space"></div>
            {nextButtonRow()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GoblinSightings;
  