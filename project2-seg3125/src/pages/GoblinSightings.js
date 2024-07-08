import Footer from "../components/Footer";
import Header from "../components/Header";
import {goblinSightingsNav} from '../data';
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
        <div className="report-button" onClick={lastPage}>
          <span>Previous</span>
        </div>
      );
    }
    else {
      return (<></>);
    }
  }

  const nextButtonRow = () => {
    if(index < maxPage) {
      return (
        <div className="report-button" onClick={nextPage}>
          <span>Next</span>
        </div>
      );
    }
    else if(index === maxPage) {
      return (
        <div className="report-button" onClick={submit}>
          <span>Submit</span>
        </div>
      );
    }
    else if(index > maxPage) {
      return (
        <div className="report-button">
          <a href="/#/"><span>Return to home page.</span></a>
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
  