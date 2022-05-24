import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Project from './routes/Project';
import Article from './routes/Article';
import Calendar from './routes/Calendar';
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
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/reference' element={<Reference />} />
      </Routes>
  );
}

export default App;