import React, { useEffect, useState } from "react";
import "../App.css";
export default function Projects() {
  const projects = [
    { link: "https://theatomicheroes.com/", name: "The Atomic Heroes" },
    { link: "https://adaai.art/", name: "Ada AI Art" },
    { link: "https://adarealm.io/", name: "Ada Realm" },
    { link: "https://openleaguescores.web.app/", name: "Open League scores" },
    {
      link:
        "https://github.com/Fiiranek/crypto-auto-trader-platform/tree/downloader",
      name: "Crypto Auto Trader",
    },
    {
      link: "https://github.com/Fiiranek/property-price",
      name: "Property Price Estimator",
    },
    { link: "https://github.com/Fiiranek/ZSLRobot", name: "Robot" },
    { link: "http://fiiranek.github.io/dr-mario", name: "Dr Mario" },
    { link: "https://github.com/Fiiranek/SocialNetwork", name: "Artico" },
  ];
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
        {projects.map((project) => (
          <p className="animated fadeInDown">
            <a href={project.link} className="project-link" target="_blank">
              {project.name}
            </a>
          </p>
        ))}
        {/*<p className="animated fadeInDown">
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
  </p>*/}
      </div>
    </div>
  );
}
