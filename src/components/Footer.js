import React from 'react';
import '../App.css'
import pythonLogo from '../img/python.png'
import flutterLogo from '../img/flutter.png'
import firebaseLogo from '../img/firebase.png'
import rpiLogo from '../img/rpi.svg'
import reactLogo from '../img/react.png'
import jsLogo from '../img/js.png'
import nodeLogo from '../img/node.png'
function Footer(){
    return(
        <div className="footer">
            <img className="image" src={flutterLogo} alt=""/>
            <img className="image" src={pythonLogo} alt=""/>
            <img className="image" src={rpiLogo} alt=""/>
            <img className="image" src={jsLogo} alt=""/>
            <img className="image" src={firebaseLogo} alt=""/>
            <img className="image" src={reactLogo} alt=""/>
            <img className="image" src={nodeLogo} alt=""/>
        </div>
    );
}

export default Footer;