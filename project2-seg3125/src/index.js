import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Talkr } from 'talkr';
import './common.css';
import { HashRouter, Route, Routes } from 'react-router-dom'

import {en} from './locals/en';
import {fr} from './locals/fr';
import {pirate} from './locals/pirate';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopAnalytics from './pages/ShopAnalytics';
import GoblinSightings from './pages/GoblinSightings'
import SpellArchives from './pages/SpellArchives'
import WizardForum from './pages/WizardForum'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Talkr languages={{en, fr, pirate}} defaultLanguage='en'>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/shop/analytics' element={<ShopAnalytics />} />
        <Route path='/shop/*' element={<Shop />} />
        <Route path='/safety/goblin-sightings' element={<GoblinSightings />} />
        <Route path='/knowledge/spell-archives' element={<SpellArchives />} />
        <Route path='/forum/create-post' element={<WizardForum doCreatePost={true}/>} />
        <Route path='/forum/*' element={<WizardForum doCreatePost={false}/>} />
      </Routes>
    </HashRouter>
  </Talkr>
);