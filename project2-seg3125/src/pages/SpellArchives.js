import Footer from "../components/Footer.js";
import Header from "../components/Header";
import {pageSpellArchiveNav} from '../data.js'


const title = "The Wizard Spell \nArchives"
function SpellArchives() {
  return (
    <>
      <Header nav_items={pageSpellArchiveNav} title={title}/>
      <div className="SpellArchives">
      </div>
      <Footer />
    </>
  );
}
  
export default SpellArchives;
  