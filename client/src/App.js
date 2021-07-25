// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Anchor from './components/Anchor';
import Home from './components/Home';
import Headshot from './components/Headshot';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Email from './components/Email';
import Footer from './components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far, faHandshake, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { fab, faGithub, faLinkedin, faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { fas, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(far, fab, fas, faHandshake, faCopyright, faGithub, faLinkedin, faReact, faNodeJs, faGitAlt, faEnvelopeSquare);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Anchor />
          <div className="padding">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contact/email" component={Email} />
          </div>
          <Footer />
      </div>
    </Router>
  );
};

export default App;