import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './GraphStyle.css';
import PHGraph from './PHGraph';
import TemperatureHumidityCorrelation from './TemperatureHumidityCorrelation';
import EnergyGraph from './EnergyChart';

const DataGraphsPage = () => {

    let { g_id } = useParams();
    const [activeTab, setActiveTab] = useState('tempHumidity');

    return (
        <div className="graphs-page-container">
            <div className="tabs">
                <button onClick={() => setActiveTab('tempHumidity')} className={activeTab === 'tempHumidity' ? 'active' : ''}>
                    Temperature & Humidity
                </button>
                <button onClick={() => setActiveTab('ph')} className={activeTab === 'ph' ? 'active' : ''}>
                    pH Levels
                </button>
                <button onClick={() => setActiveTab('energy')} className={activeTab === 'energy' ? 'active' : ''}>
                    Energy Consumption
                </button>
            </div>
            <div className="graph-container">
                {activeTab === 'tempHumidity' && <TemperatureHumidityCorrelation g_id={g_id} />}
                {activeTab === 'ph' && <PHGraph g_id={g_id} />}
                {activeTab === 'energy' && <EnergyGraph g_id={g_id} />}
            </div>
        </div>
    );
};

export default DataGraphsPage;
