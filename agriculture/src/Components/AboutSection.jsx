// About.js

import React from 'react';
import './About.css';
import Field from "./images/field.jpg";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>About Our Platform</h2>
        <p>
          Our Agriculture Yield Predictor platform is designed to help farmers, agronomists, and agricultural 
          businesses optimize crop production. By analyzing real-time data on soil quality, weather patterns, and 
          environmental conditions, we provide yield predictions to support data-driven decision-making.
        </p>
        <p>
          Using advanced machine learning algorithms, the platform takes into account factors such as soil pH, 
          temperature, and humidity, enabling accurate and reliable crop yield predictions.
        </p>
        <p>
          Our goal is to make agriculture more efficient, sustainable, and profitable. With this tool, users can 
          access insights that guide when to plant, what to plant, and how to manage their crops for optimal results.
        </p>
      </div>
      <div className="about-image">
        <img src={Field} alt="Agriculture Insights" />
      </div>
    </section>
  );
};

export default AboutSection;
