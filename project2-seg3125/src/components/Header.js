import {NavUnder} from "./Nav.js";
import './Header.css';
import HeaderGenericMenu from "./HeaderGenericMenu.js";

const Header = ({title, nav_items}) => {
    return (
      <div>
        <div className="Header Header-Small">
          <div className="Header-Left">
              <h1 className="Title Title-Small" style={{ whiteSpace: "pre-line" }}>{title}</h1>
              <div className="Header-Nav Header-Nav-Under">
                  <NavUnder items={nav_items} />
              </div>
          </div>
          <div className="Header-Right">
            <HeaderGenericMenu />
          </div>
        </div>
        <div className="Horizontal-Line"></div>
      </div>
    );
  }
  
  export default Header;
  