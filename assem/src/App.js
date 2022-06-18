import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Project from './routes/Project';
import Article from './routes/Article';
import Calendar from './routes/Calendar';
import Home from './routes/Home';
import Reference from './routes/Reference';
import ArticleViews from './components/ArticleViews';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
        <Route path='/article/:id' component={ArticleViews} /> 
        <Route path='/project' element={<Project />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/reference' element={<Reference />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  );
}

export default App;