import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/contact"  component={Contact}/>
          <Route path="/projects" component={Projects}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
