import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/project' Component={Project}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
