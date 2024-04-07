import React, { useState, useEffect } from 'react';
import './GreenhouseSensors.css'; // Ensure your CSS file is linked correctly
import { FaTemperatureHigh, FaTint, FaSun, FaCloudRain, FaSeedling } from 'react-icons/fa'; // Example icons for each sensor

const GreenhouseSensors = () => {
    const initialSensors = [
        { type: 'pH Sensor', icon: <FaSeedling /> },
        { type: 'Humidity Sensor', icon: <FaTint /> },
        { type: 'Temperature Sensor', icon: <FaTemperatureHigh /> },
        { type: 'Solar Ray Sensor', icon: <FaSun /> },
        { type: 'Soil Humidity Sensor', icon: <FaCloudRain /> },
    ];
// A utility function to randomize sensor status with at most 2 "off" statuses
    const randomizeSensorsStatus = (sensors) => {
        let offCount = 0;
        const maxOff = 2; // Maximum number of sensors that can be off
        const randomizedSensors = sensors.map(sensor => {
            if (offCount < maxOff && Math.random() > 0.5) { // Random chance to turn a sensor off
                offCount++;
                return { ...sensor, status: 'off' };
            }
            return { ...sensor, status: 'on' }; // Default or remaining sensors to "on"
        });

        // Ensure at least one sensor is on if all randomly turned off, very unlikely but safe to check
        if (offCount === sensors.length) {
            const randomIndex = Math.floor(Math.random() * sensors.length);
            randomizedSensors[randomIndex].status = 'on';
        }
        return randomizedSensors;
    };

    // Function to generate initial greenhouse data with randomized sensor statuses
    const generateInitialGreenhouses = () => [
        { id: 'GH1234', name: 'Greenhouse Alpha', sensors: randomizeSensorsStatus([...initialSensors]) },
        // Add more greenhouses if needed
    ];

    const [greenhouses, setGreenhouses] = useState(generateInitialGreenhouses);

    return (
        <div className="greenhouses-container">
            {greenhouses.map(greenhouse => (
                <div key={greenhouse.id} className="greenhouse">
                    <h2>{greenhouse.name}</h2>
                    <div className="sensors">
                        {greenhouse.sensors.map((sensor, index) => (
                            <div key={index} className={`sensor ${sensor.status}`}>
                                {sensor.icon}
                                <span>{sensor.type}</span>
                                <span>{sensor.status.toUpperCase()}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GreenhouseSensors;
