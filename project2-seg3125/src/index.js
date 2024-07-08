import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import { HashRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Shop from './pages/Shop';
import GoblinSightings from './pages/GoblinSightings'
import SpellArchives from './pages/SpellArchives'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/shop/*' element={<Shop />} />
      <Route path='/safety/goblin-sightings' element={<GoblinSightings />} />
      <Route path='/knowledge/spell-archives' element={<SpellArchives />} />
    </Routes>
  </HashRouter>
);