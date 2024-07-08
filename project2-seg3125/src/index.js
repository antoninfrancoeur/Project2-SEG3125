import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import CrystalShop from './pages/CrystalShop';
import GoblinSightings from './pages/GoblinSightings'
import SpellArchives from './pages/SpellArchives'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/shop/crystal' element={<CrystalShop />} />
      <Route path='/safety/goblinsightings' element={<GoblinSightings />} />
      <Route path='/knowledge/spellarchives' element={<SpellArchives />} />
    </Routes>
  </HashRouter>
);