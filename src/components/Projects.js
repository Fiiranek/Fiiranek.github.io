import React, { useEffect, useState } from "react";
import "../App.css";
export default function Projects() {
  const [nfrogtsLink, setNfrogtsLink] = useState("https://nfrogts.io");

  useEffect(() => {
    fetch(nfrogtsLink, { mode: "no-cors" })
      .then((res) => {
        console.log(res.code);
      })
      .catch((err) => {
        setNfrogtsLink("https://nfrogtss.web.app/");
      });
  }, []);

  return (
    <div className="box">
      <div className="about">
        <p className="animated fadeInDown">
          <a
            href="https://github.com/Fiiranek/crypto-auto-trader-platform/tree/downloader"
            className="project-link"
          >
            Crypto Auto Trading Platform
          </a>
        </p>
        <p className="animated fadeInDown">
          <a href={nfrogtsLink} className="project-link">
            NFrogTs
          </a>
        </p>
        <p className="animated fadeInDown">
          <a href="https://theatomicheroes.com" className="project-link">
            The Atomic Heroes
          </a>
        </p>
        <p className="animated fadeInDown">
          <a
            href="https://property-price.herokuapp.com/"
            className="project-link"
          >
            Property price estimator
          </a>
        </p>
        <p className="animated fadeInUp">
          <a href="http://fiiranek.github.io/dr-mario" className="project-link">
            Dr. Mario
          </a>
        </p>

        <p className="animated fadeInUp">
          <a
            href="https://github.com/Fiiranek/SocialNetwork"
            className="project-link"
          >
            Artico
          </a>
        </p>

        <p className="animated fadeInUp">
          <a
            href="https://github.com/Fiiranek/ZSLRobot"
            className="project-link"
          >
            Raspberry PI Robot
          </a>
        </p>
        <p className="animated fadeInUp">
          <a
            href="https://github.com/Fiiranek/NewsApp"
            className="project-link"
          >
            Mobile News App
          </a>
        </p>
      </div>
    </div>
  );
}
