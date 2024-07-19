import './HomePortals.css'
import React from 'react';
import {linkToPortals, homePortalSections} from '../data.js';
import { useT } from "talkr";

const PortalRowDivider = () => {
  return (
    <div className='portal-row-divider'>
      <div className='portal-row-dent'></div>
    </div>
  );
}

const PortalRowInstance = ({ name, icon, items }) => {
  const { T } = useT();

  return (
    <div className='portal-row'>
      <div className='panel-left'>
        <div className='panel-label'>{T(name)}</div>
        <i className="material-symbols-rounded panel-icon">{icon}</i>
      </div>
      <div className='panel-right'>
        <ul>
          {items.map((item, index) => (
            <li key={index}><a href={item[1]}>{T(item[0])}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HomePortals() {
  const { T } = useT();

  return (
    <div className='portal-container'>
        <div className='portal-row top-row-fixed-height'>
          <div className='top-row-bg'>
              <div className='top-panel'></div>
          </div>
          <span className='portal-title'><a href={linkToPortals}>{T("portals.portal")}</a>    &gt;&gt;</span>
          <span className='material-symbols-rounded portal-collapse-btn'>close</span>
        </div>
        {homePortalSections.map((section, index) => (
          <React.Fragment key={index}>
            <PortalRowDivider />
            <PortalRowInstance name={section.name} icon={section.icon} items={section.items} />
          </React.Fragment>
        ))}
    </div>
  );
}

export default HomePortals;
