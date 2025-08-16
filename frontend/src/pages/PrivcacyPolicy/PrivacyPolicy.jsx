import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const Privacy = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".privacy-card p").forEach((p) => {
      observer.observe(p);
    });
  }, []);

  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <h1>Privacy Policy</h1>

        <section>
          <h2>Information Collection</h2>
          <p>We collect information from you when you visit our site. This may include non-personal data such as browsing activity.</p>
        </section>

        <section>
          <h2>Information Use</h2>
          <p>We use the information to improve our website, enhance user experience, and send updates.</p>
        </section>

        <section>
          <h2>Information Protection</h2>
          <p>We implement security measures to protect your information. Only authorized personnel can access it.</p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>Our site may use cookies to improve user experience. You can choose to disable cookies in your browser.</p>
        </section>

        <section>
          <h2>Third-Party Disclosure</h2>
          <p>We do not sell or trade your information with third parties except for service providers who help us operate our website.</p>
        </section>

        <section>
          <h2>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy periodically. Changes will be posted on this page.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions, contact us at <a href="mailto:support@exclusive.bar">support@exclusive.bar</a></p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
