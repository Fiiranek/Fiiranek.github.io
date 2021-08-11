import React from "react";
import Typed from "react-typed";
import "../App.css";
export default function Home() {
  return (
    <div className="box">
      <Typed
        className="animated fadeInDown"
        strings={["Hi, I'm Franek!"]}
        typeSpeed={100}
        style={typedStyle}
        showCursor={false}
      />
    </div>
  );
}

const typedStyle = {
  color: "#ebfd2d",
  fontSize: "3em",
  textAlign: "center",
};
