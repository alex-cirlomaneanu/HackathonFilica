import React, {useEffect, useState} from 'react';
import Graph from './Graph';
import axios from "axios";
import {useParams} from "react-router-dom";
import './GraphStyle.css';

const EnergyGraph = ({ g_id }) => {
  const [usedPowerData, setUsedPowerData] = useState([]);
  const [generatedPower, setGeneratedPower] = useState([]);
  // let {g_id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/power-data/${g_id}`)
      .then(response => {
        setUsedPowerData(response.data.used_power);
        setGeneratedPower(response.data.generated_power);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const datasets = [
    { label: 'Used Power (kW)', data: usedPowerData, color: 'rgb(231,108,23)' },
    { label: 'Solar generated Power (kW)', data: generatedPower, color: 'rgb(31,206,46)' },
  ];

  return (
      <div className="rounded-corner-div graph-container">
        <h1>Power Consumption and Generation</h1>
        {datasets ? (
            <Graph datasets={datasets}/>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
};

export default EnergyGraph;