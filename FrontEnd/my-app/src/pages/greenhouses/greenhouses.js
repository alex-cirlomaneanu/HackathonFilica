import React from 'react';
// import './GreenhouseSection.css'; // CSS file for styling

const GreenhouseSection = () => {
  const greenhouseData = {
    id: "GH2345",
    name: "Greenhouse Zeta",
    plant: "Carrots",
    area: 140,
    temperature: 26,
    humidity: 62,
    light_intensity: 820,
    soil_ph: 6.6,
    soil_humidity: 65,
    power_consumption: 7
  };

  return (
    <div className="greenhouse-section">
      <div className="greenhouse-info rounded bg-white">
        <div className="greenhouse-image">
          <img src="greenhouse_image.jpg" alt="Greenhouse" />
        </div>
        <div className="greenhouse-details">
          <h2>{greenhouseData.name}</h2>
          <ul>
            <li>
              <span className="icon">ID:</span>
              {greenhouseData.id}
            </li>
            <li>
              <span className="icon">Plant:</span>
              {greenhouseData.plant}
            </li>
            <li>
              <span className="icon">Area:</span>
              {greenhouseData.area} sq.m
            </li>
            <li>
              <span className="icon">Temperature:</span>
              {greenhouseData.temperature}°C
            </li>
            <li>
              <span className="icon">Humidity:</span>
              {greenhouseData.humidity}%
            </li>
            <li>
              <span className="icon">Light Intensity:</span>
              {greenhouseData.light_intensity} lux
            </li>
            <li>
              <span className="icon">Soil pH:</span>
              {greenhouseData.soil_ph}
            </li>
            <li>
              <span className="icon">Soil Humidity:</span>
              {greenhouseData.soil_humidity}%
            </li>
            <li>
              <span className="icon">Power Consumption:</span>
              {greenhouseData.power_consumption} kW
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GreenhouseSection;
