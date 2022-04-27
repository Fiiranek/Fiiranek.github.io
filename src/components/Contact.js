import React from "react";
import "../App.css";
export default function Contact() {
  return (
    <div className="box">
      <div className="about">
        <a href="https://github.com/Fiiranek" target="_blank">
          <p className="animated fadeInDown">
            <i className="fab fa-github"></i>&nbsp;github.com/Fiiranek
          </p>
        </a>
        <a href="mailto:jellybean@onet.eu" target="_blank">
          <p className="animated fadeInUp">
            <i className="fas fa-envelope"></i>&nbsp;firanek11@gmail.com
          </p>
        </a>
        <a
          href="https://pl.linkedin.com/in/franciszek-job-32795622a"
          target="_blank"
        >
          <p className="animated fadeInUp">
            <i className="fab fa-linkedin"></i>&nbsp;Linkedin
          </p>
        </a>
      </div>
    </div>
  );
}
