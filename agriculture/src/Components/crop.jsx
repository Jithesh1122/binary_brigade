import React, { useState } from 'react';
import cropImage from './images/young-corn-plants-growing-on-600nw-2299683499.webp'
import './crop.css';

function CropPredictionForm() {
    // State to handle form inputs
    const [soilQuality, setSoilQuality] = useState('');
    const [rainfall, setRainfall] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [cropType, setCropType] = useState('');
    const [historicalYield, setHistoricalYield] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., triggering yield prediction)
        const formData = {
            soilQuality,
            rainfall,
            temperature,
            humidity,
            cropType,
            historicalYield,
        };
        console.log(formData);
        // You can also call a prediction function or API here to process the data.
    };

    return (
        <div className="form-container">
            <img className='imageofCrop' src={cropImage} alt="" />
            <form className='fromForCrop' onSubmit={handleSubmit}>
                <div className="field">
                <label htmlFor="option1 ">Nitogen</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">Potassium</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">Phosporus</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">Temperature</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">Humidity</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">ph</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">rainfall</label>
                <input type="text" />
                </div>
                <div className="field">
                <label htmlFor="option1 ">crop</label>
                <input type="text" />
                </div>
                <button type="submit" className="submit-btn">Predict Yield</button>
               
                
          
            </form>
        </div>
    );
}

export default CropPredictionForm;
