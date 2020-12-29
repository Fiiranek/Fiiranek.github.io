import React from 'react';
import './App.css';
import './Link.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
          <ul className="menu">
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
          </ul>
        <Switch>
          
          <Route path="/about" component={(props) => <AboutMe/>}/>
          
          <Route path="/contact" component={(props) => <Contact/>}/>
          <Route path="/" component={(props) => <Home/>}/>
        </Switch>
        <Footer/>
      
      </div>
      
    </Router>
    
  );
}

export default App;