import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" />
      <i className="material-symbols-rounded search-icon">search</i>
    </div>
  );
};

export default SearchBar;
