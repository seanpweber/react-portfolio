// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anchor from './components/Anchor';
import BodyImg from './components/BodyImg';
import About from './components/About';
import WorkContainer from './components/WorkContainer';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import scroll from './scripts/scroll.js';
import './App.css';

document.addEventListener('scroll', scroll);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Anchor />
          <div className="padding">
            <Route exact path="/" component={BodyImg} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={WorkContainer} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <BackToTop />
          <Footer />
      </div>
    </Router>
  );
};

export default App;