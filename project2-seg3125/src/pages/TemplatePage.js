import Footer from "../components/Footer.js";
import Header from "../components/Header";
import {pageTemplateNav} from '../data.js';

const title = "The Enchanted \nEmporium";
function TemplatePage() {
  return (
    <>
      <Header navItems={pageTemplateNav} title={title}/>
      <div className="TemplatePage">
      </div>
      <Footer />
    </>
  );
}

export default TemplatePage;
