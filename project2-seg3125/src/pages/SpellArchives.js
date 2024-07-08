import Header from "../components/Header";

const title = "The Wizard Spell \nArchives"
const nav_items = ["Knowledge", "Spell Archives"];

function SpellArchives() {
    return (
      <div>
        <Header nav_items={nav_items} title={title}/>
        <div className="SpellArchives">
        </div>
      </div>
    );
  }
  
  export default SpellArchives;
  