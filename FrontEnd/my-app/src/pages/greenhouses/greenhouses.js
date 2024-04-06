import React, { useState } from 'react';
import { FaTemperatureHigh, FaTint, FaSun, FaRegLightbulb, FaLeaf, FaRulerCombined, FaPowerOff, FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { MdLandscape } from 'react-icons/md';
import { GiWateringCan } from 'react-icons/gi';
import './GreenhouseSection.css'; // Ensure this CSS file is properly linked

const GreenhouseSection = () => {
  const greenhouseData = [
    { icon: MdLandscape, label: 'ID', value: 'GH2345', hasToggle: false },
    { icon: FaLeaf, label: 'Plant', value: 'Carrots', hasToggle: false },
    { icon: FaRulerCombined, label: 'Area', value: '140 sq.m', hasToggle: false },
    { icon: FaTemperatureHigh, label: 'Temperature', value: '26°C', hasToggle: true },
    { icon: FaTint, label: 'Humidity', value: '62%', hasToggle: true },
    { icon: FaSun, label: 'Light Intensity', value: '820 lux', hasToggle: true },
    { icon: GiWateringCan, label: 'Soil pH', value: '6.6', hasToggle: true },
    { icon: FaRegLightbulb, label: 'Soil Humidity', value: '65%', hasToggle: true },
    { icon: FaPowerOff, label: 'Power Consumption', value: '7 kW', hasToggle: false }
  ];

  const [toggleStates, setToggleStates] = useState(greenhouseData.reduce((acc, item, idx) => ({ ...acc, [idx]: false }), {}));

  const toggle = (idx) => {
    if(greenhouseData[idx].hasToggle) {
      setToggleStates({ ...toggleStates, [idx]: !toggleStates[idx] });
    }
  };

  return (
      <>
        <h2>Greenhouse Zeta</h2>
        <div className="greenhouse-data">
          {greenhouseData.map((data, index) => (
              <div key={index} className="data-square">
                <data.icon size={30} color={!data.hasToggle || !toggleStates[index] ? "#4CAF50" : "#FF0000"} />
                <div className="data-label-value">
                  <span>{data.label}: {data.value}</span>
                </div>
                {data.hasToggle && (
                    <button onClick={() => toggle(index)} style={{ color: toggleStates[index] ? "#FF0000" : "#4CAF50" }}>
                      {toggleStates[index] ? <FaToggleOn size={24} /> : <FaToggleOff size={24} />}
                    </button>
                )}
              </div>
          ))}
        </div>
      </>
  );
};

export default GreenhouseSection;
