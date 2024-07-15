import './SpellArchive.css';
import '../pages/Pages.css';
import SearchBar from '../components/SearchBar';
import SlideOptionPicker from '../components/SlideOptionPicker';
import {React, useState} from 'react';
import {schoolsOfMagic} from '../data';

const SchoolsFilter = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState(
    items.reduce((acc, item) => {
      acc[item[1]] = true;
      return acc;
    }, {})
  );

  const handleCheckAll = () => {
    const newCheckedItems = {};
    items.forEach(item => {
      newCheckedItems[item[1]] = true;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleClearAll = () => {
    const newCheckedItems = {};
    items.forEach(item => {
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
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={item[1]}
            checked={checkedItems[item[1]]}
            onChange={() => handleCheckboxChange(item[1])}
          />
          <label htmlFor={item[1]}>{item[0]}</label>
        </div>
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

const Division = () => {return(
  <div className='search-row-divider'></div>
)};

function SpellArchivesSearch() {
  return (
    <div className='spell-search-container'>
      <h1 className='report-title'>Spell Search &gt; &gt;</h1>

      <p className='search-label'>Search anything...</p>
      <SearchBar />
      <div className='spell-search-button-container'>
        <div className='spell-search-button spell-compare'>Compare Spells</div>
        <div className='spell-search-button spell-search'>Search</div>
      </div>

      <Division />
      <p className='search-label'>Search Type</p>
      <SlideOptionPicker options={["Spells", "Books", "Tags"]} />

      <Division />
      <p className='search-label'>Schools of Magic</p>
      <form>
        <SchoolsFilter items={schoolsOfMagic}/>
      </form>

      <Division />
      <p className='search-label'>Current Tags</p>
      <div className='spell-tags-container-2'>
        <div className="tag">Level I</div>
        <div className="tag">Level II</div>
        <div className="tag">Level III</div>
        <div className="tag">Level IV</div>
        <div className="tag">Level V</div>
        <div className="tag">Level VI</div>
      </div>
    </div>
  );
}
  
export default SpellArchivesSearch;
  