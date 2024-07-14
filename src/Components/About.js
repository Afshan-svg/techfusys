import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to TechFusys, your trusted partner for exceptional digital solutions. Our expert team offers customized web development, app development, and technical support services, prioritizing your business's success. Join us on this journey towards a stronger and more efficient digital presence.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
  title="Choose a Project and Developer"
  description="Find your dream project and book with ease at TechFusys. Our expert developers prioritize your project, offering tailored digital solutions."
/>

<SolutionStep
  title="Make a Schedule"
  description="Choose the date and time that suits you best, and let our dedicated team of professionals ensure your project's success with personalized care."
/>

<SolutionStep
  title="Get Your Solutions"
  description="Our experienced developers and specialists are here to provide expert advice and customized solutions, helping you achieve your best possible digital presence."
/>

      </div>
    </div>
  );
}

export default About;
