import React from "react";
import './HomePage.css';
import Crop from "./crop"; 
import ContactUs from "./ContactUs";
import AboutSection from "./AboutSection";
import SearchCrop from "./SearchCrop";
import CropRecommendation from "./CropRecommendation"; 

const HomePage = () => {
    return (
        <>
            <div className="home-container">
                <div className="home">
                    <div className="navbar">
                        <nav>
                            <ul className="nav-links">
                                <li><a href="#Search">Search</a></li>
                                <li><a href="#about">About</a></li> {/* Link to About section */}
                                <li><a href="#Crop">Features</a></li>
                                <li><a href="#footer">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <section className="hero">
                        <h1>Smart <span> Crop Predictor</span></h1>
                        <p>Optimize your farm's productivity with data-driven insights on crop selection and yield prediction.</p>
                        <a href="#about"> {/* Add anchor link to About section */}
                            <button className="cta-btn">Learn more</button>
                        </a>
                    </section>
                </div>

                <div id='Crop' className="secondSection">
                    <Crop /> 
                </div>

                <div id="about" className="about"> {/* Set id to target this section */}
                    <AboutSection />
                </div>
                <div id='CropRecommendation' className="secondSection">
                    <CropRecommendation /> 
                </div>
                <div id="Search" className="searchCrop">
                    <SearchCrop/>
                </div>

                <footer  id='footer' className="footer">
                    <ContactUs />
                </footer>
            </div>
        </>
    );
};

export default HomePage;
