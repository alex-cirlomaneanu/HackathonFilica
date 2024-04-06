import React, {useEffect, useState} from 'react';
import Graph from './Graph';
import axios from "axios";
import {useParams} from "react-router-dom";
import './GraphStyle.css';

const PHGraph = ({ g_id }) => {
  const [phData, setPHData] = useState([]);
  // let {g_id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/ph-data/${g_id}`)
      .then(response => {
        setPHData(response.data.ph_data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const datasets = [
    { label: 'PH', data: phData, color: 'rgb(27,213,229)' },
  ];

  return (
      <div className="rounded-corner-div graph-container">
        <h1>PH Graph</h1>
        {datasets ? (
            <Graph datasets={datasets}/>
        ) : (
            <p>Loading...</p>
        )}
      </div>
  );
};

export default PHGraph;