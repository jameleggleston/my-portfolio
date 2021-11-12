import './App.css';
import Nav from './components/Nav';
import About from './components/pages/About';
import Technologies from './components/pages/Technologies';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path={'/'}>
          <About />
          <Footer route={'/contact'} text={'Contact me'} />
        </Route>
        <Route exact path='/technologies'>
          <Technologies />
          <Footer route={'/contact'} text={'Contact me'} />
        </Route>
        <Route exact path='/projects'>
          <Projects />
          <Footer route={'/contact'} text={'Contact me'} />
        </Route>
        <Route exact path='/contact'>
          <Contact />
          <Footer route={'/'} text={'Go To Home'} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;