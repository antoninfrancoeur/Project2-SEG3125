import Footer from "../components/Footer.js";
import Header from "../components/Header";
import Forum from '../page-components/Forum.js';
import {pageForumNav} from '../data.js';
import './Pages.css'

const title = "The Wizard \nForum";
function WizardForum() {
  return (
    <>
      <Header nav_items={pageForumNav} title={title}/>
      <Forum />
      <Footer />
    </>
  );
}

export default WizardForum;
  