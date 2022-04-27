import React from "react";
import "../App.css";
import pythonLogo from "../img/python.png";
import flutterLogo from "../img/flutter.png";
import firebaseLogo from "../img/firebase.png";
import rpiLogo from "../img/rpi.svg";
import reactLogo from "../img/react.png";
import jsLogo from "../img/js.png";
import androidLogo from "../img/android.png";
import unityLogo from "../img/unity.png";
import nodeLogo from "../img/node.png";
function Footer() {
  return (
    <div className="footer">
      {/*<div className="footerLogos">
        <img className="image" src={flutterLogo} alt="" />
        <img className="image" src={pythonLogo} alt="" />
        <img className="image" src={rpiLogo} alt="" />
        <img className="image" src={jsLogo} alt="" />
        <img className="image" src={firebaseLogo} alt="" />
        <img className="image" src={reactLogo} alt="" />
        <img className="image" src={nodeLogo} alt="" />
        <img className="image" src={unityLogo} alt="" />
  </div>*/}
      <div className="footer-copy">
        <span className="footer-span">&copy; 2022 Franciszek Job</span>
      </div>
    </div>
  );
}

export default Footer;
