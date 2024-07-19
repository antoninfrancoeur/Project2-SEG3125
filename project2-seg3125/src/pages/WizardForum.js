import Footer from "../components/Footer.js";
import Header from "../components/Header";
import Forum from '../page-components/Forum.js';
import {pageForumNav} from '../data.js';
import './Pages.css'
import { useT } from "talkr";

function WizardForum({doCreatePost}) {
  const { T } = useT();

  return (
    <>
      <Header nav_items={pageForumNav} title={T("titles.wizard-forum")}/>
      <Forum doCreatePost={doCreatePost}/>
      <Footer />
    </>
  );
}

export default WizardForum;
  