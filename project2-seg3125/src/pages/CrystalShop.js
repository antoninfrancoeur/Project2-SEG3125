import Header from "../components/Header";

const title = "The Enchanted \nEmporium"
const nav_items = ["Business Concil", "Shop"];

function Shop() {
    return (
      <div>
        <Header nav_items={nav_items} title={title}/>
        <div className="Shop">
        </div>
      </div>
    );
  }
  
  export default Shop;
  