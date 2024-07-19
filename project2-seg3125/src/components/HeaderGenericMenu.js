import './Header.css';
import LanguageDropdown from './LanguageDropdown'
import SearchBar from './SearchBar';

function HeaderGenericMenu() {
    return (
      <div className='Generic-Menu-Container'>
        <div className='Generic-Menu-Row'>
            <LanguageDropdown />
        </div>
        <div className='Generic-Menu-Row'>
            <div className='Menu-Button'>
                <a href='/Project2-SEG3125/#/'><span className="material-symbols-rounded">person</span></a>
            </div>
            <div className='Menu-Button'>
                <a href='/Project2-SEG3125/#/'><span className="material-symbols-rounded">notifications</span></a>
            </div>
            <div className='Menu-Button'>
                <a href='/Project2-SEG3125/#/'><span className="material-symbols-rounded">shopping_cart</span></a>
            </div>
        </div>
        <div className='Generic-Menu-Row'>
            <SearchBar />
        </div>
      </div>
    );
  }
  
  export default HeaderGenericMenu;