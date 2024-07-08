import Header from "../components/Header";
import { pageShop } from "../data";
import Footer from "../components/Footer";
import ShopHeader from "../page-components/ShopHeader";
const title = "The Enchanted \nEmporium"


function CrystalShop() {
    return (
      <>
        <Header nav_items={pageShop} title={title}/>
        <div className="Shop">
          <ShopHeader />
        </div>
        <Footer />
      </>
    );
  }
  
  export default CrystalShop;
  