import Footer from "../components/Footer.js";
import Header from "../components/Header";
import {pageSpellArchiveNav} from '../data.js'
import SpellArchivesSearch from "../page-components/SpellArchiveSearch.js";
import SpellArchivesResults from "../page-components/SpellArchiveResults.js";


const title = "The Wizard Spell \nArchives";
function SpellArchives() {
  return (
    <>
      <Header nav_items={pageSpellArchiveNav} title={title}/>
      <div className="main-region">
          <div className="main-left-2">
            <SpellArchivesSearch />
          </div>
          <div className="vertical-line"></div>
          <div className="main-right-2">
            <SpellArchivesResults />
          </div>
        </div>
      <Footer />
    </>
  );
}
  
export default SpellArchives;
  