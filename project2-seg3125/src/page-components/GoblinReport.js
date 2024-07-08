import '../pages/Pages.css';
import './Maps.css';
import DateTimeInput from '../components/DateTimeInput';
import TextFieldInput from '../components/TextFieldInput';
const detailsLimit = 800;

const Page0 = () => {
  return (
    <>
      <h1 className="report-title">Report Goblin Sighting</h1>
      <p><b>Please provide accurate information.</b><br />We will asses the severity of the case and reach out to you for more information.</p>
      <ol className="report-list">
        <li>Review the reporting rules.</li>
        <li>Provide an accurate location.</li>
        <li>Give us the right date & time.</li>
        <li>Confirm the details.</li>
        <li>Submit the report.</li>
      </ol>
    </>
  )
};

const Page1 = () => {
  return (
    <>
      <h1 className="report-title">Report Goblin Sighting</h1>
      <h2 className='report-title'>Step 1 : Review the reporting rules.</h2>
      <ol className="report-list">
        <li>Do NOT submit a new report unless either:</li>
        <ul>
          <li>There is an absolute emergency (Refer to the Edicts for more details)</li>
          <li>You haven't heard back from the WWPD in half a moon cycle.</li>
          <li>The incident is evidently seperate from the ones in any previous reports you've made.</li>
        </ul>
        <li>Avoid dealing with the situation yourself if you are inexperienced. Certain spells can backfire. Opt to use invisibility potions to gather intel instead of causing disruption.</li>
        <li>Goblin sightings outside of the bound of our Realm do not need to be submitted. These goblins aren't a pest unless they invade on our soil.</li>
        <li>Avoid submitting a report unless you have strong evidence, and a defined location. Suspicions aren't enough.</li>
      </ol>
    </>
  );
};

const Page2 = () => {
  return (
    <>
      <h1 className="report-title">Report Goblin Sighting</h1>
      <h2 className='report-title'>Step 2 : Provide an accurate location.</h2>
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe title="map canvas" className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=760&amp;height=400&amp;hl=en&amp;q=Ottawa&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </>
  );
};

const Page3 = () => {
  return (
    <>
      <h1 className="report-title">Report Goblin Sighting</h1>
      <h2 className='report-title'>Step 3 : Give us the right date & time.</h2>
      <form>
        <DateTimeInput />
      </form>
    </>
  );
};

const Page4 = () => {
  return (
    <>
      <h1 className="report-title">Report Goblin Sighting</h1>
      <h2 className='report-title'>Step 4 : Confirm the details.</h2>
      <form>
        <TextFieldInput maxLength={detailsLimit}/>
      </form>
    </>
  );
};

const Page5 = () => {
  return (
    <>
      <h1 className="report-title">Submitted the report.</h1>
      <p><b>The report has been sucessfully submitted.</b></p>
      <p>Look forward to a response in your inbox. Thank you for keeping our kingdom safe.</p>
    </>
  );
};

export const GoblinReport = ({index}) => {
  switch(index) {
    case 0: return Page0();
    case 1: return Page1();
    case 2: return Page2();
    case 3: return Page3();
    case 4: return Page4();
    case 5: return Page5();
    default: return (<></>);
  }
}