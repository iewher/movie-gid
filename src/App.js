import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './style/style.css'

import { Home } from './components/pages/page-home/Home';
import { Movies } from './components/pages/page-movies/Movies';
import { Info } from './components/pages/page-info/Info';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/page-info' element={<Info />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
