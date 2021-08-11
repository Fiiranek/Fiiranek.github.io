import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/about" component={(props) => <About />} />
          <Route path="/projects" component={(props) => <Projects />} />
          <Route path="/tech-stack" component={(props) => <TechStack />} />
          <Route path="/contact" component={(props) => <Contact />} />
          <Route path="/" component={(props) => <Home />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
