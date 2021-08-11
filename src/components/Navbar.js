import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isMobileNavbarShown, setIsMobileNavbarShown] = useState(false);

  useEffect(() => {
    console.log(isMobileNavbarShown);
  });

  return window.innerWidth <= 600 ? (
    isMobileNavbarShown ? (
      <nav className="navbar mobile-navbar">
        <nav className="mobile-navbar-header">
          <button
            className="mobile-navbar-header-btn"
            onClick={() => {
              setIsMobileNavbarShown(!isMobileNavbarShown);
              console.log(isMobileNavbarShown);
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </nav>
        <div className="mobile-navbar-body">
          <Link
            className="link"
            to="/"
            onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
          >
            Home
          </Link>

          <Link
            className="link"
            to="/tech-stack"
            onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
          >
            Tech stack
          </Link>

          <Link
            className="link"
            to="/projects"
            onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
          >
            Projects
          </Link>

          <Link
            className="link"
            to="/about"
            onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
          >
            About me
          </Link>

          <Link
            className="link"
            to="/contact"
            onClick={() => setIsMobileNavbarShown(!isMobileNavbarShown)}
          >
            Contact
          </Link>
        </div>
        <div></div>
      </nav>
    ) : (
      <nav className="mobile-navbar-header">
        <button
          className="mobile-navbar-header-btn"
          onClick={() => {
            setIsMobileNavbarShown(!isMobileNavbarShown);
            console.log(isMobileNavbarShown);
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    )
  ) : (
    <nav className="navbar">
      <Link className="link" to="/">
        Home
      </Link>

      <Link className="link" to="/tech-stack">
        Tech stack
      </Link>

      <Link className="link" to="/projects">
        Projects
      </Link>

      <Link className="link" to="/about">
        About me
      </Link>

      <Link className="link" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
