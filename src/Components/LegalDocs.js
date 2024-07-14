import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          TechFusys <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal and medical information. We
          ensure secure data handling, and you can trust that your information
          is treated with the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Health Plus, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with doctors,
          and the responsibilities of both parties. It's essential to understand
          these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Welcome to TechFusys, your trusted partner for exceptional digital solutions. Our expert team offers customized web development, app development, and technical support services, prioritizing your business's success. Join us on this journey towards a stronger and more efficient digital presence.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        Welcome to TechFusys, your trusted partner for exceptional digital solutions. Our expert team offers customized web development, app development, and technical support services, prioritizing your business's success. Join us on this journey towards a stronger and more efficient digital presence.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
