import Header from "../components/Header";
import {pageSpellArchiveNav} from '../data.js'


const title = "The Wizard Spell \nArchives"
function SpellArchives() {
  return (
    <div>
      <Header nav_items={pageSpellArchiveNav} title={title}/>
      <div className="SpellArchives">
      </div>
    </div>
  );
}
  
export default SpellArchives;
  