import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We bring digital solutions to your fingertips, offering a full spectrum of on-demand website development services customized to your business. Our platform connects you with skilled developers who create tailored websites, ensuring seamless functionality and exceptional user experience. Elevate your online presence with us.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Web Development"
          description="
          Our Web Development service is designed to elevate your digital presence with expertise and precision. Whether you need a new website, upgrades, or maintenance, our team of dedicated developers is committed to delivering high-quality solutions tailored to your business. We're here to enhance your online footprint, ensuring your website stands out with innovative design and seamless functionality.

          "
          icon={faTruckMedical}
        />

        <InformationCard
          title="App Development"
          description="
          
Our App Development service is designed to be your reliable partner in the digital landscape. Whether it's creating a new app, improving an existing one, or providing ongoing support, our team of dedicated developers is here to deliver high-quality solutions tailored to your needs. Trust us to bring your vision to life with innovative design and seamless functionality.
          "
          icon={faHeartPulse}
        />

        <InformationCard
          title="Technical Support"
          description="

Our Technical Support service is designed to be your reliable partner in critical situations. Whether it's a sudden system issue, software malfunction, or any technical concern that requires immediate attention, our team of dedicated IT professionals is available 24/7 to provide prompt and efficient assistance."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
