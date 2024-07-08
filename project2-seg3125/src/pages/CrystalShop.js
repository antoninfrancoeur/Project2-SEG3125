import Header from "../components/Header";
import { pageCrystalShop } from "../data";
import Footer from "../components/Footer";
const title = "The Enchanted \nEmporium"


function CrystalShop() {
    return (
      <>
        <Header nav_items={pageCrystalShop} title={title}/>
        <div className="Shop">
        </div>
        <Footer />
      </>
    );
  }
  
  export default CrystalShop;
  