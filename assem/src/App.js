import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Project from './routes/Project';
import Article from './routes/Article';
import Calender from './routes/Calender';
import Home from './routes/Home';
import Reference from './routes/Reference';
import ArticleViews from './components/ArticleViews';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
        <Route path='/article/:id' component={ArticleViews} /> 
        <Route path='/project' element={<Project />} />
        <Route path='/calender' element={<Calender />} />
        <Route path='/reference' element={<Reference />} />
      </Routes>
  );
}

export default App;