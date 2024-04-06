import React, {useEffect, useState} from 'react';
import Graph from './Graph';
import axios from "axios";
import {useParams} from "react-router-dom";
import './GraphStyle.css';
import PHGraph from "./PHGraph";
import TemperatureHumidityCorrelation from "./TemperatureHumidityCorrelation";
import EnergyGraph from "./EnergyChart";

const DataGraphsPage = () => {
  let {g_id} = useParams();
  return (
      <div>
        <TemperatureHumidityCorrelation g_id={g_id}/>
        <PHGraph g_id={g_id}/>
        <EnergyGraph g_id={g_id}/>
      </div>
  );
};

export default DataGraphsPage;