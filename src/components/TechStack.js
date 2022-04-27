import React from "react";
import "../App.css";
export default function TechStack() {
  return (
    <div className="box">
      <div className="about">
        <p className="animated fadeInDown">Languages</p>
        <p className="animated fadeInDown">
          Main: Javascript, Python, Dart, HTML, CSS
        </p>
        <p className="animated fadeInDown">Less: Java, C++, C#</p>
        <p className="animated fadeInDown">&nbsp;</p>
        <p className="animated fadeInUp">Frameworks</p>
        <p className="animated fadeInUp">Frontend: React, Flutter</p>
        <p className="animated fadeInUp">Backend: Express, Flask</p>
        <p className="animated fadeInUp">&nbsp;</p>
        <p className="animated fadeInDown">Libs: ThreeJS,NodeJS</p>
        <p className="animated fadeInDown">&nbsp;</p>
        {/*<p className="animated fadeInUp">Editor: VS Code, PyCharm</p>
  <p className="animated fadeInUp">&nbsp;</p>*/}
        <p className="animated fadeInUp">Tools and DBs</p>
        <p className="animated fadeInUp">
          Firebase, MongoDB, PostgreSQL, Raspberry PI, GIT
        </p>
      </div>
    </div>
  );
}
