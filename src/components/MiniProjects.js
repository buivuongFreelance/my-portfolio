import React from "react";
import miniproj1 from "../public/img/miniproj1.png";
import miniproj2 from "../public/img/shirt.png";
import miniproj3 from "../public/img/shorten.png";
import miniproj4 from "../public/img/miniproj4.png";
import miniproj5 from "../public/img/mini2.png";
import gitIco from "../public/img/githubIco.png";
import liveIco from "../public/img/live.png";

export default function MiniProjects() {
  return (
    <div className="mini-projects-box">
      <div className="single-box">
        <img src={miniproj1} className="project-img" alt="project image" />
        <div className="project-description">
          Design a website like Facebook with a few main functions
          <a
            href="https://github.com/buivuongFreelance/my-facebook"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
          <div style={{ height: "50px", lineHeight: "65px" }}>
            <a target="_blank" href="http://buivuong.cloud:3005">
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj2} className="project-img" alt="project image" />
        <div className="project-description">
          Develop a TShirt Custom Designer
          <a
            href="https://github.com/buivuongFreelance/my-tshirt"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
          <div style={{ height: "50px", lineHeight: "65px" }}>
            <a target="_blank" href="http://buivuong.cloud:3003">
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="single-box">
        <img src={miniproj3} className="project-img" alt="project image" />
        <div className="project-description">
          Make a shorten URL for SEO
          <a
            href="https://github.com/buivuongFreelance/my-shortlink"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
          <div style={{ height: "50px", lineHeight: "65px" }}>
            <a target="_blank" href="http://buivuong.cloud:3000/">
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="single-box">
        <img src={miniproj4} className="project-img" alt="project image" />
        <div className="project-description">
          Online store outline using HTML and CSS with no JavaScript. Contain
          dropdown menu, tables, forms and other HTML elements.
          <a
            href="https://github.com/buivuongFreelance/my-shortlink"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div> */}
      <div className="single-box">
        <img src={miniproj5} className="project-img" alt="project image" />
        <div className="project-description">
          Develop a framework structure for Flutter
          <a
            href="https://github.com/buivuongFreelance/flutter_structure"
            target="_blank"
          >
            <img src={gitIco} className="liveIco" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
