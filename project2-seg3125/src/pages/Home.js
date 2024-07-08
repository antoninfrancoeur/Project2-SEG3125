import Footer from "../components/Footer";
import HomeHeader from "../components/HomeHeader";
import {HomeAdvert1, HomeAdvert2} from '../page-components/HomeAdverts'
import HomePortals from "../page-components/HomePortals";
import './Pages.css'

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="Home">
        <div className="main-region">
          <div className="main-left">
            <HomeAdvert1 />
            <HomeAdvert2 />
          </div>
          <div className="vertical-line"></div>
          <div className="main-right">
            <HomePortals />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
