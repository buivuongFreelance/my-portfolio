import React, { useState } from "react";
import Navbar from "./Navbar";
import hiIco from "../public/img/hi.png";
import gitIco from "../public/img/githubIco.png";
import reactIco from "../public/img/react.png";
import avatar from "../public/img/avatar.png";
import microIco from "../public/img/micro.png";
import nodeIco from "../public/img/node.png";
import kuberIco from "../public/img/kubernetes.png";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function MainPage() {
  const [kuber, setKuber] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [micro, setMicro] = useState("");
  const [node, setNode] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "Micro") {
      setMicro(true);
    } else if (e.target.id == "Kuber") {
      setKuber(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Node") {
      setNode(true);
    }
  };
  const handleMouseLeave = () => {
    setNode();
    setReact();
    setMicro();
    setKuber();
  };
  return (
    <div className="section-main" id="home">
      <Navbar />
      <div className="main-page-container">
        <div className="left-container">
          <span className="title">Full-stack Developer</span>
          <img src={hiIco} className="hello-ico" alt="hello icon" />
          <div className="description">
            Hi, I'm Bui Vuong. I am a passionate Full-Stack Developer based in
            Ho Chi Minh City, Vietnam.
            {/* <a href="#contact">
              <img
                src={localizationIco}
                className="localization-ico"
                alt="localization icon"
              />
            </a> */}
          </div>
          {/* <a
            href="https://www.linkedin.com/in/przemys%C5%82aw-przebi%C4%99da/"
            target="_blank"
          >
            <img src={lndIco} className="social-ico" alt="linkedin icon" />
          </a> */}
          <a
            href="https://github.com/buivuongFreelance?tab=repositories"
            target="_blank"
          >
            <img src={gitIco} className="social-ico" alt="github icon" />
          </a>
          <div className="description">Tech Stack:</div>
          <div className="tech-stack-box">
            <div
              className="tech-stack-single-box"
              id="React"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={reactIco} className="tech-ico2" alt="react icon" />
              <span>{react ? "React.js" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Micro"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={microIco} className="tech-ico2" alt="micro icon" />
              <span>{micro ? "Microservices" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Node"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={nodeIco} className="tech-ico2" alt="micro icon" />
              <span>{node ? "Node.js" : ""}</span>
            </div>
            <div
              className="tech-stack-single-box"
              id="Kuber"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={kuberIco} className="tech-ico2" alt="micro icon" />
              <span>{kuber ? "Kubernetes" : ""}</span>
            </div>
          </div>
        </div>
        <div className="right-container">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={(3, 2, 1)} />
            <Sphere args={[1, 100, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="red"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img src={avatar} className="avatar" alt="avatar" />
        </div>
      </div>
    </div>
  );
}
