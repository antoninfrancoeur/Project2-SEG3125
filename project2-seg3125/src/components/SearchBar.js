import './Inputs.css'
import { useT } from "talkr";

const SearchBar = () => {
  const { T } = useT();

  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder={T("other.search")} />
      <i className="material-symbols-rounded search-icon">search</i>
    </div>
  );
};

export default SearchBar;
