import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" class="search-input" placeholder="Search" />
      <i class="material-symbols-rounded search-icon">search</i>
    </div>
  );
};

export default SearchBar;
