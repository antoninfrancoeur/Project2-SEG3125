import './SpellArchive.css';
import '../pages/Pages.css';

const SpellResult = () => {
  return (
    <div className='spell-result'>
      <div>
        <p className='spell-result-title'>Mervelocitus Buletrum [Evocation]</p>
        <p className='spell-result-label'>Finger Bullet Spell (Alpha Variant)</p>
        <p className='spell-result-label'>From: Arcane Arsenal: Spells of Projectile Mastery</p>
      </div>
      <div className='spell-button-container'>
        <span className='spell-button'>Open &gt;&gt;</span><br/>
        <span className='spell-button'>See source &gt;&gt;</span>
      </div>
      <div className='spell-tags-container'>
        <div className="tag">Level III</div>
        <div className="tag">Offense</div>
        <div className="tag">Velocity Manipulation</div>
      </div>
    </div>
  );
}

function SpellArchiveResults() {
  return (
    <div className='spell-results-container'>
      <SpellResult />
      <SpellResult />
      <SpellResult />
    </div>
  );
}
  
export default SpellArchiveResults;
  