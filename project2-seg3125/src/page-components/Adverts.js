import './Adverts.css'
import { linkToShop, linkToRentAWizard } from '../data';

export function HomeAdvert1() {
  return (
    <div className='advert-container-1'>
      <div className='advert-subcontainer-1'>
        <h1>Non-Magic User?</h1>
        <p>Rent a wizard for your adventures, your birthday parties & any tasks too grand for nature.</p>
        <div style={{height: "50px"}}></div>
      </div>
      <div className='advert-subcontainer-2'></div>
      <div className='advert-subcontainer-3'>
        <div className='advert-button'>
          <span className='advert-button-text'><a href={linkToRentAWizard}>Rent a<br/> Wizard &gt;&gt;</a></span>
        </div>
      </div>
    </div>
  );
}

export function HomeAdvert2() {
  return (
    <div className='advert-container-2'>
      <div className='advert-subcontainer-4'>
        <h1>Get Equipped</h1>
        <p>Hats, staffs & crystal balls. Get our very best Wizard Wares in at the Enchanted Emporium.</p>
      </div>
      <div className='advert-subcontainer-5'>
        <div className='advert-button fixed-button'>
          <span className='advert-button-text'><a href={linkToShop}>Shop &gt;&gt;</a></span>
        </div>
      </div>
    </div>
  );
}

export function ShopAdvert1() {
  return (
    <div className='advert-container-1'>
      <div style={{width:'300px'}}><h1>In need of a new Crystal ball?</h1></div>
      <div style={{width:'400px', marginLeft:'20px'}}><p><b>We forage only the purest crystals, with best wood one can get in these lands.</b><br /><br />Pick the crystal ball best suited for you using our various filters.</p></div>
    </div>
  );
}