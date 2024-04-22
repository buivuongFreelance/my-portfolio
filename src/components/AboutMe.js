import React from "react";
import bee from "../public/img/bee.png";
import image from "../public/img/coding.png";

export default function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About me</h2>
          <div className="text">
            I'm Bùi Vương, a dedicated and proficient Full Stack Developer and
            Mobile Developer with extensive experience in crafting robust
            software solutions. I specialize in using cutting-edge technologies
            like React for front-end development, Node.js for back-end services,
            and Docker for containerization, ensuring seamless deployment and
            scalability. Additionally, my skills extend to mobile application
            development using Flutter, which allows me to create visually
            appealing and highly functional apps for both Android and iOS
            platforms. I am proficient in managing databases with MongoDB and
            orchestrating services using Kubernetes.
            {/* I'm Bùi Vương, a dedicated and proficient Full Stack Developer and
            Mobile Developer with extensive experience in crafting robust
            software solutions. I specialize in using cutting-edge technologies
            like React for front-end development, Node.js for back-end services,
            and Docker for containerization, ensuring seamless deployment and
            scalability. Additionally, my skills extend to mobile application
            development using Flutter, which allows me to create visually
            appealing and highly functional apps for both Android and iOS
            platforms. I am proficient in managing databases with MongoDB and
            orchestrating services using Kubernetes, which enhances the
            efficiency and reliability of the applications I develop. My passion
            for technology and commitment to excellence drive me to continuously
            learn and apply the latest advancements in the tech industry, aiming
            to deliver top-tier software products that meet and exceed the
            expectations of my clients. */}
            <img src={bee} />
          </div>
        </div>
      </div>
    </div>
  );
}
