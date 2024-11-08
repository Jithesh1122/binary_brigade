// src/CropPredictionForm.js
import React, { useState } from "react";
import './crop.css';

const CropPredictionForm = () => {
    const [state, setState] = useState("");
    const [season, setSeason] = useState("");
    const [output, setOutput] = useState(null);

    // List of Indian States
    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
        "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
        "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
        "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", 
        "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
        "Lakshadweep", "Delhi", "Puducherry"
    ];

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // You can replace this with the logic to predict the yield based on input
        if (state && season) {
            const predictedYield = `Predicted yield for ${state} in the ${season} season is 2500 kg/hectare.`; // Example output
            setOutput(predictedYield);
        } else {
            setOutput("Please select both state and season.");
        }
    };

    return (
        <div className="form-container">
            <h2>Crop Yield Prediction</h2>
            <form onSubmit={handleSubmit} className="prediction-form">
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    >
                        <option value="">Select a state</option>
                        {indianStates.map((stateName, index) => (
                            <option key={index} value={stateName}>
                                {stateName}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="season">Season</label>
                    <select
                        id="season"
                        value={season}
                        onChange={(e) => setSeason(e.target.value)}
                    >
                        <option value="">Select a season</option>
                        <option value="Kharif">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Rabi">Monsoon</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Predict Yield</button>
            </form>

            {output && (
                <div className="output">
                    <h3>Prediction Output:</h3>
                    <p>{output}</p>
                </div>
            )}
        </div>
    );
};

export default CropPredictionForm;
