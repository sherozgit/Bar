import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header */}
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to Exclusive Bar — your ultimate destination for timeless cocktails, premium spirits, 
          and drink inspiration. We’re passionate about the art of mixology and committed to bringing 
          you the best recipes and tips to elevate your drinking experience.
        </p>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To inspire cocktail lovers and home bartenders by sharing high-quality recipes, 
          detailed guides, and a deep love for classic and modern drinks. 
          Whether you’re shaking, stirring, or sipping — we’ve got you covered.
        </p>
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Founder & Head Mixologist</p>
          </div>

          <div className="team-member">
            <img src="/images/team2.jpg" alt="Sarah Johnson" />
            <h3>James Rodrigez</h3>
            <p>Creative Director</p>
          </div>

          <div className="team-member">
            <img src="/images/team3.jpg" alt="Michael Brown" />
            <h3>Michael Brown</h3>
            <p>Head Mixologist</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-us" className="about-contact">
        <h2>Get in Touch</h2>
        <p>
          Have questions, suggestions, or partnership ideas? We’d love to hear from you!  
          Email us at <a href="mailto:contact@exclusivebar.com">contact@exclusivebar.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
