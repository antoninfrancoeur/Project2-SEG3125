import './Adverts.css'
import { linkToShop, linkToRentAWizard } from '../data';
import { useT } from "talkr";

export function HomeAdvert1() {
  const { T } = useT();

  return (
    <div className='advert-container-1'>
      <div className='advert-subcontainer-1'>
        <h1>{T("adverts.home1-title")}</h1>
        <p>{T("adverts.home1")}</p>
        <div style={{height: "50px"}}></div>
      </div>
      <div className='advert-subcontainer-2'></div>
      <div className='advert-subcontainer-3'>
        <div className='advert-button'>
          <span className='advert-button-text'><a href={linkToRentAWizard} style={{whiteSpace: 'break-spaces'}}>{T('adverts.home1-link')}</a></span>
        </div>
      </div>
    </div>
  );
}

export function HomeAdvert2() {
  const { T } = useT();

  return (
    <div className='advert-container-2'>
      <div className='advert-subcontainer-4'>
        <h1>{T("adverts.home2-title")}</h1>
        <p>{T("adverts.home2")}</p>
      </div>
      <div className='advert-subcontainer-5'>
        <div className='advert-button fixed-button'>
          <span className='advert-button-text'><a href={linkToShop}>{T('adverts.home2-link')}</a></span>
        </div>
      </div>
    </div>
  );
}

export function ShopAdvert1() {
  const { T } = useT();

  return (
    <div className='advert-container-1'>
      <div style={{width:'300px'}}><h1>{T("adverts.shop1-title")}</h1></div>
      <div style={{width:'400px', marginLeft:'20px'}}><p><b>{T("adverts.shop1-1")}</b><br /><br />{T("adverts.shop1-2")}</p></div>
    </div>
  );
}