import './Footer.css';
import { NavStyle } from './Nav';
import {footerNav, footerNav2} from '../data'

function Footer() {
  return (
    <>
      <div className="horizontal-line"></div>
      <footer>
        <div className='footer-fixed-width'>
          <NavStyle items={footerNav} type={"style3"}/>
          <br/>
          <NavStyle items={footerNav2} type={"style3"}/>
          <br/><br/>
          <div className='footer-inline-display'>
            <p><b>© 802-2024</b></p>
            <div className='footer-spacer'></div>
            <p><b>SOCIETY OF WISE WIZARDS</b></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
  