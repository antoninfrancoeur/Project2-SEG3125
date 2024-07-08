import Header from "../components/Header";

const title = "Wise Wizard Police \nDepartment"
const nav_items = ["WWPD", "Safety", "Goblin Sightings"];

function GoblinSightings() {
    return (
      <div>
        <Header nav_items={nav_items} title={title}/>
        <div className="GoblinSightings">
        </div>
      </div>
    );
  }
  
  export default GoblinSightings;
  