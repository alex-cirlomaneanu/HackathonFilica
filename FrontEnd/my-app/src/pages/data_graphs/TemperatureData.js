import React, { useState, useEffect } from 'react';
import TemperatureGraph from "./TemperatureGraphs";
import axios from "axios";


const TemperatureData = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/temperature-evolution')
      .then(response => {
        setTemperatureData(response.data.temp_data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Temperature Evolution</h1>
      {temperatureData ? (
        <TemperatureGraph temperatureData={temperatureData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TemperatureData;
