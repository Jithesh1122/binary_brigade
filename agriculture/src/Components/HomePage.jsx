// src/HomePage.js
import React from "react";
import './HomePage.css';
import Crop from "./crop"; 
import Footer from "./Footer"
import Home from "./Home"

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="navbar">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <h1>Smart <span> Crop Predictor</span></h1>
                <p>Optimize your farm's productivity with data-driven insights on crop selection and yield prediction.</p>
                <button className="cta-btn">Learn more</button>
                
            </section>

            <Crop /> 


            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
};

export default HomePage;
