import React, { useState } from "react";
import page3 from "../public/img/discord.png";

import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";

export default function Project3() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id === "CSS") {
      setCss(true);
    } else if (e.target.id === "JavaScript") {
      setJs(true);
    } else if (e.target.id === "Bootstrap") {
      setBoot(true);
    } else if (e.target.id === "React") {
      setReact(true);
    } else if (e.target.id === "Three.js") {
      setThree(true);
    } else if (e.target.id === "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
  return (
    <div className="project-box">
      <div className="left-container">
        <img src={page3} className="img-project3" />
      </div>
      <div className="right-container">
        <h1>WebRTC for Dingtoi</h1>
        <div className="description">
          Create Video Chat Functionality
          <br />
          Create Realtime Communication System
          <br />
          Creating Video Group Call Rooms
          <div className="links">
            <a
              target="_blank"
              href="https://github.com/buivuongFreelance/my-discord"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a target="_blank" href="http://buivuong.cloud:3006/dashboard">
              <img
                src={liveIco}
                className="liveIco"
                target="blank"
                alt="live icon"
              />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
