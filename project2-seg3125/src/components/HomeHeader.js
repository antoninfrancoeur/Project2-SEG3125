import { Nav, NavStyle } from "./Nav.js";
import './Header.css';
import HeaderGenericMenu from "./HeaderGenericMenu.js";
import TextCarousel from './TextCarousel.js';
import {pageHomeNav,pageHomeNav2,currentNews,pageHomeNews} from '../data.js';
const type = "style2";

function HomeHeader() {
    return (
      <div>
        <div className="Header">
          <div className="Header-Left">
              <h1 className="Title">Society of Wise<br />Wizards</h1>
              <div className="Subtitle-Box">
                  <span className="Header-Subtitle Top">Mastering the Arcane,<br /></span>
                  <span className="Header-Subtitle Bottom">Preserving the Order...</span>
              </div>
              <div className="Header-Nav">
                  <Nav items={pageHomeNav} />
                  {/*<NavStyle items={pageHomeNav2} type={type}/>*/}
              </div>
          </div>
          <div className="Vertical-Line"></div>
          <div className="Header-Right">
            <HeaderGenericMenu />
            <div className="Header-Nav">
              <Nav items={pageHomeNews} />
              <TextCarousel text={currentNews} />
            </div>
          </div>
        </div>
        <div className="Horizontal-Line"></div>
      </div>
    );
  }
  
  export default HomeHeader;
  