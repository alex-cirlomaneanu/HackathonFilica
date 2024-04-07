import React, {useEffect, useState} from 'react';
import Graph from './Graph';
import axios from "axios";
import {useParams} from "react-router-dom";
import './GraphStyle.css';

const TemperatureHumidityCorrelation = ({ g_id }) => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  // let {g_id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/temperature-evolution/${g_id}`)
      .then(response => {
        setTemperatureData(response.data.temp_data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/humidity-evolution/${g_id}`)
      .then(response => {
        setHumidityData(response.data.humidity_data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const datasets = [
    { label: 'Temperature (°C)', data: temperatureData, color: 'rgb(255, 99, 132)' },
    { label: 'Humidity (%)', data: humidityData, color: 'rgb(75, 192, 192)' },
  ];
  const simulateMonitoringData = (value) => {
    // Randomly adjust the value within ±1 range
    const adjustment = Math.random() > 0.5 ? 1 : -1;
    return Number(value) + adjustment;
  };
  useEffect(() => {
    setTemperatureData([...temperatureData, simulateMonitoringData(temperatureData.at(-1))]);
    }, 30000); // Updates every 30 seconds when the "Monitoring" tab is active
  return (
      <div className="rounded-corner-div graph-container">
        <h1>Temperature and Humidity Evolution</h1>
        {datasets ? (
            <Graph datasets={datasets}/>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
};

export default TemperatureHumidityCorrelation;