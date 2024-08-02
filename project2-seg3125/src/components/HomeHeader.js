import { Nav, NavStyle } from "./Nav.js";
import './Header.css';
import HeaderGenericMenu from "./HeaderGenericMenu.js";
import TextCarousel from './TextCarousel.js';
import {pageHomeNav,pageHomeNav2,currentNews,pageHomeNews} from '../data.js';
import { useT } from "talkr";

const type = "style2";

function HomeHeader() {
  const { T } = useT();

  return (
    <div>
      <div className="Header">
        <div className="Header-Left">
            <h1 className="Title">{T("titles.home")}</h1>
            <div className="Subtitle-Box">
                <span className="Header-Subtitle Top" aria-hidden="true">{T("titles.subtitle.first")}<br /></span>
                <span className="Header-Subtitle Bottom" aria-hidden="true">{T("titles.subtitle.second")}</span>
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
            <TextCarousel text={T("other.sample-news")} />
          </div>
        </div>
      </div>
      <div className="Horizontal-Line"></div>
    </div>
  );
}

export default HomeHeader;
  