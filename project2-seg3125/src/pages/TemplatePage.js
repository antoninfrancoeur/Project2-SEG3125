import Header from "../components/Header";
import {pageTemplateNav} from '../data.js';

const title = "The Enchanted \nEmporium"
function TemplatePage() {
    return (
      <div>
        <Header navItems={pageTemplateNav} title={title}/>
        <div className="TemplatePage">
        </div>
      </div>
    );
  }
  
  export default TemplatePage;
  