import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Project from './components/Project';
import Calender from './routes/Calender';
import Home from './routes/Home';
import Reference from './routes/Reference';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/reference' element={<Reference />} />
      </Routes>
  );
}

export default App;