import { Nav, Nav2 } from "./Nav.js";
import './Header.css';
import HeaderGenericMenu from "./HeaderGenericMenu.js";
import TextCarousel from './TextCarousel.js';

const nav_items = ["Society of Wise Wizard", "Foyer Page"];
const nav_items2 = ["Archives", "News", "Forums", "Report"];
const nav_items3 = ["Flash News"];
const currentNews = "Lightning strikes 60 times on Eastern Glumbo Hills. WWD Investigating. ";

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
                  <Nav items={nav_items} />
                  <Nav2 items={nav_items2} />
              </div>
          </div>
          <div className="Vertical-Line"></div>
          <div className="Header-Right">
            <HeaderGenericMenu />
            <div className="Header-Nav">
              <Nav items={nav_items3} />
              <TextCarousel text={currentNews} />
            </div>
          </div>
        </div>
        <div className="Horizontal-Line"></div>
      </div>
    );
  }
  
  export default HomeHeader;
  