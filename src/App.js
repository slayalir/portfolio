import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Experiences from './components/main/experiences';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Main />} />
        <Route path = "/experiences" element = {<Experiences />} />
      </Routes>
    </Router>
  );
}

export default App;