import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About ShopSphere</h1>
      <div className="about-content">
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            ShopSphere is dedicated to providing a seamless online shopping 
            experience that connects customers with high-quality products 
            from around the world. We believe in making shopping convenient, 
            enjoyable, and accessible to everyone.
          </p>
        </section>
        
        <section className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Quality</strong>: We curate products that meet the highest standards.
            </li>
            <li>
              <strong>Customer Satisfaction</strong>: Your happiness is our top priority.
            </li>
            <li>
              <strong>Innovation</strong>: Continuously improving our shopping experience.
            </li>
            <li>
              <strong>Transparency</strong>: Honest and clear communication with our customers.
            </li>
          </ul>
        </section>
        
        <section className="about-contact">
          <h2>Contact Us</h2>
          <p>Email: support@shopsphere.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 E-Commerce Street, Digital City, Web 99999</p>
        </section>
      </div>
    </div>
  );
}

export default About;