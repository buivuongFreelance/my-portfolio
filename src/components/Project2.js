import React, { useState } from "react";
import page2 from "../public/img/appointment.png";
import cssIco from "../public/img/css.png";
import reactIco from "../public/img/react.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";
import firebaseIco from "../public/img/firebase.png";

export default function Project2() {
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
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    } else if (e.target.id == "Firebase") {
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
      <div className="right-container">
        <h1>Doctor Appointment</h1>
        <div className="description">
          This system allows patients to book, reschedule, or cancel
          appointments with healthcare providers online, often through a
          website. For healthcare providers, the system automates the
          administrative tasks associated with appointment scheduling, such as
          managing doctor availability, sending appointment reminders, and
          handling patient information securely.
          <div className="links">
            <a
              href="https://github.com/buivuongFreelance/my-appointment"
              target="_blank"
            >
              <img src={gitIco} className="liveIco" alt="github icon" />
              <span>GitHub</span>
            </a>
            <a href="http://buivuong.cloud:3001/" target="_blank">
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
      <div className="left-container">
        <img src={page2} className="img-project2" />
      </div>
    </div>
  );
}
